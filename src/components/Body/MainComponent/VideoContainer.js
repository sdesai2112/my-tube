import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { API } from "../../../utils/constants";
import VideoCard from "./VideoCard";
import { addVideoDetails } from "../../../utils/store/slices/videoDetails";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const videos = await fetch(API.POPULAR_VIDEOS);
    const json = await videos.json();
    setVideos(json.items);
    // console.log(json.items);
  };

  const handleVideoClick = (video) => {
    dispatch(addVideoDetails(video));
  };

  if (!videos?.length) return;

  return (
    <div className="flex flex-wrap">
      {videos?.map((video) => (
        <Link
          key={video.id}
          onClick={() => handleVideoClick(video)}
          to={
            "/watch?v=" +
            video.id +
            "&liveContent=" +
            video?.snippet?.liveBroadcastContent
          }
        >
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
