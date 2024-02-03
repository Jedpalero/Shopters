import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { MyContext } from "../MyContext";

const Login = () => {
  const { handleSignin, handleCredentials, error } = useContext(MyContext);

  return (
    <div className="bg-gradient-to-r from-blue-700 h-full flex flex-col justify-center items-center">
      <div className="bg-[#f5f5f5] md:w-[600px] md:h-[600px] w-[350px] h-[550px] rounded-lg">
        <div className="flex items-center gap-3 p-3">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxqlNk5NyNFgk6GT-5bGk2Wrl635pp-0hn9w&usqp=CAU"
            alt="shopping logo"
            className="md:w-[70px] md:h-[70px] w-[55px] h-[55px]"
          />
          <h1 className="md:text-3xl text-xl text-black font-bold">ShopTers</h1>
        </div>
        <form className="md:w-[500px] w-[300px] m-auto mt-5">
          <h1 className="font-bold">SIGN IN</h1>
          <div className="mt-10 flex flex-col">
            <label htmlFor="email" className="font-semibold">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="on"
              className="bg-transparent drop-shadow-lg border border-gray-300 rounded-md p-3"
              onChange={handleCredentials}
            />
          </div>
          <div className="mt-10 flex flex-col">
            <label htmlFor="password" className="font-semibold">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              autoComplete="on"
              className="bg-transparent drop-shadow-lg border border-gray-300  rounded-md p-3"
              onChange={handleCredentials}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-700 mt-10 mb-5 p-3 w-[100px] text-white rounded-md flex m-auto font-semibold justify-center transition ease-in hover:translate-y-1 hover:scale-110 hover:bg-blue-800 duration-300"
            onClick={(e) => handleSignin(e)}
          >
            Sign in
          </button>
        </form>
        <div className="flex gap-1 justify-center">
          <h1>No Account Yet?</h1>
          <NavLink to="/register" className="text-blue-700 font-semibold">
            <i>Register</i>
          </NavLink>
        </div>
        {error && <div className="text-red-600 text-center mt-4">{error}</div>}
      </div>
    </div>
  );
};

export default Login;
