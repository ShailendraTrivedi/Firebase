import React, { useEffect, useState } from "react";
const UserDetails = ({ setPopUpTite, userDetails, handlePopUp }) => {
  const data = [
    {
      label: "First Name",
      name: "account_holder_firstName",
      value: userDetails.account_holder_firstName,
    },
    {
      label: "Last Name",
      name: "account_holder_lastName",
      value: userDetails.account_holder_lastName,
    },
    {
      label: "Gender",
      name: "account_holder_gender",
      value: userDetails.account_holder_gender,
    },
    {
      label: "Father's Name",
      name: "account_holder_fatherName",
      value: userDetails.account_holder_fatherName,
    },
    {
      label: "Mother's Name",
      name: "account_holder_motherName",
      value: userDetails.account_holder_motherName,
    },
    {
      label: "Contact Number",
      name: "account_holder_phone_no",
      value: userDetails.account_holder_phone_no,
    },
    {
      label: "Email",
      name: "account_holder_email",
      value: userDetails.account_holder_email,
    },
    {
      label: "Date of Birth",
      name: "account_holder_dob",
      value: userDetails.account_holder_dob,
    },
    {
      label: "Adhar number",
      name: "account_holder_aadhar_no",
      value: userDetails.account_holder_aadhar_no,
    },
    {
      label: "PAN Number",
      name: "account_holder_pan_no",
      value: userDetails.account_holder_pan_no,
    },
    {
      label: "Address",
      name: "account_holder_address",
      value: userDetails.account_holder_address,
    },
    {
      label: "City",
      name: "account_holder_city",
      value: userDetails.account_holder_city,
    },
    {
      label: "State",
      name: "account_holder_state",
      value: userDetails.account_holder_state,
    },
    {
      label: "Country",
      name: "account_holder_country",
      value: userDetails.account_holder_country,
    },
    {
      label: "PIN Code",
      name: "account_holder_pincode",
      value: userDetails.account_holder_pincode,
    },
    {
      label: "Religion",
      name: "account_holder_religion",
      value: userDetails.account_holder_religion,
    },
    {
      label: "Category",
      name: "account_holder_category",
      value: userDetails.account_holder_category,
    },
    {
      label: "Qualification",
      name: "account_holder_qualification",
      value: userDetails.account_holder_qualification,
    },
    {
      label: "Occupation",
      name: "account_holder_occupation",
      value: userDetails.account_holder_occupation,
    },
    {
      label: "House Ownership",
      name: "account_holder_house_ownership",
      value: userDetails.account_holder_house_ownership,
    },
    {
      label: "Gross Income",
      name: "account_holder_gross_income",
      value: userDetails.account_holder_gross_income,
    },
    // Add more field data objects here
  ];
  const renderField = (input) => {
    return (
      <div className="flex justify-between w-[20rem]">
        {input.label}:<div>{input.value}</div>
      </div>
    );
  };
  const Edit = () => {
    setPopUpTite("details");
    handlePopUp();
  };
  return (
    <div className="flex flex-col justify-around border-4 border-black w-full h-full">
      <div className="flex justify-around items-center">
        <img
          src={userDetails.account_holder_photo}
          alt=""
          className="h-20 w-20"
        />
        <div>
          <button
            onClick={Edit}
            className="bg-blue-700 w-[10rem] h-[2rem] rounded text-white"
          >
            Edit
          </button>
        </div>
      </div>
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
    </div>
  );
};

export default UserDetails;
