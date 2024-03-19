"use client";

import React from 'react';
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import { app } from '@/lib/firebase/config';
import { UserType } from '@/lib/interfaces/UserData';
import { GridLoader } from 'react-spinners';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '@/lib/firebase/config';

const auth = getAuth(app);

const AuthContext = React.createContext({});

export const useAuth = () => React.useContext<any>(AuthContext);

export const useAuthContext = () => React.useContext(AuthContext);

export const AuthContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [user, setUser] = React.useState<UserType | null>(null);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                try {
                    getDoc(doc(db, 'users', user.uid)).then((doc) => {
                        setUser({ email: user.email, uid: user.uid, photoURL: user.photoURL, name: user.displayName, birthday: doc.data()?.birthday});
                    });
                } catch (error) {
                    console.error(error);
                }
            } else {
                setUser(null);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ user }}>
            {loading ? 
            <div className='flex w-full min-h-screen m-auto justify-center items-center'>
                <div className='flex'>
                    <GridLoader color='#fef08a' />
                </div>
            </div> : children}
        </AuthContext.Provider>
    );
};