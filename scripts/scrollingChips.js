function aggregateSkills() {
  const uniqueSkills = new Set();

  // Add from experiences
  if (typeof experiences !== "undefined") {
    experiences.forEach((exp) => {
      if (exp.skills) exp.skills.forEach((skill) => uniqueSkills.add(skill));
    });
  }

  // Add from projects
  if (typeof projects !== "undefined") {
    projects.forEach((proj) => {
      if (proj.competency)
        proj.competency.forEach((comp) => uniqueSkills.add(comp));
    });
  }

  // Add from skillsets
  if (typeof skillsets !== "undefined") {
    skillsets.forEach((skill) => uniqueSkills.add(skill.name));
  }
  if (typeof frameworks !== "undefined") {
    frameworks.forEach((fw) => uniqueSkills.add(fw.name));
  }
  if (typeof others !== "undefined") {
    others.forEach((other) => uniqueSkills.add(other.name));
  }

  return Array.from(uniqueSkills);
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function renderScrollingChips() {
  const container = document.getElementById("scrolling-chips");
  if (!container) return;

  const allSkills = aggregateSkills();

  // Get 15 random skills
  const shuffledSkills = shuffleArray([...allSkills]);
  const selectedSkills = shuffledSkills.slice(0, 25);

  // Duplicate the array to create a seamless infinite scroll effect
  const displaySkills = [...selectedSkills, ...selectedSkills];

  container.innerHTML = displaySkills
    .map((skill) => `<div class="chip">${skill}</div>`)
    .join("");
}

// Wait for DOM and other scripts to load
document.addEventListener("DOMContentLoaded", renderScrollingChips);
