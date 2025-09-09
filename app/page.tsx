"use client";
import { Heading } from "@/ui/elements/heading";
import SectionAbout from "@/ui/sections/section-about";
import SectionFooter from "@/ui/sections/section-footer";
import SectionMain from "@/ui/sections/section-main";
import SectionProject from "@/ui/sections/section-project";
import SectionSkill from "@/ui/sections/section-skill";
import { useScroll } from "motion/react";
import Link from "next/link";

export default function Home() {
  const { scrollY, scrollYProgress } = useScroll();
  return (
    <div className="mx-auto flex flex-col  w-full max-w-[1400px]">
      <main className="flex flex-col  row-start-2 items-center sm:items-start h-full bg-primary">
        <SectionMain />
        <section className="flex flex-col items-center h-fit w-full bg-background relative">
          <div className="flex w-[80%] sticky top-0 left-0 mx-auto right-0 z-20">
            <div className="w-full flex rounded-full gap-4 items-end justify-center p-2 text-md mt-2 bg-secondary/30 backdrop-blur-md   shadow-lg">
              <Link href={"/"}>Project</Link>
              <Link href={"/"}>Skill</Link>
              <Link href={"/"}>About</Link>
              <Link href={"/"}>Contact</Link>
            </div>
          </div>
          <SectionProject />
          <SectionSkill />
          <SectionAbout />
          <div className="h-[30vh] bg-secondary grid place-items-center w-full">
            <Heading as="h3">There are many things to do Quote</Heading>
          </div>
        </section>
      </main>
      <SectionFooter />
    </div>
  );
}
