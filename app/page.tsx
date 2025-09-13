"use client";
import { Heading } from "@/ui/elements/heading";
import SectionAbout from "@/ui/sections/section-about";
import SectionFooter from "@/ui/sections/section-footer";
import SectionMain from "@/ui/sections/section-main";
import SectionProject from "@/ui/sections/section-project";
import SectionSkill from "@/ui/sections/section-skill";
import { useScroll, useTransform } from "motion/react";
import Link from "next/link";
import { ReactLenis, useLenis } from "lenis/react";
import { useEffect } from "react";
import NavBarBlur from "@/ui/components/navbar-blur";

export default function Home() {
  const { scrollY } = useScroll();
  useEffect(() => {
    console.log(scrollY);
    scrollY.setCurrent(200);
  }, []);
  return (
    <>
      <ReactLenis root />
      <div className="mx-auto flex w-full max-w-[1400px] flex-col">
        <main className="bg-primary row-start-2 flex h-full flex-col items-center sm:items-start">
          <SectionMain />
          <section className="bg-background relative flex h-fit w-full flex-col items-center">
            <div className="sticky top-0 right-0 left-0 z-20 mx-auto flex w-[80%] bg-transparent">
              {/* <div className=" w-full absolute h-full bg-gray-400 mix-blend-color-dodge">
              <div className="w-full h-full bg-black  mix-blend-color-burn relative ">
                <div className="absolute h-32 w-32 bg-red-500 rounded-full blur-md scale-25 -translate-y-12 "></div>
                <div className="absolute h-32 w-32 bg-red-500 rounded-full blur-md scale-25 -translate-y-12 translate-x-8"></div>
              </div>
            </div> */}

              <NavBarBlur />
            </div>
            <SectionProject />
            <SectionSkill />
            <SectionAbout />
            <div className="bg-secondary grid h-[30vh] w-full place-items-center">
              <Heading as="h3">There are many things to do Quote</Heading>
            </div>
          </section>
        </main>
        <SectionFooter />
      </div>
    </>
  );
}
