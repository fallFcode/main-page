import { cn } from "@/utils/cn";
import { ClassValue } from "clsx";
import * as React from "react";

type descriptionType = { children: React.ReactNode; className?: ClassValue };

const Description = ({
  children,
  className,
  ...props
}: descriptionType & React.ButtonHTMLAttributes<HTMLParagraphElement>) => {
  return (
    <p className={cn("md:text-md text-base lg:text-lg", className)} {...props}>
      {children}
    </p>
  );
};

export default Description;
