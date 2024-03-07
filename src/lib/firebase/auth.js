import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { app } from "./config";

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

export async function signOut() {
    try {
            return auth.signOut();
    } catch (error) {
            console.error("Error signing out with Google", error);
    }
}