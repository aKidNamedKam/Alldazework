import React from 'react';
import {
  ArrowRight,
  Sparkles,
  Handshake,
  Heart,
  Layout,
  LineChart,
} from "lucide-react";


export default function Services() {
    const items = [
    {
      icon: <Heart />,
      title: "Human-centered discovery",
      text: "Interviews, journeys, JTBD. We model real behaviors so your product fits real lives.",
    },
    {
      icon: <Layout />,
      title: "Product UX & flows",
      text: "Flows that reduce cognitive load. Patterns that scale. Interfaces that don’t fight the user.",
    },
    {
      icon: <LineChart />,
      title: "Design systems",
      text: "Tokens, components, governance. Faster shipping, fewer inconsistencies, happier teams.",
    },
    {
      icon: <Handshake />,
      title: "Team integration",
      text: "We embed, align with PM/Eng, and uplevel process so velocity doesn’t kill quality.",
    },
    {
      icon: <Sparkles />,
      title: "MVP & validation",
      text: "Prototype, test, iterate. Prove the value early—and keep what works.",
    },
    {
      icon: <ArrowRight />,
      title: "Conversion & growth UX",
      text: "Clear paths, persuasive microcopy, and ethical nudges. Win trust, then the click.",
    },
  ];

  return (
    <section id="services" className="container mx-auto py-16 md:py-24">
      <div className="mb-8">
        <span className="kicker">What we do best</span>
        <h2 className="mt-2 text-3xl md:text-4xl font-serif">
          Strategic design, delivered with care and collaboration.
        </h2>
      </div>

      <div className="mb-12 max-w-3xl">
        <p className="text-base text-ink/80 leading-relaxed">
          We don’t just ship wireframes. We collaborate deeply—with founders, teams, and product leads—
          to bring thoughtful, scalable design into your business. Whether embedded with your team or 
          leading the charge, we bring clarity, structure, and flare.
        </p>
      </div>

      <div className="flex overflow-x-auto gap-6 snap-x px-4 pb-4 -mx-4">
        {items.map((it) => (
          <article
            key={it.title}
            className="snap-start shrink-0 w-72 p-6 border border-1 rounded-lg hover:shadow-lg transition bg-white"
          >
            <div className="mb-3 text-ink">{it.icon}</div>
            <h3 className="text-lg font-medium">{it.title}</h3>
            <p className="mt-2 text-ink/70 text-sm leading-relaxed">{it.text}</p>
          </article>
        ))}
      </div>

      {/* --- Client Logo Row --- */}
      <div className="my-16">
        <h3 className="text-center text-lg font-semibold mb-6">Clients We've Worked With</h3>
        <div className="flex flex-wrap justify-center items-center gap-24 opacity-70 grayscale">
          <img src="/logos/digilence.svg" alt="Digilence" className="h-8" />
          <img src="/logos/zaba.svg" alt="Zaba Therapy" className="h-8" />
          <img src="/logos/seabeck.svg" alt="Seabeck Systems" className="h-8" />
          <img src="/logos/barrell.svg" alt="Barrell" className="h-8" />
          <img src="/logos/arthritis.svg" alt="Arthritis Foundation" className="h-8" />
        </div>
      </div>

      {/* --- Testimonial Block --- */}
      <div className="mb-16 max-w-2xl text-center mx-auto">
        <blockquote className="text-md md:text-lg font-serif leading-relaxed text-ink/90 italic">
          “Kinan’s impact on our design team was instant. He elevated the quality of thinking, helped structure our design system, and coached other designers with ease.”
        </blockquote>
        <figcaption className="mt-4 text-ink/60 text-sm font-medium">
          — Design Director, Credit Union
        </figcaption>
      </div>

      {/* 
      <div className="my-20 max-w-4xl mx-auto">
        <h3 className="text-lg font-semibold text-center mb-6">Ways We Work With Teams</h3>
        <ul className="grid gap-4 sm:grid-cols-2">
          <li className="p-4 bg-neutral-50 rounded-lg border">🔄 Fractional Design Partner</li>
          <li className="p-4 bg-neutral-50 rounded-lg border">🤝 Embedded Product Designer</li>
          <li className="p-4 bg-neutral-50 rounded-lg border">🚀 UX for MVP & New Initiatives</li>
          <li className="p-4 bg-neutral-50 rounded-lg border">🎯 Studio Sprint (1–2 week focus)</li>
        </ul>
      </div>
      */}

      {/* --- Team Section --- 
      <div className="my-24 max-w-5xl mx-auto px-4" id="team">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <img
            src="/images/team-photo.jpg"
            alt="Alldazework Design Team"
            className="w-full max-w-sm rounded-xl shadow-md"
          />
          <div className="max-w-xl">
            <h3 className="text-xl font-semibold mb-4">The Team</h3>
            <p className="text-base text-ink/80 leading-relaxed mb-4">
              We’re a design duo who think with our hands and build with our hearts. With backgrounds in
              product strategy, systems thinking, visual craft, and frontend collaboration, we’ve helped
              early-stage startups and large organizations alike.
            </p>
            <p className="text-base text-ink/80 leading-relaxed">
              We believe in calm collaboration, bold thinking, and good rhythm. Alldazework is how we bring that to life.
            </p>
          </div>
        </div>
      </div>*/}

      {/* --- Selected Work Section --- 
      <div className="my-24 max-w-6xl mx-auto px-4" id="work">
        <h3 className="text-xl font-semibold mb-6 text-center">Selected Work</h3>
        <div className="grid md:grid-cols-2 gap-8">

          <a href="/work/you-continuum" className="group block border rounded-lg overflow-hidden hover:shadow-lg transition">
            <img src="/images/case-you.jpg" alt="YOU Continuum" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h4 className="text-lg font-medium group-hover:underline">YOU Continuum</h4>
              <p className="mt-1 text-sm text-ink/70">
                A values-based scoring tool for clarity and life design. From brand to build.
              </p>
            </div>
          </a>

          <a href="/work/apptivity" className="group block border rounded-lg overflow-hidden hover:shadow-lg transition">
            <img src="/images/case-apptivity.jpg" alt="Apptivity" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h4 className="text-lg font-medium group-hover:underline">Apptivity</h4>
              <p className="mt-1 text-sm text-ink/70">
                Performance dashboards and gamified tools for sales teams. UI patterns and action plans.
              </p>
            </div>
          </a>

  
        </div>
      </div>*/}
    </section>
  );
}