// src/shared/Button.tsx
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type: "button" | "submit";
  colorScheme: "blue" | "gray";
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type,
  colorScheme,
}) => {
  const baseClass =
    "font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline";
  const colorClasses = {
    blue: "bg-blue-500 hover:bg-blue-700 text-white",
    gray: "bg-gray-500 hover:bg-gray-700 text-white",
  };

  return (
    <button
      className={`${baseClass} ${colorClasses[colorScheme]}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
