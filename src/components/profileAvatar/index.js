import React from "react";

const ProfileAvatar = ({ profileImg, name }) => {
  return (
    <>
      {profileImg ? (
        <img
          class="w-10 h-10 rounded-full"
          src={profileImg}
          alt="Rounded avatar"
        />
      ) : (
        <div class="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full ">
          <span class="font-medium text-gray-600 uppercase">{name[0]}</span>
        </div>
      )}
    </>
  );
};

export default ProfileAvatar;
