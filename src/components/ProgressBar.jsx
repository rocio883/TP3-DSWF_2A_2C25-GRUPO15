// src/components/ProgressBar.jsx
import React, { useEffect, useState } from "react";
import "../styles/animations.css";

export default function ProgressBar({ label, percent = 0 }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => setWidth(percent), 80);
    return () => clearTimeout(timeout);
  }, [percent]);

  return (
    <div className="progress-container">
      {label && <strong className="progress-label">{label}</strong>}
      <div className="progress-bar-container">
        <div
          className="progress-inner"
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
}
