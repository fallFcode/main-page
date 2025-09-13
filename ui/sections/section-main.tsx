import Link from "next/link";
import * as React from "react";
import { Heading } from "../elements/heading";
import Description from "../elements/description";
import Button from "../elements/button";
import { loadLinksPreset } from "@tsparticles/preset-links";
import Particle from "../elements/particle";
import { IoCompassOutline } from "react-icons/io5";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useEffect } from "react";

type sectionMainProps = {};

const SectionMain = (props: sectionMainProps) => {
  const parentRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: parentRef,
    offset: ["start start", "end end"],
  });
  // const [openUpAnimation, setOpenUpAnimation] = React.useState<boolean>(false);

  const HeadingMotion = motion.create(Heading);
  const DescriptionMotion = motion.create(Description);
  const ButtonMotion = motion.create(Button);

  // useEffect(() => {
  //   return scrollYProgress.onChange((latest) => {
  //     setOpenUpAnimation(latest > 0.5);
  //   });
  // }, [scrollYProgress]);
  return (
    <section className="h-fit w-full" ref={parentRef}>
      <div className="flex h-[200vh] w-full flex-col items-center">
        <div className="sticky-section w-full flex-col items-center justify-center p-4 pb-0">
          <motion.div
            className="z-10 mx-auto flex w-[80%] items-center justify-between"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
          >
            <Link href="/" className="flex-start flex h-full font-semibold">
              Logo
            </Link>
            <div className="flex justify-center">
              <ul className="text-md flex w-full items-end justify-center gap-4 rounded-t-full p-2">
                <li>
                  <Link href={"/"}>Project</Link>
                </li>
                <li>
                  <Link href={"/"}>Skill</Link>
                </li>
                <li>
                  <Link href={"/"}>About</Link>
                </li>
              </ul>
            </div>

            <Button color="tertiary" styleButton={"solid"}>
              Get Contact
            </Button>
          </motion.div>
          <motion.div
            className="relative mx-auto flex h-screen w-[80%] flex-col items-center justify-center"
            style={{}}
          >
            {/* <div className="absolute z-0 mx-auto flex h-full w-full flex-col justify-between overflow-hidden"> */}
            {/* <HeadingGiantMotion
            className={"-rotate-45 -translate-y-52"}
            initial={{ x: -250 }}
            animate={{ x: 400 }}
            transition={{ duration: 2.2, type: "spring", ease: "backOut" }}
          >
            FULLSTACK
          </HeadingGiantMotion>
          <HeadingGiantMotion
            className={"justify-end flex -rotate-45 translate-x-52 "}
            initial={{ x: 250 }}
            animate={{ x: -800 }}
            transition={{ duration: 2.2, type: "spring", ease: "backOut" }}
          >
            DEVELOPER
          </HeadingGiantMotion> */}
            {/* </div> */}
            <HeadingMotion
              as="h1"
              className="z-10"
              initial={{ y: -50, scale: 1.2, opacity: 0 }}
              animate={
                // openUpAnimation
                { y: -50, scale: 0, opacity: 0 }
                // : { y: 0, scale: 1, opacity: 1 }
              }
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              SANDY FRASUTIO
            </HeadingMotion>
            <DescriptionMotion
              className="z-10 text-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Full Stack & <span className="text-tertiary">3D Enthusiast</span>
            </DescriptionMotion>

            <ButtonMotion
              styleButton="solid"
              color="tertiary"
              className="z-10 mt-4 rounded-xl"
              icon={<IoCompassOutline />}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Explore
            </ButtonMotion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SectionMain;
