// src/components/Sidebar.jsx
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Quiz-Fizz</h2>
      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/category">Category</NavLink></li>
          <li><NavLink to="/Feedback">Feedback</NavLink></li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
