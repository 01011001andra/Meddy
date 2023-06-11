import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { BeritaCard } from "../../components";
import { styles } from "../../utils/mainStyle";

const UserBerita = () => {
  React.useEffect(() => {
    scroll.scrollToTop({
      duration: 1000, // durasi animasi scroll (ms)
      delay: 0, // jeda sebelum animasi dimulai (ms)
      smooth: "easeInOutQuint", // jenis easing pada animasi scroll
    });
  }, []);
  return (
    <div className="min-h-screen pt-24 bg-cover dark:bg-slate-900 bg-primary">
      <div
        className="h-[20vh] flex items-center justify-center bg-primary dark:bg-slate-900"
        style={{ backgroundImage: "url('./loginPattern.png')" }}
      >
        <h1 className={`${styles.sectionHeadText} text-white`}>Berita</h1>
      </div>
      <div className="w-full min-h-screen bg-secondary dark:bg-slate-800">
        <div className="flex flex-wrap justify-center w-full min-h-screen gap-8 py-10 mx-auto xl:justify-between max-w-7xl">
          <BeritaCard
            url="./hero.png"
            alt="hero"
            date="May 23, 2023"
            title="Methylprednisolone : Dosis, Manfaat, 
Efek, Cara Kerja Obat Immunosupresan"
          />
          <BeritaCard
            url="./hero.png"
            alt="hero"
            date="May 23, 2023"
            title="Methylprednisolone : Dosis, Manfaat, 
Efek, Cara Kerja Obat Immunosupresan"
          />
          <BeritaCard
            url="./hero.png"
            alt="hero"
            date="May 23, 2023"
            title="Methylprednisolone : Dosis, Manfaat, 
Efek, Cara Kerja Obat Immunosupresan"
          />
          <BeritaCard
            url="./hero.png"
            alt="hero"
            date="May 23, 2023"
            title="Methylprednisolone : Dosis, Manfaat, 
Efek, Cara Kerja Obat Immunosupresan"
          />
          <BeritaCard
            url="./hero.png"
            alt="hero"
            date="May 23, 2023"
            title="Methylprednisolone : Dosis, Manfaat, 
Efek, Cara Kerja Obat Immunosupresan"
          />
          <BeritaCard
            url="./hero.png"
            alt="hero"
            date="May 23, 2023"
            title="Methylprednisolone : Dosis, Manfaat, 
Efek, Cara Kerja Obat Immunosupresan"
          />
          <BeritaCard
            url="./hero.png"
            alt="hero"
            date="May 23, 2023"
            title="Methylprednisolone : Dosis, Manfaat, 
Efek, Cara Kerja Obat Immunosupresan"
          />
          <BeritaCard
            url="./hero.png"
            alt="hero"
            date="May 23, 2023"
            title="Methylprednisolone : Dosis, Manfaat, 
Efek, Cara Kerja Obat Immunosupresan"
          />
          <BeritaCard
            url="./hero.png"
            alt="hero"
            date="May 23, 2023"
            title="Methylprednisolone : Dosis, Manfaat, 
Efek, Cara Kerja Obat Immunosupresan"
          />
          <BeritaCard
            url="./hero.png"
            alt="hero"
            date="May 23, 2023"
            title="Methylprednisolone : Dosis, Manfaat, 
Efek, Cara Kerja Obat Immunosupresan"
          />
          <BeritaCard
            url="./hero.png"
            alt="hero"
            date="May 23, 2023"
            title="Methylprednisolone : Dosis, Manfaat, 
Efek, Cara Kerja Obat Immunosupresan"
          />
          <BeritaCard
            url="./hero.png"
            alt="hero"
            date="May 23, 2023"
            title="Methylprednisolone : Dosis, Manfaat, 
Efek, Cara Kerja Obat Immunosupresan"
          />
          <BeritaCard
            url="./hero.png"
            alt="hero"
            date="May 23, 2023"
            title="Methylprednisolone : Dosis, Manfaat, 
Efek, Cara Kerja Obat Immunosupresan"
          />
          <BeritaCard
            url="./hero.png"
            alt="hero"
            date="May 23, 2023"
            title="Methylprednisolone : Dosis, Manfaat, 
Efek, Cara Kerja Obat Immunosupresan"
          />
          <BeritaCard
            url="./hero.png"
            alt="hero"
            date="May 23, 2023"
            title="Methylprednisolone : Dosis, Manfaat, 
Efek, Cara Kerja Obat Immunosupresan"
          />
          <BeritaCard
            url="./hero.png"
            alt="hero"
            date="May 23, 2023"
            title="Methylprednisolone : Dosis, Manfaat, 
Efek, Cara Kerja Obat Immunosupresan"
          />
          <BeritaCard
            url="./hero.png"
            alt="hero"
            date="May 23, 2023"
            title="Methylprednisolone : Dosis, Manfaat, 
Efek, Cara Kerja Obat Immunosupresan"
          />
          <BeritaCard
            url="./hero.png"
            alt="hero"
            date="May 23, 2023"
            title="Methylprednisolone : Dosis, Manfaat, 
Efek, Cara Kerja Obat Immunosupresan"
          />
          <BeritaCard
            url="./hero.png"
            alt="hero"
            date="May 23, 2023"
            title="Methylprednisolone : Dosis, Manfaat, 
Efek, Cara Kerja Obat Immunosupresan"
          />
        </div>
      </div>
    </div>
  );
};

export default UserBerita;
