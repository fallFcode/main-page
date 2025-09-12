import { cn } from "@/utils/cn";
import { ClassValue } from "clsx";
import React from "react";

type HeadingProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
  className?: ClassValue;
  title?: string;
} & React.HTMLAttributes<HTMLHeadingElement>;

export function Heading({
  as = "h1",
  className,
  children,
  title,
  ...props
}: HeadingProps) {
  const Tag = as;
  let size = "text-4xl md:text-5xl lg:text-6xl font-bold";
  if (as === "h2") size = "text-3xl md:text-4xl lg:text-5xl font-semibold";
  else if (as === "h3") size = "text-2xl md:text-3xl lg:text-4xl font-semibold";
  else if (as === "h4") size = "text-xl md:text-2xl font-medium";
  else if (as === "h5") size = "text-lg md:text-xl font-medium";
  else if (as === "h6") size = "text-base md:text-lg font-medium";

  return (
    <Tag className={cn("font-bold", size, className)} {...props} title={title}>
      {children}
    </Tag>
  );
}
