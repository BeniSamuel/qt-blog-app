import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Dashboard from "../../layouts/dashboard/Dashboard";
import axios from "axios";
import Comments from "../../components/dashboard/blogs/Comments";
import AddComment from "../../components/dashboard/blogs/AddComment";

type BlogType = {
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

const Blog: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [blog, setBlog] = useState<BlogType>({
    id: 0,
    title: "",
    content: "",
    cover: "",
    posted_at: new Date(),
    user: { id: 0, name: "", email: "" },
  });

  useEffect(() => {
    const blogFetching = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const response = await axios.get(
          `http://localhost:8080/api/qtblog/post/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.data.success) {
          setBlog(response.data.data);
        }
      } catch (error) {
        console.error("Error while fetching a blog: ", error);
      }
    };

    blogFetching();
  }, [id]);

  const postedDate = new Date(blog.posted_at);
  const formattedDate = `${postedDate.getDate()}-${
    postedDate.getMonth() + 1
  }-${postedDate.getFullYear()}`;

  return (
    <Dashboard>
      <div className="absolute left-1/2 top-[10rem] transform -translate-x-1/2 w-full max-w-5xl px-4 pb-12 space-y-6 rounded-3xl flex flex-col gap-5 py-12">
        <div className="flex flex-col items-center">
          <div className=" h-80 w-[54rem] bg-slate-500 flex flex-col items-center rounded-3xl">
            <img src={blog?.cover} />
          </div>
        </div>

        <div className=" font-urbanist font-bold text-3xl px-20">
          {blog?.title}
        </div>

        <div className=" flex flex-row justify-between  items-center">
          <div className=" flex flex-row gap-4 items-center">
            <div className=" h-11 w-11 rounded-full flex flex-col items-center justify-center text-white bg-slate-500 font-urbanist font-semibold">
              {blog?.user.name[0]}
            </div>
            <div>
              <div className=" font-urbanist">Author</div>
              <div className=" font-urbanist font-semibold">
                {blog?.user.name}
              </div>
            </div>
          </div>
          <div className=" font-urbanist font-semibold">
            Posted {formattedDate}
          </div>
        </div>

        <div className=" font-urbanist font-medium px-12">{blog.content}</div>
        <div className=" font-urbanist font-semibold text-lg">Discussions</div>
        <Comments id={id}/>
        <AddComment postId={blog.id}/>
      </div>
    </Dashboard>
  );
};

export default Blog;
