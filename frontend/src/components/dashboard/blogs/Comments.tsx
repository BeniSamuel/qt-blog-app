import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";
import Comment from "./Comment";

type CommentInform = {
  id: number;
  content: string;
  comment_at: Date;
  user: {
    id: number;
    name: string;
    email: string;
  };
  post: {
    id: number;
    title: string;
    content: string;
    posted_at: Date;
  };
};

type CommentProp = {
  id: string | undefined;
};

const Comments: React.FC<CommentProp> = ({ id }) => {
  const [comment, setComment] = useState<CommentInform[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getAllComment = async () => {
      setLoading(true);
      setError(null);

      try {
        const token = localStorage.getItem("authToken");
        const response: AxiosResponse = await axios.get(
          `http://localhost:8080/api/qtblog/comment/post/${id}/all`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response.data)
        if (response.data.success && Array.isArray(response.data.data)) {
          setComment(response.data.data);
        } else {
          setError("Unexpected data format from server.");
        }
      } catch (err) {
        console.error("Error while fetching comment:", err);
        setError("Failed to load comment. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    getAllComment();
  }, [comment]);

  return (
    <div>
      <div className="">
        {loading && (
          <p className="text-blue-500 text-center font-urbanist font-semibold">
            Loading comments...
          </p>
        )}

        {error && (
          <p className="text-red-500 bg-red-100 p-3 rounded text-center font-urbanist">
            {error}
          </p>
        )}

        {!loading && comment.length === 0 && !error && (
          <p className="text-gray-500 text-center font-urbanist">
            No comments available.
          </p>
        )}

        {comment.map((comment) => (
          <div
            onClick={() => {
              navigate(`/blog/${comment.id}`);
            }}
            className=" flex flex-col gap-6"
          >
            <Comment
              key={comment.id}
              content={comment.content}
              comment_at={comment.comment_at}
              user={comment.user}
              id={comment.id}
              post={comment.post}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
