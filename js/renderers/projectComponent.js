import { createViewDetails } from "./detailsComponent.js";
import { initializeSlider } from "./sliderComponent.js";
import { createElement, createTags, createList } from "./domHelpers.js";

export function renderProjects(projects) {
    const container = document.querySelector("#projects-container");

    if (!container || !projects?.length) return;

    container.innerHTML = `
        <div class="slider projects-slider">
            ${
                projects.length > 1
                    ? `
                        <button class="slider-arrow slider-prev project-prev" aria-label="Previous project">←</button>
                    `
                    : ""
            }

            <div class="slider-viewport projects-viewport">
                <div class="slider-track projects-track"></div>
            </div>

            ${
                projects.length > 1
                    ? `
                        <button class="slider-arrow slider-next project-next" aria-label="Next project">→</button>
                    `
                    : ""
            }
        </div>

        ${
            projects.length > 1
                ? `
                    <div class="slider-dots project-dots">
                        ${projects
                            .map(
                                (_, index) => `
                                    <button
                                        class="slider-dot project-dot ${index === 0 ? "active" : ""}"
                                        data-index="${index}"
                                        aria-label="Go to project ${index + 1}">
                                    </button>
                                `
                            )
                            .join("")}
                    </div>
                `
                : ""
        }
    `;

    const track = container.querySelector(".projects-track");

    for (const project of projects) {
        const slide = createElement("div", "slider-slide project-slide");
        const article = createElement("article", "project-card");

        // Header
        const top = createElement("div", "project-top");
        const titleBlock = createElement("div");

        titleBlock.appendChild(
            createElement("h3", null, project.name)
        );

        if (project.type) {
            titleBlock.appendChild(
                createElement("p", "project-type", project.type)
            );
        }

        top.appendChild(titleBlock);

        if (project.status) {
            top.appendChild(
                createElement("span", "project-status", project.status)
            );
        }

        // Main information
        article.append(
            top,
            createElement(
                "p",
                "project-date",
                `${project.startDate} – ${project.endDate}`
            ),
            createElement(
                "p",
                "project-description",
                project.description
            )
        );

        // Tech Stack
        if (project.technologies?.length) {
            const techSection = createElement(
                "div",
                "project-tech-section"
            );

            techSection.append(
                createElement("h4", null, "Tech Stack"),
                createTags(project.technologies, "project-technologies")
            );

            article.appendChild(techSection);
        }

        // Achievement
        if (project.achievement) {
            article.appendChild(
                createElement(
                    "div",
                    "project-achievement",
                    project.achievement
                )
            );
        }

        // View Details
        const details = [];

        if (project.features?.length) {
            details.push({
                title: "Key Features",
                content: createTags(project.features, "feature-tags")
            });
        }

        if (project.highlights?.length) {
            details.push({
                title: "Highlights",
                content: createList(project.highlights)
            });
        }

        if (project.architecture?.available) {
            const architecture = createElement(
                "div",
                "project-architecture"
            );

            const image = document.createElement("img");
            image.src = project.architecture.image;
            image.alt = `${project.name} architecture`;

            architecture.appendChild(image);

            details.push({
                title: "Architecture",
                content: architecture
            });
        }

        if (
            project.links?.github ||
            project.links?.live ||
            project.links?.documentation
        ) {
            const links = createElement("div", "project-links");

            if (project.links.github) {
                links.appendChild(
                    createProjectLink(project.links.github, "GitHub ↗")
                );
            }

            if (project.links.live) {
                links.appendChild(
                    createProjectLink(project.links.live, "Live Demo ↗")
                );
            }

            if (project.links.documentation) {
                links.appendChild(
                    createProjectLink(
                        project.links.documentation,
                        "Documentation ↗"
                    )
                );
            }

            details.push({
                title: "Links",
                content: links
            });
        }

        if (details.length) {
            article.appendChild(createViewDetails(details));
        }

        slide.appendChild(article);
        track.appendChild(slide);
    }

    initializeSlider(container, projects.length, {
        trackSelector: ".projects-track",
        prevSelector: ".project-prev",
        nextSelector: ".project-next",
        dotSelector: ".project-dot"
    });
}

function createProjectLink(url, text) {
    const link = createElement("a", null, text);

    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";

    return link;
}