import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative pt-24 pb-10 border-t border-border bg-[oklch(0.12_0.02_150)]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <span className="text-gold text-2xl">✦</span>
            <div>
              <div className="font-serif text-xl">Nakshatra</div>
              <div className="eyebrow text-[0.55rem]">Retreat</div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            A luxury sanctuary where the stars meet the forest. Escape the ordinary, awaken the extraordinary.
          </p>
        </div>

        <div>
          <h4 className="eyebrow mb-5">Explore</h4>
          <ul className="space-y-3 text-sm text-foreground/70">
            <li><Link to="/about" className="hover:text-gold transition">About</Link></li>
            <li><Link to="/spa" className="hover:text-gold transition">Spa & Activities</Link></li>
            <li><Link to="/gallery" className="hover:text-gold transition">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-gold transition">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="eyebrow mb-5">Reach Us</h4>
          <ul className="space-y-3 text-sm text-foreground/70">
            <li className="flex gap-2 items-start"><MapPin size={14} className="text-gold mt-1" /><span>Hidden Valley Road,<br />Western Ghats, India</span></li>
            <li className="flex gap-2 items-center"><Phone size={14} className="text-gold" /><span>+91 90000 00000</span></li>
            <li className="flex gap-2 items-center"><Mail size={14} className="text-gold" /><span>stay@nakshatraretreat.com</span></li>
          </ul>
        </div>

        <div>
          <h4 className="eyebrow mb-5">Newsletter</h4>
          <p className="text-sm text-muted-foreground mb-4">Receive exclusive offers and seasonal stories.</p>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 bg-transparent border border-border rounded-full px-4 py-2 text-sm focus:border-gold outline-none"
            />
            <button className="btn-gold !px-5 !py-2">→</button>
          </form>
          <div className="flex gap-4 mt-6 text-foreground/60">
            <a href="#" className="hover:text-gold transition"><Instagram size={18} /></a>
            <a href="#" className="hover:text-gold transition"><Facebook size={18} /></a>
            <a href="#" className="hover:text-gold transition"><Youtube size={18} /></a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between gap-4 text-xs text-muted-foreground">
        <span>© {new Date().getFullYear()} Nakshatra Retreat. All rights reserved.</span>
        <span>Crafted with reverence for nature.</span>
      </div>
    </footer>
  );
}
