import React, { InputHTMLAttributes } from "react";

const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return (
    <input
      className="rounded-full px-4 py-2 w-full border focus:shadow-md truncate"
      {...props}
    />
  );
};

export default React.memo(Input);
