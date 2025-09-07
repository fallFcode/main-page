import Image from "next/image";
import { Heading } from "../elements/heading";

type projectItemProps = {
  title: string;
  image: StaticImageData;
};

const ProjectItem = ({ title, image }: projectItemProps) => {
  return (
    <div className="flex flex-col gap-4 w-full h-screen items-center">
      <div className="flex h-36 w-[80%] bg-secondary rounded-xl overflow-hidden outline-2 outline-offset-10">
        <div className="flex flex-col p-4 relative w-full h-full">
          <div className="absolute inset-0 flex items-center justify-center z-0">
            <Image
              src={image}
              alt={title}
              className="object-cover w-full h-full blur-xs"
            />
          </div>
          <div className="flex justify-center items-center w-full h-full z-10">
            <Heading as="h3" className=" text-6xl ">
              {title}
            </Heading>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
