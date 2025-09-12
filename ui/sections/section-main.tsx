import Link from "next/link";
import * as React from "react";
import { Heading } from "../elements/heading";
import Description from "../elements/description";
import Button from "../elements/button";
import { loadLinksPreset } from "@tsparticles/preset-links";
import Particle from "../elements/particle";
import { IoCompassOutline } from "react-icons/io5";
import { motion } from "motion/react";

type sectionMainProps = {};

const SectionMain = (props: sectionMainProps) => {
  return (
    <section className="sticky-section h-[180vh] w-full">
      <div className="flex h-full w-full flex-col items-center p-4 pb-0">
        <div className="z-10 mx-auto flex w-[80%] items-center justify-between">
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

          <Button color="tertiary" style={"solid"}>
            Get Contact
          </Button>
        </div>
        <div className="relative flex h-screen w-[80%] flex-col items-center justify-center">
          <div className="absolute z-0 mx-auto flex h-full w-full flex-col justify-between overflow-hidden">
            <Particle />
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
          </div>
          <Heading as="h1" className="z-10">
            SANDY FRASUTIO
          </Heading>
          <Description className="z-10 text-xl">
            Full Stack & <span className="text-tertiary">3D Enthusiast</span>
          </Description>
          <div className="z-10">
            <Button
              styleButton="solid"
              color="tertiary"
              className="mt-4 rounded-xl"
              icon={<IoCompassOutline />}
            >
              Explore
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionMain;
