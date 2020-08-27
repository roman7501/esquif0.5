import React, { useEffect } from "react";
import Cailloux from "./Cailloux";

// Styles
import styled from "styled-components";

// Slider cailloux
import useCaillou from "../hooks/useCaillou";

import dataLocations from "../data/dataLocations";

const Walk = ({ className }) => {
  const { caillou } = useCaillou();

  return (
    <div className={className}>
      {caillou === 1 && (
        <Cailloux
          text="j aime bien ici"
          pathSvg="M11.7159,2.3662C6.7394,3.8382,2.0612,7.3843.6811,12.3871c-1.9924,7.2223,3.2644,14.3534,8.7374,19.47A100.3741,100.3741,0,0,0,43.4328,52.7516c10.9112,3.983,24.3918,5.58,33.069-2.1418,7.63-6.79,8.5837-19.1239,3.8683-28.1841S66.3717,7.3732,56.6045,4.3857C43.7211.445,24.9158-1.5383,11.7159,2.3662Z"
          position={dataLocations.locations[1]}
          style={{ opacity: caillou === 1 ? "0.5" : "1" }}
          pY={450}
          pX={-20}
          titre="la clairère des 3 arbres"
        />
      )}
      {caillou === 0 && (
        <Cailloux
          titre="le foyer"
          text="j aime bien ici"
          pathSvg="M3.3913,18.49C.8833,23.2136-.4716,28.8946,1.3161,33.9354c1.6568,4.6719,5.7292,8.0728,10,10.59A50.6126,50.6126,0,0,0,48.7285,49.99c4.9021-1.2126,9.9256-3.423,12.5972-7.7083,3.1483-5.05,2.2177-11.6489.1261-17.22C57.2864,13.9664,48.2237,1.6734,35.9818.6106,23.0132-.5152,9.4612,7.0569,3.3913,18.49Z"
          position={dataLocations.locations[1]}
          pY={100}
          pX={-100}
        />
      )}
    </div>
  );
};

export default styled(Walk)``;
