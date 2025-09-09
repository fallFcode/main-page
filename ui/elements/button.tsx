import { cn } from "@/utils/cn";
import { cva } from "class-variance-authority";
import { ClassValue } from "clsx";
import * as React from "react";

const button = cva("btn", {
  variants: {
    size: {
      small: "px-2 py-1 text-sm",
      medium: "px-4 py-2 text-base",
      large: "px-6 py-3 text-lg",
    },
    color: {
      primary: "bg-primary text-white hover:bg-secondary",
      secondary: "bg-secondary text-white hover:bg-primary",
      tertiary: " bg-tertiary text-white hover:bg-gray-700",
    },
    style: {
      solid: "border-none rounded-xl",
      outline: "border border-gray-300 bg-transparent rounded-xl",
      ghost: "bg-transparent hover:bg-gray-900",
    },
  },
  defaultVariants: {
    size: "medium",
    color: "primary",
  },
});

export type ButtonType = {
  color?: "primary" | "secondary" | "tertiary";
  size?: "small" | "medium" | "large";
  className?: ClassValue;
  styleButton: "solid" | "outline" | "ghost";
  onClick?: () => void;
  icon?: React.ReactNode;
  children: React.ReactNode;
};

const Button = ({
  color,
  size,
  icon,
  style,
  className,
  children,
  ...props
}: ButtonType & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={button({
        color,
        size,
        style,
        className: cn("flex-center gap-2 flex-wrap cursor-pointer", className),
      })}
      {...props}
    >
      {icon}
      {children}
    </button>
  );
};

export default Button;
