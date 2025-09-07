import Link from "next/link";
import * as React from "react";
import HeadingTopic from "../components/heading-topic";
import { Heading } from "../elements/heading";
import Image from "next/image";
import PomodoroImage from "@/public/avin-cp-OlXUUQedQyM-unsplash.jpg";
import ProjectItem from "../components/project";

const SectionProject = () => {
  return (
    <HeadingTopic
      title="Project"
      childrenHeading={
        <div className="flex gap-2 h-32 justify-end w-[80%]">
          <div className="bg-tertiary w-12 h-1/2 rounded-xl skew-x-12"></div>
          <div className="bg-tertiary w-12 h-1/2 rounded-xl skew-x-12"></div>
          <div className="bg-tertiary w-12 h-1/2 rounded-xl skew-x-12"></div>
        </div>
      }
    >
      <ProjectItem image={PomodoroImage} title="Pomodoro" />
    </HeadingTopic>
  );
};

export default SectionProject;
