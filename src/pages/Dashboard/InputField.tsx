import React from "react";
import Input from "../../components/Input";

interface InputFieldProps {
  label: string;
  name: string;
  value: string | number;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  type?: React.HTMLInputTypeAttribute;
}

const InputField: React.FC<InputFieldProps> = ({ label, ...rest }) => {
  return (
    <div className="flex items-center justify-center">
      <label className="w-1/2">{label}:</label>
      <div className="w-full">
        <Input {...rest} />
      </div>
    </div>
  );
};

export default React.memo(InputField);
