import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Effects";
import { useState } from "react";
import deluxe from "@/assets/resort-day.webp";
import villa from "@/assets/resort-night.webp";
import honeymoon from "@/assets/fountain-night.webp";
import dining from "@/assets/pool-day.webp";
import spa from "@/assets/pool-night.webp";
import nature from "@/assets/resort-aerial.webp";
import wedding from "@/assets/adventure-sunset.webp";
import about from "@/assets/camping.webp";
import hero from "@/assets/resort-front.webp";
import gardenBench from "@/assets/garden-bench.webp";
import cottage from "@/assets/cottage.webp";
import aerialGrounds from "@/assets/aerial-grounds.webp";
import heritageCourtyard from "@/assets/heritage-courtyard.webp";
import heritageSwing from "@/assets/heritage-swing.webp";
import playground from "@/assets/playground.webp";
import cricketNet from "@/assets/cricket-net.webp";
import gardenLights from "@/assets/garden-lights.webp";
import gamesBarrel from "@/assets/games-barrel.webp";
import gamesRoom from "@/assets/games-room.webp";
import adventureRope from "@/assets/adventure-rope.webp";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Nakshatra Retreat" },
      { name: "description", content: "A visual journey through Nakshatra Retreat — rooms, nature, dining, weddings, and unforgettable moments." },
      { property: "og:title", content: "Gallery — Nakshatra Retreat" },
      { property: "og:description", content: "Cinematic moments from our forest sanctuary." },
    ],
  }),
  component: Gallery,
});

const photos = [
  { src: hero, cat: "Resort", aspect: "row-span-2" },
  { src: aerialGrounds, cat: "Resort", aspect: "row-span-2" },
  { src: cottage, cat: "Rooms" },
  { src: deluxe, cat: "Rooms" },
  { src: villa, cat: "Rooms", aspect: "row-span-2" },
  { src: honeymoon, cat: "Rooms" },
  { src: heritageCourtyard, cat: "Heritage", aspect: "row-span-2" },
  { src: heritageSwing, cat: "Heritage" },
  { src: dining, cat: "Dining" },
  { src: spa, cat: "Wellness" },
  { src: gardenBench, cat: "Nature" },
  { src: gardenLights, cat: "Nature", aspect: "row-span-2" },
  { src: nature, cat: "Nature" },
  { src: playground, cat: "Activities" },
  { src: cricketNet, cat: "Activities" },
  { src: adventureRope, cat: "Activities" },
  { src: gamesBarrel, cat: "Activities" },
  { src: gamesRoom, cat: "Activities", aspect: "row-span-2" },
  { src: wedding, cat: "Weddings", aspect: "row-span-2" },
  { src: about, cat: "Resort" },
];

const cats = ["All", "Rooms", "Heritage", "Dining", "Nature", "Wellness", "Activities", "Weddings", "Resort"];

function Gallery() {
  const [filter, setFilter] = useState("All");
  const [open, setOpen] = useState<string | null>(null);
  const filtered = filter === "All" ? photos : photos.filter((p) => p.cat === filter);

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A visual love letter"
        subtitle="Moments captured between heartbeats."
        image={nature}
      />

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="flex flex-wrap gap-3 justify-center mb-12">
              {cats.map((c) => (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  className={`px-5 py-2 rounded-full text-xs tracking-[0.2em] uppercase transition-all duration-300 ${
                    filter === c
                      ? "bg-gold text-background"
                      : "border border-border text-foreground/70 hover:border-gold hover:text-gold"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] gap-4">
            {filtered.map((p, i) => (
              <Reveal key={i} delay={(i % 4) * 0.05} className={p.aspect ?? ""}>
                <button
                  onClick={() => setOpen(p.src)}
                  className="img-zoom rounded-xl block w-full h-full"
                >
                  <img src={p.src} alt={p.cat} loading="lazy" className="w-full h-full object-cover" />
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {open && (
        <div
          onClick={() => setOpen(null)}
          className="fixed inset-0 z-[80] bg-[oklch(0.08_0.02_150)]/95 backdrop-blur-md flex items-center justify-center p-6 cursor-zoom-out animate-in fade-in"
        >
          <img src={open} alt="Preview" className="max-h-full max-w-full rounded-xl shadow-2xl" />
        </div>
      )}
    </>
  );
}
