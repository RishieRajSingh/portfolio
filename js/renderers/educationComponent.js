export function renderEducation(education) {
    const container = document.querySelector("#education-container");
    container.innerHTML = "";

    for (const item of education) {
        const article = document.createElement("article");

        const heading = document.createElement("h3");
        heading.textContent = item.degree;

        const institution = document.createElement("p");
        institution.textContent = item.institution;

        const dates = document.createElement("p");
        dates.textContent = `${item.startDate} – ${item.endDate}`;

        const location = document.createElement("p");
        location.textContent = item.location;

        const score = document.createElement("p");
        score.textContent = `Score: ${item.score}`;

        article.appendChild(heading);
        article.appendChild(institution);
        article.appendChild(dates);
        article.appendChild(location);
        article.appendChild(score);

        if (item.links && item.links.institution) {
            const link = document.createElement("a");
            link.textContent = "Institution";
            link.href = item.links.institution;
            link.target = "_blank";
            link.rel = "noopener noreferrer";
            article.appendChild(link);
        }

        container.appendChild(article);
    }
}