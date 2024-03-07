"use client";

import Image from "next/image";
import Link from "next/link";
import { getAuth } from "firebase/auth";
import { signOut } from "@/lib/firebase/auth";
import { app } from "@/lib/firebase/config";
import { useRouter } from "next/navigation";
import SignInForm from "@/components/auth/SignInForm";

export default function Navigation() {
  const router = useRouter();
  const auth = getAuth(app);
  const openDrawer = () => {
    const checkbox: HTMLInputElement | null = document.getElementById('wishes-drawer-toggle') as HTMLInputElement;
    checkbox?.checked ? checkbox.checked = false : checkbox.checked = true;
  }

  return (
    <nav className="navbar bg-base-100 sticky top-0 z-10">
      <div className="navbar-start">
          <button onClick={openDrawer} tabIndex={0} role="button" className="btn btn-ghost btn-circle md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </button>
      </div>
      <div className="navbar-center">
        <a href="/" className="btn btn-ghost h-20">
          <Image src="/logo.png" alt="Logo" width={70} height={70} />
          <h1 className="text-2xl">Wishes</h1>
        </a>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <Image alt="Tailwind CSS Navbar component" src="/accplaceholderdark.png" width={70} height={70} />
            </div>
          </div>
          <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
            { 
              auth.currentUser ? 
              <>
                <li><Link className="text-lg" href="/settings">Settings</Link></li>
                <li><button className="text-lg" onClick={() => signOut().then(() => router.push("/"))}>Log Out</button></li>
              </> :
              <>
                <li><button className="text-lg" onClick={() => (document.getElementById("signInModal") as HTMLDialogElement)?.showModal()}>Sign In</button></li>              </>
            }
          </ul>
        </div>
      </div>
      <SignInForm />
    </nav>
  );
}