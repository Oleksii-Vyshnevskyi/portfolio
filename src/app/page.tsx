import { IntroPanel } from "@/components/IntroPanel";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Home() {
  const featuredProject = projects[0];
  const demoCases = [
    {
      title: featuredProject.title,
      category: featuredProject.category,
      year: featuredProject.year,
      href: `/projects/${featuredProject.slug}`,
    },
    {
      title: "Inventory Costing",
      category: "Shopmonkey",
      year: "2025",
      href: "/projects/inventory-costing",
    },
    {
      title: "Mobile Message Center",
      category: "Shopmonkey",
      year: "2025-2026",
      href: "/projects/message-center",
    },
    {
      title: "Reporting & Print",
      category: "Shopmonkey",
      year: "2025",
      href: "/projects/reports-pdf-export",
    },
    {
      title: "Connections",
      category: "YouControl",
      year: "2016-2017",
      href: "/projects/connections-pro",
    },
  ];

  return (
    <main className="home-shell l-center">
      <IntroPanel />

      <section className="project-index l-stack" aria-label="Selected projects">
        <div className="project-index__header l-grid">
          <span className="project-index__number">00</span>
          <p className="eyebrow">Selected work</p>
          <p>
            Case studies for SaaS and enterprise products, structured around
            workflow clarity, decision quality, and operational calm.
          </p>
        </div>

        <div className="project-list l-stack">
          {demoCases.map((project, index) => (
            <ProjectCard
              key={project.title}
              index={index}
              title={project.title}
              category={project.category}
              year={project.year}
              href={project.href}
              showPreview={false}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
