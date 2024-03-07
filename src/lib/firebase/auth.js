import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, getAdditionalUserInfo } from "firebase/auth";
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
    provider.addScope("https://www.googleapis.com/auth/user.birthday.read");
    provider.addScope("https://www.googleapis.com/auth/userinfo.profile");

    try {
        await signInWithPopup(auth, provider).then((result) => {
            const additionalInfo = getAdditionalUserInfo(result);
            const user = result.user;
            const birthday = additionalInfo.profile;
            console.log(birthday);
            setDoc(doc(db, "users", user.uid), {
                name: user.displayName,
                email: user.email,
                lists: [],
                birthday: birthday
            }).then(() => {
                window.location.reload()
            });
        });
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

export async function emailSignUp(email, password, name, birthday) {
        try {
                return createUserWithEmailAndPassword(auth, email, password).then(() => {
                        setDoc(doc(db, "users", auth.currentUser.uid), {
                                name: name,
                                email: email,
                                lists: [],
                                birthday: birthday
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

