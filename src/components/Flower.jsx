import { motion } from "framer-motion";

function Flower({ x, y }) {
  return (
    <motion.div
      className="click-flower"
      initial={{
        scale: 0,
        opacity: 1
      }}
      animate={{
        scale: 2,
        opacity: 0
      }}
      transition={{
        duration: 2
      }}
      style={{
        left: x,
        top: y
      }}
    >
      ✿
    </motion.div>
  );
}

export default Flower;