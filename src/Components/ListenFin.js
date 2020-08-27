import React, { useState } from "react";
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
        écoute moi en marchant sur le chemin
      </button>
      {isPlay && (
        <div>
          <audio
            autoplay="true"
            src="https://firebasestorage.googleapis.com/v0/b/esquif-f53eb.appspot.com/o/Orchestre%20Lamoureux%20-%2009%20-%20Pocket%20Piano%20Orchestral%20Version.mp3?alt=media&token=e066c44a-fbae-4521-803b-18350cca469c"
          ></audio>

          <AnimatePresence>
            <motion.button
              className="caillou"
              variants={fadeVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              fin du premier esquif
            </motion.button>
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};

export default styled(Listen)`
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
