import React from "react";

const ApotekerDashboardCard = ({ amount, number }) => {
  return (
    <div className="flex flex-col w-full gap-2 xl:w-[49%] ">
      <div className="flex justify-between w-full gap-10 px-8 transition-all duration-500 bg-white shadow-xl hover:scale-105 hover:bg-primary/40 py-14 rounded-xl">
        <span className="text-3xl font-bold">{amount}</span>
        <span className="text-3xl font-bold">{number}</span>
      </div>
    </div>
  );
};

export default ApotekerDashboardCard;
