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
        <span className="kicker">Services</span>
        <h2 className="mt-2 text-3xl md:text-4xl font-serif">
          What we do—calmly and well.
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <article
            key={it.title}
            className="card p-6 hover:shadow-lg transition"
          >
            <div className="mb-3 text-ink">{it.icon}</div>
            <h3 className="text-lg font-medium">{it.title}</h3>
            <p className="mt-2 text-ink/70 text-sm leading-relaxed">{it.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}