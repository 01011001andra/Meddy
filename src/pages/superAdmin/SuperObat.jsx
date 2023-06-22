import React from "react";
import { Link } from "react-router-dom";
import { Search, TabelObatSuper, TableApoteker } from "../../components";

const SuperObat = () => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-3xl font-medium md:text-4xl">Obat</h1>
      <p>
        Perbarui data Obat Anda secara instan seperti informasi menghapus data.
      </p>
      <div className="flex flex-col-reverse justify-end w-full gap-5 md:flex-row">
        <Search />

        <Link
          to="/admin/tambahdataobat"
          className="px-10 py-4 font-bold text-center text-black bg-white rounded-full shadow-xl dark:text-black hover:bg-secondary/60"
        >
          Tambah Obat
        </Link>
      </div>
      <TabelObatSuper />
    </div>
  );
};

export default SuperObat;
