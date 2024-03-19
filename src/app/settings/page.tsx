"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { getDoc, setDoc, doc, DocumentData } from "firebase/firestore";
import { db } from "@/lib/firebase/config";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import PhotoConfirmModal from "@/components/settings/PhotoConfirmModal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Settings() {
    const { user } = useAuth();
    const router = useRouter();
    const [name, setName] = useState(user?.name ? user.name : '');
    const [email, setEmail] = useState(user?.email ? user.email : '');
    const [birthday, setBirthday] = useState(user?.birthday != null ? user.birthday.toDate() : null);
    const [photo, setPhoto] = useState('');
    const setTheme = (e: HTMLInputElement) => {
        const root = document.getElementById('htmlroot');
        root?.setAttribute('data-theme', e.checked ? 'mydarktheme' : 'mylighttheme');
    }

    const handlePhotoSelection = () => {
        const photoUpload = document.getElementById('settingsphotoupload') as HTMLInputElement;
        if (photoUpload.files != null) {
            setPhoto(URL.createObjectURL(photoUpload.files[0]));
            const photoConfirmModal = document.getElementById('photoConfirmModal') as HTMLDialogElement;
            photoConfirmModal.showModal();
        }
    }

    const saveInformation = () => {
        const newBirthday = birthday;
        console.error(newBirthday);
        const docRef = doc(db, "users", user.uid);
        setDoc(docRef, {
            name: name,
            birthday: newBirthday
        }, { merge: true });
    }

    useEffect(() => {
        console.error(user);
        if (user === null) {
            router.push('/');
        }
    });

    return (
        <ProtectedRoute>
            <div className="flex flex-col items-center mx-5">
                <h1 className="text-center text-3xl font-bold my-5">Settings</h1>
                <div className="flex flex-col items-center bg-primary h-full mx-5 my-3 rounded-xl text-center p-3 w-4/5 max-w-[600px] min-w-[325px]">
                    <h1 className="text-2xl my-3 font-bold">Profile</h1>
                    <div className="flex flex-col sm:flex-row items-center">
                        <button onClick={() => document.getElementById('settingsphotoupload')?.click()} className="relative items-center">
                            <Image id='settingspfp' src={user?.photoURL != null ? user.photoURL : '/accplaceholderdark.png'} alt="Account" width={80} height={80} className="m-3 rounded-full" />
                            <span className="top-[70px] left-[70px] absolute w-5 h-5 bg-secondary rounded-full">
                                <svg className="text-primary"  width="21" height="16" viewBox="0 -2.5 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />  <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" /></svg>                            
                            </span>
                            <input type="file" onChange={handlePhotoSelection} className="hidden" id="settingsphotoupload" accept=".png, .jpg, .jpeg, .heic"/>
                        </button>
                        <div className="flex flex-col">
                            <label className="input input-bordered flex items-center gap-2 m-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                                <input onChange={(e) => setName(e.target.value)} type="text" className="grow" placeholder="Name" value={name}/>
                            </label>
                            <label className="input input-bordered flex items-center gap-2 m-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                                <input onChange={(e) => setEmail(e.target.value)} type="text" className="grow" placeholder="Email" value={email} disabled/>
                            </label>
                            <label className="input input-bordered flex items-center gap-2 m-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cake" viewBox="0 0 16 16"><path d="m7.994.013-.595.79a.747.747 0 0 0 .101 1.01V4H5a2 2 0 0 0-2 2v3H2a2 2 0 0 0-2 2v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a2 2 0 0 0-2-2h-1V6a2 2 0 0 0-2-2H8.5V1.806A.747.747 0 0 0 8.592.802zM4 6a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v.414a.9.9 0 0 1-.646-.268 1.914 1.914 0 0 0-2.708 0 .914.914 0 0 1-1.292 0 1.914 1.914 0 0 0-2.708 0A.9.9 0 0 1 4 6.414zm0 1.414c.49 0 .98-.187 1.354-.56a.914.914 0 0 1 1.292 0c.748.747 1.96.747 2.708 0a.914.914 0 0 1 1.292 0c.374.373.864.56 1.354.56V9H4zM1 11a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.793l-.354.354a.914.914 0 0 1-1.293 0 1.914 1.914 0 0 0-2.707 0 .914.914 0 0 1-1.292 0 1.914 1.914 0 0 0-2.708 0 .914.914 0 0 1-1.292 0 1.914 1.914 0 0 0-2.708 0 .914.914 0 0 1-1.292 0L1 11.793zm11.646 1.854a1.915 1.915 0 0 0 2.354.279V15H1v-1.867c.737.452 1.715.36 2.354-.28a.914.914 0 0 1 1.292 0c.748.748 1.96.748 2.708 0a.914.914 0 0 1 1.292 0c.748.748 1.96.748 2.707 0a.914.914 0 0 1 1.293 0Z"/></svg>
                                <DatePicker placeholderText="Birthday" selected={birthday} dateFormat="MMMM d, y" onChange={(e) => setBirthday(e)} />
                            </label>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center">
                        <button onClick={saveInformation} className="btn btn-secondary m-3">Save Information</button>
                        <button className="btn btn-secondary m-3">Change Password</button>
                    </div>
                </div>
                <div className="flex flex-col bg-primary h-full mx-5 my-3 rounded-xl text-center p-3 w-4/5 max-w-[600px] min-w-[325px]">
                    <h1 className="text-2xl my-3 font-bold">Preferences</h1>
                    <div className="flex flex-row items-center mx-5">
                        <label className="flex items-center gap-2 m-2">Dark Theme</label>
                        <div className="tooltip flex ml-auto" data-tip="Coming Soon!">
                            <input 
                                type="checkbox" 
                                className="toggle toggle-secondary" 
                                onClick={(e) => setTheme(e.currentTarget)}
                                checked disabled/>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col bg-primary h-full mx-5 my-3 rounded-xl text-center p-3 w-4/5 max-w-[600px] min-w-[325px]">
                    <h1 className="text-2xl my-3 font-bold">Defaults</h1>
                    <div className="flex flex-row items-center mx-3">
                        <label className="flex items-center gap-2 m-2 text-start">Make my lists public</label>
                        <input 
                            type="checkbox" 
                            className="toggle toggle-secondary ml-auto" />
                    </div>
                    <div className="flex flex-row items-center mx-3">
                        <label className="flex items-center gap-2 m-2 text-start">Anyone can mark as purchased</label>
                        <input 
                            type="checkbox" 
                            className="toggle toggle-secondary ml-auto" />
                    </div>
                    <div className="flex flex-row items-center mx-3">
                        <label className="flex items-center gap-2 m-2 text-start">Make my list public</label>
                        <input 
                            type="checkbox" 
                            className="toggle toggle-secondary ml-auto" />
                    </div>
                </div>
                <div className="flex flex-col bg-primary h-full mx-5 my-3 rounded-xl text-center p-3 w-4/5 max-w-[600px] min-w-[325px]">
                    <h1 className="text-2xl my-3 font-bold">Account Actions</h1>
                    <div className="flex flex-col items-center">
                        <button className="btn btn-error m-3">Delete Account</button>
                    </div>
                </div>
            </div>
            <PhotoConfirmModal photo={photo}/>
        </ProtectedRoute>
    )
}