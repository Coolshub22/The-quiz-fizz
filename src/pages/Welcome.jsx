// src/pages/Welcome.jsx
import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="welcome-container">
      <h1>Welcome to the Quiz App</h1>
      <p>Test your knowledge across different categories. Ready to start?</p>
      <button className="welcome-button" onClick={() => navigate("/category")}>
        Start Quiz
      </button>
    </div>
  );
}

export default Welcome;
