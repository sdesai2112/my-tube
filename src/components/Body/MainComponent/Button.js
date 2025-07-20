import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="px-5 py-2 bg-gray-200 whitespace-nowrap rounded-lg mx-2 my-5">
        {name}
      </button>
    </div>
  );
};

export default Button;
