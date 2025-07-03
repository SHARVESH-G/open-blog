import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-slate-300 text-white p-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          BLOG
        </Link>
        <div className="space-x-4">
          <Link to="/">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded">
                Home
            </button>
          </Link>
          <Link to="/post">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded">
              Add Post
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
