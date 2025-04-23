import { useNavigate } from "react-router-dom";

function CategorySelect() {
  const navigate = useNavigate();

  const categories = ["Science", "History", "Technology", "Art", "Literature"];

  const handleCategorySelect = (category) => {
    navigate(`/quiz/${category}`);
  };

  return (
    <div className="category-select">
      <div className="category-container">
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
    </div>
  );
}

export default CategorySelect;
