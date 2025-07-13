import MainContainer from "./MainComponent/MainContainer";
import SideBar from "./SideBar/SideBar";

const Body = () => {
  return (
    <div className="flex">
      <SideBar />
      <MainContainer />
    </div>
  );
};

export default Body;
