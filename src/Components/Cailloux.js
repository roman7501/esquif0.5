import React from "react";

// Styles
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const Cailloux = ({
  className,
  pathSvg,
  pY,
  pX,
  titre,
  assombrirChemin,
  agrandirChemin,
  isInactive,
  isClicked,
  time,
  index,
  caillou,
}) => {
  // Effets motions
  const svgVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 0.7,
      transition: { duration: 3, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      transition: { duration: 2 },
    },
  };

  const pathVariants = {
    hidden: { opacity: 0.7, pathLength: 0 },
    visible: {
      opacity: 0.7,
      pathLength: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
    exit: { opacity: 0, transition: { duration: 10 } },
  };

  const pathVariants2 = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 0.7,
      transition: { delay: 0, duration: 1, ease: "easeInOut" },
    },
  };

  return (
    <div className={className}>
      <AnimatePresence>
        <motion.svg
          onClick={() => agrandirChemin()}
          style={{
            fill: "none",
            transform: "scale(0.2)",
            position: "absolute",
            top: `${pY}px`,
            right: `${pX}px`,
          }}
          variants={svgVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="caillou"
          viewBox="-15 -15 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1-2">
              <motion.path variants={pathVariants} d={pathSvg} />
            </g>
          </g>
        </motion.svg>
      </AnimatePresence>
      <AnimatePresence>
        {isClicked && (
          <motion.div
            style={{ height: "100vh" }}
            variants={svgVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <svg
              onClick={assombrirChemin}
              style={{
                fill: "white",
                position: "absolute",
                transform: "scale(0.2)",
                top: `${pY}px`,
                right: `${pX}px`,
              }}
              className="caillou2"
              viewBox="-15 -15 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1-2">
                  <motion.path variants={pathVariants2} d={pathSvg} />
                </g>
              </g>
            </svg>
            <motion.p
              className="titre"
              style={{
                position: "relative",
                top: `${pY + 278}px`,
                right: `${pX - 140}px`,
              }}
            >
              {titre}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default styled(Cailloux)`
  .text {
    margin-top: 300px;
    align-items: center;
    font-family: ten-oldstyle, serif;
    font-weight: 400;
    font-style: normal;
    font-size: 14px;
    width: 90%;
    text-align: center;
  }
  .caillou {
    stroke: #f6f6f6;
    stroke-width: 2;
    stroke-miterlimit: 10;
  }
  .titre {
    margin-top: -90px;
    font-family: "Helvetica", "Arial", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 14px;
  }
`;
