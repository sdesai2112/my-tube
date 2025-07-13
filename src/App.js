import { Provider } from "react-redux";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import Body from "./components/Body/Body";
import Header from "./components/Header/Header";
import MainContainer from "./components/Body/MainComponent/MainContainer";
import WatchPage from "./components/Body/MainComponent/WatchPage";
import store from "./utils/store/appStore";

function App() {
  const appRoter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "/watch",
          element: <WatchPage />,
        },
      ],
    },
  ]);

  return (
    <div>
      <Provider store={store}>
        <Header />
        <RouterProvider router={appRoter} />
      </Provider>
    </div>
  );
}

export default App;
