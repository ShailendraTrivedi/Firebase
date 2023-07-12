import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleLogin } from "./allFunctionData";
import Loader from "../App/Loader";
const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);

    await new Promise((resolve) => {
      setTimeout(async () => {
        await handleLogin({
          email,
          password,
          confirmPassword,
          navigate,
        });
        resolve();
      }, 120000); // 2 minutes in milliseconds
    });

    setLoading(false);
  };

  return (
    <>
      <div className="relative bg-my-image w-screem h-screen">
        {loading ? (
          <Loader />
        ) : (
          <div className="absolute left-[23rem] top-[20rem] w-[50rem] h-[18rem] bg-white rounded-2xl">
            <section className="flex flex-col items-center justify-between h-full">
              <span className="p-2 font-extrabold text-5xl bg-clip-text text-transparent bg-my-image">
                SignUp
              </span>
              <article className="w-[90%] space-y-2">
                <div className="flex justify-between">
                  <label htmlFor="email" className="">
                    Email:
                  </label>
                  <input
                    id="email"
                    type="text"
                    className="w-[80%] p-1 rounded text-black border-2 border-black"
                    placeholder="Enter Email Here..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="flex justify-between ">
                  <label htmlFor="password" className="">
                    Password:
                  </label>
                  <input
                    id="password"
                    type="password"
                    className="w-[80%] p-1 rounded text-black border-2 border-black"
                    placeholder="Enter Password Here..."
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="flex justify-between ">
                  <label htmlFor="confirmPassword" className="">
                    Confirm Password:
                  </label>
                  <input
                    id="confirmPassword"
                    type="password"
                    className="w-[80%] p-1 rounded text-black border-2 border-black"
                    placeholder="Enter Password Here..."
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
              </article>

              <span>
                <button
                  onClick={handleClick}
                  className="m-2 p-2 w-[10rem] rounded-xl text-white text-xl bg-my-image bg-transparent"
                >
                  Login
                </button>
              </span>
            </section>
          </div>
        )}
      </div>
    </>
  );
};

export default SignUp;
