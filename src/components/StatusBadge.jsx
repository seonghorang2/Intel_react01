import React from "react";

// StatusBadge.jsx
function StatusBadge({ isOnline }) {
  return (
    <span
      style={{
        color: isOnline ? "green" : "gray",
        fontWeight: "bold",
      }}
    >
      {isOnline ? "● 온라인" : "○ 오프라인"}
    </span>
  );
}

export default StatusBadge;
