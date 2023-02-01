import React from "react";

const RankAvatar = ({ rank }) => {
  return (
    <>
      <div
        class={`relative inline-flex items-center justify-center w-10 h-10 overflow-hidden ${
          rank === "1" && "bg-[#fde047] text-white"
        }
       ${rank === "2" && "bg-[#cbd5e1] text-white"}
       ${rank === "3" && "bg-[#854d0e] text-white"}  rounded-full `}
      >
        <span class="font-medium ">{rank}</span>
      </div>
    </>
  );
};
export default RankAvatar;
