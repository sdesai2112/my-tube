import { Provider } from "react-redux";
import Body from "./components/Body/Body";
import Header from "./components/Header/Header";
import store from "./utils/store/appStore";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Header />
        <Body />
      </Provider>
    </div>
  );
}

export default App;
