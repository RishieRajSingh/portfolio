export function renderCertifications(certifications) {
    const container = document.querySelector("#certifications-container");
    container.innerHTML = "";

    for (const certification of certifications) {
        const article = document.createElement("article");

        const heading = document.createElement("h3");
        heading.textContent = certification.name;

        const issuer = document.createElement("p");
        issuer.textContent = certification.issuer;

        const year = document.createElement("p");
        year.textContent = certification.year;

        article.appendChild(heading);
        article.appendChild(issuer);
        article.appendChild(year);

        if (certification.credentialId) {
            const credential = document.createElement("p");
            credential.textContent = `Credential ID: ${certification.credentialId}`;
            article.appendChild(credential);
        }

        if (certification.link) {
            const link = document.createElement("a");
            link.textContent = "View Certificate";
            link.href = certification.link;
            link.target = "_blank";
            link.rel = "noopener noreferrer";
            article.appendChild(link);
        }

        container.appendChild(article);
    }
}