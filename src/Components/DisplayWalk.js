import React from "react";
import Walk from "./Walk";
import { motion } from "framer-motion";

// carte
import carte from "../image/carte.png";

import styled from "styled-components";

const DisplayWalk = ({ className }) => {
  const fadeCarteVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 3,
        duration: 3,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 1 },
    },
  };
  return (
    <motion.div
      className={className}
      variants={fadeCarteVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <audio
        autoPlay={true}
        src="https://firebasestorage.googleapis.com/v0/b/esquif-f53eb.appspot.com/o/Debut3.mp3?alt=media&token=74a9c766-e00a-43f6-9041-8b3337e9ea9e"
      ></audio>
      <img src={carte} alt="carte" className="carte" />

      <Walk className="walk" />
    </motion.div>
  );
};

export default styled(DisplayWalk)`
  background: #303030;
  width: 100vw;
  height: 100vh;

  .carte {
    position: absolute;
    z-index: 1;
    height: 500px;
    width: 300px;
    top: 5px;
    bottom: 10px;
    left: 40px;
    right: 10px;
  }
  .walk {
    position: absolute;
    z-index: 2;
    height: 500px;
    width: 300px;
    top: 10px;
    bottom: 10px;
    left: 10px;
    right: 10px;
  }
`;
