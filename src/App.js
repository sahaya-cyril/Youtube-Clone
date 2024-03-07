import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import { Provider } from "react-redux";
import store from "./utils/store/store";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div className="h-screen">
        <Header />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
