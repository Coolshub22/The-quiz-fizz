// src/pages/Feedback.jsx
import React, { useState } from "react";

function Feedback() {
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [rating, setRating] = useState(0);


  const handleSubmit = (e) => {
    e.preventDefault();

    if (feedback.trim() !== "") {
      console.log("Feedback submitted:", feedback); 
      setSubmitted(true);
      setFeedback(""); // Clear the input
    }
  };

  return (
    <div className="feedback-container">
      <h1 className="text-3xl font-bold mb-4">🙏 Thank You!</h1>
      <p className="text-lg mb-6">We really appreciate you taking the quiz. We'd love to hear your thoughts!</p>

      {submitted ? (
        <p className="feedback-success">🎉 Thanks for your feedback!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
  <h2 className="text-lg font-semibold mb-2">How was your quiz experience?</h2>
  <div className="flex justify-center gap-2 text-2xl">
    {[1, 2, 3, 4, 5].map((star) => (
      <span
        key={star}
        className={`cursor-pointer ${
          star <= rating ? "text-yellow-400" : "text-gray-300"
        }`}
        onClick={() => setRating(star)}
      >
        ★
      </span>
    ))}
  </div>
</div>

          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Share your thoughts or suggestions..."
            className="w-full p-3 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows="5"
            required
          />
          <button
            type="submit"
            className="mt-4 px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            ✉️ Submit Feedback
          </button>
        </form>
      )}
    </div>
  );
}

export default Feedback;
