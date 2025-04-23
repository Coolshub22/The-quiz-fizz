import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function CategorySelect() {
  const navigate = useNavigate();

  const categories = ["Science", "History", "Technology", "Art", "Literature"];

  const handleCategorySelect = (category) => {
    navigate(`/quiz/${category.toLowerCase()}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen w-full max-w-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-blue p-8"
    >
      <h1 className="text-4xl sm:text-5xl font-bold text-blue-700 mb-12 text-center">
        Select a Quiz Category
      </h1>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {categories.map((category, index) => (
          <motion.li
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-200 p-8 rounded-md shadow-lg text-center cursor-pointer hover:bg-purple-100 transition"
          >
            <button
              onClick={() => handleCategorySelect(category)}
              className="text-xl font-semibold text-blue-700"
            >
              {category}
            </button>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

export default CategorySelect;
