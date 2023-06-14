import React from 'react';
import { useParams } from "react-router-dom";
import {CarouselObat} from "../../components";
import {ObatCard} from "../../components";
import { styles } from "../../utils/mainStyle";
import { Link } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

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
      <div className="w-full min-h-screen bg-secondary dark:bg-slate-800 px-12">
      <div className="flex md:flex-row flex-col gap-8 justify-center py-20 mx-6 xl:justify-between max-w-7xl">
      <CarouselObat 
              slide1="Bodex"
              slide2="Termorex Plus"
              slide3="Tolak Angin"
              slide4="Promag"
              slide5="Cucurma Plus"
              content1="Tablet"
              content2="Sirup"
              content3="Sirup"
              content4="Tablet"
              content5="6 Kaplet Procold Flu"
        />
          <div className="flex-col justify-center xl:justify-between max-w-7xl">
            <Link
              to="/info"
              className="text-xl font-bold text-primary hover:text-primary/60"
            >
              <ArrowBackIcon /> Selengkapnya 
            </Link>
            <h1 className="text-2xl font-extrabold tracking-wider text-primary pt-5">Paracetamol 500 Mg</h1>
            <p className="font-poppins tracking-wide font-semibold pt-2">PARACETAMOL TABLET merupakan obat yang dapat digunakan untuk meringankan rasa sakit pada sakit kepala, sakit gigi, dan menurunkan demam.</p>
            <h1 className="font-poppins tracking-wide font-normal pt-2" >Kategori : Obat Tablet</h1> 
            <h1 className="font-poppins tracking-wide font-semibold pt-2 text-primary" >Deskripsi</h1>
            <h1  className="font-poppins tracking-wide font-semibold pt-2">Detail Produk : </h1>
            <p className= "font-poppins tracking-wide font-semibold pt-2">Komposisi <span className="font-medium">: Setiap tablet mengandung Paracetamol 500 mg</span></p>
              <p className="font-poppins tracking-wide font-semibold pt-2">
              Kegunaan <span className="font-medium">:  Aksi batuk diawali dengan sistem saraf yang mengirim pesan ke batang otak
              lalu direspon. Hasilnya, otot-otot di dada dan perut akan beraksi yang 
              mengakibatkan keluarnya batuk. Batuk bisa sangat mengganggu aktivitas
              sehari-hari hingga pasiennya ingin segera sembuh.</span>
              </p>
              <p className="font-poppins tracking-wide font-semibold pt-2">
              Efek Samping <span className="font-medium">:  Aksi batuk diawali dengan sistem saraf yang mengirim pesan ke batang otak
              lalu direspon. Hasilnya, otot-otot di dada dan perut akan beraksi yang 
              mengakibatkan keluarnya batuk. Batuk bisa sangat mengganggu aktivitas
              sehari-hari hingga pasiennya ingin segera sembuh.</span>
              </p>
          </div>
      </div>
      <div>
        <div>
        <h1  className="font-poppins tracking-wide font-semibold py-5 ">Produk Lainya... </h1>
        </div>
        <ObatCard
              slide1="Bodex"
              slide2="Termorex Plus"
              slide3="Tolak Angin"
              slide4="Promag"
              slide5="Cucurma Plus"
              content1="Tablet"
              content2="Sirup"
              content3="Sirup"
              content4="Tablet"
              content5="6 Kaplet Procold Flu"
        />
        </div>
      </div>
    </div>
  );
};

export default UserDetailObat