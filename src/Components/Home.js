import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = ({ className }) => {
  const fadeVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 2, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.5 },
    },
  };
  return (
    <motion.div
      className={className}
      variants={fadeVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h1>esquif #1</h1>

      <Link to="/commencement">
        <motion.button whileTap={{ scale: 0.97, opacity: 0.5 }}>
          commencer
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default styled(Home)`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    font-family: ten-oldstyle, serif;
    font-weight: 400;
    font-style: normal;
    font-size: 60px;
    text-align: center;
    opacity: 0.15;
  }
  button {
    background: transparent;
    border: none;
    color: white;
    border-bottom: 2px solid grey;
    padding: 1em;
    outline: transparent;
    cursor: pointer;
  }
`;
