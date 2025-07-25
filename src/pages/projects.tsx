"use client";
import Project from "@/components/Project";
import projectData from "@/utils/projectData.json";
import AnimText from "@/components/AnimText";

export default function ProjectsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl md:text-6xl lg:text-8xl text-center">
        <AnimText text="PROJECTS" offset={0.55} />
      </h1>
      <div className="mt-10 w-full max-w-4xl">
        {projectData
          .sort((a, b) => parseInt(b.year) - parseInt(a.year))
          .map((project, index) => (
            <Project key={project.id} project={project} index={index} />
          ))}
      </div>
    </main>
  );
}
