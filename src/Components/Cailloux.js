import React from "react";

// Styles
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

// Location
import useLocation from "../hooks/useLocation";

const Cailloux = ({ className }) => {
  const caillou = 0;

  //   Calcul location

  const { getLocation, distance } = useLocation();

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

  const svgVariants = {};

  const pathVariants = {
    hidden: { opacity: 0.7, pathLength: 0 },
    visible: {
      opacity: 0.7,
      pathLength: 1,
      transition: { duration: 1, ease: "easeInOut" },
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
      opacity: 0,
      transition: { duration: 2 },
    },
  };

  return (
    <div className={className}>
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
        </motion.div>{" "}
      </AnimatePresence>
      {caillou === 0 && (
        <div className="caillou1" onClick={getLocation}>
          <AnimatePresence>
            <motion.svg
              variants={svgVariants}
              initial="hidden"
              animate="visible"
              className="caillou"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 63.8651 51.914"
            >
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1-2">
                  <motion.path
                    variants={pathVariants}
                    d="M3.3913,18.49C.8833,23.2136-.4716,28.8946,1.3161,33.9354c1.6568,4.6719,5.7292,8.0728,10,10.59A50.6126,50.6126,0,0,0,48.7285,49.99c4.9021-1.2126,9.9256-3.423,12.5972-7.7083,3.1483-5.05,2.2177-11.6489.1261-17.22C57.2864,13.9664,48.2237,1.6734,35.9818.6106,23.0132-.5152,9.4612,7.0569,3.3913,18.49Z"
                    transform="translate(0 0)"
                  />
                </g>
              </g>
            </motion.svg>
          </AnimatePresence>
          {distance && (
            <AnimatePresence>
              <motion.p
                className="distance"
                variants={fadeVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {distance} pas
              </motion.p>
            </AnimatePresence>
          )}
        </div>
      )}
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
  .caillou {
    fill: none;
    stroke: #f6f6f6;
    stroke-miterlimit: 10;
  }
  .caillou1 {
    width: 50px;
    height: 50px;
    position: fixed;
    top: 100px;
    right: 55px;
  }
  .distance {
    font-family: ten-oldstyle, serif;
    font-weight: 400;
    font-style: normal;
    font-size: 12px;
  }
`;
