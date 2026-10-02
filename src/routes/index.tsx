import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { useRef } from "react";
import portrait from "@/assets/shashwat-portrait-light.jpg.asset.json";
import serpentArt from "@/assets/portfolio-serpent.png.asset.json";
import tigerArt from "@/assets/portfolio-tiger.png.asset.json";
import profileFlame from "@/assets/profile-flame.png.asset.json";
import profileTigerHead from "@/assets/profile-tiger-head.png.asset.json";

const profile = {
  name: "Shashwat",
  role: "Full-stack Developer",
  email: "shashwat879@gmail.com",
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shashwat — Full-stack Developer" },
      {
        name: "description",
        content: "Portfolio of Shashwat, a full-stack developer in India.",
      },
      { property: "og:title", content: "Shashwat — Full-stack Developer" },
      {
        property: "og:description",
        content:
          "The portfolio of a design-minded full-stack developer building thoughtful digital products.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  const artwork = useRef<HTMLImageElement>(null);
  return (
    <div className="portfolio">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <main id="main-content" className="portfolio-main">
        <header className="site-header">
          <nav className="artwork-nav" aria-label="Portfolio navigation">
            <a className="wordmark" href="#home">
              shashwat/dev
            </a>
            <div>
              <a href="#home">home</a>
              <a href="#about">about</a>
              <a href="#work">work</a>
              <a href="#contact">contact</a>
            </div>
          </nav>
        </header>
        <section id="home" className="title-stage" aria-labelledby="title-stage-heading">
          <div className="title-stage-art title-stage-serpent" aria-hidden="true">
            <img src={serpentArt.url} alt="" />
          </div>
          <div className="title-stage-copy">
            <h1 id="title-stage-heading">
              builder <span>of</span>
              <br />
              things
            </h1>
            <p>made by shashwat</p>
          </div>
          <div className="title-stage-art title-stage-tiger" aria-hidden="true">
            <img src={tigerArt.url} alt="" />
          </div>
        </section>
        <section
          id="about"
          className="hero profile-stage"
          aria-label="Introduction"
          onPointerMove={(event) => {
            if (event.pointerType !== "mouse" || !artwork.current) return;
            const bounds = event.currentTarget.getBoundingClientRect();
            artwork.current.style.setProperty(
              "--drift-x",
              `${(event.clientX - bounds.left - bounds.width / 2) / 55}px`,
            );
            artwork.current.style.setProperty(
              "--drift-y",
              `${(event.clientY - bounds.top - bounds.height / 2) / 65}px`,
            );
          }}
          onPointerLeave={() => {
            artwork.current?.style.setProperty("--drift-x", "0px");
            artwork.current?.style.setProperty("--drift-y", "0px");
          }}
        >
          <div className="profile-board">
            <div className="profile-board-photo">
              <img src={portrait.url} alt="Shashwat" width="900" height="900" />
            </div>
            <div className="profile-board-copy">
              <p className="profile-kicker">FULL-STACK DEVELOPER · INDIA</p>
              <h1>SHASHWAT</h1>
              <p className="profile-alias">you can call me shash!</p>
              <p>
                A full-stack developer who loves building useful, thoughtful digital products and
                turning complex systems into clear experiences.
              </p>
              <p>
                I care about clean systems, tiny details, side projects, and shipping things that
                feel good to use.
              </p>
              <a className="profile-mail" href={`mailto:${profile.email}`}>
                <Mail size={16} /> {profile.email}
              </a>
              <span className="profile-signature">Shashwat :)</span>
            </div>
          </div>
          <div className="wiggle-art wiggle-flame" aria-hidden="true">
            <img src={profileFlame.url} alt="" />
          </div>
          <div className="wiggle-art wiggle-tiger-head" aria-hidden="true">
            <img ref={artwork} src={profileTigerHead.url} alt="" />
          </div>
          <div className="wiggle-art wiggle-tiger" aria-hidden="true">
            <img src={tigerArt.url} alt="" />
          </div>
          <div className="wiggle-art wiggle-serpent" aria-hidden="true">
            <img src={serpentArt.url} alt="" />
          </div>
          <div className="wiggle-mark wiggle-mark-one" aria-hidden="true">
            ≋
          </div>
          <div className="wiggle-mark wiggle-mark-two" aria-hidden="true">
            ∿
          </div>
        </section>

        <section id="work" className="work-section" aria-label="Selected work">
          <div className="work-grid work-grid-solo">
            <Link
              to="/work"
              className="work-card work-card-wide work-card-link"
              aria-label="Open the Work page"
            >
              <div className="work-image-wrap work-tiger-art" aria-hidden="true">
                <img src={tigerArt.url} alt="" />
              </div>
              <div className="work-caption work-link-caption">
                <h2>Work</h2>
                <span>
                  view projects <ArrowUpRight size={16} aria-hidden="true" />
                </span>
              </div>
            </Link>
          </div>
          <p className="work-note">Projects, prototypes, identities, and experiments.</p>
        </section>

        <footer id="contact" className="contact-section">
          <div className="contact-top">
            <Code2 size={38} aria-hidden="true" />
            <p>
              SHASHWAT
              <br />
              INDIA
            </p>
            <a href="#home">
              back to top <ArrowUpRight size={16} />
            </a>
          </div>
          <a className="footer-cta" href={`mailto:${profile.email}`}>
            let’s make
            <br />
            something good.
            <ArrowUpRight aria-hidden="true" />
          </a>
          <div className="contact-bottom">
            <p>
              a full-stack developer who loves building thoughtful products, turning complex systems
              into clear experiences, and making ideas real.
            </p>
            <div className="footer-links">
              <a href={`mailto:${profile.email}`}>
                <Mail size={16} /> MAIL
              </a>
              <a href={`mailto:${profile.email}?subject=Let's build something`}>
                <ArrowDown size={16} /> BOOK A CALL
              </a>
              <a href="https://github.com/" target="_blank" rel="noreferrer">
                <Github size={16} /> GITHUB
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                <Linkedin size={16} /> LINKEDIN
              </a>
            </div>
          </div>
          <nav className="footer-nav" aria-label="Footer navigation">
            <a href="#work">WORK</a>
            <a href="#about">ABOUT</a>
            <a href="#home">HOME</a>
          </nav>
        </footer>
      </main>
    </div>
  );
}
