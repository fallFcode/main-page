import * as React from "react";
import { IoLogoReact } from "react-icons/io5";

type IconProps = {};

const Icon = (props) => {
  return (
    <div className="p-2 text-4xl bg-stone-500 rounded-xl flex ">
      <IoLogoReact />
    </div>
  );
};

export default Icon;
