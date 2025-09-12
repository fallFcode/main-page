import { IoLogoReact } from "react-icons/io5";
import Icon from "../elements/icon";
import { motion } from "motion/react";

const iconDev = [
  <IoLogoReact />,
  <IoLogoReact />,
  <IoLogoReact />,
  <IoLogoReact />,
];

const IconSkill = () => {
  const IconMotion = motion.create(Icon);
  return (
    <div className="flex w-full flex-wrap rounded-xl">
      <motion.div
        className="flex flex-wrap justify-center gap-4 h-fit"
        transition={{}}
      >
        {iconDev.map((icon, index) => (
          <Icon key={index} >
            {icon}
          </Icon>
        ))}
      </motion.div>
    </div>
  );
};

export default IconSkill;
