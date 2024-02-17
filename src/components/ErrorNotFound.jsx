import React from "react";
import { Link } from "react-router-dom";

const ErrorNotFound = () => {
  return (
    <div className="">
      <div className="flex justify-center">
        <img
          src="https://www.fiatprofessional.com/content/dam/moc/common/404-error/mobile/mobile_404.png"
          alt="error"
        />
      </div>
      <Link
        to="/"
        className="flex justify-center m-auto border p-4 w-[200px] rounded-lg bg-[#333] hover:bg-[#616060] text-white drop-shadow-lg ease-in-out duration-200"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorNotFound;
