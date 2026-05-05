import React from "react";
import { motion } from "framer-motion";

export default function App() {
  // =========================
  // SERVICES
  // =========================
  const services = [
    {
      title: "Project Management",
      description:
        "Structured oversight from pre-construction through project completion.",
    },
    {
      title: "Project Administration",
      description:
        "Documentation, reporting, scheduling support, and coordination.",
    },
    {
      title: "Construction Management",
      description:
        "Field-level execution and oversight ensuring quality and compliance.",
    },
  ];

  // =========================
  // PORTFOLIO
  // =========================
  const portfolioItems = [
    {
      title: "Infrastructure Oversight",
      description:
        "Provided full lifecycle management for infrastructure projects ensuring compliance and efficiency.",
    },
    {
      title: "Industrial Project Delivery",
      description:
        "Coordinated multi-vendor operations for successful industrial project execution.",
    },
  ];

  // =========================
  // JOB OPENINGS
  // =========================
  const jobOpenings = [
    {
      title: "Owner’s Representative",
      location: "Remote / Travel as Required",
      pay: "$75,000 – $110,000+",
      description:
        "Strategic fiduciary and independent advocate for the project owner.",
      primary:
        "Provide high-level oversight ensuring alignment with owner goals and risk management.",
      responsibilities: [
        "Track project schedules and budgets",
        "Prevent scope creep and delays",
        "Support contract negotiations",
        "Act as communication hub",
        "Ensure regulatory compliance",
      ],
      qualifications:
        "10+ years experience in construction PM or owner’s rep; strong contract knowledge.",
    },
    {
      title: "Senior Project Manager (Consultant)",
      location: "Remote / Travel as Required",
      pay: "$115,000 – $145,000",
      description:
        "Leads large-scale infrastructure and industrial programs.",
      primary:
        "Manage full project lifecycle ensuring safety, quality, and budget control.",
      responsibilities: [
        "Develop project schedules",
        "Manage risks and issue logs",
        "Lead vendor coordination",
        "Support design reviews",
        "Ensure technical feasibility",
      ],
      qualifications:
        "Engineering degree preferred; 10+ years experience; PE license a plus.",
    },
    {
      title: "Senior Construction Inspector",
      location: "Onsite: Indianapolis, IN",
      pay: "$45 – $55+/hr",
      description:
        "Field-level quality assurance for infrastructure projects.",
      primary:
        "Ensure contractor compliance with plans, specs, and materials.",
      responsibilities: [
        "Monitor material testing",
        "Ensure compliance with drawings",
        "Document construction activity",
        "Support payment verification",
        "Resolve field conflicts",
      ],
      qualifications:
        "8–10 years inspection experience; INDOT certifications required.",
    },
    {
      title: "Senior Project Administrator",
      location: "Remote / Travel as Required",
      pay: "$65,000 – $85,000",
      description:
        "Administrative and financial backbone for consulting projects.",
      primary:
        "Manage contracts, reporting, and digital project systems.",
      responsibilities: [
        "Manage project documentation",
        "Support subcontractor coordination",
        "Track budgets and reporting",
        "Maintain document control systems",
        "Support website and branding",
      ],
      qualifications:
        "5–10 years experience; strong software and reporting skills.",
    },
  ];

  return (
    <div>
      {/* =========================
          NAVBAR
      ========================= */}
      <nav className="navbar">
        <h1>Dodd Consulting Enterprises</h1>
        <div>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#jobs">Careers</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* =========================
          SERVICES
      ========================= */}
      <section id="services" className="services">
        <h2>Our Services</h2>
        <div className="grid">
          {services.map((s, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }}>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =========================
          PORTFOLIO
      ========================= */}
      <section id="portfolio" className="services">
        <h2>Portfolio</h2>
        <div className="grid">
          {portfolioItems.map((p, i) => (
            <div key={i}>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================
          JOBS
      ========================= */}
      <section id="jobs" className="services">
        <h2>Careers</h2>

        {jobOpenings.map((job, i) => (
          <div key={i} className="job-card">
            <h3>{job.title}</h3>

            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Pay:</strong> {job.pay}</p>

            <p>{job.description}</p>
            <p><strong>Primary Responsibility:</strong> {job.primary}</p>

            <h4>Responsibilities</h4>
            <ul>
              {job.responsibilities.map((r, idx) => (
                <li key={idx}>{r}</li>
              ))}
            </ul>

            <p><strong>Qualifications:</strong> {job.qualifications}</p>

            {/* APPLY BUTTON */}
            <a
              className="btn-primary"
              href={`mailto:EDodd@edoddconsulting.com?subject=Application - ${encodeURIComponent(
                job.title
              )}&body=Full Name:%0D%0APhone:%0D%0AEmail:%0D%0APosition: ${encodeURIComponent(
                job.title
              )}%0D%0AExperience:%0D%0ACertifications:%0D%0AWhy are you a good fit?:`}
            >
              Apply Now
            </a>
          </div>
        ))}
      </section>

      {/* =========================
          CONTACT
      ========================= */}
      <section id="contact" className="services">
        <h2>Contact</h2>
        <p>Email: EDodd@edoddconsulting.com</p>
        <p>Phone: 317-793-0198</p>
      </section>

      {/* =========================
          FOOTER
      ========================= */}
      <footer>
        <p>© 2026 Dodd Consulting Enterprises, LLC</p>
      </footer>
    </div>
  );
}
