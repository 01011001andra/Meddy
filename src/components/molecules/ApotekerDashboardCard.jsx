import React from "react";

const ApotekerDashboardCard = ({ amount, number }) => {
  return (
    <div className="flex flex-col w-full gap-2 xl:w-[49%] cursor-pointer">
      <div className="flex justify-between w-full gap-10 px-8 transition-all duration-500 bg-white shadow-xl hover:-translate-y-2 hover:bg-primary py-14 rounded-xl hover:text-white">
        <span className="text-3xl font-bold">{amount}</span>
        <span className="text-3xl font-bold">{number}</span>
      </div>
    </div>
  );
};

export default ApotekerDashboardCard;
