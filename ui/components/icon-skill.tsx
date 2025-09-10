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
  const IconMotion = motion.create(Icon)
  return (
    <div className="flex-wrap rounded-xl flex w-full">
      <motion.div className="flex flex-wrap justify-center gap-4"
      transition={{}}
      >
        {iconDev.map((icon, index) => (
          <Icon key={index}  className="aspect-square w-16 h-16 ">
            {icon}
          </Icon>
        ))}
      </motion.div>
    </div>
  );
};

export default IconSkill;
