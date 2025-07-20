import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API } from "../../../utils/constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const videos = await fetch(API.POPULAR_VIDEOS);
    const json = await videos.json();
    setVideos(json.items);
  };

  if (!videos?.length) return;

  return (
    <div className="flex flex-wrap">
      {videos?.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
