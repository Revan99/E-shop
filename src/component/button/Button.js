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
      className={`text-xl px-6 py-3 ${
        backgroundColor ? backgroundColor : "bg-primary-2"
      } ${color ? color : "text-white"} rounded-lg ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
