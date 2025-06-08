
import Header from "../components/layout/Header";

export default function Posts() {
  return (
    <>
    <Header />{/*render the header */}
    <main className="min-h-screen flex flex-col items-center gap-6 p-6 bg-blue-100 text-black">
      <h1 className="text-3xl font-bold">All Posts</h1>

    </main>
    </>
  );
}
