import React from "react";
import RankAvatar from "../../rankAvatar";
import ProfileAvatar from "../../profileAvatar";
import ScoreAvatar from "../../scoreAvatar";

const LeaderBoardTable = ({ listLeaderBoard }) => {
  return (
    <div class="px-3 sm:px-5">
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 ">
          <thead class="h-16 text-xs text-white uppercase bg-[#ed5474] ">
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
            {listLeaderBoard?.map((partner, index, arr) => {
              return (
                <tr class=" bg-white border-b cursor-pointer	hover:bg-gray-50 ">
                  <td class="px-6 py-4">
                    <RankAvatar rank={partner?.rank} />
                  </td>
                  <th
                    scope="row"
                    class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap justify-start"
                  >
                    <ProfileAvatar
                      profileImg={partner?.userData?.profileImg}
                      name={partner?.userData?.name}
                    />

                    <div class="pl-3">
                      <div class="text-base font-semibold">
                        {partner?.userData?.name}
                      </div>
                    </div>
                  </th>
                  <td class="px-6 py-4">
                    <ScoreAvatar rank={partner?.rank} score={partner?.score} />
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

export default LeaderBoardTable;
