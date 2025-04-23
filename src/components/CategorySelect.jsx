import { useNavigate } from "react-router-dom"; // Import the hook to navigate

function CategorySelect() {
  const navigate = useNavigate(); // Initialize navigate function

  // Dummy categories (you can replace this with data from your db.json)
  const categories = ["Science", "History", "Technology", "Art", "Literature"];

  // Function to handle category selection
  const handleCategorySelect = (category) => {
    // You can store the selected category in the state if needed
    navigate(`/quiz/${category.toLowerCase()}`); // Navigate to quiz page with category
  };

  return (
    <div className="category-select">
      <h1>Select a Category</h1>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            <button onClick={() => handleCategorySelect(category)}>
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategorySelect;
