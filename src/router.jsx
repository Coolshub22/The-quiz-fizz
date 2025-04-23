import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Welcome from "./pages/Welcome";
import CategorySelect from "./components/CategorySelect";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // layout route
    children: [
      {
        index: true,
        element: <Welcome />,
      },
      {
        path: "category",
        element: <CategorySelect />,
      },
      {
        path: "quiz/:category",
        element: <Quiz />,
      },
      {
        path: "result",
        element: <Result />,
      },
    ],
  },
]);

export default router;



