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
    "M56.9275,3.5216C70.5127,9.2648,95.5594-10.7895,104.44,15.2152c3.7121,11.9253.4948,21.1011,4.252,33.0123,9.2225,29.2378,18.2038,67.222,11.249,89.7487-6.0115,8.7418-18.9668,23.8652-18.9668,23.8652-14.0266,15.3617-29.5255,28.1675-46.77,41.4328-13.5251,24.9216-22.3188,90.9524,7.98,76.2918,35.1855-6.8416,47.9005-12.5882,57.6651-16.6153,23.0794-9.5186,38.3306-23.7307,66.52-27.6644-2.7717,11.8321,6.6228,43.1987,3.8512,55.0309-1.3827,22.1933,13.3539,36.3061,13.6832,60.8546-6.8416,25.6294-151.7914,87.607-158.3345,108.231-19.5481,43.0044-27.5616,54.8348-39.23,94.7072-6.2068,21.21,2.7729,43.9425-4.7525,73.401,11.4349,24.2971,37.6367,3.2389,49.8461,15.638,18.6124,0,42.4421,7.25,62.5519,21.5022,9.4584,6.7034,11.2141,19.8719,23.8436,25.5409,54.5249,24.4742,122.7281,12.49,178.4727,9.6446L279.6124,547.995c-6.0585-21.889-12.1188-43.7842-19-65.4288a901.9624,901.9624,0,0,0-38.0172-99.0014";

  const pathVariants = {
    hidden: { opacity: 0.7, pathLength: initialStep },
    visible: {
      opacity: 0.7,
      pathLength: nextStep,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  const pathVariants2 = {
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
        position: "fixed",
        top: "-130px",
        right: "-100px",
        width: "500px",
        height: "900px",
        transform: " rotate(180deg) scale(0.40)",
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
          }}
          variants={svgVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="chemin"
          viewBox="0 0 318.1839 706.7776"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1-2">
              {isDraw === true && (
                <AnimatePresence>
                  <motion.path
                    variants={pathVariants}
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
                    variants={pathVariants2}
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
