import React from "react";

const BeritaCard = ({ url, alt, date, title }) => {
  return (
    <div className="flex flex-col gap-4 p-4 shadow-lg w-96 h-[400px] dark:bg-slate-900 rounded-xl">
      <img src={url} alt={alt} />
      <small>{date}</small>
      <h2 className="text-xl font-bold transition-all duration-200 cursor-pointer hover:text-primary">
        {title}
      </h2>
    </div>
  );
};

export default BeritaCard;
