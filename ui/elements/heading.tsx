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
  let size = "text-6xl";
  if (as === "h2") size = "text-5xl";
  else if (as === "h3") size = "text-4xl";
  else if (as === "h4") size = "text-3xl";
  else if (as === "h5") size = "text-2xl";
  else if (as === "h6") size = "text-xl";

  return (
    <Tag className={cn("font-bold", size, className)} {...props} title={title}>
      {children}
    </Tag>
  );
}
