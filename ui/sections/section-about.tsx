import { motion, useScroll } from "motion/react";
import HeadingTopic from "../components/heading-topic";
import Description from "../elements/description";
import { Heading } from "../elements/heading";
import { useEffect, useRef } from "react";

const SectionAbout = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      console.log("scrollYProgress:", latest); // ini baru muncul saat scroll berubah
    });
  }, [scrollYProgress]);

  return (
    <HeadingTopic title="About">
      <div ref={containerRef} className="flex h-[400vh] w-[80%] mx-auto">
        <div className="flex w-full"></div>
        <div className="flex w-full flex-col">
          <Heading as="h3">Sandy Frasutio</Heading>
          <Description>
            A passionate web developer with a knack for creating dynamic and
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              {" "}
              Always eager to learn new technologies and improve user
              experiences.
            </motion.span>
          </Description>
        </div>
      </div>
    </HeadingTopic>
  );
};
export default SectionAbout;
