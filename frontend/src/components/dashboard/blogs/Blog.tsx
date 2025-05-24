import React from "react";

type BlogProps = {
  id: number;
  cover: string;
  title: string;
  content: string;
  posted_at: Date;
  user: { id: number; name: string; email: string };
};

const Blog: React.FC<BlogProps> = (props) => {
  const postedDate = new Date(props.posted_at);
  const formattedDate = `${postedDate.getDate()}-${
    postedDate.getMonth() + 1
  }-${postedDate.getFullYear()}`;

  return (
    <div className="flex flex-row items-center gap-10 p-6">
      {/* Cover */}
      <div className="h-64 w-72 bg-slate-400 flex justify-center items-center text-white font-bold">
        {props.cover}
      </div>

      {/* Blog Content */}
      <div className="flex flex-col max-w-3xl gap-4">
        <div className="font-urbanist font-bold text-[1.5rem] text-gray-900 mb-2">
          {props.title}
        </div>

        <div className="font-urbanist leading-7 whitespace-pre-line text-gray-700 mb-4 break-words font-medium">
          {props.content ||
            "This is more than what you think dude, cause this took ages you know you're greatness\n" +
              "one million views aren't famous i need a crib no neigh bors mad... "}
        </div>

        {/* Author Info */}
        <div className="flex flex-row justify-between items-center mt-4">
          <div className="flex flex-row gap-3 items-center">
            <div className="flex justify-center items-center font-urbanist font-semibold text-white text-lg w-11 h-11 bg-gray-500 rounded-full">
              {props.user.name[0]}
            </div>
            <div>
              <div className="font-urbanist text-sm text-gray-500">Author</div>
              <div className="font-urbanist font-semibold text-[#143751]">
                {props.user.name}
              </div>
            </div>
          </div>

          <div className="font-urbanist font-semibold text-gray-600">
            Posted {formattedDate}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
