import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Effects";
import { Flame, Waves, Mountain, Heart, Bike, Sparkles } from "lucide-react";
import spa from "@/assets/pool-night.webp";

export const Route = createFileRoute("/spa")({
  head: () => ({
    meta: [
      { title: "Spa & Activities — Nakshatra Retreat" },
      { name: "description", content: "Ancient Ayurvedic rituals, sunrise yoga, forest treks, and starlit campfires — wellness experiences for every soul." },
      { property: "og:title", content: "Spa & Activities — Nakshatra Retreat" },
      { property: "og:description", content: "Wellness, adventure, and slow rituals." },
    ],
  }),
  component: SpaPage,
});

const items = [
  { i: Sparkles, n: "Ayurvedic Spa", d: "Hour-long oil rituals performed by lineage healers." },
  { i: Heart, n: "Sunrise Yoga", d: "Daily on the misty cliff pavilion with our resident master." },
  { i: Waves, n: "Mineral Pools", d: "Subterranean spring-fed pools at three temperatures." },
  { i: Mountain, n: "Guided Treks", d: "Hidden waterfalls, sacred groves, dawn ridge walks." },
  { i: Flame, n: "Campfire Nights", d: "Storytelling, mulled wine, constellation maps." },
  { i: Bike, n: "Forest Cycling", d: "Hand-built wooden bicycles on shaded trails." },
];

function SpaPage() {
  return (
    <>
      <PageHero
        eyebrow="Wellness & Adventure"
        title="Awaken every sense"
        subtitle="From quiet hours in our subterranean spa to roaring nights around the campfire — a rhythm for every traveler."
        image={spa}
      />

      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <Reveal key={it.n} delay={(i % 3) * 0.1}>
              <div className="glass p-10 rounded-2xl hover-lift h-full group">
                <div className="inline-flex p-4 rounded-full glass mb-6 group-hover:shadow-[var(--shadow-gold)] transition-all duration-500">
                  <it.i className="text-gold" size={24} />
                </div>
                <h3 className="font-serif text-2xl mb-3">{it.n}</h3>
                <p className="text-muted-foreground leading-relaxed">{it.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img src={spa} alt="" loading="lazy" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[oklch(0.10_0.02_150)]/80" />
        </div>
        <div className="relative max-w-3xl mx-auto text-center px-6">
          <Reveal>
            <h2 className="font-serif text-4xl md:text-6xl mb-6">"Wellness is not earned. It is remembered."</h2>
            <div className="luxe-divider mt-8 text-xs tracking-[0.4em]">— OUR HEAD OF WELLNESS</div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
