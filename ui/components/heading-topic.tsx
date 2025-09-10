import { cn } from "@/utils/cn";
import { Heading } from "../elements/heading";
import { Inter } from "next/font/google";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { ClassValue } from "clsx";

const inter = Inter({
  weight: ["900"],
  subsets: ["latin"],
});

type HeadingTopicProps = {
  className?: ClassValue;
  classNameMargin?: ClassValue;
  title: string;
  children: React.ReactNode;
  childrenHeading?: React.ReactNode;
};

const HeadingTopic = ({
  title,
  className,
  classNameMargin,
  children,
  childrenHeading,
}: HeadingTopicProps) => {
  const rootRef = useRef(null);
  const isInView = useInView(rootRef, { amount: 0.1 });
  console.log(isInView);
  const HeadingMotion = motion.create(Heading);
  return (
    <motion.section
      className={cn("w-full h-full flex flex-col gap-4 relative", className)}
      ref={rootRef}
    >
      <div className={cn("mb-12 ", classNameMargin)}></div>
      <div className="flex justify-between w-[80%] mx-auto z-10">
        <div className="flex flex-col overflow-hidden h-fit">
          <HeadingMotion
            initial={{ y: 50 }}
            animate={isInView ? { y: 0 } : { y: 50 }}
            transition={{ type: "spring", duration: 0.7, delay: 0.2 }}
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
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[80%] z-0">
        <motion.div
          className={cn(
            "w-full h-screen flex-center text-[20vw] sticky top-0 text-center font-bold outline-text select-none text-tertiary",
            inter.className
          )}
          initial={{ opacity: 0, y: -35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, type: "spring", stiffness: 50 }}
          // viewport={{ root: rootRef }}
        >
          {title}
        </motion.div>
      </div>
      <div className="flex flex-col justify-center items-center z-10">
        {children}
      </div>
    </motion.section>
  );
};
export default HeadingTopic;
