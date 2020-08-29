import React from "react";
import Walk from "./Walk";
import { motion } from "framer-motion";
import useWalk from "../hooks/useWalk";

// carte
import carte from "../image/carte.png";

import styled from "styled-components";

const DisplayWalk = ({ className }) => {
  const { isPlay } = useWalk();
  const fadeCarteVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 1,
        duration: 0,
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
      // style={{ backgroundImage: `url(${carte})`, backgroundSize: "cover" }}
    >
      {/* <audio
        autoPlay={true}
        src="https://firebasestorage.googleapis.com/v0/b/esquif-f53eb.appspot.com/o/debut2.mp3?alt=media&token=1f523b5b-b4fa-43c2-afd5-84a79abbb5ad"
      ></audio> */}
      {!isPlay && <img src={carte} alt="carte" className="carte" />}

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
