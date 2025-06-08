// pages/posts.tsx
import Header from "@/components/layout/Header";
import { GetStaticProps } from "next";
import PostCard from "@/components/common/PostCard";
import { PostProps } from "@/interfaces";

interface PostsPageProps {
  posts: PostProps[];
}

export const getStaticProps: GetStaticProps<PostsPageProps> = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
  const posts: PostProps[] = await res.json();

  return {
    props: {
      posts,
    },
  };
};

export default function PostsPage({ posts }: PostsPageProps) {
  return (
    <>
     <Header /> {/*Include the Header at the top of the page */}
    <main className="p-4">
      <h1 className="text-3xl font-bold mb-6">Posts</h1>
      <div className="space-y-4">
        {posts.map((post) => (
          <PostCard
                key={post.id}
                title={post.title}
                content={post.body}
                userId={post.userId} id={0} body={""}          />
        ))}
      </div>
    </main>
    </>
  );
}
