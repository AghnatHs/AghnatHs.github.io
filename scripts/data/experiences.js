const experiences = [
  {
    title: "Software Engineer",
    company: "Akucuciin",
    duration: "Mar 2025 – Present",
    details: [
      "Lead a 4-engineer team, owning end-to-end backend, server-side development and IT infrastructure.",
      "Built scalable RESTful APIs (40+ endpoints) achieving ~75ms average response time.",
      "Designed core database schemas and built services for auth, RBAC, payments, and AI moderation.",
      "Built decoupled WhatsApp automation services for real-time notifications (~250ms response).",
      "Managed staging & production environments (cPanel & VPS) to accelerate releases.",
    ],
    skills: [
      "Express.js",
      "MySQL",
      "Redis",
      "System Analysis",
      "Business Analysis",
      "Database Design",
      "REST APIs",
    ],
  },
  {
    title: "Software Developer",
    company: "Codepanda",
    duration: "Feb 2025 – Present",
    details: [
      "Developed fullstack applications, including the EnglishPeriod IELTS CBT new feature.",
      "Led potential clients to use company services.",
      "Managed software project timelines and server deployments.",
    ],
    skills: [
      "Laravel",
      "Fullstack Development",
      "Project Management",
      "Database Design",
      "Client Relations",
    ],
  },
  {
    title: "Research Assistant | Backend Developer",
    company: "IPB University",
    duration: "Jul 2025 – Dec 2025",
    details: [
      "Developed backend for PreciFood, an intelligent decision support system using Genetic Algorithms.",
      "Implemented new recipe/ingredients modules and automated nutrition calculations.",
      "Documented API specifications and assisted in staging deployments (update).",
    ],
    skills: [
      "Backend Development",
      "Express.js",
      "System Analysis",
      "REST APIs",
      "Applied AI",
    ],
  },
  {
    title: "Founding Backend Developer",
    company: "Akucuciin",
    duration: "Oct 2024 – Mar 2025",
    details: [
      "Built the IT ecosystem from the ground up, translating business needs into IT solutions.",
      "Developed REST APIs for the main platform, admin, laundry partner, and driver dashboards.",
      "Designed core database schemas and maintained clean migration paths for new features.",
    ],
    skills: [
      "Express.js",
      "MySQL",
      "System Analysis",
      "Business Analysis",
      "Database Design",
      "IT Infrastructure",
    ],
  },
  {
    title: "R&T Division | Technical Project Manager",
    company: "Himalkom IPB",
    duration: "Jan 2025 – Dec 2025",
    details: [
      "Managed the website development subdivision, ensuring maintainable and scalable web apps.",
      "Developed REST APIs for the organization landing page using Laravel and FilamentPHP.",
      "Developed fullstack internal staff web apps using Laravel, Blade, and Tailwind.",
      "Deployed and maintained all projects using cPanel.",
    ],
    skills: ["Laravel", "FilamentPHP", "Project Management"],
  },
  {
    title: "Backend Developer",
    company: "Dinas Lingkungan Hidup Kalimanan Selatan",
    duration: "Dec 2024 – Jan 2025",
    details: [
      "Developed the REST API backend for an internal quiz web app using Express.js.",
      "Designed the database and ERD for core functionalities.",
      "Integrated backend services with a React frontend.",
    ],
    skills: [
      "Express.js",
      "MySQL",
      "RESTful APIs",
      "Database Design",
      "Backend Development",
    ],
  },
  {
    title: "R&T Division Intern | Backend Developer",
    company: "Himalkom IPB",
    duration: "Oct 2024 – Nov 2024",
    details: [
      "Collaborated with 4 interns to create the 'komnews' feature for the Himalkom website.",
      "Created the database ERD and implemented backend APIs.",
      "Implemented the admin dashboard using FilamentPHP.",
    ],
    skills: ["Laravel", "SQLite", "FilamentPHP", "Database Design"],
  },
];

function renderExperiences() {
  const container = document.getElementById("experience-list");
  if (!container) return;

  container.innerHTML = experiences
    .map(
      (job) => `
      <div class="job">
        <div class="job-duration-col">
          <p class="job-duration">${job.duration}</p>
        </div>
        <div class="job-info-col">
          <h3 class="job-title">${job.title}</h3>
          <p class="job-company">${job.company}</p>
          <ul class="job-details">
            ${job.details.map((detail) => `<li>${detail}</li>`).join("")}
          </ul>
          <div class="job-skills">
            ${job.skills.map((skill) => `<span class="skill-tag">${skill}</span>`).join("")}
          </div>
        </div>
      </div>
    `,
    )
    .join("");
}

renderExperiences();
