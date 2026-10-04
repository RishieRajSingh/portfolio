import { createElement } from "./domHelpers.js";

export function createViewDetails(sections, title = "View Details") {
    const details = document.createElement("details");
    details.className = "details";

    const summary = document.createElement("summary");

    const label = createElement("span", null, title);
    const arrow = createElement("span", "details-arrow", "⌄");

    summary.append(label, arrow);

    const content = createElement("div", "details-content");

    for (const sectionData of sections) {
        const section = createElement(
            "div",
            "details-section"
        );

        const heading = createElement(
            "h4",
            null,
            sectionData.title
        );

        section.append(heading, sectionData.content);
        content.appendChild(section);
    }

    details.append(summary, content);

    return details;
}