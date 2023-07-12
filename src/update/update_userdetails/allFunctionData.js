import React from "react";
import { db, doc, updateDoc } from "../../firebase";

const handleRegister = ({ user_Details, navigate }) => {
  localStorage.setItem("user_details", JSON.stringify(user_Details));
  console.log(user_Details);
  navigate("/signup");
  // Perform the registration logic
  // ...
};

const handleUpdate = async ({ uid, updatedFields }) => {
  try {
    await updateDoc(doc(db, uid, "user_details"), updatedFields);
    alert("Update Data !!");
  } catch (error) {
    console.log("Error updating user details:", error);
  }
};

const inputField = [
  {
    label: "First Name:",
    name: "account_holder_firstName",
    type: "text",
  },
  {
    label: "Last Name:",
    name: "account_holder_lastName",
    type: "text",
  },
  {
    label: "Gender:(Male/Female)",
    name: "account_holder_gender",
    type: "text",
  },
  {
    label: "Father's Name:",
    name: "account_holder_fatherName",
    type: "text",
  },
  {
    label: "Mother's Name:",
    name: "account_holder_motherName",
    type: "text",
  },
  {
    label: "Phone Number:",
    name: "account_holder_phone_no",
    type: "text",
  },
  {
    label: "Email Address:",
    name: "account_holder_email",
    type: "text",
  },
  {
    label: "Date Of Birth:",
    name: "account_holder_dob",
    type: "date",
  },
  {
    label: "Adhar Card:",
    name: "account_holder_aadhar_no",
    type: "text",
  },
  {
    label: "Pan Card:",
    name: "account_holder_pan_no",
    type: "text",
  },
  {
    label: "Address:",
    name: "account_holder_address",
    type: "text",
  },
  {
    label: "City:",
    name: "account_holder_city",
    type: "text",
  },
  {
    label: "State:",
    name: "account_holder_state",
    type: "text",
  },
  {
    label: "Country:",
    name: "account_holder_country",
    type: "text",
  },
  {
    label: "Pin Code:",
    name: "account_holder_pincode",
    type: "text",
  },
  {
    label: "Religion:",
    name: "account_holder_religion",
    type: "text",
  },
  {
    label: "Category",
    name: "account_holder_category",
    type: "text",
  },
  {
    label: "Qualification:",
    name: "account_holder_qualification",
    type: "text",
  },
  {
    label: "Occupation:",
    name: "account_holder_occupation",
    type: "text",
  },
  {
    label: "House Ownership:",
    name: "account_holder_house_ownership",
    type: "text",
  },
  {
    label: "Gross Income:",
    name: "account_holder_gross_income",
    type: "text",
  },
];
export { inputField, handleRegister, handleUpdate };
