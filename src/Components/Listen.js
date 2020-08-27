import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const Listen = ({ className }) => {
  const [isPlay, setIsPlay] = useState(false);

  const fadeVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 30,
        duration: 30,
      },
    },
    exit: {
      opacity: 0.4,
      transition: { duration: 2 },
    },
  };

  return (
    <div className={className}>
      <button className="ecoute" onClick={() => setIsPlay(true)}>
        écoute moi sur le banc
      </button>
      {isPlay && (
        <div>
          <audio
            autoplay="true"
            src="https://firebasestorage.googleapis.com/v0/b/esquif-f53eb.appspot.com/o/Debut.mp3?alt=media&token=41d46d7b-440c-443d-97c1-02650e40de6a"
          ></audio>
          <Link to="/cailloux">
            <AnimatePresence>
              <motion.button
                className="caillou"
                variants={fadeVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                cailloux (appuie dessus)
              </motion.button>
            </AnimatePresence>
          </Link>
        </div>
      )}
    </div>
  );
};

export default styled(Listen)`
  font-family: "Helvetica", "Arial", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 14px;
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .ecoute {
    position: fixed;
    bottom: 150px;
  }
  button {
    background: transparent;
    border: none;
    color: white;
  }
`;
