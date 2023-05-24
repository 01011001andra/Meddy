import React from "react";

const Input = ({ style, label, type, name, id, ...props }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor="email" className="font-light">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        className={`bg-transparent border-[2px] rounded-xl border-primary p-3 ${style}`}
        {...props}
      />
    </div>
  );
};

export default Input;
