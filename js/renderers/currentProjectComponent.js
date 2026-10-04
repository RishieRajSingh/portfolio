export function renderCurrentlyWorkingOn(data) {
    const container = document.querySelector("#currently-working-container");

    if (!container || !data) return;

    container.innerHTML = "";

    // Active Project
    const projectsSection = document.createElement("div");
    projectsSection.className = "working-projects";

    projectsSection.innerHTML = `
        <h3>Active Project</h3>

        ${(data.projects ?? [])
            .map(
                project => `
                    <article>
                        <span class="project-status">
                            ${project.status}
                        </span>

                        <h4>${project.name}</h4>

                        <p>${project.description}</p>

                        <div class="working-technologies">
                            ${(project.technologies ?? [])
                                .map(
                                    technology =>
                                        `<span>${technology}</span>`
                                )
                                .join("")}
                        </div>
                    </article>
                `
            )
            .join("")}
    `;

    // Currently Learning
    const learningSection = document.createElement("div");
    learningSection.className = "working-small-card";

    learningSection.innerHTML = `
        <h3>Currently Learning</h3>

        <div class="working-items">
            ${(data.learning ?? [])
                .map(item => `<span>${item}</span>`)
                .join("")}
        </div>
    `;

    // Coding Profiles
    const profilesSection = document.createElement("div");
    profilesSection.className = "working-small-card";

    const leetcode = data.codingProfiles?.leetcode;
    const github = data.codingProfiles?.github;

    profilesSection.innerHTML = `
        <h3>Coding Profiles</h3>

        <div class="coding-profiles">

            ${
                leetcode
                    ? `
                        <div class="coding-profile">
                            <div>
                                <strong>LeetCode</strong>
                                <span>
                                    ${leetcode.problemsSolved}+ problems
                                </span>
                            </div>

                            <a
                                href="${leetcode.profileUrl}"
                                target="_blank"
                                rel="noopener noreferrer">
                                View →
                            </a>
                        </div>
                    `
                    : ""
            }

            ${
                github
                    ? `
                        <div class="coding-profile">
                            <div>
                                <strong>GitHub</strong>
                                <span>Projects & source code</span>
                            </div>

                            <a
                                href="${github.profileUrl}"
                                target="_blank"
                                rel="noopener noreferrer">
                                View →
                            </a>
                        </div>
                    `
                    : ""
            }

        </div>
    `;

    // Goals
    const goalsSection = document.createElement("div");
    goalsSection.className = "working-small-card";

    goalsSection.innerHTML = `
        <h3>Goals</h3>

        <div class="working-items">
            ${(data.goals ?? [])
                .map(goal => `<span>${goal}</span>`)
                .join("")}
        </div>
    `;

    container.append(
        projectsSection,
        learningSection,
        profilesSection,
        goalsSection
    );
}