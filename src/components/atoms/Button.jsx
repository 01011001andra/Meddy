import React from "react";

const Button = ({ style, type, content, ...props }) => {
  return (
    <button
      type={type}
      className={`py-3 text-lg text-white rounded-xl transition-all duration-300 ${style}`}
      {...props}
    >
      {content}
    </button>
  );
};

export default Button;
