import { motion } from "framer-motion";

function Intro({ onFinish }) {
  return (
    <div className="intro-screen">
      <motion.div
        className="flower"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 2
        }}
      >
        🌻
      </motion.div>

      <motion.button
        className="enter-btn"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        onClick={onFinish}
      >
        bloom
      </motion.button>
    </div>
  );
}

export default Intro;