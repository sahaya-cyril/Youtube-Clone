import React from "react";
import commentsMockData from "../../utils/constants/commentsMockData";
import CommentList from "./CommentList";
import { useSelector } from "react-redux";

const CommentsContainer = () => {
  const isDarkTheme = useSelector((store) => store.theme.isDarkTheme);

  return (
    <div
      className={`mx-24 mt-16 p-2 pb-5 ${
        isDarkTheme ? "bg-stone-950" : "bg-white"
      }`}
    >
      <h1 className="text-2xl font-bold">Comments</h1>
      <CommentList comments={commentsMockData} />
    </div>
  );
};

export default CommentsContainer;
