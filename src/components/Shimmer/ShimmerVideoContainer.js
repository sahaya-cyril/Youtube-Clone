import React from "react";
import ShimmerVideoCard from "./ShimmerVideoCard";

const ShimmerVideoContainer = () => {
  const shimmerCards = [];

  for (let i = 0; i <= 35; i++) {
    shimmerCards.push(<ShimmerVideoCard key={i} />);
  }

  return <div className="flex flex-wrap mt-14">{shimmerCards}</div>;
};

export default ShimmerVideoContainer;
