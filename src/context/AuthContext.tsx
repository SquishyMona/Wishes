"use client";

import React from 'react';
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import { app } from '@/lib/firebase/config';
import { UserType } from '@/lib/interfaces/UserData';
import { GridLoader } from 'react-spinners';

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
                setUser({ email: user.email, uid: user.uid, photoURL: user.photoURL, name: user.displayName });
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
            <div className='absolute top-[46%] left-[46%]'>
                <GridLoader color='#fef08a' />
            </div> : children}
        </AuthContext.Provider>
    );
};