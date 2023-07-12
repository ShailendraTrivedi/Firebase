import React, { useEffect, useState } from "react";
import { inputField, handleRegister, handleUpdate } from "./allFunctionData";
import { useNavigate } from "react-router-dom";

const UpdateUserDetails = ({ userDetails }) => {
  const uid = localStorage.getItem("userID");
  const navigate = useNavigate();
  const [updatedFields, setUpdatedFields] = useState({});

  useEffect(() => {
    setUpdatedFields(userDetails);
  }, [userDetails]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedFields((prevState) => ({
      ...prevState,
      [name]: value || "", // Set an empty string if value is initially undefined
    }));
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const base64Data = reader.result;
      setUpdatedFields((prevState) => ({
        ...prevState,
        account_holder_photo: base64Data,
      }));
    };
    reader.readAsDataURL(file);
  };

  return (
    <section className="w-[60rem] h-[35rem] overflow-y-scroll flex flex-col items-center justify-between">
      <span className="p-2 font-extrabold text-5xl bg-clip-text text-transparent bg-my-image">
        Update User Details
      </span>
      <article className="w-[90%] space-y-2">
        {inputField.map((item, i) => {
          const { label, name, type, placeholder } = item;
          return (
            <div key={i} className="flex justify-between">
              <label htmlFor={name}>{label}:</label>
              <input
                name={name}
                type={type}
                className="w-[80%] p-1 rounded text-black border-2 border-black"
                placeholder={placeholder}
                value={updatedFields[name]}
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
          onClick={() => handleUpdate({ uid, updatedFields })}
          className="m-2 p-2 w-[10rem] rounded-xl text-white text-xl bg-my-image bg-transparent"
        >
          Update
        </button>
      </span>
    </section>
  );
};

export default UpdateUserDetails;
