import { cn } from "@/utils/cn";
import { Heading } from "../elements/heading";

type HeadingTopicProps = {
  className?: string;
  title: string;
  children: React.ReactNode;
};

const HeadingTopic = ({ title, className, children }: HeadingTopicProps) => {
  return (
    <section className={cn("w-full h-full flex flex-col gap-4", className)}>
      <div className="mb-12 "></div>
      <Heading as="h2" className="w-[80%] flex mx-auto">
        {title}
      </Heading>
      <div className="flex flex-col justify-center items-center">
        {children}
      </div>
    </section>
  );
};
export default HeadingTopic;
