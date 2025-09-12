import { cn } from "@/utils/cn";
import * as React from "react";
import { IoLogoReact } from "react-icons/io5";

type IconProps = {
  className?: string;
  children: React.ReactNode;
};

const Icon = ({ children, className }: IconProps) => {
  return (
    <div
      className={cn(
        "bg-secondary grid aspect-square w-12 place-content-center rounded-xl p-0 text-xl md:p-1 md:text-2xl lg:text-4xl",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Icon;
