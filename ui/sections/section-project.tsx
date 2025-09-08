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

const SectionProject = () => {
  const { isDetail, openDetail, closeDetail } = useStore();
  console.log(isDetail);
  return (
    <HeadingTopic
      title="Project"
      className=" h-[160vh]"
      childrenHeading={
        <div className="flex gap-2 h-32 justify-end w-[80%]">
          <div className="bg-tertiary w-12 h-1/2 rounded-xl skew-x-12"></div>
          <div className="bg-tertiary w-12 h-1/2 rounded-xl skew-x-12"></div>
          <div className="bg-tertiary w-12 h-1/2 rounded-xl skew-x-12"></div>
        </div>
      }
    >
      {isDetail && (
        <div className="absolute top-0 right-[0%] w-full h-full bg-background z-40 flex flex-col justify-between p-8">
          <div className="flex">
            <Button
              icon={<IoArrowBack />}
              color="primary"
              size="small"
              onClick={closeDetail}
              style={"outline"}
            >
              Back
            </Button>
          </div>

          <div className="w-full h-48 bg-amber-300 flex "></div>
        </div>
      )}

      <ProjectItem image={PomodoroImage} title="Pomodorosdsdsddssdsdssd" />
    </HeadingTopic>
  );
};

export default SectionProject;
