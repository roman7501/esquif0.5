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
      opacity: 1,
      transition: { delay: time, duration: 3.5, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      transition: { duration: 2 },
    },
  };

  const pathVariants = {
    hidden: { opacity: 0.7, pathLength: 0 },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
    exit: { opacity: 0, transition: { duration: 10 } },
  };

  const pathVariants2 = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 0, duration: 1, ease: "easeInOut" },
    },
  };

  return (
    <div className={className}>
      <AnimatePresence>
        <div>
          <motion.svg
            style={{
              fill: "none",
              transform: "scale(0.05)",
              position: "absolute",
              top: `${pY}px`,
              right: `${pX}px`,
              pointerEvents: isInactive ? "none" : "auto",
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
        </div>
      </AnimatePresence>
      <AnimatePresence>
        {isClicked && (
          <motion.div
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
                transform: "scale(0.08)",
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
                position: "absolute",
                top: "450px",
                right: "140px",
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
  .caillou {
    stroke: #f6f6f6;
    stroke-width: 10;
    stroke-miterlimit: 10;
  }
  .titre {
    font-weight: 400;
    font-style: normal;
    font-size: 14px;
    opacity: 1;
  }
`;
