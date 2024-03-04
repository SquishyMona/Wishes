import Image from "next/image";

export default function Navigation() {
  return (
    <nav className="flex flex-row">
      <ul className="flex flex-row items-center">
        <a href="/">
            <li className="mx-2 flex flex-row items-center">
            <Image
                src="/logo.png"
                alt="Wishes Logo"
                width={60}
                height={60}
            />
            <h1 className="text-xl mx-1">Wishes</h1>
            </li>
        </a>
        <li className="mx-2">
          <a href="/">Lists</a>
        </li>
        <li className="mx-2">
          <a href="/wishes">Account</a>
        </li>
      </ul>
    </nav>
  );
}