import Link from "next/link";
import * as React from "react";
import HeadingTopic from "../components/heading-topic";
import { Heading } from "../elements/heading";
import Image from "next/image";
import PomodoroImage from "@/public/avin-cp-OlXUUQedQyM-unsplash.jpg";
import ProjectItem from "../components/project";
import { useStore } from "@/utils/store-func";
import Button from "../elements/button";
import { IoArrowBack } from "react-icons/io5";
import { motion } from "motion/react";

const SectionProject = () => {
  const { isDetail, openDetail, closeDetail } = useStore();

  
  return (
    <HeadingTopic title="Project" className="h-screen">
      {isDetail && (
        <div className="bg-background absolute top-0 right-[0%] z-40 flex h-full w-full flex-col justify-between p-8">
          <div className="flex">
            <Button
              icon={<IoArrowBack />}
              color="primary"
              size="small"
              onClick={closeDetail}
              styleButton={"outline"}
            >
              Back
            </Button>
          </div>

          <div className="flex h-48 w-full bg-amber-300"></div>
        </div>
      )}

      <div className="mx-auto flex h-36 w-[80%] justify-center">
        <div className="flex w-[10%] flex-col items-start">
          <div className="flex flex-col items-center">
            <motion.span
              className="aspect-square w-[4vw] rounded-full bg-white lg:w-[2vw]"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.8 }}
            ></motion.span>
            <motion.span
              className="h-32 w-[1vw] bg-white lg:w-[0.5vw] origin-top rounded-xl"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 0.4, delay: 0.8 }}
            ></motion.span>
          </div>
        </div>
        <ProjectItem image={PomodoroImage} title="Pomodorosdsdsddssdsdssd" />
      </div>
    </HeadingTopic>
  );
};

export default SectionProject;
