import Header from "../components/layout/Header";

export default function AboutPage() {
  return (
    <>
    <Header />{/*render the header */}
    <main className="min-h-screen flex items-center justify-center bg-blue-100 text-black">
      <h1 className="text-3xl font-bold">About Us</h1>
    </main>
    </>
  );
}
