import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const Cailloux = ({ className }) => {
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 0.5,
      transition: {
        duration: 60,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 2 },
    },
  };
  return (
    <div className={className}>
      cailloux
      <Link to="/">
        <button>retour au début</button>
      </Link>
      <AnimatePresence>
        <motion.div
          className="text"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <p>J’aime bien ici</p>
          <p>C’est tranquille ici</p>
          <p>
            L’herbe est douce sous les pieds <br />
            et il y a de la place pour jouer
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default styled(Cailloux)`
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .text {
    font-family: ten-oldstyle, serif;
    font-weight: 400;
    font-style: normal;
    font-size: 12px;
    width: 90%;
    margin-top: 50px;
    text-align: center;
  }
`;
