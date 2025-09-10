import { cn } from "@/utils/cn";
import * as React from "react";
import { IoLogoReact } from "react-icons/io5";

type IconProps = {
  className?: string;
  children:React.ReactNode
};

const Icon = ({ children,className }: IconProps) => {
  return (
    <div className={cn("p-2 text-4xl bg-stone-500 rounded-xl grid place-content-center", className)}>
      {children}
    </div>
  );
};

export default Icon;
