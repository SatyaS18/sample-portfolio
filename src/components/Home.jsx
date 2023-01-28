import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const Home = () => {
  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };
  return (
    <div className="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi, I Am <br />
            Satyakant Sahu
          </motion.h1>
          <Typewriter
            options={{
              strings: ["A Developer", "A Designer", "A Creator"],
              autoStart: true,
              cursor: "",
              loop: true,
              wrapperClassName: "typewriterpara",
            }}
          />
        </div>
      </section>
      <section></section>
    </div>
  );
};

export default Home;
