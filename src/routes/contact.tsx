import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Effects";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { useState } from "react";
import nature from "@/assets/resort-aerial.webp";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Reservations — Nakshatra Retreat" },
      { name: "description", content: "Reserve your stay, plan a wedding, or simply say hello. Our concierge replies within hours." },
      { property: "og:title", content: "Contact — Nakshatra Retreat" },
      { property: "og:description", content: "Reserve your luxury escape." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero
        eyebrow="Plan Your Escape"
        title="The forest is waiting"
        subtitle="Tell us your dream stay and our concierge will reply within four hours."
        image={nature}
      />

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <Reveal>
            <div className="eyebrow mb-4">Reservation Inquiry</div>
            <h2 className="font-serif text-4xl mb-8">Begin your reservation</h2>

            {sent ? (
              <div className="glass p-10 rounded-2xl text-center">
                <div className="text-gold text-5xl mb-4">✦</div>
                <h3 className="font-serif text-2xl mb-2">Thank you</h3>
                <p className="text-muted-foreground">Our concierge will reach you shortly.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                className="space-y-5"
              >
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
                <select className="w-full bg-transparent border border-border rounded-lg px-4 py-3 focus:border-gold outline-none transition text-foreground/80">
                  <option className="bg-background">Deluxe Forest Room</option>
                  <option className="bg-background">Pool Villa</option>
                  <option className="bg-background">Honeymoon Suite</option>
                  <option className="bg-background">Family Suite</option>
                  <option className="bg-background">Stargazer Villa</option>
                </select>
                <textarea rows={4} placeholder="Tell us about your dream stay..." className="w-full bg-transparent border border-border rounded-lg px-4 py-3 focus:border-gold outline-none transition resize-none" />
                <button type="submit" className="btn-gold">Send Inquiry</button>
              </form>
            )}
          </Reveal>

          <Reveal delay={0.2}>
            <div className="eyebrow mb-4">Reach Us</div>
            <h2 className="font-serif text-4xl mb-8">A whisper away</h2>
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

            <div className="mt-10 aspect-[4/3] rounded-2xl overflow-hidden border border-border">
              <iframe
                title="Map"
                className="w-full h-full grayscale-[60%] contrast-110"
                src="https://www.openstreetmap.org/export/embed.html?bbox=75.0%2C12.0%2C76.0%2C13.0&layer=mapnik"
              />
            </div>
          </Reveal>
        </div>
      </section>

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
