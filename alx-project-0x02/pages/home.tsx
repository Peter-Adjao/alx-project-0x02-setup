import Header from "../components/layout/Header";

export default function HomePage() {
  return (
    <>
<Header />{/*render the header */}

    <main className="min-h-screen flex items-center justify-center bg-cyan-100 text-black">
      <h1 className="text-3xl font-bold">This is the Home Page</h1>
    </main>

    </>
  );
}
