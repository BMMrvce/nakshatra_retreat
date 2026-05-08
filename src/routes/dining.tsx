import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Effects";
import dining from "@/assets/dining.jpg";
import nature from "@/assets/nature.jpg";

export const Route = createFileRoute("/dining")({
  head: () => ({
    meta: [
      { title: "Dining — Nakshatra Retreat" },
      { name: "description", content: "Forest-to-table cuisine, candlelit forest dining, and a chef's tasting menu shaped by the seasons." },
      { property: "og:title", content: "Dining — Nakshatra Retreat" },
      { property: "og:description", content: "Cinematic dining beneath the stars." },
    ],
  }),
  component: Dining,
});

const venues = [
  { name: "Aranya", tag: "Signature Restaurant", desc: "Ten-course tasting menu reimagined daily by Chef Kavan, drawing from forest, river, and field.", time: "Dinner • 7pm onwards" },
  { name: "The Canopy", tag: "Treetop Lounge", desc: "Cocktails crafted with foraged botanicals, served on a glass deck above the forest.", time: "All day • 11am–late" },
  { name: "Agni", tag: "Open-Fire Kitchen", desc: "An open-flame ritual of slow-roasted meats, smoked vegetables, and breads risen by sunlight.", time: "Lunch & Dinner" },
  { name: "Stargazer Table", tag: "Private Dining", desc: "A single candlelit table for two, set wherever the night feels most magical.", time: "By reservation" },
];

const dishes = [
  { n: "Smoked Heirloom Beetroot", d: "Coal-roasted, served with foraged horseradish cream" },
  { n: "Pepper-Crusted River Trout", d: "Fished at dawn, wrapped in banana leaf, slow steamed" },
  { n: "Wild Mushroom & Truffle Khichdi", d: "Aged basmati, hand-foraged morels, golden ghee" },
  { n: "Cardamom Honey Soufflé", d: "Wildflower honey from our apiary, single-origin cocoa" },
];

function Dining() {
  return (
    <>
      <PageHero
        eyebrow="Cuisine"
        title="Tasting the forest itself"
        subtitle="Our chefs forage at dawn, and by dusk, the forest is on your plate."
        image={dining}
      />

      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
          {venues.map((v, i) => (
            <Reveal key={v.name} delay={(i % 2) * 0.1}>
              <div className="glass rounded-2xl p-10 hover-lift h-full">
                <div className="eyebrow mb-3">{v.tag}</div>
                <h3 className="font-serif text-4xl mb-4">{v.name}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{v.desc}</p>
                <div className="text-xs text-gold tracking-[0.3em] uppercase">{v.time}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img src={nature} alt="" loading="lazy" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-[oklch(0.12_0.02_150)]/85" />
        </div>
        <div className="relative max-w-5xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <div className="eyebrow mb-4">Chef's Selections</div>
              <h2 className="font-serif text-4xl md:text-6xl">Signature dishes</h2>
            </div>
          </Reveal>
          <div className="divide-y divide-border">
            {dishes.map((d, i) => (
              <Reveal key={d.n} delay={i * 0.05}>
                <div className="py-8 grid md:grid-cols-[1fr_2fr] gap-6">
                  <h3 className="font-serif text-2xl text-gradient-gold">{d.n}</h3>
                  <p className="text-muted-foreground italic">{d.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/contact" className="btn-gold">Reserve a Table</Link>
          </div>
        </div>
      </section>
    </>
  );
}
