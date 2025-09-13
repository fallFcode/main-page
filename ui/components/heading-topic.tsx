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
  const HeadingMotion = motion.create(Heading);
  return (
    <motion.section
      className={cn("relative flex h-full w-full flex-col gap-4", className)}
      ref={rootRef}
    >
      <div className={cn("mb-12", classNameMargin)}></div>
      <div className="z-10 mx-auto flex w-[80%] justify-between">
        <div className="flex h-fit flex-col overflow-hidden">
          <HeadingMotion
            initial={{ y: 50 }}
            animate={isInView ? { y: 0 } : { y: 50 }}
            transition={{ type: "spring", duration: 0.7, delay: 0.2 }}
            as="h3"
            className="flex font-semibold"
          >
            {title}
          </HeadingMotion>
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ ease: "easeOut", type: "spring", duration: 0.8 }}
            className="bg-tertiary h-1 w-20 origin-left"
          ></motion.span>
        </div>
        <div>{childrenHeading}</div>
      </div>
      <div className="absolute left-1/2 z-0 h-full w-[80%] -translate-x-1/2 transform">
        <motion.div
          className={cn(
            "flex-center outline-text text-tertiary sticky-section h-screen w-full text-center text-[20vw] font-bold select-none",
            inter.className,
          )}
          initial={{ opacity: 0, y: -35, letterSpacing: "20px" }}
          whileInView={{ opacity: 1, y: 0, letterSpacing: "0px" }}
          transition={{
            duration: 1.2,
            type: "spring",
            stiffness: 50,
          }}
          // viewport={{ root: rootRef }}
        >
          {title}
        </motion.div>
      </div>
      <div className="z-10 flex flex-col items-center justify-center">
        {children}
      </div>
    </motion.section>
  );
};
export default HeadingTopic;
