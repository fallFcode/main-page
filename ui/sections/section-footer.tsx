import Link from "next/link";

const SectionFooter = () => {
  return (
    <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center my-4">
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
  );
};
export default SectionFooter;
