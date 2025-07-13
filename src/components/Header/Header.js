import { useDispatch } from "react-redux";
import { toggleMenu } from "../../utils/store/slices/appSlice";

const Header = () => {
  const dispatch = useDispatch();

  const handleToggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={handleToggleMenuHandler}
          className="h-8 cursor-pointer"
          alt="Menu"
          src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png"
        />
        <img
          className="h-8 mx-2"
          alt="YouTube"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdWAHLE_HOsD6iFbpqtYy9hRMTwP9fYi3zEQ&s"
        />
      </div>
      <div className="col-span-10 px-10">
        <input
          type="text"
          placeholder="Search Here..!!"
          className="w-3/4 border border-gray-400 p-2 rounded-l-full"
        />
        <button className="w-1/4 border border-gray-400 p-2 rounded-r-full bg-gray-100">
          Search
        </button>
      </div>
      <div className="col-span-1">
        <img
          alt="User"
          className="h-8 mx-auto"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};

export default Header;
