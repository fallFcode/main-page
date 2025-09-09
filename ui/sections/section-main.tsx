import Link from "next/link";
import * as React from "react";
import { Heading } from "../elements/heading";
import Description from "../elements/description";
import Button from "../elements/button";
import { loadLinksPreset } from "@tsparticles/preset-links";
import Particle from "../elements/particle";
import { IoCompassOutline } from "react-icons/io5";

type sectionMainProps = {};

const SectionMain = (props: sectionMainProps) => {
  return (
    <section className="flex flex-col items-center h-screen w-full p-4 pb-0">
      <div className="flex items-center justify-between mx-auto w-[80%] z-10">
        <Link href="/" className="h-full flex flex-start font-semibold">
          Logo
        </Link>
        <div className="flex justify-center">
          <ul className="w-full flex rounded-t-full gap-4 items-end justify-center p-2 text-md">
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
      <div className="flex flex-col h-full items-center justify-center relative w-[80%]">
        <div className="absolute overflow-hidden w-full h-full mx-auto z-0 flex flex-col justify-between">
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
            icon={<IoCompassOutline/>}
          >
            Explore
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SectionMain;
