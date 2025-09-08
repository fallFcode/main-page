import * as React from "react";

type descriptionType = { children: React.ReactNode };

const Description = ({ children }: descriptionType) => {
  return <p className="text-lg">{children}</p>;
};

export default Description;
