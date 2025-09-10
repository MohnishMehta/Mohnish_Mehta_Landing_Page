// BreakThroughTech.tsx
import React from "react";
import ExperienceContent from "../../components/ExperienceContent";
const BreakthroughTechLogo = require("../../assets/logos/breakthroughtech.png");

export default function BreakThroughTech() {
  return (
    <ExperienceContent
      logo={BreakthroughTechLogo}
      alt="Break Through Tech Logo"
      text={`I was honored to be selected as one of the AI Fellows at Break Through Tech out of 3,000+ applicants, where I gained hands-on experience in the full lifecycle of machine learning. I began with data exploration and preparation using NumPy and Pandas, followed by creating compelling data visualizations with Seaborn and Matplotlib. I developed predictive models in scikit-learn, optimizing hyperparameters with GridSearchCV to improve performance, and evaluated results using confusion matrices, precision-recall analysis, and ROC-AUC metrics. Beyond traditional models, I expanded my skills by studying ensemble methods such as bagging, stacking, and boosting, as well as advancing into natural language processing (NLP), deep learning, and neural networks using TensorFlow and Keras.`}
    />
  );
}
