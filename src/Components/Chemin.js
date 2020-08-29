import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";

const Chemin = ({
  className,
  isDraw,
  initialStep,
  nextStep,
  agrandirChemin,
  assombrirChemin,
}) => {
  const svgVariants = {};

  const chemin =
    "M136.6818,506.4631c-6.7676-.0243-9.3362.706-12.2071-5.57-1.931-4.2214-2.5358-10.8125-3.3069-15.32-1.758-10.2757-5.0881-19.6522-7.6544-29.4434-2.2624-8.6317-5.8626-19.1474-6.984-27.8327-1.0341-8.01,6.6109-17.4319,10.81-24.7365A317.9837,317.9837,0,0,0,140.55,352.536c3.8521-10.992,4.3369-21.6184,5.5881-33.3092.3786-3.5371,4.2819-11.1367,2.1862-14.6977-2.5741-4.3741-9.0685-.8151-13.1723.7489-9.7744,3.7253-27.281,11.1978-33.8887,19.15a134.6282,134.6282,0,0,1-26.306,24.102A30.8017,30.8017,0,0,1,72.91,329.2773c1.4884-5.6529,7.1986-10.2137,8.8764-15.4292,4.17-12.9621-8.6861-24.1591-8.548-36.4013.1022-9.0619,7.1736-9.8592,12.4069-15.9346a157.1073,157.1073,0,0,0,11.7694-16.3889c5.4726-8.3377,9.1776-18.2922,15.6123-25.4035a103.5026,103.5026,0,0,0,12.6139-16.5486c7.96-12.9919,15.7052-29.57,26.4753-40.04,7.532-7.322,14.82-13.8275,18.5862-24.2347,4.1271-11.4036,2.8189-23.3713,4.6222-35.2289,1.0865-7.1439,3.9417-16.6578,3.1086-23.96-.35-3.0631-1.7854-4.1309-2.6777-7.6818-.9912-3.9447,2.0912-8.78,1.2723-11.7776-1.626-5.9515-11.7714-10.1014-14.746-16.81-3.5258-7.9513-5.4172-14.89-12.6188-20.3488-16.141-12.2338-39.8766-11.01-59.37-12.7429C65.0152,8.1,40.7784-.6791,15.2324.6329,10.3494.8837,5.5045,2.0809.6269,2.1252-.3912,12.9934,4.9809,26.5225,7.3011,36.997c3.4771,15.6965,7.0308,31.4385,11.0246,47.2786,9.8372,39.015,17.7475,78.1329,27.0591,117.29,5.619,23.63,12.0977,47.2061,17.7952,70.4649";

  const agrandiVariants = {
    hidden: { opacity: 0.7, pathLength: initialStep },
    visible: {
      opacity: 0.7,
      pathLength: nextStep,
      transition: { delay: 0, duration: 1, ease: "easeInOut" },
    },
  };

  const assombriVariants = {
    hidden: { opacity: 0.7, pathLength: nextStep },
    visible: {
      opacity: 0.2,
      pathLength: nextStep,
      transition: { duration: 10, ease: "easeInOut" },
    },
  };

  return (
    <div
      style={{
        transform: " scale(1) ",
      }}
    >
      <AnimatePresence>
        <motion.svg
          style={{
            fill: "none",
            stroke: "white",
            strokeMiterlimit: "10",
            strokeWidth: "3px",
            opacity: 1,
            transform: "scale(1) translateX(-7px) translateY(12px)",
          }}
          variants={svgVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="chemin"
          viewBox="0 0 98.1839 555"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1-2">
              {isDraw === true && (
                <AnimatePresence>
                  <motion.path
                    variants={agrandiVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    d={chemin}
                  />
                </AnimatePresence>
              )}
              {isDraw === false && (
                <AnimatePresence>
                  <motion.path
                    variants={assombriVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    d={chemin}
                  />
                </AnimatePresence>
              )}
            </g>
          </g>
        </motion.svg>
      </AnimatePresence>
      {/* <button onClick={assombrirChemin}>assombrir</button>
      <button onClick={agrandirChemin}>agrandir</button> */}
    </div>
  );
};

export default styled(Chemin)`
  button {
    margin-left: 20px;
  }
`;
