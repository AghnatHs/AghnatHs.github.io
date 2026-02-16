const experiences = [
  {
    title: "Software Engineer",
    company: "Akucuciin",
    duration: "Maret 2025 – Present",
    details: [],
  },
  {
    title: "Software Developer",
    company: "Codepanda",
    duration: "Feb 2025 – Present",
    details: [],
  },
  {
    title: "Research Assistant | Backend Developer",
    company: "IPB",
    duration: "Jul 2025 – Dec 2025",
    details: [],
  },
  {
    title: "Founding Backend Developer",
    company: "Akucuciin",
    duration: "Oct 2024 – Maret 2025",
    details: [],
  },
  {
    title:
      "Staff of Research and Technology Division, Technical Project Manager",
    company: "Himalkom IPB",
    duration: "Jan 2025 – Present",
    details: [],
  },
  {
    title: "Backend Developer - Dinas Lingkungan Hidup Kalimantan Selatan",
    company: "Freelance",
    duration: "Dec 2024 – Jan 2025",
    details: [],
  },
  {
    title: "Intern of Research and Technology Division",
    company: "Himalkom IPB",
    duration: "Oct 2024 – Nov 2024",
    details: [],
  },
];

function renderExperiences() {
  const container = document.getElementById("experience-list");
  if (!container) return;

  container.innerHTML = experiences
    .map(
      (job) => `
      <div class="job">
        <h3 class="job-title">${job.title}</h3>
        <h2 class="job-company">${job.company}</h2>
        <p class="job-duration">${job.duration}</p>
        <ul class="job-details">
          ${job.details.map((detail) => `<li>${detail}</li>`).join("")}
        </ul>
      </div>
    `,
    )
    .join("");
}

renderExperiences();
