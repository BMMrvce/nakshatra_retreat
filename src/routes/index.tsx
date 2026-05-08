import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Reveal, Particles } from "@/components/Effects";
import { Star, MapPin, Sparkles, Leaf, Wind, Sun, ArrowRight, Quote } from "lucide-react";
import hero from "@/assets/resort-front.webp";
import nature from "@/assets/resort-aerial.webp";
import deluxe from "@/assets/resort-day.webp";
import villa from "@/assets/resort-night.webp";
import honeymoon from "@/assets/fountain-night.webp";
import dining from "@/assets/pool-day.webp";
import spa from "@/assets/pool-night.webp";
import about from "@/assets/camping.webp";
import adventure from "@/assets/adventure-rope.webp";
import adventureSunset from "@/assets/adventure-sunset.webp";
import poolNight from "@/assets/pool-night.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nakshatra Retreat — Luxury Forest Resort & Wellness Sanctuary" },
      { name: "description", content: "Escape into nature at Nakshatra Retreat. Cinematic villas, fine dining, holistic spa, and unforgettable destination weddings beneath a canopy of stars." },
      { property: "og:title", content: "Nakshatra Retreat — Luxury Forest Resort" },
      { property: "og:description", content: "A 5-star nature sanctuary in the Western Ghats." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-screen min-h-[700px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img src={hero} alt="Nakshatra Retreat luxury forest villa at golden hour" className="w-full h-full object-cover animate-slow-zoom" />
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
          <div className="absolute inset-0 bg-[oklch(0.10_0.02_150)]/40" />
        </div>
        <Particles count={30} />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="eyebrow mb-8"
          >
            ✦ A Luxury Nature Retreat ✦
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.5 }}
            className="font-serif text-6xl md:text-8xl lg:text-9xl leading-[0.95] font-light max-w-5xl"
          >
            Escape Into <em className="text-shimmer not-italic">Nature</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-8 max-w-xl text-lg md:text-xl text-foreground/85 font-light"
          >
            Experience the cinematic luxury of Nakshatra Retreat — where ancient forests, starlit skies, and timeless hospitality awaken the soul.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="mt-10 flex flex-wrap gap-4 justify-center"
          >
            <Link to="/contact" className="btn-gold">Reserve Your Stay <ArrowRight size={14} /></Link>
            <Link to="/rooms" className="btn-outline-gold">Explore Villas</Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-foreground/60 text-xs tracking-[0.4em] uppercase animate-float"
        >
          Scroll to discover
        </motion.div>
      </section>

      {/* INTRO */}
      <section className="py-32 px-6 max-w-5xl mx-auto text-center">
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

      {/* ROOMS PREVIEW */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <div className="eyebrow mb-4">Stay With Us</div>
              <h2 className="font-serif text-4xl md:text-6xl">Curated Villas & Suites</h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { img: deluxe, name: "Deluxe Forest Room", price: "₹14,500" },
              { img: villa, name: "Private Pool Villa", price: "₹38,000" },
              { img: honeymoon, name: "Honeymoon Suite", price: "₹26,000" },
            ].map((r, i) => (
              <Reveal key={r.name} delay={i * 0.1}>
                <Link to="/rooms" className="block group hover-lift">
                  <div className="img-zoom rounded-2xl relative aspect-[4/5]">
                    <img src={r.img} alt={r.name} loading="lazy" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.10_0.02_150)] via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="font-serif text-2xl mb-1">{r.name}</h3>
                      <p className="text-sm text-gold">{r.price} <span className="text-foreground/60">/ night</span></p>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/rooms" className="btn-outline-gold">View All Accommodations</Link>
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

      {/* SPLIT FEATURES */}
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
            <Link to="/dining" className="btn-outline-gold">Explore Dining</Link>
          </Reveal>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center mt-32">
          <Reveal className="md:order-2">
            <div className="img-zoom rounded-2xl">
              <img src={spa} alt="Stone spa with candlelight" loading="lazy" className="w-full aspect-[4/5] object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="eyebrow mb-4">Wellness</div>
            <h2 className="font-serif text-4xl md:text-5xl mb-6">An ancient art of stillness</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Surrender to centuries-old Ayurvedic rituals, sunrise yoga on misty cliffs, and quiet hours in our subterranean mineral pools.
            </p>
            <Link to="/spa" className="btn-outline-gold">Discover Wellness</Link>
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

      {/* DISCOVER ALL PAGES */}
      <section className="py-32 px-6 bg-[oklch(0.12_0.02_150)] border-y border-border">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <div className="eyebrow mb-4">Explore</div>
              <h2 className="font-serif text-4xl md:text-6xl">Every Corner of Nakshatra</h2>
              <p className="mt-4 text-muted-foreground max-w-xl mx-auto">A complete journey through our sanctuary — every experience, every space.</p>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {[
              { to: "/about", img: nature, name: "Our Story" },
              { to: "/rooms", img: deluxe, name: "Villas & Suites" },
              { to: "/dining", img: dining, name: "Dining" },
              { to: "/spa", img: spa, name: "Spa & Wellness" },
              { to: "/gallery", img: poolNight, name: "Gallery" },
              { to: "/weddings", img: adventureSunset, name: "Weddings" },
              { to: "/contact", img: about, name: "Contact & Stay" },
              { to: "/rooms", img: adventure, name: "Adventure" },
            ].map((p, i) => (
              <Reveal key={p.name} delay={(i % 4) * 0.08}>
                <Link to={p.to} className="block group hover-lift">
                  <div className="img-zoom rounded-2xl relative aspect-[4/5]">
                    <img src={p.img} alt={p.name} loading="lazy" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.10_0.02_150)] via-[oklch(0.10_0.02_150)]/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h3 className="font-serif text-xl">{p.name}</h3>
                      <div className="mt-2 text-xs tracking-[0.3em] uppercase text-gold flex items-center gap-2 opacity-80 group-hover:opacity-100 transition">
                        Discover <ArrowRight size={12} />
                      </div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
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
            <Link to="/contact" className="btn-gold">Reserve Your Escape <ArrowRight size={14} /></Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
