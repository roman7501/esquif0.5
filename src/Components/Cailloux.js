import React from "react";

// Styles
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const Cailloux = ({
  className,
  text,
  pathSvg,
  pY,
  pX,
  titre,
  assombrirChemin,
  displayText,
  agrandirChemin,
  isInactive,
  setIsInactive,
  isClicked,
  time,
  index,
  caillou,
}) => {
  // Effets motions
  const svgVariants = {};

  const pathVariants = {
    hidden: { opacity: 0.7, pathLength: 0 },
    visible: {
      opacity: 0.7,
      pathLength: 1,
      transition: { duration: time, ease: "easeInOut" },
    },
  };

  const fadeVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    exit: {
      opacity: 0.4,
      transition: { duration: 2 },
    },
  };

  return (
    <div className={className}>
      {index >= caillou && (
        <div>
          <div
            onClick={() => agrandirChemin()}
            style={{
              position: "fixed",
              top: `${pY}px`,
              right: `${pX}px`,
              display: isClicked && "none",
            }}
          >
            <AnimatePresence>
              <motion.svg
                style={{
                  fill: "none",
                }}
                variants={svgVariants}
                initial="hidden"
                animate="visible"
                className="caillou"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Layer_1-2" data-name="Layer 1-2">
                    <motion.path variants={pathVariants} d={pathSvg} />
                  </g>
                </g>
              </motion.svg>
            </AnimatePresence>
          </div>
          <AnimatePresence>
            <motion.div
              style={{
                position: "fixed",
                top: `${pY}px`,
                right: `${pX}px`,
                display: isClicked ? "block" : "none",
              }}
              variants={fadeVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={assombrirChemin}
            >
              <motion.svg
                style={{
                  fill: "white",
                }}
                className="caillou"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Layer_1-2" data-name="Layer 1-2">
                    <motion.path
                      variants={pathVariants}
                      d={pathSvg}
                      transform="translate(0 0)"
                    />
                  </g>
                </g>
              </motion.svg>
              <motion.p
                className="titre"
                variants={fadeVariants}
                initial="hidden"
                animate="visible"
              >
                {titre}
              </motion.p>
            </motion.div>
          </AnimatePresence>
        </div>
      )}
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
    stroke-miterlimit: 10;
  }

  .titre {
    margin-top: -90px;
    font-family: "Helvetica", "Arial", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 14px;
  }
  .distance {
    margin-top: -90px;
    font-family: "Helvetica", "Arial", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 14px;
  }
`;
