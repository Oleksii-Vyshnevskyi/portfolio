import Link from "next/link";
import type { Project } from "@/data/projects";
import { CaseImage } from "./CaseImage";
import { ImagePlaceholder } from "./ImagePlaceholder";

type ProjectCardProps = {
  project?: Project;
  index: number;
  title?: string;
  category?: string;
  year?: string;
  href?: string;
  showPreview?: boolean;
};

export function ProjectCard({
  project,
  index,
  title,
  category,
  year,
  href,
  showPreview = true,
}: ProjectCardProps) {
  const caseTitle = title ?? project?.title ?? "Untitled Case Study";
  const caseCategory = category ?? project?.category ?? "Case Study";
  const caseYear = year ?? project?.year ?? "2026";
  const caseHref = href ?? (project ? `/projects/${project.slug}` : "#");

  return (
    <Link
      className={`project-card ${showPreview ? "" : "project-card--text-only"} l-grid`}
      href={caseHref}
      aria-label={`${String(index + 1).padStart(2, "0")}. View ${caseTitle} case study`}
    >
      <div className="project-card__meta l-cluster">
        <span>{String(index + 1).padStart(2, "0")}</span>
        <span>{caseCategory}</span>
        <span>{caseYear}</span>
      </div>

      {showPreview && (
        project?.previewImage ? (
          <CaseImage image={project.previewImage} />
        ) : (
          <ImagePlaceholder label={caseTitle} />
        )
      )}

      <div className="project-card__content l-stack">
        <h2>{caseTitle}</h2>
        <span className="project-card__action">View case study</span>
      </div>
    </Link>
  );
}
