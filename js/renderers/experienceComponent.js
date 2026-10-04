import { createViewDetails } from "./detailsComponent.js";
import { createElement, createTags, createList } from "./domHelpers.js";

export function renderExperience(experience) {
    const container = document.querySelector("#experience-container");

    if (!container || !experience?.length) return;

    container.innerHTML = "";

    for (const job of experience) {
        const article = createElement("article", "experience-card");
        const header = createElement("div", "experience-header");
        const titleBlock = createElement("div");

        // Header
        titleBlock.append(
            createElement("h3", null, job.role),
            createElement("p", "experience-company", job.company)
        );

        const meta = createElement("div", "experience-meta");
        const duration = calculateDuration(job.startDate, job.endDate);

        meta.append(
            createElement(
                "span",
                "experience-date",
                `${job.startDate} – ${job.endDate} · ${duration}`
            ),
            createElement(
                "span",
                "experience-location",
                job.location
            )
        );

        header.append(titleBlock, meta);

        // Summary
        article.append(
            header,
            createElement(
                "p",
                "experience-summary",
                job.description
            )
        );

        // Tech Stack
        if (job.technologies?.length) {
            article.append(
                createElement(
                    "h4",
                    "experience-section-title",
                    "Tech Stack"
                ),
                createTags(
                    job.technologies,
                    "experience-technologies"
                )
            );
        }

        // View Details
        if (job.responsibilities?.length) {
            article.appendChild(
                createViewDetails([
                    {
                        title: "Key Contributions",
                        content: createList(job.responsibilities)
                    }
                ])
            );
        }

        container.appendChild(article);
    }
}

function calculateDuration(startDate, endDate) {
    const start = new Date(startDate);
    const end =
        endDate === "Present"
            ? new Date()
            : new Date(endDate);

    const years =
        (end - start) /
        (1000 * 60 * 60 * 24 * 365.25);

    return `${years.toFixed(1)} years`;
}