import React, { useEffect } from "react";
import { auth } from "../../firebase";
import { updatePassword } from "firebase/auth";

const newlyPaaword = () => {
  return "Shailendra";
};
const UpdateSensitive = ({ basicInformation }) => {
    const user = "s@gmail.com";
    const newPassword = newlyPaaword();
    updatePassword(user, newPassword)
    .then(() => {
      console.log("Done");
      // Update successful.
    })
    .catch((error) => {
        console.log("No");
        // an error is there
        // ...
    });
  return (
    <section className="w-[60rem] h-[35rem] overflow-y-scroll flex flex-col items-center justify-between">
      <span className="p-2 font-extrabold text-5xl bg-clip-text text-transparent bg-my-image">
        Update Password
      </span>
      <button>Change</button>
    </section>
  );
};

export default UpdateSensitive;
