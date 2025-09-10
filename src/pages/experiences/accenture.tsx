import React from "react";
import ExperienceContent from "../../components/ExperienceContent";
const AccentureLogo = require("../../assets/logos/accenture.png");

export default function Accenture() {
  return (
    <ExperienceContent
      logo={AccentureLogo}
      alt="Accenture Logo"
      text={`At Accenture as an AI Fellow, I worked with a team to analyze synthetic machine operating and health monitoring data in order to predict mechanical pump failures. I built a logistic regression baseline model and later implemented a Random Forest classifier to improve predictive performance, incorporating techniques like SMOTE to address class imbalance and boosting recall by 25%. I also leveraged time-series feature engineering (e.g., rolling averages) to capture pump behavior patterns that signal potential breakdowns.`}
    />
  );
}
