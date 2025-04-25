
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

function Welcome() {
  const navigate = useNavigate();

  const handleStart = () => {
    toast.success("Good luck! 🚀");
    setTimeout(() => {
      navigate("/category");
    }, 1000); 
  };
  

  return (
    <div className="welcome-container">
      <h1>Welcome to <strong>Quiz Fizz</strong> </h1>
      <p><strong>Test your knowledge across different categories. Ready to start?</strong></p>
      <button className="welcome-button" onClick={handleStart}>
        Start Quiz
      </button>
    </div>
  );
}

export default Welcome;
