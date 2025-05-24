import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import Blog from "./Blog";

type BlogInform = {
  id: number;
  title: string;
  content: string;
  cover: string;
  posted_at: Date;
  user: {
    id: number;
    name: string;
    email: string;
  };
};

const Blogs: React.FC = () => {
  const [blogs, setBlogs] = useState<BlogInform[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getAllBlogs = async () => {
      setLoading(true);
      setError(null);

      try {
        const token = localStorage.getItem("authToken");
        const response: AxiosResponse = await axios.get(
          "http://localhost:8080/api/qtblog/post/all",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.data.success && Array.isArray(response.data.data)) {
          setBlogs(response.data.data);
        } else {
          setError("Unexpected data format from server.");
        }
      } catch (err) {
        console.error("Error while fetching blogs:", err);
        setError("Failed to load blogs. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    getAllBlogs();
  }, []);

  return (
    <div className="relative z-30 py-12">
       <div className="absolute left-1/2 top-[-3rem] transform -translate-x-1/2 w-full max-w-5xl px-4 pb-12 space-y-6 bg-white rounded-3xl">
        {loading && <p className="text-blue-500 text-center">Loading blogs...</p>}

        {error && (
          <p className="text-red-500 bg-red-100 p-3 rounded text-center">
            {error}
          </p>
        )}

        {!loading && blogs.length === 0 && !error && (
          <p className="text-gray-500 text-center">No blogs available.</p>
        )}

        {blogs.map((blog) => (
          <Blog
            key={blog.id}
            id={blog.id}
            cover={blog.cover}
            title={blog.title}
            content={blog.content}
            posted_at={blog.posted_at}
            user={blog.user}
          />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
