import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { IMAGES } from "../../constant/assests";
import { listApi } from "../../api/commonApi";
import { APIS } from "../../api/endpoints";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const [partnerList, setPartnerList] = useState();
  /*API Call For Partner Data  */

  useEffect(() => {
    listApi(APIS.LIST_PARTNERS).then((result) => setPartnerList(result?.data));
  }, []);

  /*Return */

  return (
    <>
      <div className={styles.headerContainer}>
        <img src={IMAGES.LOGO} alt="Web Logo" className={styles.webLogoStyle} />
      </div>
      <div className={styles.listContainer}>
        {partnerList?.map((partner, index, arr) => {
          return (
            <div className={styles.itemContainer}>
              {partner?.profileImage ? (
                <img
                  src={partner?.profileImage}
                  alt={partner?.name}
                  className={styles.partnetProfileImage}
                />
              ) : (
                <div className={styles.profileAvatar}>
                  {partner?.name[0]}
                  {partner?.name[1]}
                </div>
              )}

              <div className={styles.partnerName}>{partner?.name}</div>
              <div className={styles.partnerName}>
                <img
                  src={IMAGES.RIGHT_ARROW}
                  alt="right-arrow"
                  className={styles.arrowStyle}
                  onClick={() => navigate(`/lb/${partner?.id}`)}
                />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
