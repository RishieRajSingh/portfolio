export function renderPersonal(personal) {
    const pageTitle = document.querySelector("#page-title");
    const navName = document.querySelector("#nav-name");

    if (pageTitle) {
        pageTitle.textContent = `${personal.name} | ${personal.title}`;
    }

    if (navName) {
        navName.textContent = personal.name;
    }
}

export function renderAbout(about) {
    const description = document.querySelector("#about-description");
    const container = document.querySelector("#about-interests");

    if (description) {
        description.textContent = about.description;
    }

    if (!container) return;

    container.innerHTML = "";

    for (const interest of about.interests ?? []) {
        const element = document.createElement("span");
        element.textContent = interest;
        container.appendChild(element);
    }
}

export function renderContact(contact, personal) {
    const heading = document.querySelector("#contact-heading");
    const message = document.querySelector("#contact-message");

    if (heading) {
        heading.textContent = contact.heading;
    }

    if (message) {
        message.textContent = contact.message ?? "";
    }

    const email = document.querySelector("#contact-email");

    if (email) {
        email.textContent = personal.email;
        email.href = `mailto:${personal.email}`;
    }

    const github = document.querySelector("#github-link");

    if (github) {
        github.href = personal.socialLinks.github;
        github.textContent = "GitHub";
    }

    const linkedin = document.querySelector("#linkedin-link");

    if (linkedin) {
        linkedin.href = personal.socialLinks.linkedin;
        linkedin.textContent = "LinkedIn";
    }
}