import "./App.css";
import { motion } from "framer-motion";

function App() {
  return (
    <>
      <div>
        <motion.h1
          initial={{ scale: 1, color: "#ff0000" }}
          // initial={false}
          animate={{
            scale: 2,
            transition: { duration: 2 },
            color: "#fff",
          }}
        >
          Hello
        </motion.h1>

        <motion.div
          className="box"
          // initial={{ scale: 1 }}
          transition={{ duration: 2 }}
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["0%", "0%", "50%", "50%", "0%"],
          }}
        />
      </div>
    </>
  );
}

export default App;
