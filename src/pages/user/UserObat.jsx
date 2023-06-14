import React from 'react';
import {BoxObat} from "../../components";
import { styles } from "../../utils/mainStyle";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const UserObat = () => {
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
        <div className='bg-primary text-white w-[340 px] h-[50px] p-2 flex items-center justify-between rounded'>
          Kategori Obat
          <ArrowDropUpIcon size={20}/>
        </div>
        <ul>
          <li>Sample</li>
          <li>Sample</li>
          <li>Sample</li>
        </ul>
          <div className="flex-col justify-center">
          <h1 className="tracking-wide text-2xl font-semibold pt-2">Obat</h1>
          <BoxObat
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
      </div>
  );
};

export default UserObat