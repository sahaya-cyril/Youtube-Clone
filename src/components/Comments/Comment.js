import React from "react";
import { useSelector } from "react-redux";

const Comment = ({ data }) => {
  const { name, avatar, text } = data;
  const isDarkTheme = useSelector((store) => store.theme.isDarkTheme);

  return (
    <div
      className={`flex p-2 rounded-lg mt-2 shadow-md ${
        isDarkTheme ? "bg-stone-800" : "bg-gray-100"
      }`}
    >
      <img className="w-10 h-10 mt-1" alt="user-icon" src={avatar} />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p className={isDarkTheme ? "text-stone-400" : "text-black"}>{text}</p>
      </div>
    </div>
  );
};

export default Comment;
