import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import toast from "react-hot-toast"; // Import toast

function Results() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const questions = state?.answeredQuestions || [];

  // Calculate the number of correct answers
  const correctCount = questions.reduce((count, q) => {
    return q.selectedAnswer === q.correctAnswer ? count + 1 : count;
  }, 0);

  const handleRetry = () => {
    // Show a motivational toast when retrying
    toast.success("You're giving it another shot! Let's do this!", {
      duration: 2000,
      position: "top-center",
      style: {
        backgroundColor: "#FF9800", // Orange background for retry motivation
        color: "#fff",
        fontSize: "16px",
        padding: "10px",
        borderRadius: "8px",
      },
    });

    navigate("/category"); // Navigate to the category selection page
  };

  const handleCategoryChange = () => {
    // Show a motivational toast when changing categories
    toast.success("Changing categories! Keep it up!", {
      duration: 2000,
      position: "top-center",
      style: {
        backgroundColor: "#4CAF50", // Green background for success
        color: "#fff",
        fontSize: "16px",
        padding: "10px",
        borderRadius: "8px",
      },
    });

    navigate("/category"); // Navigate back to the category selection
  };

  return (
    <motion.div
      className="results"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        Quiz Results
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        You got <strong>{correctCount}</strong> out of{" "}
        <strong>{questions.length}</strong> correct!
      </motion.p>

      <motion.div
        className="results-summary"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {questions.map((q, index) => (
          <motion.div
            key={index}
            className="result-item"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6 + index * 0.1 }}
          >
            <p>
              <strong>Q{index + 1}:</strong> {q.question}
            </p>
            <p>
              Your Answer:{" "}
              <span
                className={
                  q.selectedAnswer === q.correctAnswer
                    ? "correct-answer"
                    : "incorrect-answer"
                }
              >
                {q.selectedAnswer ? q.selectedAnswer : "No answer"}
              </span>
            </p>
            {q.selectedAnswer !== q.correctAnswer && (
              <p>
                Correct Answer:{" "}
                <span className="correct-answer">{q.correctAnswer}</span>
              </p>
            )}
            <hr />
          </motion.div>
        ))}
      </motion.div>

      <motion.button
        onClick={handleRetry}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Retry
      </motion.button>

      <motion.button
        onClick={handleCategoryChange}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{ marginLeft: "1rem" }}
      >
        Change Category
      </motion.button>
    </motion.div>
  );
}

export default Results;
