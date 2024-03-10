import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import { Provider } from "react-redux";
import store from "./utils/store/store";
import MainContainer from "./components/MainContainer/MainContainer";
import Watch from "./components/WatchVideo/Watch";
import SearchResults from "./components/SearchResultsContainer/SearchResults";

const Layout = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <Watch />,
      },
      {
        path: "results",
        element: <SearchResults />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div className="h-screen">
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
