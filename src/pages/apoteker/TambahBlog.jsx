import React from "react";
import { Link } from "react-router-dom";
import { Search, TableApoteker } from "../../components";

const TambahBlog = () => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-3xl font-medium md:text-4xl">Berita</h1>
      <p>Perbarui platform secara instan dengan berita terbaru Anda.</p>
      <div className="flex flex-col-reverse justify-end w-full gap-5 md:flex-row">
        <Search />

        <Link
          to="Blog"
          className="px-10 py-4 font-bold text-center text-black bg-white rounded-full shadow-xl dark:text-black hover:bg-secondary/60"
        >
          Tambah Berita
        </Link>
      </div>
      <TableApoteker />
    </div>
  );
};

export default TambahBlog;
