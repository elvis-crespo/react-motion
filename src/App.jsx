import { useState } from "react";
import "./App.css";
import { motion, useMotionValue, useTransform } from "framer-motion";

// const variants = {
//   add: {
//     backgroundColor: "#ff0000",
//     color: "#fff",
//     scale: [1, 2, 2, 1, 1],
//     rotate: [0, 0, 270, 270, 0],
//     transition: {
//       duration: 2,
//     },
//   },
//   even: {
//     backgroundColor: "#fff",
//     color: "#ff0000",
//     scale: [1, 2, 2, 1, 1],
//     rotate: [0, 0, 90, 90, 0],
//     transition: {
//       duration: 2,
//     }
//   },
// };

function App() {
  // const y = useMotionValue(0);
  // const color = useTransform(y, [-100, 0, 100], ["#fff", "#999", "#000"]);
  const [align, setAlign] = useState("flex-end");
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <div style={{ display: "flex", justifyContent: align }}>
          <motion.h1 layout transition={{ duration: 0.5 }}>
            Hello
          </motion.h1>
        </div>
        <button
          onClick={() =>
            setAlign(align === "flex-end" ? "flex-start" : "flex-end")
          }
        >
          Increment
        </button>
      </div>

      {/* <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <motion.div
          className="box"
          drag
          animate={counter % 2 === 0 ? "add" : "even"}
          variants={variants}
          // drag="y"
          dragConstraints={{
            top: -50,
            left: -50,
            right: 0,
            bottom: 0,
          }}
          // animate={counter % 2 === 0 ? "add" : "even"}
          // variants={variants}
        >
          {counter}
        </motion.div>
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
      </div> */}

      {/* <div>
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
            borderRadius: ["0%", "0%", "50%", "50%", "10%"],
          }}
        />
      </div> */}
    </>
  );
}

export default App;
