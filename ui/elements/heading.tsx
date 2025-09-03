import { cn } from "@/utils/cn";
import React from "react";

type HeadingProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
};

export function Heading({ as = "h1", children }: HeadingProps) {
  const Tag = as;
  return <Tag className={cn("font-semibold")}>{children}</Tag>;
}
