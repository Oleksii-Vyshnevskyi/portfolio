import type { ProjectImage } from "@/data/projects";

type CaseImageProps = {
  image: ProjectImage;
};

export function CaseImage({ image }: CaseImageProps) {
  return (
    <figure className={`case-image case-image--${image.variant ?? "wide"}`}>
      <img src={image.src} alt={image.alt} />
      {image.caption ? <figcaption>{image.caption}</figcaption> : null}
    </figure>
  );
}
