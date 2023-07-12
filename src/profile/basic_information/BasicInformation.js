import React, { useEffect, useState } from "react";
const BasicInformation = ({ setPopUpTite, basicInformation, handlePopUp }) => {
  const data = [
    {
      label: "User Name",
      name: "user_email",
      value: basicInformation.user_email,
    },
    {
      label: "Id",
      name: "user_id",
      value: basicInformation.user_id,
    },
    {
      label: "Password",
      name: "user_password",
      value: basicInformation.user_password,
    },
  ];
  const renderField = (input) => {
    return (
      <div className="flex justify-between w-[20rem]">
        {input.label}:<div>{input.value}</div>
      </div>
    );
  };
  const Edit = () => {
    setPopUpTite("password");
    handlePopUp();
  };
  return (
    <>
      <div className="flex flex-col justify-around border-4 border-black w-full h-full">
        {data.map((item, i) => {
          const { label, name, value } = item;
          const input = {
            label,
            name,
            value,
          };
          return (
            <div className="" key={i}>
              {renderField(input)}
            </div>
          );
        })}
        <button onClick={Edit} className="">
          Reset Password
        </button>
      </div>
    </>
  );
};

export default BasicInformation;
