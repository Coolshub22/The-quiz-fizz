import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-blue-100 overflow-hidden px-4">
      {/* Background Icons */}
      <div className="absolute inset-0 pointer-events-none opacity-10 text-[120px] flex flex-wrap justify-center gap-10 items-center select-none z-0">
        <span>🧪</span>
        <span>📚</span>
        <span>🏀</span>
        <span>💻</span>
        <span>🎨</span>
        <span>🎵</span>
      </div>

      {/* Welcome Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="mt-10 mb-10 w-full bg-white/90 backdrop-blur-md shadow-2xl rounded-2xl px-8 py-10 text-center max-w-xl"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-7">
          Welcome to <span className="text-blue-600">Quiz Fizz</span>
        </h1>
        <p className="mt-20 text-lg sm:text-xl text-gray-700 font-medium leading-relaxed tracking-wide animate-fade-in">
  💡 Test your knowledge across a variety of fun and challenging categories.<br />
  Are you ready to show what you've got?
</p>

        <button
  className="mt-12 mb-7 px-16 py-6 text-3xl sm:text-4xl bg-blue-400 hover:bg-blue-500 text-white font-extrabold rounded-md shadow-2xl transition duration-300 transform hover:scale-105"
  onClick={() => navigate("/category")}
>
  Start Quiz
</button>
      </motion.div>
    </div>
  );
}

export default Welcome;
