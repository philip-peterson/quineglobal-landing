// All of the page's copy, in one place.
import type { ReactNode } from "react";

export const links = {
  linkedin: "https://www.linkedin.com/company/98201308/",
  github: "https://github.com/quine-global",
  blog: "https://substack.com/@quineglobal",
};

export type Slide = {
  image: string;
  title: string;
  body: string;
  align?: "start";
  lightCaption?: boolean;
};

export const slides: Slide[] = [
  {
    image: "/media/rak-ankong-thYmYAf5X9c-unsplash.jpg",
    title: "Seeing the System for the First Time",
    body: "Human health, computing, and policy are not separate problems. Pollution, lack of access to solutions, and lack of clarity are linked, and so are their fixes. Built with care, technology can stop adding to the decay and start supporting a healthier planet.",
    align: "start",
  },
  {
    image: "/media/william-bossen-Q1js5z4tKLA-unsplash.png",
    title: "Investing in the Next Generation",
    body: "Clean water and education are the foundation of a healthy future. Open, well-coordinated systems can deliver them where they are needed most, so the next generation inherits a world built for resilience.",
  },
  {
    image: "/media/vladislav-bogutski-L8gh4peByMA-unsplash.jpg",
    title: "Building the Framework for Change",
    body: "We build open-source infrastructure the entropy-first way: distributed, stateless, and declarative, so every piece can be rebuilt from source anywhere instead of slowly rotting. Quine Linux, a bootc image built on our Aurora build, is the first piece.",
    lightCaption: true,
  },
];

export type Pillar = { image: string; title: string; body: string; href: string };

export const pillars: Pillar[] = [
  {
    image: "/media/nils-rasmusson-4AU2DtVI8RU-unsplash.jpg",
    title: "Committed",
    body: "We are here for the long run, for people everywhere. Wonder and curiosity drive progress, and that starts with access to education and clear information. There is much yet left to discover.",
    href: "https://substack.com/@quineglobal",
  },
  {
    image: "/media/ej-strat-VjWi56AWQ9k-unsplash.jpg",
    title: "Technical",
    body: "We build and open-source our own software, starting with Quine Linux. We choose open-source foundations that anyone can inspect, rebuild, and replicate, so the work outlives any one team.",
    href: "https://substack.com/@quineglobal",
  },
  {
    image: "/media/bournes-senruob-xCwPC-Vmhsg-unsplash.jpg",
    title: "Responsible",
    body: "Over a long enough horizon, doing right by the planet and doing right by the business point the same way. We choose the long term over the quick win, every time.",
    href: "https://substack.com/@quineglobal",
  },
];

export type App = { name: string; badge?: string; body: string; href: string; cta: string };

export const apps: App[] = [
  {
    name: "Hyper",
    body: "A terminal built on web technologies. We maintain it and carry the Hyper legacy forward.",
    href: "https://hyper.quineglobal.com/",
    cta: "Get Hyper",
  },
  {
    name: "Quintodrome",
    body: "A desktop music player for your own Navidrome library: an open alternative to the streaming apps.",
    href: "https://github.com/quine-global/quintodrome",
    cta: "View on GitHub",
  },
  {
    name: "Quple",
    body: "Call anyone by their Quine username. A desktop app built with Tauri on Jitsi Meet.",
    href: "https://github.com/quine-global/quple",
    cta: "View on GitHub",
  },
  {
    name: "Quine Linux",
    badge: "alpha",
    body: "A bootc image built on our Aurora build: an immutable desktop you can rebuild from source.",
    href: "https://linux.quineglobal.com/",
    cta: "Try Quine Linux",
  },
];

export type Featurette = { image: string; title: string; body: ReactNode };

export const featurettes: Featurette[] = [
  {
    image: "/media/naja-bertolt-jensen-frWkCQZhe-I-unsplash.jpg",
    title: "The Challenges We Face",
    body: (
      <>
        The principal crises of this world are pollution, lack of access to solutions, and lack of clarity. Each feeds the
        others, and together they form a system that resists change. Quine maps these problems, shares what it learns
        on <a href="https://substack.com/@quineglobal">our Substack</a>, and builds open tools that push back.
      </>
    ),
  },
  {
    image: "/media/will-paterson-zb13N8EDjGE-unsplash.jpg",
    title: "The Power of Fewer Rules",
    body: "Too many rules create friction, confusion, and disorder: entropy of a different kind. By keeping policy simple and building on stateless, declarative systems, Quine respects local context and lets coordinated action emerge on its own.",
  },
  {
    image: "/media/diego-ph-fIq0tET6llw-unsplash.jpg",
    title: "Common Ground Through Logic",
    body: "Divides, political or otherwise, hide shared realities. Clear reasoning, transparent computation, and open data show where policy, technology, and health line up. Logic becomes common ground anyone can build on, and we can only build it with your help.",
  },
];
