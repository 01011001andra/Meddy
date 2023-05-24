import React from "react";

const Button = ({ style, type, content, ...props }) => {
  return (
    <button
      type={type}
      className={`py-2 md:py-3 text-lg rounded-xl transition-all duration-300 ${style}`}
      {...props}
    >
      {content}
    </button>
  );
};

export default Button;
