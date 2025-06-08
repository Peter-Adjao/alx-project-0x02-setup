
import Header from "@/components/layout/Header";
import { useEffect, useState } from "react";
import PostCard from "@/components/common/PostCard";
import { PostProps } from "@/interfaces";

export default function PostsPage() {
    const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    // Fetching posts from JSONPlaceholder API
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <>
    <Header />{/*render the header */}
    <main className="min-h-screen flex flex-col items-center gap-6 p-6 bg-blue-100 text-black">
      <h1 className="text-3xl font-bold">All Posts</h1>
      {posts.map((post) => (
          <PostCard key={post.id} title={post.title} body={post.body} userId={post.userId} id={0} />
        ))}

    </main>
    </>
  );
}
