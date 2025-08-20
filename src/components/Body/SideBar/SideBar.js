import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    isMenuOpen && (
      <div className="shadow-lg p-5 w-48">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>Shorts</li>
          <li>Subscriptions</li>
        </ul>
        <h1 className="font-bold pt-5">You</h1>
        <ul>
          <li>History</li>
          <li>Playlist</li>
          <li>Watch Later</li>
          <li>Linked Videos</li>
        </ul>
        <h1 className="font-bold pt-5">Explore</h1>
        <ul>
          <li>Shopping</li>
          <li>Music</li>
          <li>Sports</li>
          <li>Live</li>
          <li>Gaming</li>
          <li>News</li>
          <li>Movies</li>
        </ul>
      </div>
    )
  );
};

export default SideBar;
