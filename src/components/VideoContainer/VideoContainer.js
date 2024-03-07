import React, { useEffect, useState } from "react";
import VideoCard from "../VideoCard/VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(process.env.REACT_APP_YOUTUBE_VIDEO_URL);
    const json = await data.json();
    setVideos(json.items);
    console.log(json.items);
  };

  return (
    <div className="grid grid-cols-4 gap-1 pt-12">
      {videos.map((video) => (
        <VideoCard key={video.id} info={video} />
      ))}
    </div>
  );
};

export default VideoContainer;
