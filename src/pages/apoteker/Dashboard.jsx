import React from "react";
import { ApotekerDashboardCard } from "../../components/molecules";

const Dashboard = () => {
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
        <ApotekerDashboardCard amount="Total Obat" number="10" />
        <ApotekerDashboardCard amount="Total Obat" number="10" />
        <ApotekerDashboardCard amount="Total Obat" number="10" />
        <ApotekerDashboardCard amount="Total Obat" number="10" />
        <div className="pb-20"></div>
      </div>
    </div>
  );
};

export default Dashboard;
