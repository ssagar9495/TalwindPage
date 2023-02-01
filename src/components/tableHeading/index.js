import React from "react";

const TableHeading = ({ partnerName }) => {
  return (
    <div class="px-3 py-10 sm:px-5">
      <h2 class="text-[#0369a1] font-medium leading-tight  text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl ">
        Overall Leaderboard - {partnerName}
      </h2>
    </div>
  );
};
export default TableHeading;
