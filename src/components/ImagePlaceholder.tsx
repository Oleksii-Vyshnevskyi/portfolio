type ImagePlaceholderProps = {
  label?: string;
  variant?: "card" | "wide" | "tall";
};

export function ImagePlaceholder({
  label = "Image placeholder",
  variant = "card",
}: ImagePlaceholderProps) {
  return (
    <div className={`image-placeholder image-placeholder--${variant}`}>
      <div className="image-placeholder__grid" />
      <span>{label}</span>
    </div>
  );
}
