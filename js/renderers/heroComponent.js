export function renderHero(hero, personal) {
    document.querySelector("#hero-name").textContent = `${hero.greeting} ${personal.name}`;
    document.querySelector("#hero-title").textContent = hero.title;
    document.querySelector("#hero-description").textContent = hero.description;

    const projectsButton = document.querySelector("#projects-button");
    projectsButton.textContent = hero.primaryButton.text;
    projectsButton.href = hero.primaryButton.target;

    const contactButton = document.querySelector("#contact-button");
    contactButton.textContent = hero.secondaryButton.text;
    contactButton.href = hero.secondaryButton.target;
}