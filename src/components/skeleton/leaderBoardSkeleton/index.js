import React from "react";
const emptyArray = [1, 2, 3, 4, 5, 6, 7];

const LeaderBoardSkeleton = () => {
  return (
    <div class="px-3 sm:px-5 animate-pulse">
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 ">
          <thead class="h-16 text-xs text-gray-700 uppercase  bg-[#ed5474]">
            <tr>
              <th scope="col" class="px-10 py-3">
                #
              </th>
              <th scope="col" class="px-6 py-3">
                Name
              </th>
              <th scope="col" class="px-6 py-3">
                Points
              </th>
            </tr>
          </thead>
          <tbody>
            {emptyArray?.map((item, index, arr) => {
              return (
                <tr class=" bg-white border-b cursor-pointer hover:bg-gray-50 ">
                  <td class="px-6 py-4">
                    <div
                      class={`relative bg-gray-200 inline-flex items-center justify-center w-10 h-10 overflow-hidden  rounded-full `}
                    ></div>
                  </td>
                  <th
                    scope="row"
                    class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap justify-start"
                  >
                    <div class="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full "></div>
                    <div class=" bg-gray-200 flex rounded pl-3 ml-3 ">
                      <div class="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                    </div>
                  </th>
                  <td class="px-6 py-4">
                    <div
                      class={` bg-gray-200 relative inline-flex items-center justify-center w-10 h-10 overflow-hidden px-8 rounded `}
                    ></div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default LeaderBoardSkeleton;
