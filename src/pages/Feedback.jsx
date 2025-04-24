// src/pages/Feedback.jsx
import React, { useState } from "react";

function Feedback() {
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [rating, setRating] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [feedbackItems, setFeedbackItems] = useState({
    UI: false,
    Questions: false,
    Simplicity: false,
  });
  



  const handleSubmit = (e) => {
    e.preventDefault();

    if (feedback.trim() !== "") {
      console.log("Feedback submitted:", feedback); 
      setSubmitted(true);
      setFeedback(""); // Clear the input
    }
  };
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFeedbackItems((prevState) => ({
      ...prevState,
      [value]: checked,
    }));
  };
  

  return (
    <div className="feedback-container">
      <h1 className="text-3xl font-bold mb-4">🙏 Thank You!</h1>
      <p className="text-lg mb-6">We really appreciate you taking the quiz. We'd love to hear your thoughts!</p>

      {submitted ? (
        <p className="feedback-success">🎉 Thanks for your feedback!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="experience-rating">
  <h2>How was your quiz experience?</h2>
  <div className="star-rating">
    {[1, 2, 3, 4, 5].map((star) => (
      <span
        key={star}
        className={star <= rating ? "star selected" : "star"}
        onClick={() => setRating(star)}
      >
        ★
      </span>
    ))}
  </div>
</div>
<div className="mb-6">
  <h2 className="text-lg font-semibold mb-2">What did you enjoy?</h2>
  <div className="flex flex-col gap-3">
    <label className="flex items-center gap-2">
      <input
        type="checkbox"
        value="UI"
        checked={feedbackItems.UI}
        onChange={handleCheckboxChange}
        className="checkbox"
      />
      UI
    </label>
    <label className="flex items-center gap-2">
      <input
        type="checkbox"
        value="Questions"
        checked={feedbackItems.Questions}
        onChange={handleCheckboxChange}
        className="checkbox"
      />
      Questions
    </label>
    <label className="flex items-center gap-2">
      <input
        type="checkbox"
        value="Simplicity"
        checked={feedbackItems.Simplicity}
        onChange={handleCheckboxChange}
        className="checkbox"
      />
      Simplicity
    </label>
  </div>
</div>


        <div className="form-group">
  <label htmlFor="feedbackCategory">What category are you giving feedback on?</label>
  <select
    id="feedbackCategory"
    value={selectedCategory}
    onChange={(e) => setSelectedCategory(e.target.value)}
    className="form-select"
  >
    <option value="">-- Select a category --</option>
    <option value="Science">Science</option>
    <option value="Technology">Technology</option>
    <option value="History">History</option>
    <option value="Art">Art</option>
    <option value="Literature">Literature</option>
  </select>
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
