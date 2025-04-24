import React from 'react'

import { useLocation, useNavigate } from "react-router-dom";

function Result() {
  const location = useLocation();
  const navigate = useNavigate();

  const { score, total, category } = location.state || {};

  const handleRetry = () => {
    navigate("/category");
  };

  if (score === undefined || total === undefined || !category) {
    return <p className="text-center mt-10">No results to display.</p>;
  }

  return (
    <div className="max-w-xl mx-auto p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">🏆 Quiz Results</h1>
      <p className="text-xl mb-2">Category: <strong>{category.toUpperCase()}</strong></p>
      <p className="text-2xl font-semibold mb-4">
        Your Score: {score} / {total}
      </p>
      <button
        onClick={handleRetry}
        className="mt-4 px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        🔄 Try Another Quiz
      </button>
      <button
  onClick={() => navigate("/feedback")}
  className="mt-4 px-6 py-3 bg-green-500 text-white rounded hover:bg-green-600 transition"
>
  💬 Give Feedback
</button>

    </div>
  );
}

export default Result
