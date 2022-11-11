import React, { InputHTMLAttributes } from "react";

const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return (
    <input
      className="rounded-full px-4 py-2 w-full border focus:shadow-md transition-all ease-out"
      {...props}
    />
  );
};

export default React.memo(Input);
