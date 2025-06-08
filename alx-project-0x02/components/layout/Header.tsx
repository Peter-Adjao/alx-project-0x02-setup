// components/layout/Header.tsx
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
    // Get the current route path using Next.js router
  const router = useRouter();
  const currentPath = router.pathname;
  return (

    <header className="sticky top-0 z-50 bg-pink-400 shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-white">My Blog</h1>

      {/* Navigation links */}
      <nav className="space-x-4">
        {/* Always show the Home link */}
        <Link href="/home" className="text-white border-b-4 border-transparent hover:border-fuchsia-800 pb-1">Home</Link>

        {/* Show About link only if we're NOT on the About page */}
        {currentPath !== "/about" && (
          <Link href="/about" className="text-white border-b-4 border-transparent hover:border-fuchsia-800 pb-1">About</Link>
        )}

        {/* Show Contact link only if we're NOT on the Contact page */}
        {currentPath !== "/contact" && (
          <Link href="/contact" className="text-white border-b-4 border-transparent hover:border-fuchsia-800 pb-1">Contact</Link>
        )}

        {/* Show Posts link only if we're NOT on the Posts page */}
        {currentPath !== "/posts" && (
          <Link href="/posts" className="text-white border-b-4 border-transparent hover:border-fuchsia-800 pb-1">Posts</Link>
        )}

        {/*<Link href="/home" className="text-white">Home</Link>*/}
        {/*<Link href="/about" className="text-white">About</Link>*/}

      </nav>
    </header>
  );
}
