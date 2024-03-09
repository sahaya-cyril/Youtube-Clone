import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../../utils/store/appSlice";
import { useSearchParams } from "react-router-dom";
import {
  Verified,
  ThumbUpOutlined,
  ThumbDownOutlined,
  MoreHorizOutlined,
  ReplyOutlined,
} from "@mui/icons-material";
import { youtubeViewCount } from "../../utils/helperFunctions/youtubeViewCount";
import ChatBox from "../LiveChat/ChatBox";

const Watch = () => {
  const [searchParams] = useSearchParams();
  const [videoDetails, setVideoDetails] = useState({});
  let videoId = searchParams.get("v");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
    getVideoDetails();
  }, []);

  const getVideoDetails = async () => {
    const data = await fetch(
      process.env.REACT_APP_YOUTUBE_VIDEO_DETAIL + "&id=" + videoId
    );
    const videoDetailsJson = await data.json();
    setVideoDetails(videoDetailsJson?.items[0]);
  };

  return (
    <div className="flex mt-16">
      <div className="grid grid-flow-row w-6/12 h-96 ml-24">
        <iframe
          className="rounded-2xl w-full h-[23rem]"
          src={"https://www.youtube.com/embed/" + videoId + "?autoplay=1"}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <div className="py-2">
          <div className="font-bold text-xl">
            {videoDetails?.snippet?.title}
          </div>
        </div>
        <div className="flex">
          <img
            className="rounded-full w-10 h-10"
            alt="thumbnail"
            src={videoDetails?.snippet?.thumbnails?.default?.url}
          />
          <div className="flex flex-col px-2">
            <span className="font-semibold text-md">
              {videoDetails?.snippet?.channelTitle}
              {videoDetails?.contentDetails?.licensedContent && (
                <Verified className="px-1 text-gray-600" />
              )}
            </span>
            <span className="text-gray-500 text-xs">
              {youtubeViewCount(videoDetails?.statistics?.viewCount)}{" "}
              Subscribers
            </span>
          </div>
          <div className="flex mx-5">
            <button className="bg-black px-3 my-1 rounded-full text-white">
              Subscribe
            </button>
          </div>
          <div className="grow"></div>
          <div className="flex">
            <button className="flex items-center bg-gray-100 rounded-l-full px-4 hover:bg-gray-200">
              <ThumbUpOutlined />
              <span className="px-1">65K</span>
            </button>
            <button className="flex items-center bg-gray-100 rounded-r-full px-4 border-l-2 border-gray-300 hover:bg-gray-200">
              <ThumbDownOutlined />
            </button>
            <button className="flex items-center bg-gray-100 rounded-full px-4 ml-2 hover:bg-gray-200">
              <ReplyOutlined />
              Share
            </button>
            <button className="flex items-center bg-gray-100 rounded-full px-2 ml-2 hover:bg-gray-200">
              <MoreHorizOutlined />
            </button>
          </div>
        </div>
      </div>
      <ChatBox />
    </div>
  );
};

export default Watch;
