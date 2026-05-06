import React from "react";
import { motion } from "framer-motion";

export default function App() {
  const applicationFormLink =
    "https://forms.office.com/Pages/ResponsePage.aspx?id=eqFaGYmldk2OpiMe3gvlp7LfNyYIb-lBmSRYdmG4HIlUQzlMWTRIODFKTk80RjZKRDg4RFBXMFJRTC4u";

  const services = [
    {
      title: "Project Management",
      description:
        "Structured oversight from pre-construction through project completion.",
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

  const portfolioItems = services;

  const jobOpenings = [
    {
      title: "Owner’s Representative",
      location: "Remote / Travel as Required",
      pay: "$75,000 – $110,000+",
      description:
        "This role serves as a strategic fiduciary and independent advocate for the project owner to protect their long-term interests.",
      primaryResponsibility:
        "Provide high-level administrative and technical oversight for complex built environments, ensuring the project aligns with the owner's vision and quality standards while managing total project risk.",
      responsibilities: [
        "Track master schedules and total project budgets from inception through closeout.",
        "Identify and mitigate schedule risk, budget concerns, and scope creep.",
        "Review and support contract negotiations with designers and contractors.",
        "Serve as a central communication hub and conflict-resolution point.",
        "Assist the owner with regulatory and safety compliance throughout each project phase.",
      ],
      qualifications:
        "10+ years of experience in construction project management or owner’s representation; deep expertise in contract law and technical construction processes.",
    },
    {
      title: "Senior Project Manager (Consultant)",
      location: "Remote / Travel as Required",
      pay: "$115,000 – $145,000",
      description:
        "A technical leader managing the strategic lifecycle and daily operations of large-scale infrastructure and industrial programs.",
      primaryResponsibility:
        "Lead day-to-day project management for major programs while ensuring safety, quality, schedule, and budget standards are met.",
      responsibilities: [
        "Develop and manage detailed project schedules with clear milestones.",
        "Coordinate equipment installation, start-up, testing, vendors, and project teams.",
        "Maintain active risk and issue logs with timely escalation.",
        "Support design reviews, technical meetings, and public hearings.",
        "Ensure solutions satisfy customer requirements and technical feasibility.",
      ],
      qualifications:
        "Bachelor’s degree in engineering or related discipline; 10+ years focused on industrial or utility infrastructure projects; PE license preferred.",
    },
    {
      title: "Senior Construction Inspector",
      location: "Onsite: Indianapolis, Indiana",
      pay: "$45 – $55+ per hour",
      description:
        "A premium quality-assurance position performing expert field-level oversight on critical infrastructure.",
      primaryResponsibility:
        "Perform daily field inspection and documentation services to ensure contractor adherence to engineering drawings, design plans, and technical specifications.",
      responsibilities: [
        "Monitor testing of critical materials including concrete, steel, and asphalt.",
        "Ensure work complies with design plans, permits, and technical specifications.",
        "Measure and document quantities for pay estimates.",
        "Record daily construction activity and field progress.",
        "Support change order review and resolve constructability issues in the field.",
      ],
      qualifications:
        "8–10 years of construction inspection experience; INDOT Certified Technician Program (CTP) completion in six areas; proficiency in SiteManager and AASHTO standards.",
    },
    {
      title: "Senior Project Administrator",
      location: "Remote / Travel as Required",
      pay: "$65,000 – $85,000",
      description:
        "This role provides the administrative and financial backbone for the firm’s most complex consulting contracts.",
      primaryResponsibility:
        "Execute high-level administrative, contractual, and digital management tasks to support multimillion-dollar consulting engagements.",
      responsibilities: [
        "Manage project administration plans and project control processes.",
        "Support pre-start scope meetings with subcontractors and project teams.",
        "Manage project accounting support, reporting, and cost exposure tracking.",
        "Maintain field document control systems including drawings, inspections, tests, and vendor data.",
        "Use tools such as Procore, P6, Excel, or similar project management platforms.",
        "Support firm website and digital branding during bidding cycles.",
      ],
      qualifications:
        "5–10 years of experience in construction administration or project management; proficiency with project management software and spreadsheet tools.",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="site">
      <style>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; font-family: Arial, sans-serif; background: #f8fafc; color: #0f172a; }
        a { text-decoration: none; color: inherit; }
        .container { width: min(1180px, 92%); margin: 0 auto; }

        .topbar {
          position: sticky;
          top: 0;
          z-index: 50;
          background: rgba(255,255,255,.95);
          border-bottom: 1px solid #e2e8f0;
          backdrop-filter: blur(12px);
        }

        .topbar-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 0;
        }

        .brand-link {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .brand-logo {
          width: 58px;
          height: 58px;
          border-radius: 50%;
          object-fit: cover;
          background: white;
        }

        .brand-small {
          margin: 0;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: .25em;
          text-transform: uppercase;
          color: #1e40af;
        }

        .brand-title {
          margin: 4px 0 0;
          font-size: 18px;
          font-weight: 700;
        }

        .nav {
          display: flex;
          gap: 28px;
          align-items: center;
          font-weight: 700;
          font-size: 14px;
          color: #334155;
        }

        .nav a:hover, .dropdown:hover span { color: #1e40af; }

        .dropdown {
          position: relative;
          cursor: pointer;
        }

        .dropdown-menu {
          display: none;
          position: absolute;
          top: 28px;
          right: 0;
          min-width: 190px;
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          box-shadow: 0 12px 30px rgba(15,23,42,.15);
          overflow: hidden;
          z-index: 100;
        }

        .dropdown:hover .dropdown-menu { display: grid; }

        .dropdown-menu a {
          padding: 13px 16px;
          color: #334155;
          font-size: 14px;
        }

        .dropdown-menu a:hover {
          background: #eff6ff;
          color: #1e40af;
        }

        .hero {
          background: linear-gradient(135deg, #eff6ff 0%, #f8fafc 55%, #dbeafe 100%);
          padding: 90px 0;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.1fr .9fr;
          gap: 45px;
          align-items: center;
        }

        .eyebrow, .section-eyebrow {
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: .28em;
          color: #1e40af;
          margin-bottom: 14px;
        }

        .hero h1, .section-title {
          margin: 0 0 20px;
          font-size: 48px;
          line-height: 1.15;
          color: #020617;
        }

        .hero p, .section-text {
          font-size: 17px;
          line-height: 1.8;
          color: #475569;
        }

        .hero-card, .panel, .portfolio-card {
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 28px;
          padding: 28px;
          box-shadow: 0 18px 38px rgba(148,163,184,.18);
        }

        .hero-card img {
          width: 130px;
          border-radius: 50%;
          margin-bottom: 20px;
          background: white;
        }

        .btn-primary, .btn-secondary {
          display: inline-block;
          padding: 14px 24px;
          border-radius: 16px;
          font-weight: 700;
          margin-top: 16px;
          transition: .2s ease;
        }

        .btn-primary {
          background: #1e40af;
          color: white;
        }

        .btn-primary:hover { background: #1e3a8a; transform: translateY(-2px); }

        .btn-secondary {
          background: white;
          border: 1px solid #cbd5e1;
          color: #1e40af;
        }

        section { padding: 88px 0; }

        .services {
          background: #020617;
          color: white;
        }

        .services .section-title { color: white; }
        .services .section-eyebrow { color: #93c5fd; }

        .services-grid, .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
          margin-top: 35px;
        }

        .service-card {
          background: rgba(255,255,255,.06);
          border: 1px solid rgba(255,255,255,.1);
          border-radius: 24px;
          padding: 24px;
        }

        .service-card h3 { color: white; margin-top: 0; }
        .service-card p, .service-card li { color: #cbd5e1; line-height: 1.7; }
        .service-card ul { padding-left: 20px; }

        .service-line {
          width: 52px;
          height: 6px;
          background: #60a5fa;
          border-radius: 999px;
          margin-bottom: 15px;
        }

        .about-grid, .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: start;
        }

        .portfolio-card h3 {
          margin-top: 0;
          color: #0f172a;
        }

        .portfolio-card p {
          color: #475569;
          line-height: 1.7;
        }

        .jobs-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          margin-top: 35px;
        }

        .job-card {
          background: rgba(255,255,255,.06);
          border: 1px solid rgba(255,255,255,.12);
          border-radius: 26px;
          padding: 28px;
          color: white;
        }

        .job-card h3 {
          margin-top: 0;
          font-size: 24px;
          color: white;
        }

        .job-card h4 {
          margin-bottom: 8px;
          color: #bfdbfe;
        }

        .job-card p, .job-card li {
          color: #dbeafe;
          line-height: 1.7;
        }

        .contact {
          background: linear-gradient(135deg, #1e3a8a, #020617);
          color: white;
        }

        .contact .section-title { color: white; }
        .contact .section-text { color: #cbd5e1; }

        .contact-card {
          background: rgba(255,255,255,.1);
          border: 1px solid rgba(255,255,255,.15);
          border-radius: 28px;
          padding: 28px;
        }

        .contact-logo {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          object-fit: cover;
          background: white;
          margin-bottom: 18px;
        }

        .footer {
          text-align: center;
          background: #020617;
          color: #94a3b8;
          padding: 28px;
        }

        @media (max-width: 980px) {
          .hero-grid, .about-grid, .contact-grid, .services-grid, .portfolio-grid, .jobs-grid {
            grid-template-columns: 1fr;
          }

          .nav { display: none; }

          .hero h1, .section-title {
            font-size: 34px;
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
            <a href="#portfolio">Portfolio</a>

            <div className="dropdown">
              <span>Careers ▾</span>
              <div className="dropdown-menu">
                <a href="#jobs">Job Openings</a>
                <a href="#resume">Submit Resume</a>
              </div>
            </div>

            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section id="top" className="hero">
        <div className="container hero-grid">
          <motion.div variants={fadeUp} initial="hidden" animate="visible" transition={{ duration: 0.6 }}>
            <div className="eyebrow">Built on Oversight, Structure, and Delivery</div>
            <h1>Professional construction support for projects that demand organization and accountability.</h1>
            <p>
              Dodd Consulting Enterprises, LLC provides project management, administration,
              construction management, and inspection support for clients who need dependable
              construction oversight.
            </p>
            <a className="btn-primary" href="#contact">Schedule a Consultation</a>
          </motion.div>

          <div className="hero-card">
            <img src="/logo.png" alt="Dodd Consulting Enterprises logo" />
            <h2>Reliable project support from planning through completion.</h2>
            <p>
              Our focus is communication, structure, documentation, field coordination,
              and quality-focused project delivery.
            </p>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="container about-grid">
          <div>
            <div className="section-eyebrow">About Us</div>
            <h2 className="section-title">A disciplined partner for project control and construction support.</h2>
            <p className="section-text">
              Dodd Consulting Enterprises, LLC supports construction projects with organization,
              communication, and practical project leadership. We help owners, contractors,
              and project teams maintain clarity from start to finish.
            </p>
          </div>

          <div className="panel">
            <h3>What Sets Us Apart</h3>
            <p className="section-text">
              We bring professional oversight, administrative support, field coordination,
              and inspection-focused accountability to every project.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="services">
        <div className="container">
          <div className="section-eyebrow">Services</div>
          <h2 className="section-title">Construction management services designed to keep projects on track.</h2>

          <div className="services-grid">
            {services.map((service) => (
              <div className="service-card" key={service.title}>
                <div className="service-line"></div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio">
        <div className="container">
          <div className="section-eyebrow">Portfolio</div>
          <h2 className="section-title">Portfolio Work</h2>
          <p className="section-text">
            Explore the types of project support and construction management work
            Dodd Consulting Enterprises provides.
          </p>

          <div className="portfolio-grid">
            {portfolioItems.map((item) => (
              <div className="portfolio-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="jobs" className="services">
        <div className="container">
          <div className="section-eyebrow">Careers</div>
          <h2 className="section-title">Current Job Openings</h2>

          <div className="jobs-grid">
            {jobOpenings.map((job) => (
              <div className="job-card" key={job.title}>
                <div className="service-line"></div>
                <h3>{job.title}</h3>
                <p><strong>Location:</strong> {job.location}</p>
                <p><strong>Pay:</strong> {job.pay}</p>
                <p>{job.description}</p>
                <p><strong>Primary Responsibility:</strong> {job.primaryResponsibility}</p>

                <h4>Key Responsibilities</h4>
                <ul>
                  {job.responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <p><strong>Qualifications:</strong> {job.qualifications}</p>

                <a
                  className="btn-primary"
                  href={applicationFormLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apply for this Role
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="resume">
        <div className="container about-grid">
          <div>
            <div className="section-eyebrow">Submit Resume</div>
            <h2 className="section-title">Interested in future opportunities?</h2>
            <p className="section-text">
              Even when there are no current job openings, Dodd Consulting Enterprises, LLC
              welcomes qualified candidates to submit resumes for future consideration.
            </p>
          </div>

          <div className="panel">
            <h3>Resume Submission</h3>
            <p className="section-text">
              Please submit your resume and brief application using the button below.
            </p>
            <a
              className="btn-primary"
              href={applicationFormLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Submit Resume
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container contact-grid">
          <div>
            <div className="section-eyebrow">Contact</div>
            <h2 className="section-title">Let’s discuss your next project.</h2>
            <p className="section-text">
              Reach out to discuss project goals, timelines, and how Dodd Consulting
              Enterprises can support your construction management needs.
            </p>
          </div>

          <div className="contact-card">
            <img src="/logo.png" alt="Dodd Consulting Enterprises logo" className="contact-logo" />
            <p><strong>Email:</strong> EDodd@edoddconsulting.com</p>
            <p><strong>Phone:</strong> 317-793-0198</p>
            <a className="btn-secondary" href="mailto:EDodd@edoddconsulting.com">Email Us</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        © 2026 Dodd Consulting Enterprises, LLC. All rights reserved.
      </footer>
    </div>
  );
}
