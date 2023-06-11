import React from "react";
import { useParams } from "react-router-dom";
import { styles } from "../../utils/mainStyle";

const UserDetailBerita = () => {
  const { id } = useParams();
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
          <h1>{id}</h1>
        </div>
      </div>
    </div>
  );
};

export default UserDetailBerita;
