import React from "react";
import { Link } from "react-router-dom";

const Card = ({ className, imageSrc, text, path }) => {
  return (
    <Link
      to={path ? path : "/"}
      className={`flex flex-col max-w-full mx-2 md:mx-0 rounded-xl border border-secondary-2 shadow-2xl overflow-hidden ${className}`}
    >
      <div className="flex-1 flex h-2/3">
        <img src={imageSrc} alt={text} className="w-full h-full" />
      </div>
      <h1 className="text-primary-1 text-3xl text-center my-10">{text}</h1>
    </Link>
  );
};

export default Card;
