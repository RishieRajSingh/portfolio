export function renderPersonal(personal) {
    document.querySelector("#page-title").textContent = `${personal.name} | ${personal.title}`;
    document.querySelector("#nav-name").textContent = personal.name;
}

export function renderAbout(about) {
    document.querySelector("#about-description").textContent = about.description;

    const container = document.querySelector("#about-interests");
    container.innerHTML = "";

    for (const interest of about.interests) {
        const element = document.createElement("span");
        element.textContent = interest;
        container.appendChild(element);
    }
}

export function renderContact(contact, personal) {
    document.querySelector("#contact-heading").textContent = contact.heading;
    document.querySelector("#contact-message").textContent = contact.message;

    const email = document.querySelector("#contact-email");
    email.textContent = personal.email;
    email.href = `mailto:${personal.email}`;

    const github = document.querySelector("#github-link");
    github.href = personal.socialLinks.github;

    const linkedin = document.querySelector("#linkedin-link");
    linkedin.href = personal.socialLinks.linkedin;
}