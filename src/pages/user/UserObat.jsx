import React from "react";
import { styles } from "../../utils/mainStyle";
import { ObatCard } from "../../components";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const UserObat = () => {
  return (
    <div className="min-h-screen pt-24 dark:bg-slate-900 bg-primary">
      <div
        className="h-[20vh] flex items-center justify-center bg-primary dark:bg-slate-900"
        style={{ backgroundImage: "url('../loginPattern.png')" }}
      >
        <h1 className={`${styles.sectionHeadText} text-white`}>
          Informasi Obat
        </h1>
      </div>
      <div className="w-full min-h-screen px-12 bg-secondary dark:bg-slate-800">
        <div className="flex flex-col justify-center gap-8 py-20 mx-auto md:flex-row xl:justify-between max-w-7xl">
          <div className="font-medium w-72 h-80">
            <div className="bg-primary text-white w-[340 px] h-[50px] p-2 flex items-center justify-between rounded">
              Kategori Obat
              <ArrowDropUpIcon size={20} />
            </div>
            <ul className="border shadow-lg bg-slate-200 border-slate-400">
              <li className="p-2 text-sm hover:bg-primary hover:text-white">
                Obat Tablet
              </li>
              <li className="p-2 text-sm hover:bg-primary hover:text-white">
                Obat Sirup
              </li>
              <li className="p-2 text-sm hover:bg-primary hover:text-white">
                Obat Kapsul
              </li>
            </ul>
          </div>
          <div className="flex-col justify-center px-12">
            <h1 className="text-2xl font-semibold tracking-wide ">Obat</h1>
            <div className="flex flex-wrap justify-center gap-5 md:gap-6 xl:justify-start ">
              <ObatCard url={"../bodrex.png"} title="Paracetamol 500 Mg" />
              <ObatCard url={"../bodrex.png"} title="Paracetamol 500 Mg" />
              <ObatCard url={"../bodrex.png"} title="Paracetamol 500 Mg" />
              <ObatCard url={"../bodrex.png"} title="Paracetamol 500 Mg" />
              <ObatCard url={"../bodrex.png"} title="Paracetamol 500 Mg" />
              <ObatCard url={"../bodrex.png"} title="Paracetamol 500 Mg" />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center pb-10 rounded-lg">
          <button className="h-12 px-4 border-2 border-r-0 border-indigo-600 rounded-sm hover:bg-indigo-600 hover:text-white">
            <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clip-rule="evenodd"
                fill-rule="evenodd"
              ></path>
            </svg>
          </button>
          <button className="h-12 px-4 border-2 border-indigo-600 hover:text-primary">
            <h1>1</h1>
          </button>
          <button className="h-12 px-4 border-2 border-indigo-600 hover:text-primary">
            <h1>2</h1>
          </button>
          <button className="h-12 px-4 border-2 border-indigo-600 hover:text-primary">
            <h1>3</h1>
          </button>
          <button className="h-12 px-4 border-2 border-indigo-600 rounded-sm hover:bg-indigo-600 hover:text-white">
            <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
                fill-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserObat;
