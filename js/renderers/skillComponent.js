export function renderSkills(skills) {
    const container = document.querySelector("#skills-container");
    if (!container || !skills) return;

    container.innerHTML = "";

    for (const category in skills) {
        const row = document.createElement("div");
        row.className = "skill-row";

        const heading = document.createElement("h3");
        heading.textContent = formatHeading(category);

        const skillList = document.createElement("div");
        skillList.className = "skill-items";

        skills[category].forEach(skill => {
            const skillTag = document.createElement("span");
            skillTag.textContent = skill;
            skillList.appendChild(skillTag);
        });

        row.appendChild(heading);
        row.appendChild(skillList);
        container.appendChild(row);
    }
}

function formatHeading(category) {
    const headings = {
        languages: "Languages",
        backend: "Backend",
        database: "Database",
        frontend: "Frontend",
        devops: "DevOps & Tools",
        tools: "Tools",
        other: "Others"
    };

    return headings[category] || category
        .replace(/([A-Z])/g, " $1")
        .replace(/^./, char => char.toUpperCase());
}