import React from "react";

const Comment = ({ data }) => {
  const { name, avatar, text } = data;
  return (
    <div className="flex bg-gray-100 p-2 rounded-lg mt-2 shadow-md">
      <img className="w-10 h-10 mt-1" alt="user-icon" src={avatar} />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comment;
