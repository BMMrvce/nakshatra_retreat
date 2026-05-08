import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Effects";
import about from "@/assets/about.jpg";
import nature from "@/assets/nature.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story — Nakshatra Retreat" },
      { name: "description", content: "The story behind Nakshatra Retreat: a family vision born of reverence for the forest and the art of slow hospitality." },
      { property: "og:title", content: "Our Story — Nakshatra Retreat" },
      { property: "og:description", content: "A vision born of reverence for the forest." },
    ],
  }),
  component: About,
});

const timeline = [
  { y: "2008", t: "A Vision Sown", d: "Founders Aarav & Meera Iyer purchase 120 acres of unspoiled forest, vowing to preserve every tree." },
  { y: "2010", t: "Doors Open", d: "The first six villas welcome guests, hand-built by local artisans using only reclaimed timber." },
  { y: "2015", t: "The Spa Awakens", d: "Our subterranean spa is consecrated, blending Ayurveda with the silence of the earth." },
  { y: "2020", t: "Carbon Negative", d: "Nakshatra becomes the first Indian retreat to receive carbon-negative certification." },
  { y: "2025", t: "A Decade of Quiet Luxury", d: "Recognized as one of Asia's finest nature sanctuaries by Travel + Leisure." },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="Of forests, stars, and slow living."
        subtitle="Nakshatra means 'star' in Sanskrit. We are a constellation of moments — woven from soil, silence, and the wisdom of the wild."
        image={about}
      />

      <section className="py-32 px-6 max-w-4xl mx-auto text-center">
        <Reveal>
          <div className="luxe-divider mb-6 text-xs tracking-[0.4em]">PHILOSOPHY</div>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-8">
            "We did not build a resort.<br />
            <span className="italic text-gradient-gold">We listened to a forest, and it told us where to sleep."</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Every villa rests on stilts above the forest floor — no tree was felled in our making. Our staff are children of these hills. Our food, the harvest of our soil. Our luxury, the privilege of leaving no trace.
          </p>
        </Reveal>
      </section>

      <section className="py-24 px-6 bg-[oklch(0.14_0.02_150)] border-y border-border">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <div className="eyebrow mb-4">Our Journey</div>
              <h2 className="font-serif text-4xl md:text-5xl">A timeline of reverence</h2>
            </div>
          </Reveal>
          <div className="space-y-12">
            {timeline.map((t, i) => (
              <Reveal key={t.y} delay={i * 0.05}>
                <div className="grid md:grid-cols-[120px_1fr] gap-6 md:gap-12 items-start border-l-2 border-gold/30 pl-6 md:border-l-0 md:pl-0">
                  <div className="font-serif text-4xl text-gradient-gold">{t.y}</div>
                  <div>
                    <h3 className="font-serif text-2xl mb-2">{t.t}</h3>
                    <p className="text-muted-foreground leading-relaxed">{t.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-40 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img src={nature} alt="Forest at sunrise" loading="lazy" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[oklch(0.10_0.02_150)]/75" />
        </div>
        <div className="relative max-w-3xl mx-auto text-center">
          <Reveal>
            <h2 className="font-serif text-4xl md:text-6xl">"To care for the land is the highest form of luxury."</h2>
            <div className="luxe-divider mt-8 text-xs tracking-[0.4em]">— AARAV IYER, FOUNDER</div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
