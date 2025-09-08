import Image from "next/image";
import { Heading } from "../elements/heading";
import { useStore } from "@/utils/store-func";
import * as React from "react";

type projectItemProps = {
  title: string;
  image: StaticImageData;
};

const ProjectItem = ({ title, image }: projectItemProps) => {
  const { isDetail, openDetail, closeDetail } = useStore();

  return (
    <div
      className="flex h-36 w-[80%] rounded-xl overflow-hidden outline-1 outline-offset-10"
      onClick={openDetail}
    >
      <div className="flex flex-col p-4 relative w-full h-full opacity-50">
        <div className="absolute inset-0 flex items-center justify-center z-0">
          <Image
            src={image}
            alt={title}
            className="object-cover w-full h-full blur-xs"
          />
        </div>
        <div className="flex justify-center items-center w-full h-full z-10">
          <Heading as="h3" className=" text-6xl truncate" title={title}>
            {title}
          </Heading>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
