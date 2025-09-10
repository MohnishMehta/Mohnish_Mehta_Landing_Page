import React from "react";
import ExperienceContent from "../../components/ExperienceContent";
const AirbnbLogo = require("../../assets/logos/airbnb.png");

export default function Project1() {
  return (
    <ExperienceContent
      logo={AirbnbLogo}
      alt="Airbnb Logo"
      text={`For my Airbnb Logistic Regression project, I built a machine learning pipeline to predict whether a host would achieve Superhost status based on listing and host data. I began by cleaning and preparing the dataset in Pandas, applying feature selection techniques such as SelectKBest to identify the most influential predictors. I implemented a logistic regression baseline model in scikit-learn, then applied GridSearchCV to optimize hyperparameters and improve accuracy. To benchmark performance, I compared results with more advanced models, evaluating each using confusion matrices, ROC-AUC curves, and precision-recall analysis. This project strengthened my ability to connect real-world business outcomes with data-driven insights while honing my model development and evaluation skills.`}
    />
  );
}
