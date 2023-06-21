import React from "react";
import { Link } from "react-router-dom";

const BeritaCard = ({ url, alt, date, title, linkID }) => {
  return (
    <div className="flex flex-col gap-4 p-4 shadow-lg w-96 h-[400px] dark:bg-slate-900 rounded-xl">
      <img src={url} alt={alt} className="h-52" />
      <small className="text-sm">{date}</small>
      <Link
        to={`${linkID}`}
        className="text-xl font-bold transition-all duration-200 cursor-pointer hover:text-primary"
      >
        {title}
      </Link>
    </div>
  );
};

export default BeritaCard;
