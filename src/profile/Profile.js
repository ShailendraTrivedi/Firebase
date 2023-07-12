import React, { useEffect, useState } from "react";
import UserDetails from "./user_details/UserDetails";
import BasicInformation from "./basic_information/BasicInformation";
import BankDetails from "./bank_details/BankDetails";
import {
  get_userDetails,
  get_basicInformation,
  get_bankDetails,
} from "./allFunctionData";
import PopUpModel from "../popup/PopUpModel";
import { useNavigate } from "react-router-dom";
const Profile = () => {
  const navigate = useNavigate();
  const uid = localStorage.getItem("userID");
  const [userDetails, setUserDetails] = useState({});
  const [basicInformation, setBasicInformation] = useState({});
  const [bankDetails, setBankDetails] = useState({});
  useEffect(() => {
    get_userDetails({ uid, setUserDetails });
    get_basicInformation({ uid, setBasicInformation });
    get_bankDetails({ uid, setBankDetails });
  }, []);
  const [openPopUp, setPopUp] = useState(false);
  const [popUpTitle, setPopUpTite] = useState("");
  // console.log("poptitle = ", popUpTitle);
  const handlePopUp = () => {
    setPopUp(!openPopUp);
  };
  const handleLogout = () => {
    localStorage.clear();
    navigate("/signin");
  };
  return (
    <div className={`${openPopUp ? " bg-gray-300" : ""} h-screen w-screen`}>
      <div className="flex flex-col w-full h-full">
        {openPopUp && (
          <PopUpModel
            popUpTitle={popUpTitle}
            basicInformation={basicInformation}
            userDetails={userDetails}
            handlePopUp={handlePopUp}
          />
        )}
        <div className="text-4xl flex justify-around">
          Profile <span onClick={handleLogout}>Logout</span>
        </div>
        <div className="grid grid-cols-2 w-full h-full">
          <UserDetails
            setPopUpTite={setPopUpTite}
            userDetails={userDetails}
            handlePopUp={handlePopUp}
          />
          <div className="grid grid-row-4">
            <BasicInformation
              setPopUpTite={setPopUpTite}
              basicInformation={basicInformation}
              handlePopUp={handlePopUp}
            />
            <div className="row-span-3">
              <BankDetails bankDetails={bankDetails} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
