"use client";

import Image from "next/image";
import Link from "next/link";

export default function Settings() {
    const setTheme = (e: HTMLInputElement) => {
        const root = document.getElementById('htmlroot');
        root?.setAttribute('data-theme', e.checked ? 'mydarktheme' : 'mylighttheme');
    }

    return (
        <div className="flex flex-col items-center mx-5">
            <h1 className="text-center text-3xl font-bold my-5">Settings</h1>
            <div className="flex flex-col items-center bg-primary h-full mx-5 my-3 rounded-xl text-center p-3 w-4/5 max-w-[600px] min-w-[325px]">
                <h1 className="text-2xl my-3 font-bold">Profile</h1>
                <div className="flex flex-col sm:flex-row items-center">
                    <Image src="/accplaceholderdark.png" alt="Account" width={80} height={80} className="m-3" />
                    <div className="flex flex-col">
                        <label className="input input-bordered flex items-center gap-2 m-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                            <input type="text" className="grow" placeholder="Name" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 m-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                            <input type="text" className="grow" placeholder="Email" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 m-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                            <input type="password" className="grow" placeholder="Password" disabled/>
                        </label>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center">
                    <button className="btn btn-secondary m-3">Save Information</button>
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
    )
}