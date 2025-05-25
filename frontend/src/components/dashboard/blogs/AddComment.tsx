import axios from "axios";
import React, { useEffect, useState } from "react";
import { Role } from "../../../enums/role.enum";

type AddCommentProps = {
  postId: number;
};

type UserInformation = {
  id: number;
  name: string;
  email: string;
  password: string;
  role: Role;
};

const AddComment: React.FC<AddCommentProps> = ({ postId }) => {
  const [comment, setComment] = useState<string>("");
  const [user, setUser] = useState<UserInformation>({
    id: 0,
    name: "",
    email: "",
    password: "",
    role: Role.USER,
  });

  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const response = await axios.get(
          "http://localhost:8080/api/qtblog/user/me",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response.data);
        if (response.data.success) {
          setUser(response.data.data);
        }
      } catch (error) {
        console.error("Error occurred while fetching user profile ", error);
      }
    };

    getCurrentUser();
  }, []);

  const handleCreateComment = async () => {
    try {
      const token = localStorage.getItem("authToken");
      const response = await axios.post(
        "http://localhost:8080/api/qtblog/comment/create",
        {
          content: comment,
          user_id: user.id,
          post_id: postId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      if (response.data.success) {
        alert("Added comment successfully!!");
      }
      setComment("")
    } catch (error) {
      console.error("Error occurred while commenting: ", error);
    }
  };

  return (
    <div className=" flex flex-row gap-5">
      <div className=" font-urbanist bg-slate-500 h-11 w-11 flex flex-col items-center justify-center rounded-full text-white font-semibold">
        {user.name[0]}
      </div>
      <div className=" flex flex-col gap-2">
        <div className=" font-urbanist font-medium">Add your comment</div>
        <div>
          <input
            type="text"
            value={comment}
            placeholder="What do you think about this ?"
            className=" font-urbanist placeholder:font-urbanist placeholder:font-medium font-medium w-[36rem] py-4 px-4 rounded-xl border-[2px] border-[#DDDDDD]"
            onChange={(e) => {
              setComment(e.target.value);
            }}
          />
        </div>
        <div className=" flex flex-row justify-end">
          <button
            onClick={handleCreateComment}
            className=" font-urbanist font-medium bg-[#F5F5F5] py-3 px-4 rounded-3xl"
          >
            Post comment
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddComment;
