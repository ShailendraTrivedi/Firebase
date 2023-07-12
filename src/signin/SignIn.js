import React, { useState } from "react";
import { auth, signInWithEmailAndPassword } from "../firebase";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    SignInAuthentication();
  };
  const SignInAuthentication = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert("Login SuccessFully !!!");
        localStorage.setItem("userID",user.uid);
        navigate("/profile");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  return (
    <>
      <div className="relative bg-my-image w-screem h-screen">
        <div className="absolute left-[23rem] top-[18rem] w-[30rem] h-[15rem] bg-white rounded-2xl">
          <section className="flex flex-col items-center justify-between h-full">
            <span className="p-2 font-extrabold text-5xl bg-clip-text text-transparent bg-my-image">
              Login
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
            </article>

            <span>
              <button
                onClick={handleLogin}
                className="m-2 p-2 w-[10rem] rounded-xl text-white text-xl bg-my-image bg-transparent"
              >
                Login
              </button>
            </span>
          </section>
        </div>
      </div>
    </>
  );
};

export default SignIn;
