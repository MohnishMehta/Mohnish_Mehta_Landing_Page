import React from "react";
import ExperienceContent from "../../components/ExperienceContent";
const NewsLogo = require("../../assets/logos/news.png");

export default function Project3() {
  return (
    <ExperienceContent
      logo={NewsLogo}
      alt="MarketSentiment Logo"
      text={`I developed a full-stack Financial News Impact Analyzer that applies machine learning and natural language processing to link news sentiment with market performance. Using FastAPI and PostgreSQL, I built a backend pipeline that ingests financial headlines and stock price data on demand. I implemented sentiment scoring with VADER as a baseline and upgraded to finBERT, improving classification accuracy of bullish, bearish, and neutral news. I then performed event studies to measure abnormal returns following news events, and trained an XGBoost classifier to predict short-term market impact. On the frontend, I created a Next.js dashboard to display headlines, sentiment labels, and cumulative abnormal return (CAR) plots. This project highlights my ability to integrate ML, NLP, databases, and backend APIs into a cohesive financial analysis tool.`}
    />
  );
}
