import React from "react";

function Button({ color = "White", text = "확인" }) {
  return <button style={{ backgroundColor: color }}>{text}</button>;
}

export default Button;
