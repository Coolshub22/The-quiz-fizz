import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Outlet />
        <Toaster position="top-center" />
      </div>
    </div>
  );
}

export default App;