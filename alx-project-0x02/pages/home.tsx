import PostModal from "../components/common/PostModal";
import { useState } from "react";
import Header from "../components/layout/Header";
import Card from "@/components/common/Card";

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false); // Controls if modal is visible
  const [posts, setPosts] = useState<{ title: string; content: string }[]>([]); // List of posts

  // Called when user submits the form from PostModal
  const handleAddPost = (title: string, content: string) => {
    setPosts([...posts, { title, content }]); // Add new post to the list
  };

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
        
 {/* Button to open modal */}
        <div className="flex justify-center mb-4">
          <button
            onClick={() => setModalOpen(true)}
            className="bg-fuchsia-700 hover:bg-fuchsia-900 text-white px-6 py-2 rounded"
          >
            Add New Post
          </button>
        </div>
        {/* Modal Component */}
        <PostModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)} // Close modal
          onSubmit={handleAddPost} // Handle data from modal
        />

        {/* Render list of cards (posts) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((post, index) => (
            <Card key={index} title={post.title} content={post.content} />
          ))}
        </div>

    </main>

    </>
  );
}

