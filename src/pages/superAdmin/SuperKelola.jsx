import React from "react";
import { Link } from "react-router-dom";
import { Search, TableApoteker } from "../../components";

const Kelola = () => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-3xl font-medium md:text-4xl">Kelola Akun</h1>
      <p>Tambah Data Apoteker</p>
      <div className="flex flex-col-reverse justify-end w-full gap-5 md:flex-row">
        <Search />

        <Link
          to="/kelola"
          className="px-10 py-4 font-bold text-center text-black bg-white rounded-full shadow-xl dark:text-black hover:bg-secondary/60"
        >
          Tambah Apoteker
        </Link>
      </div>
      <TableApoteker />
    </div>
  );
};

export default Kelola;
