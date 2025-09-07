import Link from "next/link";
import * as React from "react";
import { Heading } from "../elements/heading";

type sectionMainProps = {};

const SectionMain = (props: sectionMainProps) => {
  return (
    <section className="flex flex-col items-center h-screen w-full p-4 pb-0">
      <Link href="/" className="h-full w-full flex flex-start font-semibold">
        Logo
      </Link>
      <div className="flex flex-col items-center ">
        <Heading
          as="h1"
          className="text-4xl font-semibold h-full w-full justify-center items-center"
        >
          SANDY FRASUTIO
        </Heading>
        <span>Full Stack & <span className="text-tertiary">3D Enthusiast</span></span>
      </div>

      <div className="flex w-[80%] h-full justify-center items-end">
        <div className="w-full flex bg-stone-900 rounded-t-full gap-4 items-end justify-center p-2 text-md">
          <Link href={"/"}>Project</Link>
          <Link href={"/"}>Skill</Link>
          <Link href={"/"}>About</Link>
          <Link href={"/"}>Contact</Link>
        </div>
      </div>
    </section>
  );
};

export default SectionMain;
