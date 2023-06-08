import React from "react";

const ApotekerDashboardCard = ({ amount, url }) => {
  return (
    <div className="flex flex-col w-full gap-2 xl:w-[49%] cursor-pointer">
      <div className="flex flex-col justify-between w-full gap-10 px-8 transition-all duration-500 bg-white shadow-xl hover:-translate-y-2 hover:bg-primary py-14 rounded-xl hover:text-white">
        <img src={`./${url}`} alt="admin" className="mx-auto " />
        <div className="flex justify-center w-full gap-5">
          <span className="text-3xl font-bold">{amount}</span>
        </div>
      </div>
    </div>
  );
};

export default ApotekerDashboardCard;
