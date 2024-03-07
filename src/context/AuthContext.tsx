"use client";

import React from 'react';
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import { app } from '@/lib/firebase/config';
import { UserType } from '@/lib/interfaces/UserData';

const auth = getAuth(app);

const AuthContext = React.createContext({});

export const useAuth = () => React.useContext<any>(AuthContext);

export const useAuthContext = () => React.useContext(AuthContext);

export const AuthContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [user, setUser] = React.useState<UserType>({ email: null, uid: null, photoURL: null, name: null});
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser({ email: user.email, uid: user.uid, photoURL: user.photoURL, name: user.displayName });
            } else {
                setUser({ email: null, uid: null, photoURL: null, name: null});
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ user }}>
            {loading ? <div>Loading...</div> : children}
        </AuthContext.Provider>
    );
};