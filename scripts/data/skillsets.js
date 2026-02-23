const skillsets = [
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    name: "TypeScript",
    level: "Intermediate",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    name: "Java",
    level: "Intermediate",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    name: "JavaScript",
    level: "Intermediate",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
    name: "PHP",
    level: "Intermediate",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg",
    name: "Golang",
    level: "Beginner",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    name: "Python",
    level: "Beginner",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg",
    name: "Cloud Computing",
    level: "Beginner",
  },
];

const frameworks = [
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg",
    iconStyle: "filter: brightness(0) invert(1)",
    name: "ExpressJS",
    level: "Intermediate",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg",
    name: "NestJS",
    level: "Intermediate",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
    name: "Spring Boot",
    level: "Beginner",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
    iconStyle: "filter: brightness(0) invert(1)",
    name: "Laravel",
    level: "Intermediate",
  },
];

const others = [
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
    name: "MySQL",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    name: "PostgreSQL",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mariadb/mariadb-original.svg",
    name: "MariaDB",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg",
    name: "SQLite",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
    name: "Redis",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-plain.svg",
    name: "Git",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg",
    name: "Jest",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    name: "Docker",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg",
    name: "Nginx",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    name: "MongoDB",
  },
];

function renderSkillSection(containerId, skills) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = skills
    .map(
      (skill) => `
      <div class="skill">
        <img src="${skill.icon}" alt="${skill.name}" loading="lazy"${skill.iconStyle ? ` style="${skill.iconStyle}"` : ""} />
        <div class="container">
          <h2 class="skill-title">${skill.name}</h2>
          ${skill.level ? `<h2 class="skill-level">${skill.level}</h2>` : ""}
        </div>
      </div>
    `,
    )
    .join("");
}

renderSkillSection("skillsets-list", skillsets);
renderSkillSection("frameworks-list", frameworks);
renderSkillSection("others-list", others);
