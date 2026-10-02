import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Github, Globe, Mail } from "lucide-react";
const serpentArt = "/assets/portfolio-serpent.png";
const tigerArt = "/assets/portfolio-tiger.png";

const projects = [
  {
    emoji: "🌐",
    title: "GramConnect",
    tagline: "Community Grievance Reporting Platform",
    description:
      "A digital grievance-reporting platform designed to help rural communities raise local civic issues and connect them with responsible authorities. Users can report problems related to roads, electricity, development, and other public services, along with descriptions and supporting images or videos. Submitted grievances can then be reviewed and managed by administrators.",
    stack: ["React", "TypeScript", "Vite", "Netlify"],
    github: "https://github.com/Shashwat1557/GramConnect",
    live: "https://gramconnectez.netlify.app/",
  },
  {
    emoji: "🎮",
    title: "Duskwarden — Top-Down RPG",
    tagline: "2D RPG Game built with Unity",
    description:
      "A 2D top-down RPG developed in Unity, focused on exploration, player interaction, and engaging gameplay mechanics. The project explores fundamental game-development systems including character movement, environment design, interactions, game logic, and RPG-style mechanics, while providing hands-on experience with Unity and C#.",
    stack: ["Unity", "C#", "2D Game Development"],
    github: "https://github.com/Shashwat1557",
    live: null,
  },
  {
    emoji: "🌱",
    title: "EcoModel",
    tagline: "AI-Assisted Building Energy & Sustainability Model",
    description:
      "A sustainability-focused project exploring energy-efficient building design and simulation. It combines building-energy modelling with AI-driven workflows to analyze energy consumption and experiment with strategies for improving building efficiency, including concepts involving EnergyPlus and AI agents.",
    stack: ["EnergyPlus", "AI Agents", "Building Energy Simulation"],
    github: "https://github.com/Shashwat1557",
    live: null,
  },
  {
    emoji: "🤖",
    title: "PDF RAG Chatbot",
    tagline: "AI-Powered Document Question Answering System",
    description:
      "An AI-powered document assistant that allows users to upload PDFs and ask questions based specifically on their content. The system extracts and chunks document text, generates vector embeddings, stores them in ChromaDB, and performs semantic search to retrieve the most relevant context. The retrieved information is then provided to an LLM to generate grounded answers and reduce hallucinations.",
    stack: ["Python", "FastAPI", "ChromaDB", "OpenAI Embeddings", "Groq", "LLM", "RAG"],
    github: "https://github.com/Shashwat1557/pdf-rag-chatbot",
    live: null,
  },
];

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Shashwat" },
      {
        name: "description",
        content:
          "Selected projects by Shashwat: GramConnect, Duskwarden, EcoModel, and a PDF RAG chatbot.",
      },
      { property: "og:title", content: "Work — Shashwat" },
      {
        property: "og:description",
        content:
          "Selected projects by Shashwat: GramConnect, Duskwarden, EcoModel, and a PDF RAG chatbot.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  return (
    <div className="portfolio">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <main id="main-content" className="portfolio-main">
        <header className="site-header">
          <nav className="artwork-nav" aria-label="Portfolio navigation">
            <Link className="wordmark" to="/">
              shashwat/dev
            </Link>
            <div>
              <Link to="/">home</Link>
              <Link to="/work" aria-current="page">
                work
              </Link>
              <a href="/#contact">contact</a>
            </div>
          </nav>
        </header>

        <section className="projects-hero" aria-label="Work introduction">
          <Link to="/" className="back-button">
            ← back home
          </Link>
          <p className="profile-kicker">SELECTED WORK</p>
          <h1>Work</h1>
          <p className="projects-intro">
            Things I've designed, built, and broken along the way — from civic platforms
            to games and AI experiments.
          </p>
          <div className="wiggle-art wiggle-tiger" aria-hidden="true">
            <img src={tigerArt} alt="" />
          </div>
          <div className="wiggle-art wiggle-serpent" aria-hidden="true">
            <img src={serpentArt} alt="" />
          </div>
          <div className="wiggle-mark wiggle-mark-one" aria-hidden="true">
            ≋
          </div>
          <div className="wiggle-mark wiggle-mark-two" aria-hidden="true">
            ∿
          </div>
        </section>

        <section className="projects-list" aria-label="Projects">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-card-head">
                <span className="project-emoji" aria-hidden="true">
                  {project.emoji}
                </span>
                <div>
                  <h2>{project.title}</h2>
                  <p className="project-tagline">{project.tagline}</p>
                </div>
              </div>
              <p className="project-description">{project.description}</p>
              <ul className="project-stack" aria-label="Tech stack">
                {project.stack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noreferrer">
                  <Github size={16} aria-hidden="true" /> GitHub
                </a>
                {project.live ? (
                  <a href={project.live} target="_blank" rel="noreferrer">
                    <Globe size={16} aria-hidden="true" /> Live demo
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </section>

        <footer className="contact-section projects-footer">
          <a className="footer-cta" href="mailto:shashwat879@gmail.com">
            like what
            <br />
            you see?
            <ArrowUpRight aria-hidden="true" />
          </a>
          <div className="contact-bottom">
            <p>want to build something together? my inbox is always open.</p>
            <div className="footer-links">
              <a href="mailto:shashwat879@gmail.com">
                <Mail size={16} /> MAIL
              </a>
              <a href="https://github.com/Shashwat1557" target="_blank" rel="noreferrer">
                <Github size={16} /> GITHUB
              </a>
            </div>
          </div>
          <nav className="footer-nav" aria-label="Footer navigation">
            <Link to="/">HOME</Link>
            <Link to="/work">WORK</Link>
          </nav>
        </footer>
      </main>
    </div>
  );
}
