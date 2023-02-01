import React from "react";
import { useNavigate } from "react-router-dom";

const NavBar = ({ id }) => {
  const navigate = useNavigate();

  return (
    <nav class="bg-white shadow-md">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
          <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">
            <div class=" sm:ml-6 sm:block">
              <div class="flex space-x-4 ">
                <button
                  class="text-gray-300 hover:text-[#0369a1]  px-3 py-2 rounded-md text-sm font-medium"
                  onClick={() => navigate(`/lb/${id}`)}
                >
                  LeaderBoard
                </button>

                <button
                  class="text-gray-300 hover:text-[#0369a1]  px-3 py-2 rounded-md text-sm font-medium"
                  onClick={() => navigate(`/ct/${id}`)}
                >
                  Contest
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
