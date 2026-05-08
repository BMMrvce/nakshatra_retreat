import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Effects";
import { Bed, Wifi, Coffee, Bath, Trees, Users } from "lucide-react";
import deluxe from "@/assets/resort-day.webp";
import villa from "@/assets/resort-night.webp";
import honeymoon from "@/assets/fountain-night.webp";
import about from "@/assets/camping.webp";

export const Route = createFileRoute("/rooms")({
  head: () => ({
    meta: [
      { title: "Rooms & Villas — Nakshatra Retreat" },
      { name: "description", content: "Discover our curated collection of forest villas, pool retreats, and honeymoon suites — each one a private sanctuary." },
      { property: "og:title", content: "Rooms & Villas — Nakshatra Retreat" },
      { property: "og:description", content: "Curated villas & suites in the heart of the forest." },
    ],
  }),
  component: Rooms,
});

const rooms = [
  { img: deluxe, name: "Deluxe Forest Room", price: "₹14,500", size: "55 sqm", guests: "2 Guests", desc: "A treetop sanctuary with floor-to-ceiling windows opening onto an ancient canopy.", amenities: ["King bed", "Forest view", "Rain shower", "Butler service"] },
  { img: villa, name: "Luxury Cottage", price: "₹22,000", size: "85 sqm", guests: "2 Guests", desc: "Reclaimed teak walls, a private deck, and a sunken bath carved from local stone.", amenities: ["Plunge tub", "Outdoor lounge", "Espresso bar", "Daily turndown"] },
  { img: villa, name: "Private Pool Villa", price: "₹38,000", size: "140 sqm", guests: "2-3 Guests", desc: "Your own infinity pool overlooking the valley. Lit lanterns at dusk. Absolute privacy.", amenities: ["Private pool", "Outdoor cinema", "Wine cellar", "Personal butler"] },
  { img: deluxe, name: "Family Suite", price: "₹32,000", size: "120 sqm", guests: "4 Guests", desc: "Two interconnected bedrooms, a children's reading nook, and a generous shared veranda.", amenities: ["2 bedrooms", "Living area", "Kids' menu", "Babysitting"] },
  { img: honeymoon, name: "Honeymoon Suite", price: "₹26,000", size: "95 sqm", guests: "2 Guests", desc: "Canopy bed, rose-petal bath, and a candlelit balcony built for whispered promises.", amenities: ["Canopy bed", "Rose bath", "Champagne setup", "Couple's spa"] },
  { img: villa, name: "Stargazer Villa", price: "₹45,000", size: "160 sqm", guests: "2 Guests", desc: "A retractable roof reveals the milky way. Private telescope. Astronomer on call.", amenities: ["Retractable roof", "Telescope", "Astronomer", "Pool"] },
];

function Rooms() {
  return (
    <>
      <PageHero
        eyebrow="Stay With Us"
        title="Sanctuaries among the canopy"
        subtitle="Six villa archetypes, each a quiet love letter to the forest that holds them."
        image={villa}
      />

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
          {rooms.map((r, i) => (
            <Reveal key={r.name} delay={(i % 2) * 0.1}>
              <div className="group hover-lift glass rounded-2xl overflow-hidden">
                <div className="img-zoom aspect-[16/10]">
                  <img src={r.img} alt={r.name} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-serif text-3xl">{r.name}</h3>
                    <div className="text-right">
                      <div className="text-gold font-serif text-2xl">{r.price}</div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wider">per night</div>
                    </div>
                  </div>
                  <div className="flex gap-5 text-xs text-muted-foreground mb-4 uppercase tracking-wider">
                    <span className="flex items-center gap-1.5"><Bed size={12} /> {r.size}</span>
                    <span className="flex items-center gap-1.5"><Users size={12} /> {r.guests}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">{r.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {r.amenities.map((a) => (
                      <span key={a} className="text-xs px-3 py-1 rounded-full border border-border text-foreground/70">{a}</span>
                    ))}
                  </div>
                  <Link to="/contact" className="btn-gold">Reserve</Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 bg-[oklch(0.14_0.02_150)] border-t border-border">
        <div className="max-w-5xl mx-auto text-center">
          <Reveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { i: Wifi, l: "High-Speed Wi-Fi" },
                { i: Coffee, l: "In-Villa Espresso" },
                { i: Bath, l: "Aromatic Soaks" },
                { i: Trees, l: "Forest Immersion" },
              ].map((a) => (
                <div key={a.l}>
                  <a.i className="mx-auto text-gold mb-3" size={28} />
                  <div className="eyebrow text-[0.65rem]">{a.l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
