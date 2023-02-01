import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { listApi } from "../../api/commonApi";
import { APIS } from "../../api/endpoints";
import NavBar from "../../components/navBar";
import TableHeading from "../../components/tableHeading";
import LeaderBoardTable from "../../components/table/leaderBoardTable";
import LeaderBoardSkeleton from "../../components/skeleton/leaderBoardSkeleton";

const data = [1, 2, 3, 4, 5];

const LeaderBoard = () => {
  const { id } = useParams();

  const [listLeaderBoard, setListLeaderBoard] = useState();
  const [partnerName, setPartnerName] = useState();

  /*API Call For Partner Data  */

  useEffect(() => {
    listApi(APIS.LIST_LEADERBOARD, { partnerId: id }).then((result) => {
      setListLeaderBoard(result?.data);
      setPartnerName(result?.partnerData?.name);
    });
  }, []);

  /*Return */

  return (
    <>
      <NavBar id={id} />
      <TableHeading partnerName={partnerName} />
      {listLeaderBoard ? (
        <LeaderBoardTable listLeaderBoard={listLeaderBoard} />
      ) : (
        <LeaderBoardSkeleton />
      )}
    </>
  );
};
export default LeaderBoard;
