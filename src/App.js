import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
  },
]);

function App() {
  return (
    <div>
      <Header />
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
