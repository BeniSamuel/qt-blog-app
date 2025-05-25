import React from "react";

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

const Comment: React.FC<CommentInform> = (props) => {
  const time = new Date(props.comment_at);

  return (
    <div className=" flex flex-col gap-1">
      <div className=" flex flex-row gap-3 items-center">
        <div className=" h-12 w-12 text-white bg-slate-400 flex flex-col items-center justify-center rounded-full">
          {props.user.name[0]}
        </div>
        <div className=" font-urbanist font-bold">{props.user.name}</div>
        <div className=" font-urbanist">{time.toUTCString()} minutes ago</div>
      </div>
      <div className=" font-urbanist font-medium px-16">{props.content}</div>
    </div>
  );
};

export default Comment;
