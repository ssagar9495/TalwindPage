import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { listApi } from "../../api/commonApi";
import { APIS } from "../../api/endpoints";
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/navBar";
// import Moment from "react-moment";
import moment from "moment";

// import mom

const Contest = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [contestList, setContestList] = useState();

  /*API Call For Partner Data  */

  useEffect(() => {
    listApi(APIS.LIST_CONTEST, { partnerId: id }).then((result) =>
      setContestList(result?.data)
    );
  }, []);

  return (
    <>
      <NavBar id={id} />
      <div class="pt-10 pb-10 justify-center  sm:px-5  ">
        {contestList?.map((item, index, arr) => {
          return (
            <div class="flex  mt-6 justify-center ">
              {console.log("date=>", item?.startDateTime)}
              <div
                class="flex w-1/2 justify-between items-center
              rounded-bl-lg rounded-tl-lg rounded-tr-lg rounded-br-lg  pl-5 bg-[#ed5474]"
              >
                <div class="justify-center text-white">
                  <div> {item?.name}</div>

                  {`${moment(item?.startDateTime).format(
                    "MMM DD YYYY hh:mm a"
                  )}`}

                  {/* <Moment
                    format="MMM DD YYYY hh:mm a"
                    data={item?.startDateTime}
                  ></Moment> */}
                </div>
                <img
                  class="w-32 h-34 rounded-full"
                  src={item?.imageLink}
                  alt="Rounded avatar"
                />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Contest;
