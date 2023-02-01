import React from "react";

const ScoreAvatar = ({ rank, score }) => {
  return (
    <div
      class={`relative inline-flex items-center justify-center w-10 h-10 overflow-hidden px-8 ${
        rank === "1" && "bg-[#fde047] text-white"
      }
  ${rank === "2" && "bg-[#cbd5e1] text-white"}
  ${rank === "3" && "bg-[#854d0e] text-white"}
rounded `}
    >
      <span class="font-medium  ">{score}</span>
    </div>
  );
};

export default ScoreAvatar;
