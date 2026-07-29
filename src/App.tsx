import { useReveal, useScroll } from "./hooks";
import { SectionBand } from "./components/SectionBand";
import { ImageSlot } from "./components/ImageSlot";
import { PawField } from "./components/PawField";
import explainChessImg from "./imgs/explainChess.png";
import {
  contact,
  experience,
  marqueeDouble,
  moreResearch,
  projects,
  skills,
  stats,
  writing,
} from "./data";

const mono = "'JetBrains Mono',monospace";
const muted = (pct: number) =>
  `color-mix(in srgb, var(--color-text) ${pct}%, transparent)`;

export default function App() {
  const scrollY = useScroll();
  const navShadow = scrollY > 12;

  const about = useReveal();
  const exp = useReveal();
  const research = useReveal();
  const projectsR = useReveal();
  const skillsR = useReveal();
  const writingR = useReveal();
  const contactR = useReveal();

  return (
    <div style={{ background: "var(--color-bg)", color: "var(--color-text)" }}>
      {/* NAV */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px clamp(20px,5vw,64px)",
          background: "color-mix(in srgb, var(--color-bg) 90%, transparent)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid var(--color-divider)",
          boxShadow: navShadow
            ? "0 4px 20px color-mix(in srgb, var(--color-neutral-900) 12%, transparent)"
            : "none",
          transition: "box-shadow .3s ease",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: "var(--font-heading-weight)" as unknown as number,
            fontSize: 19,
            letterSpacing: "-0.01em",
          }}
        >
          Rashmi Liyanawadu
        </span>
        <div
          style={{
            display: "flex",
            gap: 28,
            flexWrap: "wrap",
            fontFamily: mono,
            fontSize: 12,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}
        >
          <a href="#about" style={{ textDecoration: "none" }}>
            About
          </a>
          <a href="#experience" style={{ textDecoration: "none" }}>
            Experience
          </a>
          <a href="#research" style={{ textDecoration: "none" }}>
            Research
          </a>
          <a href="#projects" style={{ textDecoration: "none" }}>
            Projects
          </a>
          <a href="#writing" style={{ textDecoration: "none" }}>
            Writing
          </a>
        </div>
        <a
          href="#contact"
          style={{
            textDecoration: "none",
            fontFamily: mono,
            fontSize: 12,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            border: "1.5px solid var(--color-accent)",
            padding: "9px 18px",
            borderRadius: 2,
            color: "var(--color-accent-700)",
          }}
        >
          Contact →
        </a>
      </nav>

      {/* HERO */}
      <section style={{ position: "relative", overflow: "hidden" }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            transform: `translateY(${scrollY * 0.08}px)`,
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-10%",
              right: "-8%",
              width: "44vw",
              height: "44vw",
              borderRadius: "50%",
              background:
                "radial-gradient(circle,var(--color-accent-200) 0%,transparent 70%)",
              opacity: 0.6,
              animation: "driftGlow 16s ease-in-out infinite alternate",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "-14%",
              left: "-10%",
              width: "40vw",
              height: "40vw",
              borderRadius: "50%",
              background:
                "radial-gradient(circle,var(--color-accent-2-200) 0%,transparent 70%)",
              opacity: 0.55,
              animation: "driftGlow 20s ease-in-out infinite alternate-reverse",
            }}
          />
        </div>

        <div
          style={{
            position: "relative",
            maxWidth: 1320,
            margin: "0 auto",
            padding: "clamp(64px,9vw,110px) clamp(20px,5vw,72px) 0",
            display: "flex",
            flexWrap: "wrap",
            gap: 40,
            alignItems: "flex-end",
          }}
        >
          <div style={{ flex: "1 1 560px", minWidth: 0 }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                fontFamily: mono,
                fontSize: 12.5,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--color-accent-700)",
                marginBottom: 26,
              }}
            >
              <span
                style={{
                  width: 26,
                  height: 1.5,
                  background: "var(--color-accent)",
                }}
              />
              Software Engineer · AI Researcher
            </span>
            <h1
              style={{
                fontFamily: "var(--font-heading)",
                margin: "0 0 8px",
                fontWeight: "var(--font-heading-weight)" as unknown as number,
                fontSize: "clamp(52px,8.6vw,124px)",
                lineHeight: 0.94,
                letterSpacing: "-0.02em",
              }}
            >
              <span style={{ display: "block" }}>Turning</span>
              <span
                style={{
                  display: "block",
                  color: "transparent",
                  WebkitTextStroke: "1.5px var(--color-accent)",
                }}
              >
                Curiosity
              </span>
              <span style={{ display: "block" }}>Into Creation.</span>
            </h1>
            <p
              style={{
                fontSize: 18.5,
                lineHeight: 1.65,
                maxWidth: "52ch",
                color: muted(78),
                margin: "30px 0 34px",
              }}
            >
              Full-stack engineer building AI-powered SaaS at{" "}
              <strong>Dalil-AI</strong>, and an MSc researcher making chess AI
              explain its own reasoning.
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 14,
                marginBottom: 38,
              }}
            >
              <a
                href="#projects"
                style={{
                  textDecoration: "none",
                  fontFamily: mono,
                  fontSize: 13,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  border: "1.5px solid var(--color-accent)",
                  color: "var(--color-accent-700)",
                  padding: "14px 26px",
                  borderRadius: 2,
                }}
              >
                View Projects
              </a>
              <a
                href="#contact"
                style={{
                  textDecoration: "none",
                  fontFamily: mono,
                  fontSize: 13,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  border: "1.5px solid var(--color-divider)",
                  color: "var(--color-text)",
                  padding: "14px 26px",
                  borderRadius: 2,
                }}
              >
                Contact Me
              </a>
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 18,
                fontFamily: mono,
                fontSize: 12.5,
                color: muted(60),
              }}
            >
              <span>{contact.location}</span>
              <span>{contact.timezone}</span>
              <span>{contact.email}</span>
            </div>
          </div>
          <div
            style={{
              flex: "0 1 300px",
              minWidth: 200,
              position: "relative",
              alignSelf: "center",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "4 / 5",
              }}
            >
              <PawField />
            </div>
          </div>
        </div>

        {/* marquee */}
        <div
          style={{
            position: "relative",
            marginTop: "clamp(48px,7vw,88px)",
            borderTop: "1.5px solid var(--color-divider)",
            borderBottom: "1.5px solid var(--color-divider)",
            overflow: "hidden",
            padding: "16px 0",
            background: "var(--color-surface)",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "max-content",
              animation: "marquee 34s linear infinite",
            }}
          >
            {marqueeDouble.map((m, i) => (
              <span
                key={i}
                style={{
                  fontFamily: mono,
                  fontSize: 14,
                  letterSpacing: "0.03em",
                  padding: "0 22px",
                  color: muted(70),
                  whiteSpace: "nowrap",
                }}
              >
                {m} <span style={{ color: "var(--color-accent)" }}>✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <SectionBand
        num="01"
        label="About"
        accentVar="--color-accent-300"
        bandRef={about.ref as React.Ref<HTMLDivElement>}
        revealStyle={about.style}
      />
      <section
        id="about"
        style={{
          maxWidth: 1320,
          margin: "0 auto",
          padding: "76px clamp(20px,5vw,72px)",
          ...about.style,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.3fr 1fr",
            gap: 64,
            alignItems: "start",
          }}
        >
          <div style={{ minWidth: 0 }}>
            <h2
              style={{
                fontSize: "clamp(30px,3.6vw,46px)",
                lineHeight: 1.12,
                margin: "0 0 28px",
                maxWidth: "16ch",
              }}
            >
              Building software that explains itself.
            </h2>
            <p
              style={{
                fontSize: 17.5,
                lineHeight: 1.7,
                color: muted(82),
                maxWidth: "60ch",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.7em",
                  fontWeight: 800,
                  color: "var(--color-accent-700)",
                  float: "left",
                  lineHeight: 0.8,
                  margin: "0 8px 0 0",
                }}
              >
                S
              </span>
              oftware Engineer with 4+ years across full-stack product
              engineering and applied AI. I care about systems that are not just
              intelligent but legible - where a model's decision, a workflow's
              trigger, or a puzzle's difficulty can be explained to the person
              relying on it, not just predicted.
            </p>
            <p
              style={{
                fontSize: 17.5,
                lineHeight: 1.7,
                color: muted(82),
                maxWidth: "60ch",
                marginTop: 18,
              }}
            >
              Outside of shipped code, I research chess as a testbed for
              explainable AI, and I paint - two habits that feed the same
              instinct: finding the structure underneath something that looks
              intuitive.
            </p>
            <div
              style={{
                display: "flex",
                marginTop: 36,
                flexWrap: "wrap",
                gap: 36,
              }}
            >
              <div
                style={{
                  borderLeft: "var(--line-w) solid var(--color-accent)",
                  paddingLeft: 16,
                }}
              >
                <h4 style={{ margin: "0 0 4px" }}>
                  MSc (Hons) Advanced Software Engineering
                </h4>
                <p style={{ margin: 0, fontSize: 13.5, color: muted(62) }}>
                  IIT / University of Westminster (UK) · 2025–2026 · Reading
                </p>
              </div>
              <div
                style={{
                  borderLeft: "var(--line-w) solid var(--color-accent-2)",
                  paddingLeft: 16,
                }}
              >
                <h4 style={{ margin: "0 0 4px" }}>
                  BEng (Hons) Software Engineering
                </h4>
                <p style={{ margin: 0, fontSize: 13.5, color: muted(62) }}>
                  IIT / University of Westminster (UK) · 2019–2023 · First Class
                  Honours
                </p>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {stats.map((st, i) => (
              <div
                key={i}
                style={{
                  padding: "26px 0",
                  borderTop: "1.5px solid var(--color-divider)",
                }}
              >
                <span
                  style={{
                    display: "block",
                    fontFamily: "var(--font-heading)",
                    fontWeight: 800,
                    fontSize: "clamp(40px,4vw,58px)",
                    lineHeight: 1,
                    fontVariantNumeric: "tabular-nums",
                    color: "var(--color-accent-700)",
                  }}
                >
                  {st.n}
                </span>
                <span style={{ fontSize: 14.5, color: muted(70) }}>
                  {st.label}
                </span>
              </div>
            ))}
            <div
              style={{
                padding: "26px 0",
                borderTop: "1.5px solid var(--color-divider)",
                borderBottom: "1.5px solid var(--color-divider)",
              }}
            >
              <span
                style={{
                  fontSize: 13,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  fontFamily: mono,
                  color: "var(--color-accent-2-700)",
                }}
              >
                Off the clock
              </span>
              <p style={{ margin: "8px 0 0", fontSize: 15.5, lineHeight: 1.5 }}>
                Chess AI research, oil &amp; digital painting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <SectionBand
        num="02"
        label="Experience"
        accentVar="--color-accent-2-300"
        bandRef={exp.ref as React.Ref<HTMLDivElement>}
        revealStyle={exp.style}
      />
      <section
        id="experience"
        style={{
          maxWidth: 1320,
          margin: "0 auto",
          padding: "76px clamp(20px,5vw,72px)",
          ...exp.style,
        }}
      >
        <h2
          style={{
            fontSize: "clamp(30px,3.6vw,46px)",
            margin: "0 0 52px",
            maxWidth: "22ch",
          }}
        >
          Four years, intern to AI systems architecture.
        </h2>
        <div>
          {experience.map((job) => (
            <div
              key={job.num}
              style={{
                display: "grid",
                gridTemplateColumns: "100px 1fr",
                gap: 28,
                padding: "36px 0",
                borderTop: "1.5px solid var(--color-divider)",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 800,
                  fontSize: 44,
                  color:
                    "color-mix(in srgb, var(--color-accent) 22%, transparent)",
                  lineHeight: 1,
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {job.num}
              </span>
              <div>
                <span
                  style={{
                    display: "block",
                    fontFamily: mono,
                    fontSize: 12,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: muted(55),
                    marginBottom: 6,
                  }}
                >
                  {job.duration}
                </span>
                <h3 style={{ margin: "0 0 2px", fontSize: 24 }}>{job.role}</h3>
                <p
                  style={{
                    margin: "0 0 16px",
                    fontSize: 14.5,
                    color: muted(65),
                  }}
                >
                  {job.company}
                </p>
                <ul
                  style={{
                    margin: "0 0 18px",
                    paddingLeft: 20,
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                    maxWidth: "70ch",
                  }}
                >
                  {job.bullets.map((b, i) => (
                    <li
                      key={i}
                      style={{
                        fontSize: 15,
                        lineHeight: 1.6,
                        color: muted(80),
                      }}
                    >
                      {b}
                    </li>
                  ))}
                </ul>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {job.tags.map((t) => (
                    <span key={t} className="tag tag-accent-2">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* RESEARCH */}
      <SectionBand
        num="03"
        label="Featured research"
        accentVar="--color-accent-300"
        bandRef={research.ref as React.Ref<HTMLDivElement>}
        revealStyle={research.style}
      />
      <section
        id="research"
        style={{ background: "var(--color-surface)", ...research.style }}
      >
        <div
          style={{
            maxWidth: 1320,
            margin: "0 auto",
            padding: "76px clamp(20px,5vw,72px)",
          }}
        >
          <h2 style={{ fontSize: "clamp(38px,5vw,64px)", margin: "0 0 12px" }}>
            ExplainChess
          </h2>
          <p
            style={{
              fontSize: 18.5,
              color: muted(70),
              maxWidth: "62ch",
              margin: "0 0 48px",
            }}
          >
            Explainable AI for chess puzzle difficulty prediction - an MSc
            research project built and shipped like a product.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 48,
              marginBottom: 52,
            }}
          >
            <div
              style={{
                borderTop: "var(--line-w) solid var(--color-accent)",
                paddingTop: 16,
              }}
            >
              <h4
                style={{ color: "var(--color-accent-700)", margin: "0 0 8px" }}
              >
                Problem
              </h4>
              <p style={{ fontSize: 15.5, lineHeight: 1.65, color: muted(80) }}>
                Chess puzzle ratings do not always represent how difficult a
                puzzle is for a human to solve, a rating is a population
                statistic, not a description of what makes one position harder
                to read than another.
              </p>
            </div>
            <div
              style={{
                borderTop: "var(--line-w) solid var(--color-accent-2)",
                paddingTop: 16,
              }}
            >
              <h4
                style={{
                  color: "var(--color-accent-2-700)",
                  margin: "0 0 8px",
                }}
              >
                Solution
              </h4>
              <p style={{ fontSize: 15.5, lineHeight: 1.65, color: muted(80) }}>
                A model that predicts human solve difficulty directly from chess
                position features, paired with SHAP-based explanations that
                surface which features drove each prediction in plain language,
                not just a score.
              </p>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.2fr 1fr",
              gap: 48,
              alignItems: "center",
            }}
          >
            <div
              className="plate"
              style={{ borderRadius: 2 }}
            >
              <ImageSlot
                src={explainChessImg}
                alt="ExplainChess analysis UI"
                placeholder="Drop an ExplainChess UI screenshot"
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <a
                href="https://explain-chess-fe.vercel.app/"
                target="_blank"
                rel="noopener"
                style={{
                  textDecoration: "none",
                  textAlign: "center",
                  fontFamily: mono,
                  fontSize: 13,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  border: "1.5px solid var(--color-accent)",
                  color: "var(--color-accent-700)",
                  padding: "14px 22px",
                  borderRadius: 2,
                }}
              >
                Try the live demo
              </a>
              <a
                href="https://medium.com/@rashmi.20241660/chess-puzzle-difficulty-is-not-one-number-it-is-a-relationship-between-the-puzzle-and-the-player-adfa16363ee7?sharedUserId=rashmi.20241660"
                target="_blank"
                rel="noopener"
                style={{
                  textDecoration: "none",
                  textAlign: "center",
                  fontFamily: mono,
                  fontSize: 13,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  border: "1.5px solid var(--color-divider)",
                  color: "var(--color-text)",
                  padding: "14px 22px",
                  borderRadius: 2,
                }}
              >
                Read the writeup
              </a>
              <a
                href="#more-research"
                style={{
                  textDecoration: "none",
                  textAlign: "center",
                  fontFamily: mono,
                  fontSize: 12.5,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  color: "var(--color-accent-2-700)",
                  borderBottom: "1.5px solid var(--color-accent-2)",
                  paddingBottom: 2,
                  alignSelf: "center",
                  marginTop: 4,
                }}
              >
                View more research →
              </a>
            </div>
          </div>

          <div id="more-research" style={{ marginTop: 44 }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
                gap: 22,
              }}
            >
              {moreResearch.map((r) => (
                <div
                  key={r.slotId}
                  className="card elev-sm"
                  style={{ padding: 0, overflow: "hidden", gap: 0 }}
                >
                  <div className="plate" style={{ borderRadius: 0 }}>
                    <ImageSlot
                      src={r.src}
                      alt={r.alt ?? r.title}
                      placeholder="Drop a research screenshot"
                    />
                  </div>
                  <div style={{ padding: 20 }}>
                    <span
                      className="tag tag-outline"
                      style={{ marginBottom: 10, display: "inline-block" }}
                    >
                      {r.status}
                    </span>
                    <p
                      className="card-title"
                      style={{ fontSize: 17, margin: "0 0 6px" }}
                    >
                      {r.title}
                    </p>
                    <p className="card-body" style={{ fontSize: 14 }}>
                      {r.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <SectionBand
        num="04"
        label="Projects"
        accentVar="--color-accent-2-300"
        bandRef={projectsR.ref as React.Ref<HTMLDivElement>}
        revealStyle={projectsR.style}
      />
      <section
        id="projects"
        style={{
          maxWidth: 1320,
          margin: "0 auto",
          padding: "76px clamp(20px,5vw,72px)",
          ...projectsR.style,
        }}
      >
        <h2
          style={{
            fontSize: "clamp(30px,3.6vw,46px)",
            margin: "0 0 52px",
            maxWidth: "24ch",
          }}
        >
          AI/ML, full-stack, and research work.
        </h2>
        {projects.map((p) => (
          <div
            key={p.num}
            style={{
              display: "grid",
              gridTemplateColumns: "120px 1fr",
              gap: 24,
              padding: "34px 0",
              borderTop: "1.5px solid var(--color-divider)",
              alignItems: "start",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 800,
                fontSize: 52,
                color:
                  "color-mix(in srgb, var(--color-accent-2) 20%, transparent)",
                lineHeight: 1,
                fontVariantNumeric: "tabular-nums",
              }}
            >
              {p.num}
            </span>
            <div>
              <span className="card-kicker">{p.category}</span>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "baseline",
                  gap: 14,
                  margin: "2px 0 8px",
                }}
              >
                <h3 style={{ margin: 0, fontSize: 24 }}>{p.title}</h3>
                <span
                  style={{ fontSize: 12.5, color: muted(55), fontFamily: mono }}
                >
                  {p.meta}
                </span>
              </div>
              <p
                style={{
                  fontSize: 15.5,
                  lineHeight: 1.6,
                  color: muted(80),
                  maxWidth: "68ch",
                  margin: "0 0 14px",
                }}
              >
                {p.description}
              </p>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 6,
                  marginBottom: 10,
                }}
              >
                {p.tags.map((t) => (
                  <span key={t} className="tag tag-neutral">
                    {t}
                  </span>
                ))}
              </div>
              {p.demo && (
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noopener"
                  style={{
                    textDecoration: "none",
                    fontFamily: mono,
                    fontSize: 13,
                    color: "var(--color-accent-700)",
                    borderBottom: "1.5px solid var(--color-accent)",
                  }}
                >
                  Live demo →
                </a>
              )}
            </div>
          </div>
        ))}
      </section>

      {/* SKILLS */}
      <SectionBand
        num="05"
        label="Skills"
        accentVar="--color-accent-300"
        bandRef={skillsR.ref as React.Ref<HTMLDivElement>}
        revealStyle={skillsR.style}
      />
      <section
        id="skills"
        style={{
          maxWidth: 1320,
          margin: "0 auto",
          padding: "76px clamp(20px,5vw,72px)",
          ...skillsR.style,
        }}
      >
        <h2
          style={{
            fontSize: "clamp(30px,3.6vw,46px)",
            margin: "0 0 52px",
            maxWidth: "20ch",
          }}
        >
          A full-stack toolkit for AI product work.
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: 36,
          }}
        >
          {skills.map((cat) => (
            <div
              key={cat.category}
              style={{
                borderTop: "1.5px solid var(--color-divider)",
                paddingTop: 16,
              }}
            >
              <h4 style={{ margin: "0 0 14px", fontSize: 16 }}>
                {cat.category}
              </h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                {cat.items.map((s) => (
                  <span key={s.name} className={`tag ${s.cls}`}>
                    {s.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WRITING */}
      <SectionBand
        num="06"
        label="Writing & research"
        accentVar="--color-accent-2-300"
        bandRef={writingR.ref as React.Ref<HTMLDivElement>}
        revealStyle={writingR.style}
      />
      <section
        id="writing"
        style={{ background: "var(--color-surface)", ...writingR.style }}
      >
        <div
          style={{
            maxWidth: 1320,
            margin: "0 auto",
            padding: "76px clamp(20px,5vw,72px)",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(30px,3.6vw,46px)",
              margin: "0 0 44px",
              maxWidth: "22ch",
            }}
          >
            Notes from the research side of the work.
          </h2>
          {writing.map((w) => (
            <a
              key={w.link}
              href={w.link}
              target="_blank"
              rel="noopener"
              style={{
                display: "block",
                textDecoration: "none",
                color: "inherit",
                border: "1.5px solid var(--color-divider)",
                borderRadius: 2,
                padding: "clamp(28px,4vw,48px)",
                maxWidth: 820,
              }}
            >
              <span
                style={{
                  fontFamily: mono,
                  fontSize: 12.5,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "var(--color-accent-2-700)",
                }}
              >
                {w.venue} · {w.date}
              </span>
              <h3
                style={{
                  margin: "14px 0 14px",
                  fontSize: "clamp(22px,2.6vw,30px)",
                  lineHeight: 1.28,
                }}
              >
                {w.title}
              </h3>
              <p
                style={{
                  margin: "0 0 18px",
                  fontSize: 16,
                  lineHeight: 1.6,
                  color: muted(78),
                }}
              >
                {w.summary}
              </p>
              <span
                style={{
                  fontFamily: mono,
                  fontSize: 13,
                  color: "var(--color-accent-700)",
                  borderBottom: "1.5px solid var(--color-accent)",
                }}
              >
                Read the article →
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* ART CTA */}
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          padding: "26px clamp(20px,5vw,72px)",
          background: "var(--color-accent-100)",
          ...writingR.style,
        }}
      >
        <a
          href={contact.artPortfolioUrl}
          target="_blank"
          rel="noopener"
          style={{
            position: "relative",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
            textDecoration: "none",
            maxWidth: 1320,
            margin: "0 auto",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: "var(--font-heading-weight)" as unknown as number,
              fontSize: 16.5,
              color: "var(--color-accent-800)",
              lineHeight: 1.3,
            }}
          >
            Off the clock, I paint acrylic work on its own gallery site.
          </span>
          <span
            style={{
              fontFamily: mono,
              fontSize: 12.5,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              color: "var(--color-accent-700)",
              borderBottom: "1.5px solid var(--color-accent)",
              whiteSpace: "nowrap",
            }}
          >
            View art portfolio →
          </span>
        </a>
      </div>

      {/* CONTACT */}
      <section
        id="contact"
        ref={contactR.ref as React.Ref<HTMLElement>}
        style={{
          background: "var(--color-neutral-900)",
          color: "var(--color-neutral-100)",
          ...contactR.style,
        }}
      >
        <div
          style={{
            maxWidth: 1320,
            margin: "0 auto",
            padding: "clamp(64px,10vw,120px) clamp(20px,5vw,72px) 72px",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(38px,6vw,80px)",
              lineHeight: 1.02,
              margin: "22px 0 30px",
              maxWidth: "16ch",
            }}
          >
            Let's build something intelligent together.
          </h2>
          <p
            style={{
              fontSize: 17.5,
              lineHeight: 1.6,
              maxWidth: "52ch",
              color:
                "color-mix(in srgb, var(--color-neutral-100) 78%, transparent)",
              margin: "0 0 40px",
            }}
          >
            Open to software engineering, AI engineering, and research
            opportunities.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 14,
              marginBottom: 56,
            }}
          >
            <a
              href={`mailto:${contact.email}`}
              style={{
                textDecoration: "none",
                fontFamily: mono,
                fontSize: 13,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                border: "1.5px solid var(--color-accent-300)",
                color: "var(--color-accent-100)",
                padding: "15px 28px",
                borderRadius: 2,
              }}
            >
              Email me
            </a>
            <a
              href={contact.resumeUrl}
              title="Add resume PDF"
              style={{
                textDecoration: "none",
                fontFamily: mono,
                fontSize: 13,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                border:
                  "1.5px solid color-mix(in srgb, var(--color-neutral-100) 30%, transparent)",
                color: "var(--color-neutral-100)",
                padding: "15px 28px",
                borderRadius: 2,
              }}
            >
              Download Resume
            </a>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 32,
              fontSize: 14.5,
              color:
                "color-mix(in srgb, var(--color-neutral-100) 65%, transparent)",
              borderTop:
                "1px solid color-mix(in srgb, var(--color-neutral-100) 18%, transparent)",
              paddingTop: 28,
            }}
          >
            <a
              href={`mailto:${contact.email}`}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              {contact.email}
            </a>
            <a
              href={contact.linkedinUrl}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              LinkedIn →
            </a>
            <a
              href={contact.githubUrl}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              GitHub →
            </a>
            <span>
              {contact.location} · {contact.timezone}
            </span>
          </div>
        </div>
        <div
          style={{
            maxWidth: 1320,
            margin: "0 auto",
            padding: "0 clamp(20px,5vw,72px) 32px",
            fontSize: 12.5,
            color:
              "color-mix(in srgb, var(--color-neutral-100) 45%, transparent)",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 8,
          }}
        >
          <span>© 2026 Rashmi Liyanawadu</span>
          <span>Built with care.</span>
        </div>
      </section>
    </div>
  );
}
