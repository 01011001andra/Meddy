import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const BeritaCard = ({ url, alt, date, title, linkID }) => {
  return (
    <div className="flex flex-col gap-5 p-4 shadow-lg w-[270px] h-[350px] dark:bg-slate-900 rounded-xl border-primary border">
      <img src={url} alt={alt} className="h-52" />
      <Link
        to={linkID}
        className="flex flex-col gap-2 text-xl font-bold text-center transition-all duration-200 cursor-pointer hover:text-primary"
      >
        {title}
        <span className="text-primary">Sirup</span>
      </Link>
    </div>
  );
};

export default BeritaCard;
