import React from "react";
import "./button.css";
const Button = ({
  text,
  color,
  backgroundColor,
  onClick,
  className,
  style,
}) => {
  const defaultStyle = {
    backgroundColor,
    color,
  };
  return (
    <button
      onClick={onClick}
      style={style ? style : defaultStyle}
      className={`btn ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
