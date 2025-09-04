import { cn } from "@/utils/cn";
import React from "react";

type HeadingProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLHeadingElement>;

export function Heading({ as = "h1", children, ...props }: HeadingProps) {
  const Tag = as;
  return (
    <Tag className={cn("font-semibold")} {...props}>
      {children}
    </Tag>
  );
}
