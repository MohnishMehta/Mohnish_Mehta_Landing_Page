// JcNerr.tsx
import React from "react";
import ExperienceContent from "../../components/ExperienceContent";
const JcNerrLogo = require("../../assets/logos/jcnerr.png");

export default function JcNerr() {
  return (
    <ExperienceContent
      logo={JcNerrLogo}
      alt="JC NERR Logo"
      text={`At the Jacques Cousteau National Estuarine Research Reserve (JCNERR), I wrote an R program using the glatos package, a specialized toolkit for managing and analyzing aquatic telemetry data. My work focused on determining whether acoustic signal detections from tagged fish were being picked up by receivers placed in Little Sheepshead Creek. By leveraging glatos functions, I processed detection datasets, visualized movement patterns, and validated receiver effectiveness. I presented my findings at the Rutgers Summer Research Symposium, highlighting both the methodology and the ecological insights gained from the analysis.`}
    />
  );
}
