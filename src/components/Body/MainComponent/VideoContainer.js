import { useEffect, useState } from "react";
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
    console.log(json);
    setVideos(json.items);
  };

  return (
    <div>
      <VideoCard info={videos[0]} />
    </div>
  );
};

export default VideoContainer;
