"use client";
import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ProgressBar = () => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (percentage < 60) {
        setPercentage(percentage + 1);
      }
    }, 50);
  }, [percentage]);
  return (
    <div className="app">
      <div className="w-20">
        <CircularProgressbar
          value={percentage}
          text={`Health +`}
          styles={buildStyles({
            pathColor: "#ef4444", // progress ring
            trailColor: "#f3f4f6", // background ring
            textColor: "#111827", // text color
            strokeLinecap: "round", // rounded edges
          })}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
