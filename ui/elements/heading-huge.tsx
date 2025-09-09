import * as React from "react";
import { Heading } from "./heading";
import { cn } from "@/utils/cn";
import { Inter } from "next/font/google";
import { ClassValue } from "clsx";
import React from "react";

const inter = Inter({
  weight: ["900"],
  subsets: ["latin"],
});

type HeadingGiantProps = {
  className?: ClassValue;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLSpanElement>;

const HeadingGiant = ({ className, children, ...props }: HeadingGiantProps) => {
  return (
    <span className={cn("text-9xl", inter.className, className)} {...props}>
      {children}
    </span>
  );
};

export default HeadingGiant;
