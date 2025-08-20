import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { toggleMenu } from "../../utils/store/slices/appSlice";
import { API } from "../../utils/constants";
import { cacheResults } from "../../utils/store/slices/searchSlice";
import { addDisplayVideos } from "../../utils/store/slices/displayVideosSlice";

const Header = () => {
  const dispatch = useDispatch();
  const searchStore = useSelector((store) => store.search);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    // Below is the implementation of Debouncing.
    // API Call will be made after 200ms.
    const timer = setTimeout(() => {
      if (searchStore[searchQuery]) {
        setShowSuggestions(searchStore[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    // This below callback is only called when we are de-mounting the component.
    // For every searchQuery change, component will re-render. So before rendering newly, it will unmount previous render. At that time, it will clear Timeout.
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const searchSuggestions = await fetch(API.SEARCH_SUGGESTION + searchQuery);

    const json = await searchSuggestions.json();
    setSuggestions(json[1]);
    dispatch(cacheResults({ [searchQuery]: json[1] }));
  };

  const handleToggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const getSearchVideos = async () => {
    const searchSuggestions = await fetch(
      API.SEARCH_VIDEO_LIST +
        searchQuery +
        "&key=" +
        process.env.REACT_APP_API_KEY
    );

    const json = await searchSuggestions.json();
    dispatch(addDisplayVideos(json?.items));
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={handleToggleMenuHandler}
          className="h-8 cursor-pointer my-auto"
          alt="Menu"
          src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png"
        />
        <img
          className="h-12 mx-auto"
          alt="YouTube"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdWAHLE_HOsD6iFbpqtYy9hRMTwP9fYi3zEQ&s"
        />
      </div>
      <div className="col-span-10 px-10">
        <div>
          <input
            type="text"
            placeholder="Search Here..!!"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() =>
              setTimeout(() => {
                setShowSuggestions(false);
              }, 1000)
            }
            className="w-3/4 border border-gray-400 p-2 rounded-l-full"
          />
          <button className="w-1/4 border border-gray-400 p-2 rounded-r-full bg-gray-100">
            Search
          </button>
        </div>
        {suggestions.length > 0 && showSuggestions && (
          <div className="absolute bg-white py-2 px-2 w-[44rem] shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggestions.map((suggestion) => (
                <li
                  key={suggestion}
                  onClick={() => {
                    setSearchQuery(suggestion);
                    getSearchVideos();
                  }}
                  className="py-2 px-3 shadow-sm hover:bg-gray-100"
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          alt="User"
          className="h-12 mx-auto"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};

export default Header;
