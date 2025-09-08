import { cn } from "@/utils/cn";
import { Heading } from "../elements/heading";
import { Inter } from "next/font/google";
import { motion } from "motion/react";

const inter = Inter({
  weight: ["900"],
  subsets: ["latin"],
});

type HeadingTopicProps = {
  className?: string;
  title: string;
  children: React.ReactNode;
  childrenHeading?: React.ReactNode;
};

const HeadingTopic = ({
  title,
  className,
  children,
  childrenHeading,
}: HeadingTopicProps) => {
  const HeadingMotion = motion.create(Heading);
  return (
    <section
      className={cn("w-full h-full flex flex-col gap-4 relative", className)}
    >
      <div className="mb-12 "></div>
      <div className="flex justify-between w-[80%] mx-auto z-10">
        <div className="flex flex-col overflow-hidden h-fit">
          <HeadingMotion
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{type:"spring",duration:0.7, delay:0.2  }}
            as="h3"
            className="font-semibold flex"
          >
            {title}
          </HeadingMotion>
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ ease: "easeOut", type: "spring", duration: 0.8 }}
            className="origin-left bg-tertiary w-20 h-1"
          ></motion.span>
        </div>
        <div>{childrenHeading}</div>
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[80%]  z-0">
        <div
          className={cn(
            "w-full h-screen flex-center text-[35vh] sticky top-0 text-center font-bold outline-text",
            inter.className
          )}
        >
          {title}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center z-10">
        {children}
      </div>
    </section>
  );
};
export default HeadingTopic;
