import React from "react";
import { Link } from "react-router-dom";
import { Search } from "../../components";
import TabelBeritaSuper from "../../components/molecules/TabelBeritaSuper";

const SuperBerita = () => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-3xl font-medium md:text-4xl">Berita</h1>
      <p>Kelola Berita</p>
      <div className="flex flex-col-reverse justify-end w-full gap-5 md:flex-row">
        <Search />

        <Link
          to="/admin/tambahdatablog"
          className="px-10 py-4 font-bold text-center text-black bg-white rounded-full shadow-xl dark:text-black hover:bg-secondary/60"
        >
          Tambah Berita
        </Link>
      </div>
      <TabelBeritaSuper />
    </div>
  );
};

export default SuperBerita;
