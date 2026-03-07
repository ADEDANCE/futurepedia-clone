import React from "react";

const Button = ({ children, onClick, className }) => {
  return (
    <button onClick={onClick} className={`px-6 py-3 rounded-full ${className}`}>
      {children}
    </button>
  );
};

export default Button;
