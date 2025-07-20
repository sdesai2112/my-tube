import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeMenu } from "../../../utils/store/slices/appSlice";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [isLiveContent, setisLiveContent] = useState(false);
  const [fullScreen, setFullScreen] = useState(false);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    dispatch(closeMenu());
    if (searchParams.get("liveContent") !== "none") {
      setisLiveContent(true);
    } else {
      setisLiveContent(false);
    }
  }, []);

  return (
    <div className="w-full flex flex-col">
      <div className="px-5 flex">
        <div>
          <iframe
            width={isLiveContent ? "1000" : "1325"}
            height={fullScreen ? "535" : "400"}
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
          <div className="-mt-10 cursor-pointer">
            <img
              onClick={() => {
                setFullScreen(!fullScreen);
              }}
              className="w-8 h-8 ml-auto mr-2"
              alt="Screen-Size"
              src="https://static.thenounproject.com/png/4893451-200.png"
            />
          </div>
        </div>
        {isLiveContent && (
          <div className="w-full">
            <LiveChat />
          </div>
        )}
      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
