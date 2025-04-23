import React, { useState, useEffect } from 'react';
import '../index.css'; 
function App() {
  const [category, setCategory] = useState('Science');
  const [userCategory, setUserCategory] = useState('');
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [quizFinished, setQuizFinished] = useState(false);

  const categories = ['Science', 'History', 'Technology', 'Art', 'Literature'];

  useEffect(() => {
    const fetchQuestions = async () => {
      setLoading(true);
      try {
        const response = await fetch(`http://localhost:5000/${category.toLowerCase()}`);
        if (!response.ok) throw new Error('Failed to fetch questions.');
        const data = await response.json();

        if (!data || data.length === 0) throw new Error('No questions found for this category.');

        const shuffled = [...data];
        for (let i = shuffled.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }

        setQuestions(shuffled.slice(0, 10));
      } catch (error) {
        console.error('Error fetching questions:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (category) {
      fetchQuestions();
    }
  }, [category]);

  const handleOptionClick = (option) => {
    if (!showFeedback) {
      setSelectedOption(option);
      setShowFeedback(true);

      setQuestions(prevQuestions => {
        const updated = [...prevQuestions];
        updated[currentQuestionIndex] = {
          ...updated[currentQuestionIndex],
          userAnswer: option,
        };
        return updated;
      });

      if (option === questions[currentQuestionIndex].correctAnswer) {
        setScore((prevScore) => prevScore + 1);
      }
    }
  };

  const handleNextQuestion = () => {
    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex >= questions.length) {
      setQuizFinished(true); // Mark quiz as finished
    } else {
      setCurrentQuestionIndex(nextIndex);
      setSelectedOption(null);
      setShowFeedback(false);
    }
  };

  const handleRetry = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setShowFeedback(false);
    setQuizFinished(false); // Reset quiz to start again
  };

  const handleCategoryChange = (event) => {
    setUserCategory(event.target.value);
  };

  const handleCategorySubmit = () => {
    const chosenCategory = userCategory.trim().toLowerCase();
    if (categories.includes(userCategory)) {
      setCategory(userCategory);
      setQuizFinished(false); // Reset quiz when category changes
    } else {
      alert("Invalid category! Please choose a valid category.");
    }
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;
  if (!questions.length) return <div className="no-questions">No questions available</div>;

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="app">
      <h1>Quiz App</h1>

      {!quizFinished && (
        <>
          {/* Category Selection */}
          <div className="category-selection">
            <h3>Choose a category:</h3>
            <select onChange={(e) => setCategory(e.target.value)} value={category}>
              {categories.map((cat, idx) => (
                <option key={idx} value={cat.toLowerCase()}>
                  {cat}
                </option>
              ))}
            </select>

            <div className="custom-category">
              <input
                type="text"
                value={userCategory}
                onChange={handleCategoryChange}
                placeholder="Type your category"
              />
              <button onClick={handleCategorySubmit}>Set Category</button>
            </div>
          </div>

          {/* Quiz Section */}
          <div className="question">
            <h2>{currentQuestion.question}</h2>
            <div className="answers">
              {currentQuestion.answers.map((option, idx) => {
                let className = 'answer-option';
                if (showFeedback) {
                  if (option === currentQuestion.correctAnswer) className += ' correct';
                  else if (option === selectedOption) className += ' incorrect';
                } else if (option === selectedOption) {
                  className += ' selected';
                }

                return (
                  <button
                    key={idx}
                    className={className}
                    onClick={() => handleOptionClick(option)}
                    disabled={showFeedback}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </div>

          {showFeedback && (
            <div className="feedback">
              <p>{selectedOption === currentQuestion.correctAnswer ? 'Correct!' : 'Incorrect!'}</p>
              <button onClick={handleNextQuestion}>
                {currentQuestionIndex === questions.length - 1 ? 'See Results' : 'Next Question'}
              </button>
            </div>
          )}
        </>
      )}

      {quizFinished && (
        <div className="results">
          <h2>Quiz Finished!</h2>
          <p>Your score: {score} / {questions.length}</p>

          <div className="results-summary">
            {questions.map((question, index) => (
              <div key={index} className="result-item">
                <p><strong>Q{index + 1}:</strong> {question.question}</p>
                <p>
                  Your Answer: <span className={question.userAnswer === question.correctAnswer ? 'correct-answer' : 'incorrect-answer'}>
                    {question.userAnswer || 'No answer'}
                  </span>
                </p>
                <p>Correct Answer: <strong>{question.correctAnswer}</strong></p>
                <hr />
              </div>
            ))}
          </div>

          <button onClick={handleRetry}>Retry</button>
        </div>
      )}
    </div>
  );
}

export default App;
