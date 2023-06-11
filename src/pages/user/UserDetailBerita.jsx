import React from "react";
import { useParams } from "react-router-dom";
import { styles } from "../../utils/mainStyle";

const UserDetailBerita = () => {
  const { id } = useParams();
  return (
    <div className="min-h-screen pt-24 bg-cover dark:bg-slate-900 bg-primary">
      <div
        className="h-[20vh] flex items-center justify-center bg-primary dark:bg-slate-900"
        style={{ backgroundImage: "url('../loginPattern.png')" }}
      >
        <h1 className={`${styles.sectionHeadText} text-white`}>Detail Berita</h1>
      </div>
      <div className="w-full min-h-screen bg-secondary dark:bg-slate-800">
        <div className="flex flex-wrap justify-center w-full min-h-screen py-6 mx-auto xl:justify-between max-w-7xl">
          <div className="mx-auto xl:justify-between max-w-7xl pt-6">
            <h1 className="text-center text-primary text-2xl font-bold tracking-wider">Methylprednisolone : Dosis, Manfaat, Efek</h1>
            <h1 className="text-center text-primary text-2xl font-bold tracking-wider">dan Cara Kerja Obat Immunosupresan</h1>
            <h1 className="text-center text-zinc-600 text-xl">Ayana Hanifah - Medicine Teddy</h1>
            <h1 className="text-center text-zinc-500">Kamis, 25 Mei 2023 12:00 WIB</h1>
          </div> 
          <div className="flex md:flex-row flex-col gap-8 justify-center mx-16 pb-10">
          <img src="../beritaobat.png" className="h-auto max-w-10"/>
          <div className="flex-col justify-center">
              <p className="text-justify text-sm tracking-wide py-5">
                Batam - Methylprednisolone adalah jenis obat golongan steroid yang bisa digunakan sebagai
              obat beberapa jenis penyakit seperti alergi dan radang. Obat yang sudah terdaftar dalam BPOM RI 
              ini mampu menekan kekebalan tubuh (immunosupresan).
              </p>
              <p className="text-justify text-sm tracking-wide">
                  Aksi batuk diawali dengan sistem saraf yang mengirim pesan ke batang otak
              lalu direspon. Hasilnya, otot-otot di dada dan perut akan beraksi yang 
              mengakibatkan keluarnya batuk. Batuk bisa sangat mengganggu aktivitas
              sehari-hari hingga pasiennya ingin segera sembuh.
              </p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailBerita;
