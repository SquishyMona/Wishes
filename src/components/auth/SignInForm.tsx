"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { emailSignIn, googleSignIn } from "@/lib/firebase/auth";

export default function SignInForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await emailSignIn(email, password);
        }
        catch (error) {
            console.error(error);
        }
        return router.push('/');
    }

    return (
        <dialog id="signInModal" className="modal">
        <div className="modal-box">
            <h1 className="font-bold text-xl text-center">Sign In</h1>
            <p className="text-center m-2">Don&apos;t have an account? Create one here!</p>
            <form onSubmit={handleForm} method="dialog" className="flex flex-col">
                <label className="input input-bordered flex items-center gap-2 my-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                    <input onChange={(e) => setEmail(e.target.value)} type="text" className="grow" placeholder="Email" />
                </label>
                <label className="input input-bordered flex items-center gap-2 my-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                    <input onChange={(e) => setPassword(e.target.value)} type="password" className="grow" placeholder="Password" />
                </label>
                <button type="submit" className="btn btn-secondary m-3">Sign In</button>
                <button onClick={googleSignIn} type="button" className="btn bg-white text-black m-3">
                    <Image src="/google.png" alt="Google Logo" width={20} height={20} />
                    <p>Sign In with Google</p>
                </button>
            </form>
            <div className="modal-action">
            <form method="dialog">
                <button className="btn">Close</button>
            </form>
            </div>
        </div>
        </dialog>
    )
}