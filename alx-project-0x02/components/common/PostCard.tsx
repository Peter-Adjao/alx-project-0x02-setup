// components/common/PostCard.tsx

import React from "react";
import { type PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ id, title, body, userId }) => {
  return (
    <div className="bg-white shadow-md p-4 rounded-md mb-4">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700">{body}</p>
      <span className="text-sm text-gray-500 mt-2">User ID: {userId}</span>
    </div>
  );
};

export default PostCard;
