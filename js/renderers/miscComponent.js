export function renderTechnicalWriting(articles) {
    const container = document.querySelector("#technical-writing-container");
    container.innerHTML = "";

    for (const article of articles) {
        const element = document.createElement("article");

        const heading = document.createElement("h3");
        heading.textContent = article.title;

        const description = document.createElement("p");
        description.textContent = article.description;

        element.appendChild(heading);
        element.appendChild(description);

        if (article.url) {
            const link = document.createElement("a");
            link.textContent = "Read More";
            link.href = article.url;
            link.target = "_blank";
            link.rel = "noopener noreferrer";
            element.appendChild(link);
        }

        container.appendChild(element);
    }
}

export function renderFooter(footer) {
    document.querySelector("#footer-text").textContent = `© ${new Date().getFullYear()} ${footer.copyrightName}`;
}

export function formatHeading(text) {
    return text.replace(/([A-Z])/g, " $1").replace(/^./, character => character.toUpperCase());
}