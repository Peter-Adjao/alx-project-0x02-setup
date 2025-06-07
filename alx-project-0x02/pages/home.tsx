import Header from "../components/layout/Header";
import Card from "@/components/common/Card";

export default function HomePage() {
  return (
    <>
<Header />{/*render the header */}

    <main className="min-h-screen flex flex-col items-center gap-6 p-6 bg-cyan-100 text-black">

      <h1 className="text-3xl font-bold">Hi, welcome to my Page</h1>

      {/*Card component */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card 
            title="Introduction to Next.js" 
            content="Learn how to build fast and scalable web applications using Next.js." 
          />
          <Card 
            title="Getting Started with TypeScript" 
            content="Understand how TypeScript improves developer experience and code safety." 
          />
          <Card 
            title="Styling with Tailwind CSS" 
            content="Explore utility-first styling and build beautiful UIs faster." 
          />
        </div>

    </main>

    </>
  );
}
