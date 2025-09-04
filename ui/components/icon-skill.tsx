import { IoLogoReact } from "react-icons/io5";
import Icon from "../elements/icon";

const iconDev = [
  <IoLogoReact />,
  <IoLogoReact />,
  <IoLogoReact />,
  <IoLogoReact />,
];

const IconSkill = () => {
  return (
    <div className="flex-wrap rounded-xl flex ">
      <div className="flex flex-wrap justify-center gap-4">
        {iconDev.map((icon, index) => (
          <Icon key={index} icon={icon} />
        ))}
      </div>
    </div>
  );
};

export default IconSkill;
