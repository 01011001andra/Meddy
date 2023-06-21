import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ApotekerDashboardCard } from "../../components/molecules";
import { getMe } from "../../features/auth/authSlice";

const SuperDashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  React.useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  React.useEffect(() => {
    axios
      .get("http://localhost:5000/obat")
      .then((res) => {
        console.info(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="flex flex-col w-full h-full gap-10">
      <h1 className="text-3xl font-medium md:text-4xl">Dashboard</h1>
      <div className="justify-between w-full gap-10 px-10 py-8 bg-white shadow-xl md:flex rounded-xl">
        <div className="flex flex-col w-full max-w-5xl gap-5">
          <h1 className="text-2xl font-bold md:text-4xl xl:text-6xl text-primary">
            Medichine <br />
            Teddy
          </h1>
          <p className="text-sm md:text-base">
            "Meddy juga membantu pengguna untuk mencari informasi dengan lebih
            mudah dan etisien serta memantau dan mengelola konsumsi obat dengan
            baik."
          </p>
        </div>
        <img src="./dokter.png" alt="asd" className="hidden w-64 md:flex" />
      </div>
      <h1 className="text-3xl font-bold">Section</h1>
      <div className="flex flex-wrap w-full gap-5">
        <ApotekerDashboardCard
          amount="Tambah Obat"
          url="AdminBerita.png"
          link={"/superadmin/tambahobat"}
        />
        <ApotekerDashboardCard
          amount="Tambah Berita"
          url="AdminObat.png"
          link={"/superadmin/tambahblog"}
        />
        <ApotekerDashboardCard
          amount="Kelola Akun"
          url="AdminBerita.png"
          link={"/superadmin/kelola"}
        />
      </div>
      <div className="pb-20"></div>
    </div>
  );
};

export default SuperDashboard;
