// src/App.jsx
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";


function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
