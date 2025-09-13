import Link from "next/link";
import * as React from "react";
import { motion } from "motion/react";

const NavBarBlur = () => {
  return (
    <motion.div
      className="text-md bg-secondary/30 mt-2 flex w-full items-end justify-center gap-4 rounded-full p-2 shadow-lg backdrop-blur-md"
      initial={{ opacity: 0, scale: 1.2 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, duration: 0.3 }}
    >
      <Link href={"/"}>Project</Link>
      <Link href={"/"}>Skill</Link>
      <Link href={"/"}>About</Link>
      <Link href={"/"}>Contact</Link>
    </motion.div>
  );
};

export default NavBarBlur;
