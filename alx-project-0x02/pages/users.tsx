// pages/users.tsx
import Header from "@/components/layout/Header"; //Import the Header component
import { GetStaticProps } from "next";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

interface UsersPageProps {
  users: UserProps[];
}

export default function UsersPage({ users }: UsersPageProps) {
  return (
   <>
     <Header /> {/*Include the Header at the top of the page */}
    <main className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Users</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {users.map((user) => (
          <UserCard
            key={user.id}
            id={user.id}
            name={user.name}
            email={user.email}
            address={user.address}
          />
        ))}
      </div>

    </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: UserProps[] = await res.json();

  return {
    props: { users },
  };
};
