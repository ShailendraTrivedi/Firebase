import React, { useState } from "react";
import { inputField } from "./allFunctionData";
import { handleRegister } from "./allFunctionData";
import { useNavigate } from "react-router-dom";

const UserDetails = () => {
  const navigate = useNavigate();
  const [user_Details, setUser_Details] = useState({
    account_holder_firstName: "Shailendra",
    account_holder_lastName: "Trivedi",
    account_holder_gender: "Male",
    account_holder_fatherName: "Radhey Shyam Trivedi",
    account_holder_motherName: "Anju Trivedi",
    account_holder_phone_no: "9453292015",
    account_holder_email: "s@gmail.com",
    account_holder_dob: "2023-01-01",
    account_holder_aadhar_no: "294729475928",
    account_holder_pan_no: "CBDA1234",
    account_holder_address: "L.D.A Colony",
    account_holder_city: "Lucknow",
    account_holder_state: "Utter Pradesh",
    account_holder_country: "India",
    account_holder_pincode: "226012",
    account_holder_photo: null,
    account_holder_religion: "Hindu",
    account_holder_category: "General",
    account_holder_occupation: "Student",
    account_holder_qualification: "B.Tech",
    account_holder_house_ownership: "Yes",
    account_holder_gross_income: 2000000,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser_Details((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const base64Data = reader.result;
      setUser_Details((prevItem) => ({
        ...prevItem,
        account_holder_photo: base64Data,
      }));
    };
    reader.readAsDataURL(file);
  };

  return (
    <section className="flex flex-col items-center justify-between h-full">
      <span className="p-2 font-extrabold text-5xl bg-clip-text text-transparent bg-my-image">
        User Details
      </span>
      <article className="w-[90%] space-y-2">
        {inputField.map((item, i) => {
          const { label, name, type, placeholder } = item;
          return (
            <div key={i} className="flex justify-between">
              <label htmlFor={name}>{label}</label>
              <input
                name={name}
                type={type}
                className="w-[80%] p-1 rounded text-black border-2 border-black"
                placeholder={placeholder}
                value={user_Details[name]}
                onChange={handleInputChange}
              />
            </div>
          );
        })}
        <div className="flex justify-between">
          <label>Upload Profile Photo:</label>
          <input
            type="file"
            className="w-[80%] p-1 rounded text-black border-2 border-black"
            onChange={handlePhotoUpload}
          />
        </div>
      </article>
      <span>
        <button
          onClick={() => handleRegister({ user_Details,navigate })}
          className="m-2 p-2 w-[10rem] rounded-xl text-white text-xl bg-my-image bg-transparent"
        >
          Next
        </button>
      </span>
    </section>
  );
};

export default UserDetails;
