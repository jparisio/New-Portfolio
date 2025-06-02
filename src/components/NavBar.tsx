"use client";
import Link from "next/link";
import AnimText from "./AnimText";

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full shadow-md z-50">
      <div className="w-full px-5 py-5 flex justify-between items-center">
        <ul>
          <li>
            <Link href="/">
              <AnimText text={"JP"} offset={0.55} />
            </Link>
          </li>
        </ul>
        <ul className="flex space-x-6">
          <li>
            <Link href="/projects">
              <AnimText text={"PROJECTS"} offset={0.55} />
            </Link>
          </li>
          <li>
            <a href="mailto:jparisio@uoguelph.ca">
              <AnimText text={"CONTACT"} offset={0.55} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/justin-parisio/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AnimText text={"LINKEDIN"} offset={0.55} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
