import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, thumbnails, title } = snippet;

  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      <img className="rounded-lg" alt="Video" src={thumbnails?.medium?.url} />
      <ul>
        <div className="relative group">
          <li className="font-bold py-2">
            {title.length > 55 ? title.substring(0, 55) + "..." : title}
          </li>
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 p-2 bg-white text-black text-sm rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            {title}
          </div>
        </div>

        <li>{channelTitle}</li>
        {statistics?.viewCount && (
          <li>{Math.ceil(statistics.viewCount / 1000000)}M Views</li>
        )}
      </ul>
    </div>
  );
};

export default VideoCard;
