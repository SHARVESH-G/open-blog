import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreatePostPage = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    author: '',
    imgBase64: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData(prev => ({ ...prev, imgBase64: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5000/newpost', formData);

      toast.success('✅ Post created successfully!');
      setFormData({
        title: '',
        description: '',
        author: '',
        imgBase64: '',
      });
    } catch (error) {
      console.error('❌ Submission failed:', error);
      toast.error(error.response?.data?.error || '❌ Server error while submitting.');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-center">Create New Post</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded"
        />

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
          rows="5"
          maxLength={100}
          className="w-full px-4 py-2 border border-gray-300 rounded resize-none"
        />

        <input
          type="text"
          name="author"
          placeholder="Author"
          value={formData.author}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded"
        />

        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="w-full"
        />

        {formData.imgBase64 && (
          <div className="mt-4">
            <p className="text-gray-600 mb-2">Image Preview:</p>
            <img
              src={formData.imgBase64}
              alt="Preview"
              className="w-full h-32 object-cover rounded-lg shadow"
            />
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Create Post
        </button>
      </form>

      <ToastContainer position="top-center" autoClose={2500} />
    </div>
  );
};

export default CreatePostPage;
