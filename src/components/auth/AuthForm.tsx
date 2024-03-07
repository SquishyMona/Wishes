"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { emailSignIn, emailSignUp, googleSignIn } from "@/lib/firebase/auth";
import { BarLoader } from "react-spinners";

export default function AuthForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSignInForm = async (e: React.FormEvent<HTMLFormElement>) => {
        setLoading(true);
        e.preventDefault();
        try {
            await emailSignIn(email, password);
        }
        catch (error) {
            console.error(error);
        }
        window.location.reload();
    }

    const handleSignUpForm = async (e: React.FormEvent<HTMLFormElement>) => {
        setLoading(true);
        e.preventDefault();
        if (password !== confirmPassword) {
            console.log("Passwords do not match.");
            return;
        }
        try {
            await emailSignUp(email, password, name);
        }
        catch (error) {
            console.error(error);
        }
    }

    const handleGoogleSignIn = () => {
        setLoading(true);
        googleSignIn();
    }

    return (
            <dialog id="signInModal" className="modal">
                <div className="modal-box">
                    { !loading ? 
                        <>
                            <div role="tablist" className="tabs tabs-bordered justify-center">
                                <input type="radio" name="authtabs" role="tab" className="tab" aria-label="Sign In" defaultChecked/>
                                <div role="tabpanel" className="tab-content p-10">
                                    <h1 className="font-bold text-xl text-center">Sign In</h1>
                                    <form onSubmit={handleSignInForm} method="dialog" className="flex flex-col">
                                        <label className="input input-bordered flex items-center gap-2 my-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                                            <input onChange={(e) => setEmail(e.target.value)} type="text" className="grow" placeholder="Email" />
                                        </label>
                                        <label className="input input-bordered flex items-center gap-2 my-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                                            <input onChange={(e) => setPassword(e.target.value)} type="password" className="grow" placeholder="Password" />
                                        </label>
                                        <button type="submit" className="btn btn-secondary m-3">Sign In</button>
                                        <button onClick={handleGoogleSignIn} type="button" className="btn bg-white text-black hover:bg-gray-300 m-3">
                                            <Image src="/google.png" alt="Google Logo" width={20} height={20} />
                                            <p>Sign In with Google</p>
                                        </button>
                                    </form>
                                </div>

                                <input type="radio" name="authtabs" role="tab" className="tab" aria-label="Sign Up"/>
                                <div role="tabpanel" className="tab-content p-10">
                                    <h1 className="font-bold text-xl text-center">Sign Up</h1>
                                    <form onSubmit={handleSignUpForm} method="dialog" className="flex flex-col">
                                        <label className="input input-bordered flex items-center gap-2 my-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                                            <input onChange={(e) => setName(e.target.value)} type="text" className="grow" placeholder="Your Name" />
                                        </label>
                                        <label className="input input-bordered flex items-center gap-2 my-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                                            <input onChange={(e) => setEmail(e.target.value)} type="text" className="grow" placeholder="Email" />
                                        </label>
                                        <label className="input input-bordered flex items-center gap-2 my-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                                            <input onChange={(e) => setPassword(e.target.value)} type="password" className="grow" placeholder="Password" />
                                        </label>
                                        <label className="input input-bordered flex items-center gap-2 my-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                                            <input onChange={(e) => setConfirmPassword(e.target.value)} type="password" className="grow" placeholder="Confirm Password" />
                                        </label>
                                        <button type="submit" className="btn btn-secondary m-3">Sign Up</button>
                                        <button onClick={handleGoogleSignIn} type="button" className="btn bg-white text-black hover:bg-gray-300 m-3">
                                            <Image src="/google.png" alt="Google Logo" width={20} height={20} />
                                            <p>Sign Up with Google</p>
                                        </button>
                                    </form>
                                </div>
                            </div>
                            <div className="modal-action">
                                <form method="dialog">
                                    <button className="btn">Close</button>
                                </form>
                            </div>
                        </> : <div className="flex justify-center"><BarLoader color="#fef08a" loading={loading} /></div>
                    }
                </div>
            </dialog>
    )
}