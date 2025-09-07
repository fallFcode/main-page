"use client";
import SectionAbout from "@/ui/sections/section-about";
import SectionMain from "@/ui/sections/section-main";
import SectionProject from "@/ui/sections/section-project";
import SectionSkill from "@/ui/sections/section-skill";
import { useScroll } from "motion/react";
import Link from "next/link";

export default function Home() {
  const { scrollY, scrollYProgress } = useScroll();
  console.log(scrollY, scrollYProgress);
  return (
    <div className="mx-auto flex flex-col  w-full max-w-[1280px]">
      <main className="flex flex-col  row-start-2 items-center sm:items-start h-full bg-primary">
        <SectionMain />
        <section className="flex flex-col items-center h-fit w-full bg-background relative">
          <div className="flex w-[80%] sticky top-0 left-0 mx-auto right-0">
            <div className="w-full flex bg-secondary rounded-full gap-4 items-end justify-center p-2 text-md mt-2">
              <Link href={"/"}>Project</Link>
              <Link href={"/"}>Skill</Link>
              <Link href={"/"}>About</Link>
              <Link href={"/"}>Contact</Link>
            </div>
          </div>
          <SectionProject />
          <SectionSkill />
          <SectionAbout />
          <div className="bg-white">there are many things to do Quote</div>
        </section>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <span className="text-sm text-gray-400">
          © {new Date().getFullYear()} My App. All rights reserved.
        </span>
        <Link
          href="https://github.com/yourusername/my-app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-400 hover:underline"
        >
          GitHub
        </Link>
        <Link
          href="mailto:contact@myapp.com"
          className="text-sm text-blue-400 hover:underline"
        >
          Contact
        </Link>
      </footer>
    </div>
  );
}
