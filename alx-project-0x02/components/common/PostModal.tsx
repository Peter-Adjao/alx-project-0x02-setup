import React, { useState } from "react";

// Define the props that PostModal expects
interface PostModalProps {
  isOpen: boolean; // Controls whether modal is visible
  onClose: () => void; // Function to close the modal
  onSubmit: (title: string, content: string) => void; // Function to send user input back to parent
}

// Modal component for creating a new post
export default function PostModal({ isOpen, onClose, onSubmit }: PostModalProps) {
  const [title, setTitle] = useState(""); // Holds the title input
  const [content, setContent] = useState(""); // Holds the content input

  // Don't render the modal if it's not open
  if (!isOpen) return null;

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(title, content); // Pass data to parent
    setTitle(""); // Reset form fields
    setContent("");
    onClose(); // Close the modal
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-xl font-bold mb-4">Add New Post</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)} // Update title state
            className="w-full p-2 border mb-2 rounded"
            required
          />
          <textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)} // Update content state
            className="w-full p-2 border mb-4 rounded"
            rows={4}
            required
          />
          <div className="flex justify-end space-x-2">
            <button type="button" onClick={onClose} className="bg-gray-300 px-4 py-2 rounded">
              Cancel
            </button>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

