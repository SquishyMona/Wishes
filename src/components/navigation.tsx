import Image from "next/image";

export default function Navigation() {
  return (
    <nav className="navbar bg-base-100">
      <div className="navbar-start"></div>
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
            <li><a>Settings</a></li>
            <li><a>Log Out</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}