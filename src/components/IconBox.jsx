import React from "react";
import PropTypes from "prop-types";

const IconBox = ({
  icon: Icon,
  bg = "bg-blue-200",
  color = "text-blue-500",
}) => {
  return (
    <div>
      <div className={`${bg} p-3 rounded-lg w-fit`}>
        <Icon className={color} />
      </div>
    </div>
  );
};

IconBox.prototype = {
  icon: PropTypes.elementType.isRequired,
  bg: PropTypes.string,
  color: PropTypes.string,
};

export default IconBox;
