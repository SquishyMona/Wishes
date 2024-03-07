"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getDoc, setDoc, doc, DocumentData } from "firebase/firestore";
import { db } from "@/lib/firebase/config";
import { useAuth } from "@/context/AuthContext";
import { UserData } from "@/lib/interfaces/UserData";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

export default function Settings() {
    const { user } = useAuth();
    const [userData, setUserData] = useState<DocumentData>({});
    const [name, setName] = useState(user?.name ? user.name : '');
    const [email, setEmail] = useState(user?.email ? user.email : '');
    const [birthday, setBirthday] = useState(userData?.birthday ? userData.birthday : '');
    const setTheme = (e: HTMLInputElement) => {
        const root = document.getElementById('htmlroot');
        root?.setAttribute('data-theme', e.checked ? 'mydarktheme' : 'mylighttheme');
    }

    useEffect(() => {
        if (user) {
            const docRef = doc(db, "users", user.uid);
            getDoc(docRef).then((doc) => {
                if (doc.exists()) {
                    setUserData(doc.data());
                }
            });
        }
    }, [user]);

    return (
        <ProtectedRoute>
            <div className="flex flex-col items-center mx-5">
                <h1 className="text-center text-3xl font-bold my-5">Settings</h1>
                <div className="flex flex-col items-center bg-primary h-full mx-5 my-3 rounded-xl text-center p-3 w-4/5 max-w-[600px] min-w-[325px]">
                    <h1 className="text-2xl my-3 font-bold">Profile</h1>
                    <div className="flex flex-col sm:flex-row items-center">
                        <Image src="/accplaceholderdark.png" alt="Account" width={80} height={80} className="m-3" />
                        <div className="flex flex-col">
                            <label className="input input-bordered flex items-center gap-2 m-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                                <input onChange={(e) => setName(e.target.value)} type="text" className="grow" placeholder="Name" value={name}/>
                            </label>
                            <label className="input input-bordered flex items-center gap-2 m-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                                <input onChange={(e) => setEmail(e.target.value)} type="text" className="grow" placeholder="Email" value={email} disabled/>
                            </label>
                            <div className="flex flex-row items-center gap-2">
                                <select className="select select-bordered m-2 w-3/4">
                                    <option disabled selected>Month</option>
                                    <option>January</option>
                                    <option>February</option>
                                    <option>March</option>
                                    <option>April</option>
                                    <option>May</option>
                                    <option>June</option>
                                    <option>July</option>
                                    <option>August</option>
                                    <option>September</option>
                                    <option>October</option>
                                    <option>November</option>
                                    <option>December</option>
                                </select>
                                <select className="select select-bordered m-2 w-1/4">
                                    <option disabled selected>Day</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                    <option>9</option>
                                    <option>10</option>
                                    <option>11</option>
                                    <option>12</option>
                                    <option>13</option>
                                    <option>14</option>
                                    <option>15</option>
                                    <option>16</option>
                                    <option>17</option>
                                    <option>18</option>
                                    <option>19</option>
                                    <option>20</option>
                                    <option>21</option>
                                    <option>22</option>
                                    <option>23</option>
                                    <option>24</option>
                                    <option>25</option>
                                    <option>26</option>
                                    <option>27</option>
                                    <option>28</option>
                                    <option>29</option>
                                    <option>30</option>
                                    <option>31</option>
                                </select>
                            </div>
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
        </ProtectedRoute>
    )
}