const projects = [
  {
    image: "assets/images/project_akucuciin_backend.webp",
    link: "https://akucuciin.com",
    title: "Akucuciin",
    description: "Backend and IT ecosystem of Akucuciin",
    associatedWith: null,
    competency: [
      "Backend",
      "Software Development",
      "Software Architecture",
      "Payment Integration",
      "Microservices",
      "Express.js",
      "MySQL",
      "VPS",
    ],
  },
  {
    image: "assets/images/project_bacarita.jpeg",
    link: "https://github.com/je-One-One-LIDM/bacarita-be",
    title: "Bacarita - Finalist for LIDM 2025",
    description: "Development of Bacarita",
    associatedWith: null,
    competency: [
      "Backend",
      "Frontend",
      "Nest JS",
      "TypeScript",
      "Containerization",
      "MySQL",
      "VPS (Dokploy)",
    ],
  },
  {
    image: "assets/images/project_englishperiod.jpeg",
    link: "https://english-period.com",
    title: "English Period - New feature IELTS CBT",
    description: "Developing new IELTS CBT feature",
    associatedWith: "Associated with Codepanda",
    competency: [
      "Fullstack",
      "Laravel",
      "MySQL",
      "Server Administration",
      "Project Management",
    ],
  },
  {
    image: "assets/images/project_precifood.png",
    link: "https://precifood.id",
    title: "Precifood",
    description:
      "Develop and implement new recipe, recipe calculation, and ingredients module",
    associatedWith: null,
    competency: ["Backend", "Express", "TypeScript", "PostgreSQL"],
  },
  {
    image: "assets/images/project_himalkom_portal.webp",
    link: "https://portal.himalkom-ipb.com",
    title: "portal.himalkom-ipb.com (2025)",
    description: "Himalkom IPB integrated information system",
    associatedWith: null,
    competency: ["Fullstack", "Laravel", "MySql"],
  },
  {
    image: "assets/images/project_himalkom_lp.webp",
    link: "https://himalkom-ipb.com",
    title: "himalkom-ipb.com (2025)",
    description: "Back-end of himalkom-ipb.com (2025) [api.himalkom-ipb.com]",
    associatedWith: null,
    competency: ["Backend", "Laravel", "Filamentphp", "MySql"],
  },
  {
    image: "assets/images/project_tesdlhkalsel_backend.webp",
    link: "https://tesdlhkalsel.com",
    title: "tesdlhkalsel.com",
    description: "Back-end of tesdlhkalsel.com",
    associatedWith: null,
    competency: ["Backend", "Express.js", "MySql"],
  },
];

function renderProjects() {
  const container = document.getElementById("projects-list");
  if (!container) return;

  container.innerHTML = projects
    .map(
      (project) => `
      <div class="project">
        <div class="image-a">
          <img src="${project.image}" alt="project1" />
          <div class="cover">
            <a href="${project.link}" target="_blank">See More</a>
          </div>
        </div>
        <div class="info">
          <h3>
            ${project.title}
            <span class="external-link-mobile">
              <a href="${project.link}" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
            </span>
          </h3>
          <p>${project.description}</p>
          ${project.associatedWith ? `<p style="font-style: italic;">${project.associatedWith}</p>` : ""}
        </div>
        <div class="tech-stack">
          <ul>
            ${project.competency.map((tech) => `<li>${tech}</li>`).join("")}
          </ul>
        </div>
      </div>
    `,
    )
    .join("");
}

renderProjects();
