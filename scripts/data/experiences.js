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

function groupExperiencesByCompany(data) {
  const grouped = [];
  const groupMap = new Map();

  data.forEach((job) => {
    if (!groupMap.has(job.company)) {
      const companyGroup = {
        company: job.company,
        roles: [],
      };

      groupMap.set(job.company, companyGroup);
      grouped.push(companyGroup);
    }

    groupMap.get(job.company).roles.push(job);
  });

  return grouped;
}

const monthMap = {
  Jan: 0,
  Feb: 1,
  Mar: 2,
  Apr: 3,
  May: 4,
  Jun: 5,
  Jul: 6,
  Aug: 7,
  Sep: 8,
  Oct: 9,
  Nov: 10,
  Dec: 11,
};

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function parseMonthYear(value) {
  const [monthText, yearText] = value.trim().split(/\s+/);
  const month = monthMap[monthText];
  const year = Number(yearText);

  if (month === undefined || Number.isNaN(year)) return null;
  return { month, year };
}

function parseDuration(duration) {
  const parts = duration.split("–").map((item) => item.trim());
  if (parts.length !== 2) return null;

  const start = parseMonthYear(parts[0]);
  const end =
    parts[1] === "Present"
      ? { month: new Date().getMonth(), year: new Date().getFullYear() }
      : parseMonthYear(parts[1]);

  if (!start || !end) return null;
  return { start, end };
}

function isCurrentExperience(duration) {
  const parts = duration.split("–").map((item) => item.trim());
  return parts.length === 2 && parts[1] === "Present";
}

function monthIndex(date) {
  return date.year * 12 + date.month;
}

function monthDiff(start, end) {
  return monthIndex(end) - monthIndex(start);
}

function renderExperiences() {
  const container = document.getElementById("experience-list");
  if (!container) return;

  const groupedExperiences = groupExperiencesByCompany(experiences);

  container.innerHTML = groupedExperiences
    .map(
      (companyGroup) => `
      <div class="company-group">
        <div class="company-heading">
          <p class="company-link">
            ${companyGroup.company}
          </p>
          <p class="company-role-count">${companyGroup.roles.length} role${companyGroup.roles.length > 1 ? "s" : ""}</p>
        </div>

        ${companyGroup.roles
          .map(
            (job) => `
          <div class="job ${isCurrentExperience(job.duration) ? "is-current" : "is-past"}">
            <div class="job-duration-col">
              <p class="job-duration">${job.duration}</p>
            </div>
            <div class="job-info-col">
              <h3 class="job-title">${job.title}</h3>
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
          .join("")}
      </div>
    `,
    )
    .join("");
}

function renderExperienceTimeline() {
  const container = document.getElementById("experience-timeline-list");
  if (!container) return;

  const timelineData = experiences
    .map((job) => {
      const range = parseDuration(job.duration);
      if (!range) return null;

      return {
        ...job,
        start: range.start,
        end: range.end,
        isCurrent: isCurrentExperience(job.duration),
      };
    })
    .filter(Boolean);

  if (!timelineData.length) {
    container.innerHTML = "";
    return;
  }

  const timelineStart = timelineData.reduce(
    (acc, job) => (monthIndex(job.start) < monthIndex(acc) ? job.start : acc),
    timelineData[0].start,
  );

  const timelineEnd = timelineData.reduce(
    (acc, job) => (monthIndex(job.end) > monthIndex(acc) ? job.end : acc),
    timelineData[0].end,
  );

  const totalMonths = monthDiff(timelineStart, timelineEnd) + 1;
  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  const monthUnit = isMobile ? 18 : 36;
  const labelWidth = isMobile ? 180 : 280;
  const minTrackWidth = isMobile ? 320 : 680;
  const trackWidth = Math.max(totalMonths * monthUnit, minTrackWidth);

  const monthMarkers = [];
  for (let index = 0; index < totalMonths; index++) {
    const absoluteMonth = timelineStart.month + index;
    const month = absoluteMonth % 12;
    const year = timelineStart.year + Math.floor(absoluteMonth / 12);
    const isYearStart = month === 0;
    const monthLabel = isMobile
      ? monthNames[month].slice(0, 1)
      : monthNames[month];

    monthMarkers.push(`
      <div class="timeline-month ${isYearStart ? "is-year-start" : ""}" style="left:${index * monthUnit}px">
        <span class="timeline-month-label">${monthLabel}</span>
        ${isYearStart ? `<span class="timeline-year-label">${year}</span>` : ""}
      </div>
    `);
  }

  container.innerHTML = `
    <div class="timeline-grid" style="min-width:${labelWidth + trackWidth}px">
      <div class="timeline-header">
        <div class="timeline-header-label"></div>
        <div class="timeline-axis" style="width:${trackWidth}px">
          ${monthMarkers.join("")}
        </div>
      </div>

      ${timelineData
        .map((job) => {
          const left = monthDiff(timelineStart, job.start) * monthUnit;
          const width = Math.max(
            (monthDiff(job.start, job.end) + 1) * monthUnit,
            70,
          );

          return `
            <div class="timeline-row">
              <div class="timeline-label">
                <h3 class="timeline-role">${job.title}</h3>
                <p class="timeline-company">${job.company}</p>
              </div>

              <div class="timeline-row-track" style="width:${trackWidth}px">
                <div class="timeline-bar ${job.isCurrent ? "is-current" : "is-past"}" style="left:${left}px; width:${width}px;">
                  <span>${job.duration}</span>
                </div>
              </div>
            </div>
          `;
        })
        .join("")}
    </div>
  `;
}

renderExperiences();
renderExperienceTimeline();

window.addEventListener("resize", renderExperienceTimeline);
