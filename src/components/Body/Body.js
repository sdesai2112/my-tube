// import MainContainer from "./MainComponent/MainContainer";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar/SideBar";

const Body = () => {
  return (
    <div className="flex">
      <SideBar />
      <Outlet />
      {/* <MainContainer /> */}
    </div>
  );
};

export default Body;
