import { renderPortfolio } from "./portfolioRenderer.js";

// Always start at the Hero section on refresh
if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
}

window.addEventListener("load", () => {
    window.scrollTo(0, 0);
});

const currentYear = new Date().getFullYear();
document.querySelector("footer p").textContent = `© ${currentYear} Rishie Raj Singh`;

const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

const response = await fetch("./resources/data/portfolioData.json");
const portfolioData = await response.json();

console.log(portfolioData);

renderPortfolio(portfolioData);