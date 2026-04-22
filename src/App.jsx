import React from "react";
import { motion } from "framer-motion";

export default function App() {
  const services = [
    {
      title: "Project Management",
      description:
        "Structured oversight from pre-construction through closeout, keeping timelines, budgets, stakeholders, and deliverables aligned.",
    },
    {
      title: "Project Administration",
      description:
        "Documentation, reporting, scheduling support, coordination, and communication management that keep projects organized and moving.",
    },
    {
      title: "Construction Management",
      description:
        "Practical field-focused management to support quality execution, schedule discipline, site accountability, and smooth delivery.",
    },
    {
      title: "Construction Inspection",
      description:
        "Inspection support designed to help verify workmanship, compliance expectations, construction standards, and project quality.",
    },
  ];

  const pillars = [
    "Project Management",
    "Project Administration",
    "Construction Management",
    "Construction Inspection",
  ];

  const highlights = [
    "Trusted oversight across planning, coordination, and execution",
    "Clear communication between owners, contractors, and field teams",
    "Reliable administrative support and organized documentation",
    "Professional construction leadership with quality-focused delivery",
  ];

  const differentiators = [
    "Professional oversight grounded in real project needs",
    "Administrative and management support that improves visibility",
    "Construction-focused coordination that strengthens accountability",
    "A brand identity built around reliable project pillars",
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#f8fafc", color: "#0f172a" }}>
      <style>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; background: #f8fafc; }
        a { text-decoration: none; color: inherit; }
        img { max-width: 100%; display: block; }

        .container {
          width: min(1180px, 92%);
          margin: 0 auto;
        }

        .topbar {
          position: sticky;
          top: 0;
          z-index: 50;
          border-bottom: 1px solid rgba(226,232,240,.85);
          background: rgba(255,255,255,.92);
          backdrop-filter: blur(14px);
        }

        .topbar-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding: 16px 0;
        }

        .brand-link {
          display: flex;
          align-items: center;
          gap: 16px;
          min-width: 0;
        }

        .brand-logo {
          width: 58px;
          height: 58px;
          border-radius: 999px;
          object-fit: cover;
          border: 1px solid #dbe3ee;
          background: #fff;
          box-shadow: 0 2px 8px rgba(15,23,42,.08);
          flex-shrink: 0;
        }

        .brand-small {
          margin: 0 0 4px;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: .28em;
          color: #1e40af;
        }

        .brand-title {
          margin: 0;
          font-size: 18px;
          font-weight: 700;
          color: #0f172a;
        }

        .nav {
          display: flex;
          align-items: center;
          gap: 30px;
          font-size: 14px;
          font-weight: 700;
          color: #334155;
        }

        .nav a {
          transition: color .2s ease;
        }

        .nav a:hover {
          color: #1e40af;
        }

        .hero {
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(circle at top left, rgba(30,64,175,.18), transparent 30%),
            linear-gradient(135deg, #eff6ff 0%, #f8fafc 56%, #dbeafe 100%);
        }

        .hero-orb-1,
        .hero-orb-2 {
          position: absolute;
          border-radius: 999px;
          filter: blur(60px);
          opacity: .55;
          pointer-events: none;
        }

        .hero-orb-1 {
          width: 320px;
          height: 320px;
          left: -80px;
          top: 60px;
          background: rgba(96,165,250,.35);
        }

        .hero-orb-2 {
          width: 380px;
          height: 380px;
          right: -80px;
          bottom: -60px;
          background: rgba(147,197,253,.35);
        }

        .hero-grid {
          position: relative;
          display: grid;
          grid-template-columns: 1.08fr .92fr;
          gap: 48px;
          align-items: center;
          padding: 92px 0 110px;
        }

        .eyebrow {
          margin-bottom: 16px;
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: .35em;
          color: #1e40af;
        }

        .hero h1 {
          margin: 0;
          font-size: 58px;
          line-height: 1.06;
          color: #020617;
          max-width: 780px;
        }

        .hero p {
          margin-top: 24px;
          max-width: 760px;
          font-size: 18px;
          line-height: 1.85;
          color: #475569;
        }

        .hero-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          margin-top: 34px;
        }

        .btn-primary,
        .btn-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 14px 24px;
          border-radius: 18px;
          font-weight: 700;
          font-size: 15px;
          transition: transform .2s ease, background .2s ease, color .2s ease, border-color .2s ease;
        }

        .btn-primary {
          background: #1e40af;
          color: #fff;
          box-shadow: 0 14px 30px rgba(30,64,175,.22);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          background: #1d4ed8;
        }

        .btn-secondary {
          border: 1px solid #cbd5e1;
          background: rgba(255,255,255,.9);
          color: #0f172a;
        }

        .btn-secondary:hover {
          transform: translateY(-2px);
          border-color: #1e40af;
          color: #1e40af;
        }

        .hero-card {
          border: 1px solid rgba(255,255,255,.75);
          background: rgba(255,255,255,.82);
          border-radius: 34px;
          padding: 26px;
          box-shadow: 0 28px 60px rgba(148,163,184,.25);
          backdrop-filter: blur(14px);
        }

        .hero-brand {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 22px;
        }

        .hero-brand-logo {
          width: 100px;
          height: 100px;
          border-radius: 999px;
          object-fit: cover;
          border: 1px solid #dbe3ee;
          background: white;
          padding: 4px;
          box-shadow: 0 2px 8px rgba(15,23,42,.08);
        }

        .hero-brand-tag {
          margin: 0;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: .28em;
          text-transform: uppercase;
          color: #1e40af;
        }

        .hero-brand-title {
          margin: 10px 0 0;
          font-size: 28px;
          line-height: 1.25;
          color: #0f172a;
        }

        .hero-grid-small {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .highlight-card {
          background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
          border: 1px solid #e2e8f0;
          border-radius: 20px;
          padding: 16px;
          box-shadow: 0 6px 16px rgba(148,163,184,.16);
          font-size: 14px;
          line-height: 1.8;
          color: #334155;
        }

        section {
          padding: 92px 0;
        }

        .section-eyebrow {
          margin-bottom: 12px;
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: .30em;
          color: #1e40af;
        }

        .section-title {
          margin: 0 0 18px;
          font-size: 48px;
          line-height: 1.12;
          color: #020617;
        }

        .section-text {
          margin: 0 0 18px;
          font-size: 17px;
          line-height: 1.92;
          color: #475569;
        }

        .about-grid,
        .pillars-grid,
        .contact-grid {
          display: grid;
          grid-template-columns: 1.05fr .95fr;
          gap: 48px;
          align-items: start;
        }

        .panel {
          background: #fff;
          border: 1px solid #e2e8f0;
          border-radius: 34px;
          padding: 32px;
          box-shadow: 0 20px 44px rgba(148,163,184,.18);
        }

        .panel h3 {
          margin: 0;
          font-size: 30px;
          color: #0f172a;
        }

        .stack {
          display: grid;
          gap: 16px;
          margin-top: 24px;
        }

        .stack-item {
          padding: 16px 18px;
          border-radius: 18px;
          background: linear-gradient(to right, #f8fafc, #eff6ff);
          border: 1px solid #e2e8f0;
          color: #334155;
          line-height: 1.8;
          font-size: 15px;
        }

        .services {
          background: linear-gradient(180deg, #020617 0%, #0f172a 100%);
          color: white;
        }

        .services .section-eyebrow {
          color: #93c5fd;
        }

        .services .section-title {
          color: white;
          max-width: 920px;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          margin-top: 40px;
        }

        .service-card {
          border: 1px solid rgba(255,255,255,.08);
          background: rgba(255,255,255,.05);
          border-radius: 28px;
          padding: 24px;
          box-shadow: 0 20px 42px rgba(0,0,0,.22);
          backdrop-filter: blur(10px);
        }

        .service-line {
          width: 58px;
          height: 6px;
          border-radius: 999px;
          background: #60a5fa;
          margin-bottom: 18px;
        }

        .service-card h3 {
          margin: 0 0 14px;
          font-size: 22px;
          color: #fff;
        }

        .service-card p {
          margin: 0;
          font-size: 15px;
          line-height: 1.9;
          color: #cbd5e1;
        }

        .pillar-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .pillar-card {
          border: 1px solid #e2e8f0;
          background: white;
          border-radius: 24px;
          padding: 24px;
          box-shadow: 0 16px 34px rgba(148,163,184,.18);
        }

        .pillar-number {
          width: 50px;
          height: 50px;
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #1e40af;
          color: white;
          font-weight: 700;
          font-size: 18px;
          margin-bottom: 16px;
          box-shadow: 0 10px 24px rgba(30,64,175,.22);
        }

        .pillar-card p {
          margin: 0;
          font-size: 20px;
          font-weight: 700;
          color: #0f172a;
          line-height: 1.4;
        }

        .contact {
          background: linear-gradient(135deg, #1e3a8a 0%, #020617 58%, #0f172a 100%);
          color: white;
        }

        .contact .section-eyebrow {
          color: #93c5fd;
        }

        .contact .section-title {
          color: white;
        }

        .contact .section-text {
          color: #cbd5e1;
          max-width: 720px;
        }

        .contact-card {
          border: 1px solid rgba(255,255,255,.12);
          background: rgba(255,255,255,.10);
          border-radius: 34px;
          padding: 32px;
          box-shadow: 0 24px 50px rgba(0,0,0,.25);
          backdrop-filter: blur(12px);
        }

        .contact-top {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 28px;
        }

        .contact-logo {
          width: 100px;
          height: 100px;
          border-radius: 999px;
          object-fit: cover;
          border: 1px solid rgba(255,255,255,.18);
          background: white;
          padding: 4px;
          box-shadow: 0 2px 8px rgba(15,23,42,.08);
          flex-shrink: 0;
        }

        .contact-company {
          margin: 0;
          font-size: 18px;
          font-weight: 700;
          color: white;
        }

        .contact-subtitle {
          margin: 6px 0 0;
          font-size: 14px;
          color: #cbd5e1;
        }

        .contact-item {
          margin-bottom: 18px;
        }

        .contact-label {
          font-size: 15px;
          font-weight: 700;
          margin-bottom: 6px;
          color: white;
        }

        .contact-value {
          color: #e2e8f0;
          line-height: 1.9;
          font-size: 15px;
        }

        .footer {
          background: #020617;
          color: #94a3b8;
          text-align: center;
          font-size: 14px;
          padding: 24px 0 36px;
        }

        @media (max-width: 1080px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 980px) {
          .hero-grid,
          .about-grid,
          .pillars-grid,
          .contact-grid {
            grid-template-columns: 1fr;
          }

          .hero h1 {
            font-size: 42px;
          }

          .section-title {
            font-size: 34px;
          }

          .nav {
            display: none;
          }

          .hero-grid-small,
          .pillar-list {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .services-grid {
            grid-template-columns: 1fr;
          }

          .hero-brand,
          .contact-top,
          .brand-link {
            align-items: flex-start;
          }

          .hero-brand {
            flex-direction: column;
          }

          .contact-top {
            flex-direction: column;
          }

          .brand-title {
            font-size: 16px;
          }

          .hero h1 {
            font-size: 36px;
          }
        }
      `}</style>

      <header className="topbar">
        <div className="container topbar-inner">
          <a href="#top" className="brand-link">
            <img src="/logo.png" alt="Dodd Consulting Enterprises logo" className="brand-logo" />
            <div>
              <p className="brand-small">Dodd Consulting Enterprises, LLC</p>
              <h2 className="brand-title">Construction Management & Project Support</h2>
            </div>
          </a>

          <nav className="nav">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#pillars">Core Areas</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section id="top" className="hero">
        <div className="hero-orb-1"></div>
        <div className="hero-orb-2"></div>

        <div className="container hero-grid">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6 }}
          >
            <div className="eyebrow">Built on Oversight, Structure, and Delivery</div>
            <h1>
              Professional construction support for projects that demand
              organization, accountability, and follow-through.
            </h1>
            <p>
              Dodd Consulting Enterprises, LLC provides dependable project support
              across management, administration, construction coordination, and
              inspection. We help clients maintain visibility, control, and momentum
              from planning through completion.
            </p>

            <div className="hero-buttons">
              <a className="btn-primary" href="#contact">
                Schedule a Consultation
              </a>
              <a className="btn-secondary" href="#services">
                Explore Services
              </a>
            </div>
          </motion.div>

          <motion.div
            className="hero-card"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="hero-brand">
              <img src="/logo.png" alt="Dodd Consulting Enterprises logo" className="hero-brand-logo" />
              <div>
                <p className="hero-brand-tag">Brand Focus</p>
                <h3 className="hero-brand-title">
                  Core service pillars that support successful project delivery
                </h3>
              </div>
            </div>

            <div className="hero-grid-small">
              {highlights.map((item) => (
                <div key={item} className="highlight-card">
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about">
        <div className="container about-grid">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
          >
            <div className="section-eyebrow">About Us</div>
            <h2 className="section-title">
              A disciplined partner for project control, coordination, and construction support.
            </h2>
            <p className="section-text">
              Dodd Consulting Enterprises, LLC supports construction projects with a
              strong focus on organization, communication, and execution. Our role is
              to help clients create clarity across project planning, administrative
              coordination, field oversight, and inspection support.
            </p>
            <p className="section-text">
              We understand that successful projects require more than technical
              knowledge. They require structure, responsiveness, and consistent
              follow-through. That is the standard we bring to every engagement.
            </p>
          </motion.div>

          <motion.div
            className="panel"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <h3>What Sets Us Apart</h3>
            <div className="stack">
              {differentiators.map((item) => (
                <div key={item} className="stack-item">
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="services" className="services">
        <div className="container">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
          >
            <div className="section-eyebrow">Services</div>
            <h2 className="section-title">
              Premium support across the management and administrative functions
              that keep projects on track.
            </h2>
          </motion.div>

          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="service-card"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <div className="service-line"></div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="pillars">
        <div className="container pillars-grid">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
          >
            <div className="section-eyebrow">Core Areas</div>
            <h2 className="section-title">
              Your logo now works like a brand system, not just a badge.
            </h2>
            <p className="section-text">
              The updated site uses the same blue-forward visual identity as the
              selected logo. The layout supports a more established brand presence
              with stronger hierarchy, smoother motion, cleaner spacing, and a more
              premium presentation for prospective clients.
            </p>
          </motion.div>

          <div className="pillar-list">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar}
                className="pillar-card"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
              >
                <div className="pillar-number">{index + 1}</div>
                <p>{pillar}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container contact-grid">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
          >
            <div className="section-eyebrow">Contact</div>
            <h2 className="section-title">
              Let’s discuss how Dodd Consulting Enterprises can support your next project.
            </h2>
            <p className="section-text">
              Reach out to discuss project goals, timelines, support needs, and how
              our services can strengthen delivery, communication, and control
              throughout the project lifecycle.
            </p>
          </motion.div>

          <motion.div
            className="contact-card"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <div className="contact-top">
              <img src="/logo.png" alt="Dodd Consulting Enterprises logo" className="contact-logo" />
              <div>
                <p className="contact-company">Dodd Consulting Enterprises, LLC</p>
                <p className="contact-subtitle">Construction Management & Project Support</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-label">Email</div>
              <div className="contact-value">EDodd@edoddconsulting.com</div>
            </div>

            <div className="contact-item">
              <div className="contact-label">Phone</div>
              <div className="contact-value">317-793-0198</div>
            </div>

            <div className="contact-item">
              <div className="contact-label">Service Area</div>
              <div className="contact-value">Available for local and regional projects</div>
            </div>

            <a
              className="btn-secondary"
              href="mailto:EDodd@edoddconsulting.com"
              style={{ background: "#ffffff", color: "#1e3a8a", border: "none" }}
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>

      <footer className="footer">
        © 2026 Dodd Consulting Enterprises, LLC. All rights reserved.
      </footer>
    </div>
  );
}