"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CompleteProfile() {
    return (
        <dialog id="completeProfileModal" className="modal">
            <div className="modal-box">
                <h1 className="font-bold text-xl text-center">Complete Profile</h1>
                <p className="text-center m-2">You&apos;re almost ready to start using Wishes, we just need a few more things.</p>
                <form method="dialog" className="flex flex-col">
                    <label className="input input-bordered flex items-center gap-2 my-2">
                        <input type="text" className="grow" placeholder="Name" />
                    </label>
                </form>
            </div>
        </dialog>                        
    )
}