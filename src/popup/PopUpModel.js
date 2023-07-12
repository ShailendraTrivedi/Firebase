import React from "react";
import UpdateUserDetails from "../update/update_userdetails/UpdateUserDetails";
import { RxCrossCircled } from "react-icons/rx";
import UpdateSensitive from "../update/update_sentivedata/UpdateSensitive";
const PopUpModel = ({
  popUpTitle,
  basicInformation,
  userDetails,
  handlePopUp,
}) => {
  return (
    <div class="absolute top-[5rem] left-[15rem] bg-white">
      <button
        className="absolute -top-3 -right-1 bg-white text-3xl rounded-[100%] border-2 border-black"
        onClick={handlePopUp}
      >
        <RxCrossCircled />
      </button>
      {popUpTitle == "details" && (
        <UpdateUserDetails userDetails={userDetails} />
      )}
      {popUpTitle == "password" && (
        <UpdateSensitive basicInformation={basicInformation} />
      )}
    </div>
  );
};

export default PopUpModel;
