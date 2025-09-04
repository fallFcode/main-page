
import HeadingTopic from "./heading-topic";

import IconSkill from "../components/icon-skill";

const SectionSkill = () => {
  return (
    <HeadingTopic title="Skill" className="h-screen">
      <div className="flex mx-auto w-[80%]">
        <IconSkill />
      </div>
    </HeadingTopic>
  );
};

export default SectionSkill;
