import React from "react";
import FiltersList from "../FilterVideos/FiltersList";
import VideoContainer from "../VideoContainer/VideoContainer";

const MainContainer = () => {
  return (
    <div className="ml-24 mr-5 pt-14">
      <FiltersList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
