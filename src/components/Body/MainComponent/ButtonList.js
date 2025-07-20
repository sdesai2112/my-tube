import { useState, useEffect } from "react";
import Button from "./Button";
import { API } from "../../../utils/constants";

const ButtonList = () => {
  const [videoCategories, setVideoCategories] = useState([]);

  useEffect(() => {
    getVideoCategories();
  }, []);

  const getVideoCategories = async () => {
    const videoCategoryDetails = await fetch(API.VIDEO_CATEGORIES);
    const json = await videoCategoryDetails.json();
    const categoryList = json?.items?.map((item) => item?.snippet?.title);
    setVideoCategories([...new Set(categoryList)]);
  };

  return (
    videoCategories.length > 0 && (
      <div className="flex">
        {videoCategories.map((buttonName) => (
          <Button key={buttonName} name={buttonName} />
        ))}
      </div>
    )
  );
};

export default ButtonList;
