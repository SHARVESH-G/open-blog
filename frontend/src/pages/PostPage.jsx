import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

const PostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/posts/${id}`);
        setPost(res.data);
      } catch (err) {
        console.error('❌ Failed to fetch post:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <div className="p-10 text-center text-blue-500 text-lg font-medium">
        Loading post...
      </div>
    );
  }

  if (!post) {
    return (
      <div className="p-10 text-center text-red-500 text-lg font-medium">
        ❌ Post not found.
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <img
        src={post.img || post.imgURI}
        alt={post.title}
        className="w-full h-64 object-cover rounded-lg mb-6 shadow-md"
      />
      <h1 className="text-4xl font-bold text-gray-800 mb-4">{post.title}</h1>
      <div className="text-sm text-gray-500 mb-4 flex flex-wrap gap-x-6 gap-y-2">
        <p>
          <span className="font-semibold">Author:</span> {post.author}
        </p>
      </div>
      <p className="text-gray-700 leading-relaxed">{post.description}</p>
    </div>
  );
};

export default PostPage;
