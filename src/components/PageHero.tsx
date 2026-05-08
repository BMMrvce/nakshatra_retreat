import { Reveal } from "./Effects";

export function PageHero({
  title,
  subtitle,
  eyebrow,
  image,
}: {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  image: string;
}) {
  return (
    <section className="relative h-[75vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={image} alt={title} className="w-full h-full object-cover animate-slow-zoom" />
        <div className="absolute inset-0 bg-[oklch(0.10_0.02_150)]/60" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      </div>
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <Reveal>
          {eyebrow && <div className="eyebrow mb-6">{eyebrow}</div>}
          <h1 className="text-5xl md:text-7xl font-serif font-light leading-[1.05]">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 text-lg text-foreground/80 max-w-2xl mx-auto font-light">
              {subtitle}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
