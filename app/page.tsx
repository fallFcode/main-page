import SectionAbout from "@/ui/sections/section-about";
import SectionMain from "@/ui/sections/section-main";
import SectionProject from "@/ui/sections/section-project";
import SectionSkill from "@/ui/sections/section-skill";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto flex flex-col  w-full max-w-[1280px]">
      <main className="flex flex-col  row-start-2 items-center sm:items-start h-full bg-amber-950">
        {/* <SectionMain /> */}
        <section className="flex flex-col items-center h-fit w-full bg-stone-950 relative">
          <div className="flex w-[80%] fixed top-0 left-0 mx-auto right-0">
            <div className="w-full flex bg-stone-900 rounded-full gap-4 items-end justify-center p-2 text-md mt-2">
              <Link href={"/"}>Project</Link>
              <Link href={"/"}>Skill</Link>
              <Link href={"/"}>About</Link>
              <Link href={"/"}>Contact</Link>
            </div>
          </div>
          <SectionProject />
          <SectionSkill />
          <SectionAbout />
        </section>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
