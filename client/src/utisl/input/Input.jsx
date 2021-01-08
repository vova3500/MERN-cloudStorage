import React from "react";

import "./input.css";

const Input = ({ type, placeholder, value, setValue }) => {
  return (
    <div>
      <input
        onChange={(e) => setValue(e.target.value)}
        type={type}
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
};

export default Input;
