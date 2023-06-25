import React from "react";
import { styles } from "../../utils/mainStyle";
import { ObatCard } from "../../components";
import { MenuItem, Select } from "@mui/material";
import axios from "axios";

const UserObat = () => {
  const [obat, setObat] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("http://localhost:5000/obats")
      .then((res) => {
        setObat(res.data);
        console.info(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="min-h-screen dark:bg-slate-900 bg-primary">
      <div
        className="h-[20vh] flex items-center justify-center bg-primary dark:bg-slate-900"
        style={{ backgroundImage: "url('../loginPattern.png')" }}
      >
        <h1 className={`${styles.sectionHeadText} text-white`}>
          Informasi Obat
        </h1>
      </div>
      <div className="w-full min-h-screen px-12 bg-secondary dark:bg-slate-800">
        <div className="flex flex-col justify-center gap-8 mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-center gap-5 px-12 md:items-start">
            <h1 className="mt-8 text-2xl font-semibold tracking-wide text-center md:text-start">
              Obat
            </h1>
            <div className="flex flex-wrap justify-center gap-5 pb-10 md:gap-6 xl:justify-start">
              {obat.map((item) => {
                return (
                  <ObatCard
                    url={`../${item.gambar}`}
                    title={item.name}
                    linkID={`/info/${item.uuid}`}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserObat;
