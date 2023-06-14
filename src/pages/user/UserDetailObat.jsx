import React from "react";
import { useParams } from "react-router-dom";
import { ObatCard } from "../../components";
import { styles } from "../../utils/mainStyle";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const UserDetailObat = () => {
  const { id } = useParams();
  return (
    <div className="min-h-screen pt-24 dark:bg-slate-900 bg-primary">
      <div
        className="h-[20vh] flex items-center justify-center bg-primary dark:bg-slate-900"
        style={{ backgroundImage: "url('../loginPattern.png')" }}
      >
        <h1 className={`${styles.sectionHeadText} text-white`}>Detail Obat</h1>
      </div>
      <div className="w-full min-h-screen px-4 bg-secondary dark:bg-slate-800">
        <div className="flex flex-col justify-center gap-8 px-4 py-10 mx-auto max-w-7xl">
          <Link
            to="/info"
            className="text-xl font-bold text-primary hover:text-primary/60"
          >
            <ArrowBackIcon /> Selengkapnya
          </Link>
          <div className="flex items-center justify-center mx-auto w-80 h-80">
            <img src="../bodrex.png" alt="Obat" />
          </div>

          <div className="flex flex-col justify-center gap-4">
            <h1 className="text-3xl font-bold text-center xl:text-start text-primary">
              Paracetamol 500 Mg
            </h1>
            <p className="font-semibold tracking-wide font-poppins">
              Paracetamol Tablet merupakan obat yang dapat digunakan untuk
              meringankan rasa sakit pada sakit kepala, sakit gigi, dan
              menurunkan demam.
            </p>
            <h1 className="font-normal tracking-wide font-poppins">
              Kategori : Obat Tablet
            </h1>
            <h1 className="font-semibold tracking-wide font-poppins text-primary">
              Deskripsi
            </h1>
            <h1 className="font-semibold tracking-wide font-poppins">
              Detail Produk :{" "}
            </h1>
            <p className="font-semibold tracking-wide font-poppins">
              Komposisi{" "}
              <span className="font-medium">
                : Setiap tablet mengandung Paracetamol 500 mg
              </span>
            </p>
            <p className="font-semibold tracking-wide font-poppins">
              Kegunaan{" "}
              <span className="font-medium">
                : Aksi batuk diawali dengan sistem saraf yang mengirim pesan ke
                batang otak lalu direspon. Hasilnya, otot-otot di dada dan perut
                akan beraksi yang mengakibatkan keluarnya batuk. Batuk bisa
                sangat mengganggu aktivitas sehari-hari hingga pasiennya ingin
                segera sembuh.
              </span>
            </p>
            <p className="font-semibold tracking-wide font-poppins">
              Efek Samping{" "}
              <span className="font-medium">
                : Aksi batuk diawali dengan sistem saraf yang mengirim pesan ke
                batang otak lalu direspon. Hasilnya, otot-otot di dada dan perut
                akan beraksi yang mengakibatkan keluarnya batuk. Batuk bisa
                sangat mengganggu aktivitas sehari-hari hingga pasiennya ingin
                segera sembuh.
              </span>
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-8 py-20 pb-20 mx-auto max-w-7xl">
          <h1
            className={` text-center xl:text-start text-3xl font-bold text-primary`}
          >
            Produk Lainya
          </h1>
          <div className="flex flex-wrap justify-center gap-5 md:gap-6 xl:justify-start ">
            <ObatCard url={"../bodrex.png"} title="Paracetamol 500 Mg" />
            <ObatCard url={"../bodrex.png"} title="Paracetamol 500 Mg" />
            <ObatCard url={"../bodrex.png"} title="Paracetamol 500 Mg" />
            <ObatCard url={"../bodrex.png"} title="Paracetamol 500 Mg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailObat;
