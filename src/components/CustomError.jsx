import React from "react";

const CustomError = ({children}) => {
  return (
    <div className="mb-4 mt-2 text-red-600 font-bold text-xs">
      {children}
    </div>
  );
};

export default CustomError;
