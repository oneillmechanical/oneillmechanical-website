import Link from "next/link";
import Image from "next/image";
export default function Header() {
  return (
    <header className="bg-gray-300 text-black">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

        <Link href="/" className="text-xl font-bold">
          <Image src="/images/OM-LOGO-WEB-800.png" alt="O'Neill Mechanical" width={752} height={483} className="h-20 w-auto"/>
        </Link>
        <nav>
          <ul className="flex gap-6">
            <li>
              <Link href="/" className="hover:text-blue-700">Home</Link>
            </li>

            <li>
              <Link href="/services" className="hover:text-blue-700">Services</Link>
            </li>

            <li>
              <Link href="/about" className="hover:text-blue-700">About</Link>
            </li>

            <li>
              <Link href="/contact" className="hover:text-blue-700">Contact</Link>
            </li>
          </ul>
        </nav>

      </div>
    </header>
  );
}