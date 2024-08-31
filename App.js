import { Provider } from "react-redux";
import BottomNavigator from "./src/routers/BottomNavigator";
import store from "./src/redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <BottomNavigator />
    </Provider>
  );
}

