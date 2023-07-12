import React from "react";
import {
  db,
  collection,
  addDoc,
  auth,
  setDoc,
  doc,
  createUserWithEmailAndPassword,
} from "../firebase";

const handleLogin = async ({ email, password, navigate }) => {
  const bank_details = {
    account_number: await generateAccountNumber(),
    account_ifsccode: generateIFSCCode(),
    branch_name: "Paradise Bank",
    branch_area: "aasiyan",
    branch_city: "LKO",
    branch_state: "UP",
    branch_country: "India",
    branch_pincode: "226012",
    account_type: "saving",
    account_status: "active",
  };
  const account_details = {
    total_balance: 0,
    total_income: 0,
    total_saving: 0,
    total_expensive: 0,
  };
  const user_details = JSON.parse(localStorage.getItem("user_details"));
  if (user_details && bank_details && account_details) {
    localStorage.clear();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      const sensitive_informations = {
        user_id: user.uid,
        user_email: email,
        user_password: password,
      };

      await setDoc(doc(db, user.uid, "user_details"), user_details);
      await setDoc(
        doc(db, user.uid, "sensitive_informations"),
        sensitive_informations
      );
      await setDoc(doc(db, user.uid, "account_details"), account_details);
      await setDoc(doc(db, user.uid, "bank_details"), bank_details);
      navigate("/signin");
      // ...
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      // Handle the error
    }
  } else {
    alert("Lost Data !!!");
    navigate("/register");
    localStorage.clear();
  }
};

const generateAccountNumber = async () => {
  const digits = "0123456789";
  let accountNumber = "";

  for (let i = 0; i < 12; i++) {
    const randomIndex = Math.floor(Math.random() * digits.length);
    accountNumber += digits.charAt(randomIndex);
  }

  return accountNumber;
};

const generateIFSCCode = () => {
  const branchCode = "ST"; // Replace with your branch code

  // Generate a random 8-digit number for the IFSC code
  const randomDigits = Math.floor(Math.random() * 90000000) + 10000000;

  const ifscCode = `${branchCode.charAt(0)}${randomDigits}${branchCode.charAt(
    1
  )}`;

  return ifscCode;
};

const allFunctionData = () => {
  return <div></div>;
};

export default allFunctionData;
export { handleLogin };
