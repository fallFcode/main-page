import { cn } from "@/utils/cn";
import { ClassValue } from "clsx";
import * as React from "react";

type descriptionType = { children: React.ReactNode; className?: ClassValue };

const Description = ({ children, className }: descriptionType) => {
  return <p className={cn("text-base md:text-md lg:text-lg", className)}>{children}</p>;
};

export default Description;
