import React, { useEffect, useRef, useState } from "react";
import VideoCard from "../VideoCard/VideoCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const [nextPage, setNextPage] = useState("");

  const filterBtn = useSelector((store) => store.search.filterbtn);
  const filterbtnSearch = useSelector((store) => store.search.filterbtnSearch);

  const activeVideos = filterBtn ? filterbtnSearch : videos;

  const elementRef = useRef(null);

  function onIntersection(entries) {
    const firstEntry = entries[0];
    if (firstEntry.isIntersecting && hasMore) {
      fetchMoreVideos();
    }
  }

  useEffect(() => {
    getVideos();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(onIntersection);
    if (observer && elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [videos]);

  const getVideos = async () => {
    const data = await fetch(process.env.REACT_APP_YOUTUBE_VIDEO_URL);
    const json = await data.json();
    setVideos(json?.items);
    if (json.nextPageToken) {
      setNextPage(json?.nextPageToken);
      setHasMore(true);
    } else {
      setHasMore(false);
    }
  };

  const fetchMoreVideos = async () => {
    const response = await fetch(
      process.env.REACT_APP_YOUTUBE_MORE_VIDEO_URL + "&pageToken=" + nextPage
    );
    const json = await response.json();
    if (json?.nextPageToken) {
      setHasMore(true);
      setNextPage(json?.nextPageToken);
      setVideos((prevVideos) => [...prevVideos, ...json?.items]);
    } else {
      setHasMore(false);
    }
  };

  return (
    <div className="grid grid-cols-4 gap-1 pt-12">
      {activeVideos.map((video) =>
        filterBtn ? (
          <Link key={video.id} to={"/watch?v=" + video.id.videoId}>
            <VideoCard key={video.id} info={video} />
          </Link>
        ) : (
          <Link key={video.id} to={"/watch?v=" + video.id}>
            <VideoCard key={video.id} info={video} />
          </Link>
        )
      )}
      {hasMore && <div ref={elementRef}>Loading more items...</div>}
    </div>
  );
};

export default VideoContainer;
