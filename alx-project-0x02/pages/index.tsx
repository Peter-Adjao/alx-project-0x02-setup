import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to My Blog</title>
        <meta name="description" content="A blog interface built with Next.js, TypeScript, and Tailwind CSS" />
      </Head>

      <main
        className={`min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800 ${geistSans.variable}`}
      >
        <h1 className="text-4xl font-bold mb-4">Welcome to My Blog</h1>
        <p className="text-lg">Explore our posts, users and more..</p>
      </main>
    </>
  );
}
