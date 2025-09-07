import { cn } from "@/utils/cn";
import { Heading } from "../elements/heading";

type HeadingTopicProps = {
  className?: string;
  title: string;
  children: React.ReactNode;
  childrenHeading: React.ReactNode;
};

const HeadingTopic = ({
  title,
  className,
  children,
  childrenHeading,
}: HeadingTopicProps) => {
  return (
    <section className={cn("w-full h-full flex flex-col gap-4", className)}>
      <div className="mb-12 "></div>
      <div className="flex justify-between w-[80%] mx-auto ">
        <Heading as="h3" className="font-semibold flex ">
          {title}
        </Heading>
        <div>{childrenHeading}</div>
      </div>
      <div className="flex flex-col justify-center items-center">
        {children}
      </div>
    </section>
  );
};
export default HeadingTopic;
