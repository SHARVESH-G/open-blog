import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Post from '../components/Post/Post';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const res = await axios.get('http://localhost:5000/posts');
      setPosts(res.data);
    } catch (err) {
      console.error('❌ Failed to fetch posts:', err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/posts/${id}`);
      setPosts(prev => prev.filter(post => post._id !== id));
    } catch (err) {
      console.error('❌ Failed to delete post:', err);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {posts.map((post) => (
        <Post
          key={post._id}
          id={post._id}
          title={post.title}
          author={post.author}
          imgURI={post.img}
          deletePost={handleDelete}
        />
      ))}
    </div>
  );
};

export default PostList;
