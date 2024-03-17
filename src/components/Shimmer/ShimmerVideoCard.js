import React from "react";

const ShimmerVideoCard = () => {
  return (
    <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg m-2 animate-shimmer">
      <div className="animate-pulse bg-gray-400 w-full h-36 rounded-lg"></div>
      <div className="animate-shimmer flex items-center p-3">
        <div className="animate-pulse w-10 h-10 rounded-full bg-gray-400 m-2"></div>
        <div>
          <h1 className="animate-pulse line-clamp-2 bg-gray-400 rounded leading-4">
            &nbsp;
          </h1>
          <p
            className="animate-pulse text-gray-400 text-sm bg-gray-400 rounded mt-1 leading-4"
            style={{ width: "14rem" }}
          >
            &nbsp;
          </p>
          <div className="animate-pulse flex items-center text-sm mt-1 text-gray-400 leading-3">
            <span className="bg-gray-400 rounded" style={{ width: "7rem" }}>
              &nbsp;
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerVideoCard;
