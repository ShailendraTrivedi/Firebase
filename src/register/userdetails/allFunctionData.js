import React from "react";

const handleRegister = ({ user_Details, navigate }) => {
  localStorage.setItem("user_details", JSON.stringify(user_Details));
  console.log(user_Details);
  navigate("/signup");
  // Perform the registration logic
  // ...
};

const inputField = [
  {
    label: "First Name:",
    name: "account_holder_firstName",
    type: "text",
    placeholder: "Enter First Name...",
  },
  {
    label: "Last Name:",
    name: "account_holder_lastName",
    type: "text",
    placeholder: "Enter Last Name...",
  },
  {
    label: "Gender:(Male/Female)",
    name: "account_holder_gender",
    type: "text",
    placeholder: "Enter Gender...",
  },
  {
    label: "Father's Name:",
    name: "account_holder_fatherName",
    type: "text",
    placeholder: "Enter Father's Name...",
  },
  {
    label: "Mother's Name:",
    name: "account_holder_motherName",
    type: "text",
    placeholder: "Enter Mother's Name:...",
  },
  {
    label: "Phone Number:",
    name: "account_holder_phone_no",
    type: "text",
    placeholder: "Enter Phone Number...",
  },
  {
    label: "Email Address:",
    name: "account_holder_email",
    type: "text",
    placeholder: "Enter Email Address...",
  },
  {
    label: "Date Of Birth:",
    name: "account_holder_dob",
    type: "date",
    placeholder: "Enter Date Of Birth...",
  },
  {
    label: "Adhar Card:",
    name: "account_holder_aadhar_no",
    type: "text",
    placeholder: "Enter Adhar Card...",
  },
  {
    label: "Pan Card:",
    name: "account_holder_pan_no",
    type: "text",
    placeholder: "Enter Pan Card...",
  },
  {
    label: "Address:",
    name: "account_holder_address",
    type: "text",
    placeholder: "Enter Address...",
  },
  {
    label: "City:",
    name: "account_holder_city",
    type: "text",
    placeholder: "Enter City...",
  },
  {
    label: "State:",
    name: "account_holder_state",
    type: "text",
    placeholder: "Enter State...",
  },
  {
    label: "Country:",
    name: "account_holder_country",
    type: "text",
    placeholder: "Enter Country...",
  },
  {
    label: "Pin Code:",
    name: "account_holder_pincode",
    type: "text",
    placeholder: "Enter Pin Code...",
  },
  {
    label: "Religion:",
    name: "account_holder_religion",
    type: "text",
    placeholder: "Enter Religion...",
  },
  {
    label: "Category",
    name: "account_holder_category",
    type: "text",
    placeholder: "Enter Category...",
  },
  {
    label: "Qualification:",
    name: "account_holder_qualification",
    type: "text",
    placeholder: "Enter Qualification...",
  },
  {
    label: "Occupation:",
    name: "account_holder_occupation",
    type: "text",
    placeholder: "Enter Occupation:...",
  },
  {
    label: "House Ownership:",
    name: "account_holder_house_ownership",
    type: "text",
    placeholder: "Enter House Ownership...",
  },
  {
    label: "Gross Income:",
    name: "account_holder_gross_income",
    type: "text",
    placeholder: "Enter Gross Income...",
  },
];
export { inputField, handleRegister };
