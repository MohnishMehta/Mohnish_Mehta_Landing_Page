import React from "react";
import ExperienceContent from "../../components/ExperienceContent";
const MnistLogo = require("../../assets/logos/mnist.png");

export default function Project2() {
  return (
    <ExperienceContent
      logo={MnistLogo}
      alt="MNIST Logo"
      text={`I built a convolutional neural network (CNN) in TensorFlow/Keras to classify handwritten digits from the MNIST dataset. After normalizing the grayscale images and reshaping them to 28×28×1, I designed a sequential model with four Conv2D blocks (each followed by BatchNormalization and ReLU), a GlobalAveragePooling2D layer, and a final dense output layer. I trained with SGD (lr=0.1) using SparseCategoricalCrossentropy (from_logits=True), tracked accuracy on a validation split, and evaluated on the test set, achieving ~91.9% accuracy in a quick 1-epoch run. I also generated predictions and visualized samples to inspect model behavior. Core tools: TensorFlow/Keras, NumPy, Matplotlib, and Seaborn.`}
    />
  );
}
