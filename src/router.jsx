// src/router.jsx
import { createBrowserRouter } from "react-router-dom";
import Welcome from "./pages/Welcome";
import CategorySelect from "./components/CategorySelect"; // Import your category selection component


const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "/category",
    element: <CategorySelect />, // Your category selection component
  },
]);

export default router;
