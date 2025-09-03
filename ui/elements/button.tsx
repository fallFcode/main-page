import { cva } from "class-variance-authority";
import * as React from "react";


const button = cva("btn", {
  variants: {
    size: {
      small: "px-2 py-1 text-sm",
      medium: "px-4 py-2 text-base",
      large: "px-6 py-3 text-lg",
    },
    color: {
      primary: "bg-blue-600 text-white hover:bg-blue-700",
      secondary: "bg-gray-600 text-white hover:bg-gray-700",
    },
    style: {
      solid: "border-none",
      outline: "border border-gray-300 bg-transparent",
      ghost: "bg-transparent hover:bg-gray-100",
    },
  },
  defaultVariants: {
    size: "medium",
    color: "primary",
  },
});


export type ButtonType = {
  color?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  icon: React.ReactNode;
  children: React.ReactNode;
};

const Button = ({ color, size, icon, children }: ButtonType) => {
  return (
    <button className={button({ color, size })}>
      {icon}
      {children}
    </button>
  );
};

export default Button;
