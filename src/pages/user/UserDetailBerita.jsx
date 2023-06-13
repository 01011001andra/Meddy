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
        <h1 className={`${styles.sectionHeadText} text-white`}>
          Detail Berita
        </h1>
      </div>
      <div className="w-full min-h-screen bg-secondary dark:bg-slate-800 px-4 2xl:px-0">
        <div className="flex flex-col gap-5 w-full min-h-screen py-6 mx-auto  max-w-7xl">
          <div className="w-full flex items-center gap-3 flex-col max-w-xl pt-6 mx-auto">
            <h1 className="text-center text-primary text-2xl font-bold tracking-wider">
              Methylprednisolone : Dosis, Manfaat, Efek dan Cara Kerja Obat
              Immunosupresan
            </h1>
            <h2 className="text-center text-zinc-600 text-xl">
              Sayuti Melik -{" "}
              <span className="text-primary">Medicine Teddy</span>
            </h2>
            <small className="text-center text-zinc-500 ">
              Kamis, 25 Mei 2023 12:00 WIB
            </small>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex xl:flex-row flex-col gap-8 justify-center ">
              <img src="../beritaobat.png" className="h-auto max-w-10" />
              <div className="flex-col justify-center">
                <p className="text-justify text-sm tracking-wide ">
                  Batam - Methylprednisolone adalah jenis obat golongan steroid
                  yang bisa digunakan sebagai obat beberapa jenis penyakit
                  seperti alergi dan radang. Obat yang sudah terdaftar dalam
                  BPOM RI ini mampu menekan kekebalan tubuh (immunosupresan).
                  Aksi batuk diawali dengan sistem saraf yang mengirim pesan ke
                  batang otak lalu direspon. Hasilnya, otot-otot di dada dan
                  perut akan beraksi yang mengakibatkan keluarnya batuk. Batuk
                  bisa sangat mengganggu aktivitas sehari-hari hingga pasiennya
                  ingin segera sembuh. Batam - Methylprednisolone adalah jenis
                  obat golongan steroid yang bisa digunakan sebagai obat
                  beberapa jenis penyakit seperti alergi dan radang. Obat yang
                  sudah terdaftar dalam BPOM RI ini mampu menekan kekebalan
                  tubuh (immunosupresan). Aksi batuk diawali dengan sistem saraf
                  yang mengirim pesan ke batang otak lalu direspon. Hasilnya,
                  otot-otot di dada dan perut akan beraksi yang mengakibatkan
                  keluarnya batuk. Batuk bisa sangat mengganggu aktivitas
                  sehari-hari hingga pasiennya ingin segera sembuh. Batam -
                  Methylprednisolone adalah jenis obat golongan steroid yang
                  bisa digunakan sebagai obat beberapa jenis penyakit seperti
                  alergi dan radang. Obat yang sudah terdaftar dalam BPOM RI ini
                  mampu menekan kekebalan tubuh (immunosupresan). Aksi batuk
                  diawali dengan sistem saraf yang mengirim pesan ke batang otak
                  lalu direspon. Hasilnya, otot-otot di dada dan perut akan
                  beraksi yang mengakibatkan keluarnya batuk. Batuk bisa sangat
                  mengganggu aktivitas sehari-hari hingga pasiennya ingin segera
                  sembuh.
                </p>
              </div>
            </div>
            <p className="text-justify text-sm tracking-wide ">
              Batam - Methylprednisolone adalah jenis obat golongan steroid yang
              bisa digunakan sebagai obat beberapa jenis penyakit seperti alergi
              dan radang. Obat yang sudah terdaftar dalam BPOM RI ini mampu
              menekan kekebalan tubuh (immunosupresan). Aksi batuk diawali
              dengan sistem saraf yang mengirim pesan ke batang otak lalu
              direspon. Hasilnya, otot-otot di dada dan perut akan beraksi yang
              mengakibatkan keluarnya batuk. Batuk bisa sangat mengganggu
              aktivitas sehari-hari hingga pasiennya ingin segera sembuh. Batam
              - Methylprednisolone adalah jenis obat golongan steroid yang bisa
              digunakan sebagai obat beberapa jenis penyakit seperti alergi dan
              radang. Obat yang sudah terdaftar dalam BPOM RI ini mampu menekan
              kekebalan tubuh (immunosupresan). Aksi batuk diawali dengan sistem
              saraf yang mengirim pesan ke batang otak lalu direspon. Hasilnya,
              otot-otot di dada dan perut akan beraksi yang mengakibatkan
              keluarnya batuk. Batuk bisa sangat mengganggu aktivitas
              sehari-hari hingga pasiennya ingin segera sembuh. Batam -
              Methylprednisolone adalah jenis obat golongan steroid yang bisa
              digunakan sebagai obat beberapa jenis penyakit seperti alergi dan
              radang. Obat yang sudah terdaftar dalam BPOM RI ini mampu menekan
              kekebalan tubuh (immunosupresan). Aksi batuk diawali dengan sistem
              saraf yang mengirim pesan ke batang otak lalu direspon. Hasilnya,
              otot-otot di dada dan perut akan beraksi yang mengakibatkan
              keluarnya batuk. Batuk bisa sangat mengganggu aktivitas
              sehari-hari hingga pasiennya ingin segera sembuh.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailBerita;
