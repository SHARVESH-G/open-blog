import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Post = ({ title, author, id, imgURI, onDelete }) => {

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-300">
      <img src={imgURI} alt="Post" className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">
          <span className="text-gray-400">Title:</span> {title}
        </h2>
        <p className="text-gray-400">Author: {author}</p>
        <div className="flex justify-around mt-4">
          <button
            onClick={() => deletePost(id)}
            className="border border-red-500 text-red-500 px-4 py-1 rounded hover:bg-red-100 transition"
          >
            Delete
          </button>
          <Link to={`/post/${id}`}>
            <button className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 transition">
              View Post
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Post;
