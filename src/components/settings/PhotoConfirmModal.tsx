"use client";

import Image from "next/image";
import { updateProfile, getAuth } from "firebase/auth";
import { uploadBytes, ref, getDownloadURL } from "firebase/storage";
import { useAuth } from "@/context/AuthContext";
import { storage } from "@/lib/firebase/config";
import { useState } from "react";

export default function PhotoConfirmModal({ photo }: { photo: string }) {
    const [loading, setLoading] = useState(false);
    const { user } = useAuth();
    const firebaseAuth = getAuth();

    const handleCancel = () => {
        const modal: HTMLDialogElement | null = document.getElementById("photoConfirmModal") as HTMLDialogElement;
        modal?.close();
        const uploadArea = document.getElementById("settingsphotoupload") as HTMLInputElement;
        uploadArea.files = null;
    }

    const handleConfirm = () => {
        setLoading(true);
        const photoInput = document.getElementById("settingsphotoupload") as HTMLInputElement;
        const photo = photoInput.files?.item(0);
        const storageRef = ref(storage, `users/${user?.uid}/profile.png`);
        uploadBytes(storageRef, photo as Blob).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                updateProfile(firebaseAuth.currentUser, { photoURL: url }).then(() => {
                    document.getElementById("navpfp")?.setAttribute("srcset", url);
                    document.getElementById("settingspfp")?.setAttribute("srcset", url);
                    const modal: HTMLDialogElement | null = document.getElementById("photoConfirmModal") as HTMLDialogElement;
                    modal?.close();
                    setLoading(false);
                    const uploadArea = document.getElementById("settingsphotoupload") as HTMLInputElement;
                    uploadArea.files = null;
                });
            });
        });
    }

    return (
        <dialog id="photoConfirmModal" className="modal">
            <div className="modal-box">
                <h1 className="font-bold text-xl text-center">Photo Confirm</h1>
                <div className="flex flex-col">
                    <div className="flex justify-center items-center">
                        <Image className="rounded-full" src={photo} alt="Profile icon" width={80} height={80} />
                    </div>
                    <p className="text-center">Is this the photo you want to use?</p>
                    <div className="flex justify-center items-center gap-2">
                        <button className="btn btn-primary" onClick={handleConfirm}>Yes</button>
                        <button className="btn btn-ghost" onClick={handleCancel}>No</button>
                    </div>
                </div>
            </div>
        </dialog>
    );
}