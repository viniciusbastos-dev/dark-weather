import React from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
}

export default function Input({ leftIcon, rightIcon, ...props }: Props) {
  return (
    <label className="inline-block font-extralight text-2xl bg-branding-200 px-7 py-3 rounded-xl">
      {leftIcon && leftIcon}
      <input className="bg-transparent outline-none" {...props} />
      {rightIcon && rightIcon}
    </label>
  );
}
