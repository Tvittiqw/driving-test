import React from "react";
import "./index.css";

const ProgressBar = ({ progressPercent, totalQuestions, currentQuestion }) => {
  const counter = currentQuestion + 1;
  return (
    <div className="progressWrapper">
      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${progressPercent}%` }}
        ></div>
      </div>
      <p className="greyText">{`Question ${counter}/${totalQuestions}`}</p>
    </div>
  );
};

export default ProgressBar;
