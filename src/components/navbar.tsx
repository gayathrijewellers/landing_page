import Link from "next/link";

export default function NavBar() {
  return (
    <div className="fixed w-full top-0 z-10 backdrop-blur-lg bg-transparent">
      <div className="flex gap-32 items-center justify-center p-6">
        <Link href="/">
          <p>Home</p>
        </Link>
        <Link href="/collections">
          <p>Collections</p>
        </Link>
        <Link href="/about">
          <p>About Us</p>
        </Link>
      </div>
    </div>
  );
}
