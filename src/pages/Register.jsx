import React from "react";
import { NavLink } from "react-router-dom";

const Register = () => {
  return (
    <div className="bg-gradient-to-r from-blue-700 h-full flex flex-col justify-center items-center">
      <form className="w-[500px]">
        <h1 className="font-bold">REGISTER</h1>
        <div className="mt-10 flex flex-col">
          <label htmlFor="username" className="font-semibold">
            Name
          </label>
          <input
            type="text"
            name="username"
            id="username"
            autoComplete="on"
            className="bg-transparent border border-b-[3px] rounded-md p-3"
          />
        </div>
        <div className="mt-10 flex flex-col">
          <label htmlFor="email" className="font-semibold">
            Email Address
          </label>
          <input
            type="text"
            name="email"
            id="email"
            autoComplete="on"
            className="bg-transparent border border-b-[3px] rounded-md p-3"
          />
        </div>
        <div className="mt-10 flex flex-col">
          <label htmlFor="password" className="font-semibold">
            Password
          </label>
          <input
            type="text"
            name="password"
            id="password"
            autoComplete="on"
            className="bg-transparent border border-b-[3px] rounded-md p-3"
          />
        </div>
        <div className="mt-10 flex flex-col">
          <label htmlFor="confirmpassword" className="font-semibold">
            Confirm Password
          </label>
          <input
            type="text"
            name="confirmpassword"
            id="confirmpassword"
            autoComplete="on"
            className="bg-transparent border border-b-[3px] rounded-md p-3"
          />
        </div>

        <button
          type="submit"
          disabled="true"
          className="bg-blue-600 mt-10 mb-5 p-2 text-white rounded-md flex m-auto transition ease-in hover:translate-y-1 hover:scale-110 hover:bg-blue-700 delay-150 duration-300"
        >
          Submit
        </button>
      </form>
      <div className="flex gap-1">
        <h1>Already have an account?</h1>
        <NavLink to="/login" className="text-blue-600 font-semibold">
          <i>Sign In</i>
        </NavLink>
      </div>
    </div>
  );
};

export default Register;
