import React, { useEffect, useState } from "react";

const BankDetails = ({ bankDetails }) => {
  const data = [
    {
      label: "Account Number",
      name: "account_number",
      value: bankDetails.account_number,
    },
    {
      label: "IFSC Code",
      name: "account_ifsccode",
      value: bankDetails.account_ifsccode,
    },
    {
      label: "Branch Name",
      name: "branch_name",
      value: bankDetails.branch_name,
    },
    {
      label: "Branch Area",
      name: "branch_area",
      value: bankDetails.branch_area,
    },
    {
      label: "Branch City",
      name: "branch_city",
      value: bankDetails.branch_city,
    },
    {
      label: "Branch State",
      name: "branch_state",
      value: bankDetails.branch_state,
    },
    {
      label: "Branch Country",
      name: "branch_country",
      value: bankDetails.branch_country,
    },
    {
      label: "Branch PinCode",
      name: "branch_pincode",
      value: bankDetails.branch_pincode,
    },
  ];
  const renderField = (input) => {
    return (
      <div className="flex justify-between w-[20rem]">
        {input.label}:<div>{input.value}</div>
      </div>
    );
  };
  return (
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
    </div>
  );
};

export default BankDetails;
