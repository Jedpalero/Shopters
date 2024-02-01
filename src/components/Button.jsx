import React from "react";

const Button = ({ onClickHandler, value, title }) => {
  return (
    <button
      onClick={onClickHandler}
      value={value}
      className="bg-neutral-800 hover:bg-neutral-600 transition hover:translate-x-1 ease-in-out w-[80px] p-2 text-center rounded-full cursor-pointer"
    >
      {title}
    </button>
  );
};

export default Button;
