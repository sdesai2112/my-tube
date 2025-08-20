import { API } from "../../../utils/constants";
import { addDisplayVideos } from "../../../utils/store/slices/displayVideosSlice";
import { useDispatch } from "react-redux";

const Button = ({ name }) => {
  const dispatch = useDispatch();

  const getCategoryVideos = async () => {
    const searchSuggestions = await fetch(
      API.SEARCH_VIDEO_LIST + name + "&key=" + process.env.REACT_APP_API_KEY
    );

    const json = await searchSuggestions.json();
    dispatch(addDisplayVideos(json?.items));
  };

  return (
    <div>
      <button
        onClick={() => {
          getCategoryVideos();
        }}
        className="px-5 py-2 bg-gray-200 whitespace-nowrap rounded-lg mx-2 my-5"
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
