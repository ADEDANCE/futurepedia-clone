import React from "react";

const AuthorInfo = ({ image, name, role, hidden }) => {
  return (
    <div className={`flex gap-6 py-7 items-center ${hidden}`}>
      <img src={image} alt={name} className="w-24 rounded-4xl" />

      <div>
        <p className="text-black text-3xl font-bold">{name}</p>
        <p className="text-gray-600 font-medium">{role}</p>
      </div>
    </div>
  );
};

export default AuthorInfo;
