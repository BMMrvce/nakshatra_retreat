import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Effects";
import wedding from "@/assets/adventure-sunset.webp";
import about from "@/assets/camping.webp";

export const Route = createFileRoute("/weddings")({
  head: () => ({
    meta: [
      { title: "Weddings & Events — Nakshatra Retreat" },
      { name: "description", content: "Cinematic destination weddings, intimate vows, and curated celebrations beneath a canopy of stars." },
      { property: "og:title", content: "Weddings & Events — Nakshatra Retreat" },
      { property: "og:description", content: "Destination weddings beneath the stars." },
    ],
  }),
  component: Weddings,
});

const packages = [
  { n: "The Whisper", g: "Up to 30 guests", d: "An intimate vow exchange in our private grove, candlelit dinner, two-night stay for the couple.", p: "From ₹7,50,000" },
  { n: "The Constellation", g: "Up to 100 guests", d: "Three-day celebration across the estate — sangeet under fairy lights, ceremony at sunrise, banquet at dusk.", p: "From ₹22,00,000" },
  { n: "The Galaxy", g: "Up to 200 guests", d: "Full estate buyout. Bespoke design. Personal wedding atelier. A celebration that belongs only to you.", p: "On request" },
];

function Weddings() {
  return (
    <>
      <PageHero
        eyebrow="Celebrations"
        title="Vows beneath a canopy of stars"
        subtitle="Where romance is written in firelight, and forever begins in the forest."
        image={wedding}
      />

      <section className="py-32 px-6 max-w-5xl mx-auto text-center">
        <Reveal>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            A wedding here is not staged — <em className="text-gradient-gold not-italic">it unfolds</em>.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            From the first cup of chai with the wedding planner to the final lantern released into the night sky, every detail is handcrafted, never templated.
          </p>
        </Reveal>
      </section>

      <section className="py-24 px-6 bg-[oklch(0.14_0.02_150)] border-y border-border">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          {packages.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.1}>
              <div className="glass rounded-2xl p-10 hover-lift h-full flex flex-col">
                <div className="eyebrow mb-3">{p.g}</div>
                <h3 className="font-serif text-3xl mb-4">{p.n}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6 flex-1">{p.d}</p>
                <div className="text-gold font-serif text-xl mb-6">{p.p}</div>
                <Link to="/contact" className="btn-outline-gold self-start">Inquire</Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative py-40 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img src={about} alt="" loading="lazy" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[oklch(0.10_0.02_150)]/80" />
        </div>
        <div className="relative max-w-2xl mx-auto text-center">
          <Reveal>
            <h2 className="font-serif text-4xl md:text-5xl mb-6">Begin your forever.</h2>
            <p className="text-foreground/80 mb-10">Speak with our wedding atelier — no two stories alike.</p>
            <Link to="/contact" className="btn-gold">Request a Consultation</Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
