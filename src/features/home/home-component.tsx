import Link from "next/link";

export function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 text-black text-2xl">
      <Link href="/sign-in">Sign in</Link>
    </div>
  );
}
