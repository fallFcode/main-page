import Image from "next/image";
import HeadingTopic from "../components/heading-topic";

import IconSkill from "../components/icon-skill";
import PomodoroImage from "@/public/avin-cp-OlXUUQedQyM-unsplash.jpg";

const SectionSkill = () => {
  return (
    <HeadingTopic title="Skill" className="h-screen">
      <div className="flex mx-auto w-[80%] h-fit">
        <IconSkill />
        <div className="flex h-full w-full rounded-xl ">
          <div className="overflow-hidden rounded-xl w-full h-full">
          <Image
            src={PomodoroImage}
            alt="Pomodoro"
            className="object-cover w-full h-full"
          />

          </div>
        </div>
      </div>
    </HeadingTopic>
  );
};

export default SectionSkill;
