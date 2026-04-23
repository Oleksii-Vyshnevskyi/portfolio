"use client";

import type { ReactNode } from "react";
import type {
  CaseStudyContent,
  Project,
  ProjectImage,
  TextBlock,
} from "@/data/projects";

export type CaseImageOpenHandler = (image: ProjectImage) => void;

type CaseStudyHeroProps = {
  project: Project;
  onOpenImage: CaseImageOpenHandler;
};

export function CaseStudyHero({ project, onOpenImage }: CaseStudyHeroProps) {
  return (
    <header className="case-hero case-motion-group l-stack" id="top">
      <div className="case-hero__grid case-motion">
        <div className="case-hero__title l-stack">
          <p className="eyebrow">{project.category}</p>
          <h1>{project.title}</h1>
          <p>{project.summary}</p>
        </div>
        <CaseMetadata project={project} />
      </div>

      {project.heroImage ? (
        <CaseMediaFigure
          image={project.heroImage}
          onOpen={onOpenImage}
          priority="hero"
        />
      ) : null}
    </header>
  );
}

type CaseMetadataProps = {
  project: Project;
};

export function CaseMetadata({ project }: CaseMetadataProps) {
  return (
    <div className="case-hero__meta" aria-label="Project summary">
      <MetadataItem label="Role" value={project.role} />
      <MetadataItem label="Timeline" value={project.timeline} />
      <MetadataItem label="Team" value={project.team} />
      <MetadataItem label="Year" value={project.year} />
      {project.website && project.websiteUrl ? (
        <MetadataItem label="Website">
          <a
            className="case-hero__meta-link"
            href={project.websiteUrl}
            target="_blank"
            rel="noreferrer"
          >
            {project.website}
          </a>
        </MetadataItem>
      ) : null}
    </div>
  );
}

type MetadataItemProps = {
  label: string;
  value?: string;
  children?: ReactNode;
};

function MetadataItem({ label, value, children }: MetadataItemProps) {
  return (
    <div>
      <span>{label}</span>
      <strong>{children ?? value}</strong>
    </div>
  );
}

type CaseStoryGridProps = {
  caseStudy: CaseStudyContent;
};

export function CaseStoryGrid({ caseStudy }: CaseStoryGridProps) {
  return (
    <section className="case-story-section case-motion-group l-stack">
      <div className="case-story-grid l-grid">
        <CaseTextBlock eyebrow="Problem" block={caseStudy.top.problem} />
        <CaseTextBlock eyebrow="Goal" block={caseStudy.top.goal} />
        <CaseTextBlock eyebrow="Core insight" block={caseStudy.top.summary} />
        <CaseTextBlock
          eyebrow="Decision + solution"
          block={caseStudy.solution}
        />
      </div>
    </section>
  );
}

type CaseSplitMediaSectionProps = {
  block: TextBlock;
  image: ProjectImage;
  onOpenImage: CaseImageOpenHandler;
};

export function CaseSplitMediaSection({
  block,
  image,
  onOpenImage,
}: CaseSplitMediaSectionProps) {
  return (
    <section className="case-bank-linking case-motion-group l-grid">
      <CaseStandaloneText block={block} />
      <CaseMediaFigure image={image} onOpen={onOpenImage} />
    </section>
  );
}

type CaseVisualMediaSectionProps = {
  eyebrow: string;
  title: string;
  intro?: string;
  images: ProjectImage[];
  onOpenImage: CaseImageOpenHandler;
};

export function CaseVisualMediaSection({
  eyebrow,
  title,
  intro,
  images,
  onOpenImage,
}: CaseVisualMediaSectionProps) {
  return (
    <section className="case-visual-focus case-motion-group l-stack">
      <div className="case-visual-focus__intro case-motion l-grid">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        {intro ? <p>{intro}</p> : null}
      </div>
      {images.length > 0 ? (
        <CaseMediaStack images={images} onOpenImage={onOpenImage} />
      ) : null}
    </section>
  );
}

type CaseMediaStackProps = {
  images: ProjectImage[];
  onOpenImage: CaseImageOpenHandler;
};

export function CaseMediaStack({ images, onOpenImage }: CaseMediaStackProps) {
  return (
    <div className="case-visual-focus__images l-stack">
      {images.map((image) => (
        <CaseMediaFigure key={image.src} image={image} onOpen={onOpenImage} />
      ))}
    </div>
  );
}

type CaseOutcomeSectionProps = {
  block: TextBlock;
  image?: ProjectImage;
  onOpenImage: CaseImageOpenHandler;
};

export function CaseOutcomeSection({
  block,
  image,
  onOpenImage,
}: CaseOutcomeSectionProps) {
  return (
    <section className="case-outcome-grid case-motion-group l-grid">
      <div>
        <CaseTextBlock eyebrow="Outcome" block={block} />
      </div>
      {image ? <CaseMediaFigure image={image} onOpen={onOpenImage} /> : null}
    </section>
  );
}

type CaseReflectionSectionProps = {
  block: TextBlock;
};

export function CaseReflectionSection({ block }: CaseReflectionSectionProps) {
  return (
    <section className="case-reflection case-motion-group">
      <CaseTextBlock eyebrow="Reflection" block={block} title={formatReflectionTitle(block.title)} />
    </section>
  );
}

type CaseTextBlockProps = {
  eyebrow: string;
  block: TextBlock;
  title?: ReactNode;
};

export function CaseTextBlock({ eyebrow, block, title }: CaseTextBlockProps) {
  return (
    <div className="case-text-panel case-motion l-stack">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title ?? block.title}</h2>
      {block.body ? <CaseBody paragraphs={block.body} /> : null}
      {block.bullets ? <CaseBulletList items={block.bullets} /> : null}
    </div>
  );
}

type CaseStandaloneTextProps = {
  block: TextBlock;
};

export function CaseStandaloneText({ block }: CaseStandaloneTextProps) {
  return (
    <div className="case-bank-linking__text case-motion l-stack">
      <h2>{block.title}</h2>
      {block.body ? <CaseBody paragraphs={block.body} /> : null}
    </div>
  );
}

type CaseBodyProps = {
  paragraphs: string[];
};

export function CaseBody({ paragraphs }: CaseBodyProps) {
  return (
    <div className="case-body l-stack">
      {paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  );
}

type CaseBulletListProps = {
  items: string[];
};

export function CaseBulletList({ items }: CaseBulletListProps) {
  return (
    <ul className="case-bullets l-stack">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

type CaseMediaFigureProps = {
  image: ProjectImage;
  onOpen: CaseImageOpenHandler;
  priority?: "standard" | "hero";
};

export function CaseMediaFigure({ image, onOpen }: CaseMediaFigureProps) {
  const dimensions = getImageDimensions(image.src);

  return (
    <figure
      className={`case-image case-image--${image.variant ?? "wide"} case-motion case-motion--image`}
    >
      <button
        className="case-image__button"
        type="button"
        onClick={() => onOpen(image)}
        aria-label={`Open image: ${image.alt}`}
      >
        <img
          src={image.src}
          alt={image.alt}
          width={dimensions?.width}
          height={dimensions?.height}
          style={dimensions ? { maxWidth: `${dimensions.width}px` } : undefined}
        />
        <span className="case-image__affordance" aria-hidden="true">
          View
        </span>
      </button>
    </figure>
  );
}

export function getImageDimensions(src: string) {
  const dimensions: Record<string, { width: number; height: number }> = {
    "/images/SMA-solution-01.png": { width: 1280, height: 704 },
    "/images/SMA-ui-02.png": { width: 2560, height: 1948 },
    "/images/SMA-outcome-01.png": { width: 2560, height: 1948 },
    "/images/SMA-ui-04.png": { width: 2560, height: 1948 },
    "/images/SMA-ui-03.png": { width: 2560, height: 1948 },
    "/images/SMA-hero-01.png": { width: 2560, height: 1948 },
    "/images/SMA-ui-01.png": { width: 2560, height: 1948 },
    "/images/SMIC-hero-01.png": { width: 2560, height: 1950 },
    "/images/SMIC-solution-01.png": { width: 904, height: 840 },
    "/images/SMIC-ui-01.png": { width: 2560, height: 1950 },
    "/images/SMIC-ui-02.png": { width: 2560, height: 1950 },
    "/images/SMIC-ui-03.png": { width: 2560, height: 1950 },
    "/images/SMIC-ui-04.png": { width: 2560, height: 1950 },
    "/images/SMIC-outcome-01.png": { width: 2560, height: 1950 },
    "/images/SMMMC-hero-01.png": { width: 2560, height: 1950 },
    "/images/SMMMC-solution-01.png": { width: 2000, height: 1780 },
    "/images/SMMMC-ui-01.png": { width: 2560, height: 1950 },
    "/images/SMMMC-ui-02.png": { width: 2560, height: 1950 },
    "/images/SMMMC-ui-03.png": { width: 2560, height: 1950 },
    "/images/SMMMC-ui-04.png": { width: 2560, height: 1950 },
    "/images/SMMMC-outcome-01.png": { width: 2560, height: 1950 },
    "/images/SMRP-hero-01.png": { width: 2560, height: 1950 },
    "/images/SMRP-solution-01.png": { width: 1648, height: 1288 },
    "/images/SMRP-ui-01.png": { width: 2560, height: 1950 },
    "/images/SMRP-ui-02.png": { width: 2560, height: 1950 },
    "/images/SMRP-ui-03.png": { width: 2560, height: 1950 },
    "/images/SMRP-ui-04.png": { width: 2560, height: 1950 },
    "/images/SMRP-outcome-01.png": { width: 2560, height: 1950 },
    "/images/YC-hero-01.png": { width: 2560, height: 1950 },
    "/images/YC-ui-01.png": { width: 2560, height: 1950 },
  };

  return dimensions[src];
}

function formatReflectionTitle(title: string) {
  if (title !== "Simplicity was the product strategy.") {
    return title;
  }

  return (
    <>
      Simplicity was
      <br className="case-reflection__break" /> the product strategy.
    </>
  );
}
