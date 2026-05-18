type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && <p className="mb-3 text-sm font-bold tracking-[0.18em] text-primary">{eyebrow}</p>}
      <h2 className="whitespace-pre-line text-balance text-3xl font-bold leading-[1.35] text-primary-dark md:text-4xl">
        {title}
      </h2>
      {description && <p className="mt-5 whitespace-pre-line text-base leading-8 text-muted md:text-lg">{description}</p>}
    </div>
  );
}
