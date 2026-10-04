export function renderAchievements(achievements) {
    const container = document.querySelector("#achievements-container");
    container.innerHTML = "";

    for (const achievement of achievements) {
        const article = document.createElement("article");

        const heading = document.createElement("h3");
        heading.textContent = achievement.title;

        const type = document.createElement("p");
        type.textContent = achievement.type;

        const description = document.createElement("p");
        description.textContent = achievement.description;

        article.appendChild(heading);
        article.appendChild(type);
        article.appendChild(description);

        if (achievement.link) {
            const link = document.createElement("a");
            link.textContent = "View Achievement";
            link.href = achievement.link;
            link.target = "_blank";
            link.rel = "noopener noreferrer";
            article.appendChild(link);
        }

        container.appendChild(article);
    }
}