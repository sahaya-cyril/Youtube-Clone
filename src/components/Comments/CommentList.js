import React from "react";
import Comment from "./Comment";
import { useSelector } from "react-redux";

const CommentList = ({ comments }) => {
  const isDarkTheme = useSelector((store) => store.theme.isDarkTheme);

  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div
        className={`pl-5 ml-5 border ${
          isDarkTheme ? "border-l-stone-700" : "border-l-black"
        }`}
      >
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};

export default CommentList;
