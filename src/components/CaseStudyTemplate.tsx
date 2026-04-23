"use client";

import type { CSSProperties } from "react";
import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { BackToTop } from "@/components/BackToTop";
import {
  CaseOutcomeSection,
  CaseReflectionSection,
  CaseSplitMediaSection,
  CaseStoryGrid,
  CaseStudyHero,
  CaseVisualMediaSection,
  getImageDimensions,
} from "@/components/case-study/CaseStudyBlocks";
import type {
  CaseStudyContent,
  Project,
  ProjectImage,
} from "@/data/projects";

type CaseStudyTemplateProps = {
  project: Project;
};

export function CaseStudyTemplate({ project }: CaseStudyTemplateProps) {
  const caseStudy = useMemo(() => getCaseStudy(project), [project]);
  const visualImages = useMemo(
    () => [
      ...caseStudy.solution.images.slice(0, 1),
      ...caseStudy.visuals.images,
    ],
    [caseStudy],
  );
  const [activeImage, setActiveImage] = useState<ProjectImage | null>(null);

  useCaseMotion();

  useEffect(() => {
    if (!activeImage) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveImage(null);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeImage]);

  function openImage(image: ProjectImage) {
    setActiveImage(image);
  }

  return (
    <main
      className="case-study l-stack"
      data-project={project.slug}
      style={getCaseThemeStyle(project)}
    >
      <nav className="case-nav l-cluster" aria-label="Project navigation">
        <Link href="/">OV</Link>
      </nav>

      <div className="case-study__content l-center l-stack">
        <CaseStudyHero project={project} onOpenImage={openImage} />

        <CaseStoryGrid caseStudy={caseStudy} />

        {caseStudy.top.bankLinking && caseStudy.top.image ? (
          <CaseSplitMediaSection
            block={caseStudy.top.bankLinking}
            image={caseStudy.top.image}
            onOpenImage={openImage}
          />
        ) : null}

        <CaseVisualMediaSection
          eyebrow="Product UI"
          title={caseStudy.visuals.title}
          intro={caseStudy.visuals.intro}
          images={visualImages}
          onOpenImage={openImage}
        />

        <CaseOutcomeSection
          block={caseStudy.outcome}
          image={caseStudy.outcome.image}
          onOpenImage={openImage}
        />

        <CaseReflectionSection block={caseStudy.reflection} />
      </div>

      <footer className="case-footer">
        <Link className="case-footer__logo" href="/" aria-label="Go to homepage">
          OV
        </Link>
        <BackToTop />
      </footer>

      {activeImage && typeof document !== "undefined"
        ? createPortal(
            <ImageModal
              image={activeImage}
              onClose={() => setActiveImage(null)}
            />,
            document.body,
          )
        : null}
    </main>
  );
}

function getCaseThemeStyle(project: Project): CSSProperties {
  if (!project.theme) {
    return {};
  }

  return {
    "--case-bg": project.theme.baseBg,
    "--case-text": project.theme.baseText,
    "--case-muted": project.theme.mutedText,
    "--case-accent-primary": project.theme.accentPrimary,
    "--case-accent-secondary": project.theme.accentSecondary,
    "--case-border-tint": project.theme.borderTint,
    "--case-hover-tint": project.theme.hoverTint,
  } as CSSProperties;
}

function useCaseMotion() {
  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(".case-motion"),
    );
    const parallaxElements = Array.from(
      document.querySelectorAll<HTMLElement>(".case-parallax"),
    );

    document.querySelectorAll(".case-motion-group").forEach((group) => {
      group
        .querySelectorAll<HTMLElement>(".case-motion")
        .forEach((element, index) => {
          element.style.setProperty(
            "--motion-delay",
            `${Math.min(index * 80, 240)}ms`,
          );
        });
    });

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.12,
      },
    );

    elements.forEach((element) => observer.observe(element));

    if (motionQuery.matches) {
      return () => observer.disconnect();
    }

    let ticking = false;

    function updateParallax() {
      ticking = false;
      const viewportCenter = window.innerHeight / 2;

      parallaxElements.forEach((element) => {
        const rect = element.getBoundingClientRect();

        if (rect.bottom < -120 || rect.top > window.innerHeight + 120) {
          return;
        }

        const speed = Number(element.dataset.parallaxSpeed ?? "0.9");
        const distanceFromCenter = viewportCenter - (rect.top + rect.height / 2);
        const offset = Math.max(
          -18,
          Math.min(18, distanceFromCenter * (1 - speed) * 0.18),
        );

        element.style.setProperty("--parallax-y", `${offset.toFixed(2)}px`);
      });
    }

    function requestParallaxUpdate() {
      if (ticking) {
        return;
      }

      ticking = true;
      window.requestAnimationFrame(updateParallax);
    }

    updateParallax();
    window.addEventListener("scroll", requestParallaxUpdate, { passive: true });
    window.addEventListener("resize", requestParallaxUpdate);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", requestParallaxUpdate);
      window.removeEventListener("resize", requestParallaxUpdate);
    };
  }, []);
}

function getCaseStudy(project: Project): CaseStudyContent {
  if (project.caseStudy) {
    return project.caseStudy;
  }

  return {
    top: {
      problem: {
        title: project.problem,
      },
      goal: {
        title: project.goal,
      },
      summary: {
        title: "A focused product design case study.",
        body: [project.summary],
      },
    },
    solution: {
      title: project.solution,
      bullets: project.decisions,
      images: project.heroImage ? [project.heroImage] : [],
    },
    visuals: {
      title: "Product direction and interface system.",
      images: project.heroImage ? [project.heroImage] : [],
    },
    outcome: {
      title: project.outcome,
      image: project.heroImage,
    },
    reflection: {
      title: project.reflection,
    },
  };
}

function ImageModal({
  image,
  onClose,
}: {
  image: ProjectImage;
  onClose: () => void;
}) {
  const dimensions = getImageDimensions(image.src);
  const imageStyle = dimensions
    ? ({
        "--image-ratio": dimensions.width / dimensions.height,
      } as CSSProperties)
    : undefined;

  return (
    <div
      className="image-modal"
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
      onClick={onClose}
    >
      <figure className="image-modal__figure">
        <img
          src={image.src}
          alt={image.alt}
          width={dimensions?.width}
          height={dimensions?.height}
          style={imageStyle}
          onClick={(event) => event.stopPropagation()}
        />
      </figure>
    </div>
  );
}
