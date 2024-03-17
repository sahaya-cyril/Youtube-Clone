import React from "react";
import VerifiedIcon from "@mui/icons-material/Verified";
import { useSelector } from "react-redux";
import { formatDistanceToNow } from "date-fns";
import { youtubeViewCount } from "../../utils/helperFunctions/youtubeViewCount";

const VideoCard = ({ info }) => {
  const isDarkTheme = useSelector((store) => store.theme.isDarkTheme);
  const darkThemeStyle = `${isDarkTheme ? "text-stone-400" : "text-stone-700"}`;

  const { snippet } = info;
  const { channelTitle, title, thumbnails } = snippet;

  const publishedAt = new Date(snippet.publishedAt);
  const publishDate = formatDistanceToNow(publishedAt, { addSuffix: true });

  return (
    <div className="m-2">
      <img className="rounded-lg" alt="video" src={thumbnails.medium.url} />
      <div className="flex py-2">
        <img
          src={thumbnails.default.url}
          alt={channelTitle}
          className="w-9 h-9 rounded-full mr-2"
        />
        <div>
          <h3 className="text-sm font-semibold line-clamp-2">{title}</h3>
          <span
            className={`text-sm font-semibold mt-2 leading-3 ${darkThemeStyle}`}
          >
            {channelTitle}

            {info?.contentDetails?.licensedContent ? (
              <VerifiedIcon className="px-1" />
            ) : (
              <p className="pb-1"></p>
            )}
          </span>
          <div className={`flex text-sm leading-3 ${darkThemeStyle}`}>
            <span>
              {info?.statistics?.viewCount
                ? youtubeViewCount(info?.statistics?.viewCount)
                : "10K"}{" "}
              views
            </span>
            <span className="mx-1">•</span>
            <span>{publishDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
