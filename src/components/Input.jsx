import React from "react";

const Input = ({ handleChange, value, title, name, color }) => {
  return (
    <label className="flex place-content-center hover:bg-neutral-700 cursor-pointer">
      <input onChange={handleChange} type="radio" value={value} name={name} />
      <span className="checkmark" style={{ backgroundColor: color }}></span>
      {title}
    </label>
  );
};

export default Input;
