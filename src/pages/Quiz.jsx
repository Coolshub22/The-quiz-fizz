import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

function Quiz() {
  const { category } = useParams();
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [timer, setTimer] = useState(30); // 30-second timer
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/${category.toLowerCase()}`)
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data);
        toast.success("Let's begin! 💪");
      })
      .catch(() => toast.error("Failed to load questions"));
  }, [category]);

  useEffect(() => {
    if (timer === 0) {
      toast("Time's up! Moving to next question ⏰");
      handleNext();
      return;
    }

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const handleAnswerClick = (answer) => {
    if (selectedAnswer) return;

    setSelectedAnswer(answer);

    const isCorrect = answer === questions[currentIndex].correctAnswer;
    const newAnsweredQuestions = [...answeredQuestions];
    newAnsweredQuestions[currentIndex] = {
      ...questions[currentIndex],
      selectedAnswer: answer,
      correctAnswer: questions[currentIndex].correctAnswer,
      isCorrect,
    };
    setAnsweredQuestions(newAnsweredQuestions);
  };

  const handleNext = () => {
    setSelectedAnswer(null);
    setTimer(30); // Reset timer

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      toast.success("On to the next one! 🚀");
    } else {
      toast.success("Quiz completed! 🎉");
      navigate("/result", { state: { answeredQuestions } });
    }
  };

  if (questions.length === 0) return <p>Loading...</p>;

  const current = questions[currentIndex];

  return (
    <motion.div
      className="quiz-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="quiz-box">
        <div className="top-bar">
          <h2>
            Question {currentIndex + 1} of {questions.length}
          </h2>
          <p className="timer">⏱️ {timer}s</p>
        </div>

        <motion.div
          key={currentIndex}
          className="question-box"
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <p className="question">{current.question}</p>

          <div className="answers">
            {current.answers.map((answer, i) => (
              <div
                key={i}
                className={`answer-option ${
                  selectedAnswer === answer ? "selected" : ""
                }`}
                onClick={() => handleAnswerClick(answer)}
              >
                {answer}
              </div>
            ))}
          </div>
        </motion.div>

        <button
          onClick={handleNext}
          disabled={!selectedAnswer}
          className="next-btn"
        >
          {currentIndex < questions.length - 1 ? "Next" : "Finish"}
        </button>
      </div>
    </motion.div>
  );
}

export default Quiz;
