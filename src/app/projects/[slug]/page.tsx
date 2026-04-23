import { notFound } from "next/navigation";
import { CaseStudyTemplate } from "@/components/CaseStudyTemplate";
import { getProject, projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {
      title: "Oleksii Vyshnevskyi - Product Designer",
    };
  }

  return {
    title: "Oleksii Vyshnevskyi - Product Designer",
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return <CaseStudyTemplate project={project} />;
}
