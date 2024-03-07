import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth, updateProfile } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { app, db } from "./config";
import { useRouter } from "next/navigation";

const auth = getAuth(app);

export function onAuthStateChanged(cb) {
    return _onAuthStateChanged(auth, cb);
}

export async function googleSignIn() {
    const provider = new GoogleAuthProvider();

    try {
        await signInWithPopup(auth, provider);
    } catch (error) {
        console.error("Error signing in with Google", error);
    }
}

export async function emailSignIn(email, password) {
    try {
            return signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
            console.error("Error signing in with email and password", error);
    }
}

export async function emailSignUp(email, password, name) {
        try {
                return createUserWithEmailAndPassword(auth, email, password).then(() => {
                        setDoc(doc(db, "users", auth.currentUser.uid), {
                                name: name,
                                email: email,
                                lists: []
                        }).then(() => {
                                updateProfile(auth.currentUser, {
                                        displayName: name
                                }).then(() => {
                                        window.location.reload()
                                });
                        });
                });
        } catch (error) {
                console.error("Error signing up with email and password", error);
        }
}

export async function signOut() {
    try {
            return auth.signOut().then(() => {
                window.location.reload()
            });
    } catch (error) {
            console.error("Error signing out with Google", error);
    }
}