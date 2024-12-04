"use client";

import { useState } from "react";

function Comments() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      const timestamp = new Date().toLocaleString();
      setComments([...comments, { text: newComment, timestamp }]);
      setNewComment("");
    }
  };

  return (
    <div>
      <h3 className="text-lg font-semibold">Comentarios</h3>
      <textarea
        className="w-full p-2 border rounded-md"
        placeholder="Escribe un comentario..."
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      ></textarea>
      <button
        className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-md"
        onClick={handleAddComment}
      >
        Añadir Comentario
      </button>
      <ul className="mt-4">
        {comments.map((comment, index) => (
          <li key={index} className="bg-gray-700 p-2 rounded-md my-2">
            <p>{comment.text}</p>
            <small className="text-gray-400">{comment.timestamp}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Comments;
