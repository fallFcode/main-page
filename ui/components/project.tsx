import Image from "next/image";
import { Heading } from "../elements/heading";
import { useStore } from "@/utils/store-func";
import * as React from "react";
import Button from "../elements/button";
import { motion } from "motion/react";

type projectItemProps = {
  title: string;
  image: string;
};

const ProjectItem = ({ title, image }: projectItemProps) => {
  const { isDetail, openDetail, closeDetail } = useStore();

  return (
    <motion.button
      className="mt-8 flex w-full overflow-hidden rounded-xl outline-offset-10 hover:cursor-pointer hover:outline-1"
      onClick={openDetail}
      initial={{ x: -32 }}
      whileInView={{ x: 0 }}
      transition={{ delay: 0.8, type: "spring", ease: "easeOut" }}
    >
      <motion.div
        className="relative flex h-full w-full flex-col p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        whileHover={{ opacity: 1 }}
        transition={{ type: "spring", ease: "easeOut" }}
      >
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <Image
            src={image}
            alt={title}
            className="h-full w-full object-cover blur-xs"
          />
        </div>
        <div className="z-10 flex h-full w-full items-center justify-center">
          <Heading as="h3" className="truncate text-6xl" title={title}>
            {title}
          </Heading>
        </div>
      </motion.div>
    </motion.button>
  );
};

export default ProjectItem;
