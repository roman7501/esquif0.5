import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Chemin = ({ className }) => {
  const svgVariants = {};

  const pathVariants = {
    hidden: { opacity: 0.7, pathLength: 0 },
    visible: {
      opacity: 0.7,
      pathLength: 1,
      transition: { duration: 2, ease: "easeInOut" },
    },
  };

  return (
    <div className={className}>
      <motion.svg
        style={{
          fill: "none",
          stroke: "white",
          strokeMiterlimit: "10",
          strokeWidth: "3px",
        }}
        variants={svgVariants}
        initial="hidden"
        animate="visible"
        className="chemin"
        viewBox="0 0 336.7108 718.0803"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1-2">
            <motion.path
              variants={pathVariants}
              d="M68.3065,7.9557c12.47-.6982,37.647-20,47.5127,11.6936,3.7121,11.9253.4948,21.1011,4.252,33.0123,9.2225,29.2378,28.62,64.4873,11.249,89.7487-18.7051,27.2006-36.68,30.649-52.4255,59.6631-13.5251,24.9216-35.98,84.7379-8.2353,90.5882,10.3351,2.1792,47.8825-12.4435,57.6471-16.4706,23.0795-9.5186,41.2521-32.5369,69.4412-36.4706-2.7717,11.8321-1.3813,41.6694-4.153,53.5015-5.413,23.108-10.9848,46.62-23.0423,67.0628-22.96,38.9265-65.6364,61.0554-98.6458,91.9228-30.3446,28.3754-42.52,66.4641-54.1884,106.3364-6.2068,21.21-22.9717,56.6222-13.2552,76.4706,7.651,15.6292,27.0935,13.6529,39.3029,26.052,72.6132,73.7414,186.7564,54.55,290.9988,49.5126l-43.7733-158.15c-6.0585-21.889-12.1188-43.7842-19-65.4288a901.97,901.97,0,0,0-38.0172-99.0014"
            />
          </g>
        </g>
      </motion.svg>
    </div>
  );
};

export default styled(Chemin)`
  .chemin {
    max-height: 90vh;
  }
`;
