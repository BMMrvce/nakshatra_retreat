import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Reveal, Particles } from "@/components/Effects";
import { useState } from "react";
import {
  Star, MapPin, Sparkles, Leaf, Wind, Sun, ArrowRight, Quote,
  Flame, Waves, Mountain, Heart, Bike,
  Mail, Phone, MessageCircle,
} from "lucide-react";
import hero from "@/assets/resort-front.webp";
import nature from "@/assets/resort-aerial.webp";
import deluxe from "@/assets/resort-day.webp";
import villa from "@/assets/resort-night.webp";
import honeymoon from "@/assets/fountain-night.webp";
import dining from "@/assets/pool-day.webp";
import spa from "@/assets/pool-night.webp";
import about from "@/assets/camping.webp";
import wedding from "@/assets/adventure-sunset.webp";
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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nakshatra Retreat — Luxury Forest Resort & Wellness Sanctuary" },
      { name: "description", content: "Escape into nature at Nakshatra Retreat. Cinematic villas, fine dining, holistic spa, and unforgettable experiences beneath a canopy of stars." },
      { property: "og:title", content: "Nakshatra Retreat — Luxury Forest Resort" },
      { property: "og:description", content: "A 5-star nature sanctuary in the Western Ghats." },
    ],
  }),
  component: Home,
});

const attractions = [
  { y: "10 km", t: "Kanakapura Fort", d: "A historical site offering panoramic views and a glimpse into the region's heritage." },
  { y: "20 km", t: "Art of Living International Center", d: "A serene place for spiritual retreats and yoga programs." },
  { y: "30 km", t: "Ramanagara Hills (Ramadevara Betta)", d: "A popular destination for trekking and rock climbing." },
  { y: "35 km", t: "Wonderla Amusement Park", d: "An entertainment park featuring thrilling rides and family-friendly attractions." },
  { y: "50 km", t: "Mekedatu", d: "A scenic picnic spot where the Kaveri River flows through a gorge, surrounded by lush greenery." },
];

const activities = [
  { i: Heart, n: "Sunrise Yoga", d: "Daily on the misty cliff pavilion with our resident master." },
  { i: Waves, n: "Mineral Pools", d: "Subterranean spring-fed pools at three temperatures." },
  { i: Mountain, n: "Guided Treks", d: "Hidden waterfalls, sacred groves, dawn ridge walks." },
  { i: Flame, n: "Campfire Nights", d: "Storytelling, mulled wine, constellation maps." },
  { i: Bike, n: "Forest Cycling", d: "Hand-built wooden bicycles on shaded trails." },
];

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
  { src: wedding, cat: "Sunset", aspect: "row-span-2" },
  { src: about, cat: "Resort" },
];

const cats = ["All", "Resort", "Rooms", "Heritage", "Dining", "Nature", "Wellness", "Activities", "Sunset"];

function Home() {
  const [filter, setFilter] = useState("All");
  const [open, setOpen] = useState<string | null>(null);
  const [sent, setSent] = useState(false);
  const filtered = filter === "All" ? photos : photos.filter((p) => p.cat === filter);

  return (
    <>
      {/* HERO */}
      <section id="home" className="relative h-screen min-h-[700px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img src={hero} alt="Nakshatra Retreat luxury forest villa at golden hour" className="w-full h-full object-cover animate-slow-zoom" />
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
          <div className="absolute inset-0 bg-[oklch(0.10_0.02_150)]/40" />
        </div>
        <Particles count={30} />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.3 }} className="eyebrow mb-8">
            ✦ A Luxury Nature Retreat ✦
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.4, delay: 0.5 }} className="font-serif text-6xl md:text-8xl lg:text-9xl leading-[0.95] font-light max-w-5xl">
            Escape Into <em className="text-shimmer not-italic">Nature</em>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }} className="mt-8 max-w-xl text-lg md:text-xl text-foreground/85 font-light">
            Experience the cinematic luxury of Nakshatra Retreat — where ancient forests, starlit skies, and timeless hospitality awaken the soul.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1.3 }} className="mt-10 flex flex-wrap gap-4 justify-center">
            <a href="#contact" className="btn-gold">Reserve Your Stay <ArrowRight size={14} /></a>
            <a href="#gallery" className="btn-outline-gold">Explore Gallery</a>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="absolute bottom-10 left-1/2 -translate-x-1/2 text-foreground/60 text-xs tracking-[0.4em] uppercase animate-float">
          Scroll to discover
        </motion.div>
      </section>

      {/* INTRO */}
      <section id="about" className="py-32 px-6 max-w-5xl mx-auto text-center">
        <Reveal>
          <div className="luxe-divider mb-8 text-xs tracking-[0.4em]">SINCE 2010</div>
          <h2 className="font-serif text-4xl md:text-6xl leading-tight">
            A sanctuary written by the <span className="text-gradient-gold italic">stars</span>,<br />
            built by the forest.
          </h2>
          <p className="mt-8 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Tucked into a hidden valley of the Western Ghats, Nakshatra Retreat is more than a destination — it is a return. To stillness. To wonder. To yourself.
          </p>
        </Reveal>
      </section>

      {/* HIGHLIGHTS */}
      <section className="py-24 px-6 bg-[oklch(0.14_0.02_150)] border-y border-border">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          {[
            { icon: Leaf, label: "Forest Sanctuary", desc: "120 acres of preserved wilderness" },
            { icon: Sparkles, label: "5-Star Service", desc: "Personal butler with every villa" },
            { icon: Wind, label: "Holistic Wellness", desc: "Ayurvedic spa & yoga pavilions" },
            { icon: Sun, label: "Cinematic Dining", desc: "Forest-to-table cuisine under stars" },
          ].map((h, i) => (
            <Reveal key={h.label} delay={i * 0.1}>
              <div className="text-center group">
                <div className="inline-flex p-5 rounded-full glass mb-5 group-hover:shadow-[var(--shadow-gold)] transition-all duration-500">
                  <h.icon className="text-gold" size={26} />
                </div>
                <h3 className="font-serif text-xl mb-2">{h.label}</h3>
                <p className="text-sm text-muted-foreground">{h.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* OUR STORY / TIMELINE */}
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
              <div className="eyebrow mb-4">Explore Around</div>
              <h2 className="font-serif text-4xl md:text-5xl">Nearby Attractions</h2>
              <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Curated escapes within a short drive of the retreat.</p>
            </div>
          </Reveal>
          <div className="space-y-12">
            {attractions.map((t, i) => (
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

      {/* PARALLAX QUOTE */}
      <section className="relative py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img src={nature} alt="Misty forest at sunrise" loading="lazy" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[oklch(0.10_0.02_150)]/75" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center px-6">
          <Reveal>
            <Quote className="mx-auto text-gold mb-8" size={36} />
            <p className="font-serif text-3xl md:text-5xl italic leading-tight font-light">
              "We do not inherit the earth from our ancestors — we borrow it from our children. Nakshatra returns it to them, untouched."
            </p>
            <div className="luxe-divider mt-10 text-xs tracking-[0.4em]">A WHISPER FROM THE FOREST</div>
          </Reveal>
        </div>
      </section>

      {/* SPA & WELLNESS */}
      <section id="spa" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <div className="eyebrow mb-4">Wellness & Adventure</div>
              <h2 className="font-serif text-4xl md:text-6xl">Awaken every sense</h2>
              <p className="mt-4 text-muted-foreground max-w-xl mx-auto">From quiet hours in our spa to roaring nights around the campfire — a rhythm for every traveler.</p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {activities.map((it, i) => (
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
        </div>
      </section>

      {/* SPLIT FEATURE — DINING */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="img-zoom rounded-2xl">
              <img src={dining} alt="Candlelight forest dining" loading="lazy" className="w-full aspect-[4/5] object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="eyebrow mb-4">Cuisine</div>
            <h2 className="font-serif text-4xl md:text-5xl mb-6">Dining beneath a canopy of stars</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our chefs forage from the very forest you'll fall asleep to. Hand-foraged spices, slow-roasted heritage grains, and an ever-changing menu shaped by the seasons.
            </p>
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <section className="py-24 px-6 border-y border-border bg-[oklch(0.14_0.02_150)]">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {[
            { n: "5,000+", l: "Happy Guests" },
            { n: "4.9", l: "Star Rating" },
            { n: "120", l: "Acres Preserved" },
            { n: "15", l: "Years of Care" },
          ].map((s, i) => (
            <Reveal key={s.l} delay={i * 0.1}>
              <div className="font-serif text-5xl md:text-6xl text-gradient-gold">{s.n}</div>
              <div className="eyebrow mt-3">{s.l}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <div className="eyebrow mb-4">Gallery</div>
              <h2 className="font-serif text-4xl md:text-6xl">A visual love letter</h2>
              <p className="mt-4 text-muted-foreground">Moments captured between heartbeats.</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] gap-4">
            {filtered.map((p, i) => (
              <Reveal key={i} delay={(i % 4) * 0.05} className={p.aspect ?? ""}>
                <button onClick={() => setOpen(p.src)} className="img-zoom rounded-xl block w-full h-full">
                  <img src={p.src} alt={p.cat} loading="lazy" className="w-full h-full object-cover" />
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <div className="eyebrow mb-4">In Their Words</div>
              <h2 className="font-serif text-4xl md:text-6xl">Whispers from our guests</h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { q: "An experience that rearranged my idea of luxury. Every detail whispered care.", n: "Anaya & Dev", r: "Honeymoon Suite" },
              { q: "I came to disconnect. I left rewired. The forest, the food, the stillness — unforgettable.", n: "Marcus T.", r: "Pool Villa Guest" },
              { q: "From the welcome to the farewell — pure cinema. Already planning our return.", n: "The Reddy Family", r: "Family Suite" },
            ].map((t, i) => (
              <Reveal key={t.n} delay={i * 0.1}>
                <div className="glass p-8 rounded-2xl h-full hover-lift">
                  <div className="flex gap-1 text-gold mb-4">
                    {[...Array(5)].map((_, j) => <Star key={j} size={14} fill="currentColor" />)}
                  </div>
                  <p className="font-serif italic text-lg leading-relaxed text-foreground/90 mb-6">"{t.q}"</p>
                  <div>
                    <div className="text-sm text-foreground">{t.n}</div>
                    <div className="text-xs text-muted-foreground tracking-wider uppercase mt-1">{t.r}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 bg-[oklch(0.14_0.02_150)] border-y border-border">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <div className="eyebrow mb-4">Plan Your Escape</div>
              <h2 className="font-serif text-4xl md:text-6xl">The forest is waiting</h2>
              <p className="mt-4 text-muted-foreground">Tell us your dream stay and our concierge will reply within four hours.</p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-16">
            <Reveal>
              <div className="eyebrow mb-4">Reservation Inquiry</div>
              <h3 className="font-serif text-3xl mb-8">Begin your reservation</h3>

              {sent ? (
                <div className="glass p-10 rounded-2xl text-center">
                  <div className="text-gold text-5xl mb-4">✦</div>
                  <h3 className="font-serif text-2xl mb-2">Thank you</h3>
                  <p className="text-muted-foreground">Our concierge will reach you shortly.</p>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <input required placeholder="First name" className="bg-transparent border border-border rounded-lg px-4 py-3 focus:border-gold outline-none transition" />
                    <input required placeholder="Last name" className="bg-transparent border border-border rounded-lg px-4 py-3 focus:border-gold outline-none transition" />
                  </div>
                  <input required type="email" placeholder="Email" className="w-full bg-transparent border border-border rounded-lg px-4 py-3 focus:border-gold outline-none transition" />
                  <input placeholder="Phone (optional)" className="w-full bg-transparent border border-border rounded-lg px-4 py-3 focus:border-gold outline-none transition" />
                  <div className="grid grid-cols-2 gap-4">
                    <input type="date" className="bg-transparent border border-border rounded-lg px-4 py-3 focus:border-gold outline-none transition text-foreground/80" />
                    <input type="date" className="bg-transparent border border-border rounded-lg px-4 py-3 focus:border-gold outline-none transition text-foreground/80" />
                  </div>
                  <textarea rows={4} placeholder="Tell us about your dream stay..." className="w-full bg-transparent border border-border rounded-lg px-4 py-3 focus:border-gold outline-none transition resize-none" />
                  <button type="submit" className="btn-gold">Send Inquiry</button>
                </form>
              )}
            </Reveal>

            <Reveal delay={0.2}>
              <div className="eyebrow mb-4">Reach Us</div>
              <h3 className="font-serif text-3xl mb-8">A whisper away</h3>
              <div className="space-y-6">
                {[
                  { i: MapPin, t: "Hidden Valley Road", s: "Western Ghats, India 571234" },
                  { i: Phone, t: "+91 90000 00000", s: "Concierge • 24 hours" },
                  { i: Mail, t: "stay@nakshatraretreat.com", s: "Reservations & inquiries" },
                  { i: MessageCircle, t: "WhatsApp Concierge", s: "Reply within minutes" },
                ].map((c) => (
                  <div key={c.t} className="flex gap-4 items-start glass p-5 rounded-xl hover-lift">
                    <div className="p-3 rounded-full bg-gold/10">
                      <c.i className="text-gold" size={20} />
                    </div>
                    <div>
                      <div className="font-serif text-lg">{c.t}</div>
                      <div className="text-sm text-muted-foreground">{c.s}</div>
                    </div>
                  </div>
                ))}
              </div>

            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-40 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img src={about} alt="Aerial view of resort" loading="lazy" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[oklch(0.10_0.02_150)]/80" />
        </div>
        <div className="relative max-w-3xl mx-auto text-center">
          <Reveal>
            <MapPin className="mx-auto text-gold mb-6" size={28} />
            <h2 className="font-serif text-4xl md:text-6xl mb-6">Your story begins here.</h2>
            <p className="text-lg text-foreground/80 mb-10">
              The forest is waiting. So is your suite, your morning chai, your second breath.
            </p>
            <a href="#contact" className="btn-gold">Reserve Your Escape <ArrowRight size={14} /></a>
          </Reveal>
        </div>
      </section>

      {/* Lightbox */}
      {open && (
        <div onClick={() => setOpen(null)} className="fixed inset-0 z-[80] bg-[oklch(0.08_0.02_150)]/95 backdrop-blur-md flex items-center justify-center p-6 cursor-zoom-out animate-in fade-in">
          <img src={open} alt="Preview" className="max-h-full max-w-full rounded-xl shadow-2xl" />
        </div>
      )}

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/919000000000"
        target="_blank"
        rel="noopener"
        className="fixed bottom-6 right-6 z-50 bg-gold text-background p-4 rounded-full shadow-[var(--shadow-gold)] hover:scale-110 transition-transform animate-float"
        aria-label="WhatsApp"
      >
        <MessageCircle size={24} />
      </a>
    </>
  );
}
