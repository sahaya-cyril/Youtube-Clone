import React from "react";
import VerifiedIcon from "@mui/icons-material/Verified";
import { formatDistanceToNow } from "date-fns";
import { youtubeViewCount } from "../../utils/helperFunctions/youtubeViewCount";

const VideoCard = ({ info }) => {
  const { contentDetails, snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  const { licensedContent } = contentDetails;

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
          <p className="text-xs font-semibold mt-1 leading-3 text-stone-600">
            {channelTitle}
            {licensedContent && <VerifiedIcon className="px-1" />}
          </p>
          <div className="flex text-sm leading-3 text-stone-600">
            <span>{youtubeViewCount(statistics.viewCount)} views</span>
            <span className="mx-1">•</span>
            <span>{publishDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
