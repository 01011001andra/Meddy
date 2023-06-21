import React from "react";

const Input = ({ style, label, type, name, id, register, ...props }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="font-light">
        {" "}
        {/* Menggunakan prop name sebagai atribut htmlFor */}
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        className={`bg-transparent border-[2px] rounded-xl border-primary p-2 md:p-3 ${style}`}
        {...register(name)} // Menggunakan register dengan prop name sebagai argumen
        {...props}
      />
    </div>
  );
};

export default Input;
