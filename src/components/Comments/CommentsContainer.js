import React from "react";
import commentsMockData from "../../utils/constants/commentsMockData";
import CommentList from "./CommentList";

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments</h1>
      <CommentList comments={commentsMockData} />
    </div>
  );
};

export default CommentsContainer;
