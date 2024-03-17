import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import { openMenu } from "../../utils/store/appSlice";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [searchedVideos, setSearchedVideos] = useState([]);

  let searchQuery = searchParams.get("search_query");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(openMenu());
    getSearchedVideosList();
  }, [searchQuery]);

  const getSearchedVideosList = async () => {
    const data = await fetch(
      process.env.REACT_APP_YOUTUBE_SEARCH_VIDEO_WITH_QUERY +
        "&q=" +
        searchQuery
    );
    const json = await data.json();
    setSearchedVideos(json?.items);
  };

  return (
    <div className="flex flex-col">
      <div className="p-2 mt-14 m-auto">
        {searchedVideos?.map((video) => (
          <Link key={video?.id?.videoId} to={"/watch?v=" + video?.id?.videoId}>
            <div className="px-3 m-4 flex">
              <img
                className="rounded-lg w-[360px] h-[202px] "
                alt="thumbnail"
                src={video?.snippet?.thumbnails?.medium?.url}
              />
              <ul className="flex flex-col justify-start ml-5 w-96">
                <li className="font-normal py-2 text-lg">
                  {video?.snippet?.title}
                </li>
                <li className="text-gray-500 text-[12px]">
                  {video?.snippet?.channelTitle}
                </li>
                <li className="text-gray-500 text-[12px]">
                  10M views{" "}
                  {(
                    Math.abs(
                      new Date(video?.snippet?.publishedAt) - new Date()
                    ) /
                    (60 * 60 * 24 * 1000)
                  ).toFixed(1)}{" "}
                  days ago
                </li>
                <li className="text-gray-500 mt-2 text-[12px]">
                  {video?.snippet?.description}
                </li>
              </ul>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
