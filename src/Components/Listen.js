import React from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Listen = ({ className }) => {
  const fadeVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0,
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 3 },
    },
  };

  return (
    <motion.div className={className}>
      <AnimatePresence>
        <motion.div
          variants={fadeVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="ecoute"
        >
          <p>écoute moi sur le banc</p>
          <Link to="/cailloux">
            <motion.div whileTap={{ scale: 0.97, opacity: 0.5 }}>▶</motion.div>
          </Link>
        </motion.div>
      </AnimatePresence>
      <AnimatePresence></AnimatePresence>
    </motion.div>
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
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .walk {
    min-height: 100vh;
  }
  button {
    background: transparent;
    border: none;
    color: white;
    padding: 1em;
    outline: transparent;
    outline: none;
    cursor: pointer;
  }
`;
