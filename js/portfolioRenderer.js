import { renderPersonal, renderAbout, renderContact } from "./renderers/aboutComponent.js";
import { renderAchievements } from "./renderers/achievementComponent.js";
import { renderCertifications } from "./renderers/certificateComponent.js";
import { renderCurrentlyWorkingOn } from "./renderers/currentProjectComponent.js";
import { renderEducation } from "./renderers/educationComponent.js";
import { renderExperience } from "./renderers/experienceComponent.js";
import { renderHero } from "./renderers/heroComponent.js";
import { renderTechnicalWriting, renderFooter } from "./renderers/miscComponent.js";
import { renderProjects } from "./renderers/projectComponent.js";
import { renderSkills } from "./renderers/skillComponent.js";

export function renderPortfolio(data) {
    renderPersonal(data.personal);
    renderAbout(data.about);
    renderContact(data.contact, data.personal);
    renderAchievements(data.achievements);
    renderCertifications(data.certifications);
    renderCurrentlyWorkingOn(data.currentlyWorkingOn);
    renderEducation(data.education);
    renderExperience(data.experience);
    renderHero(data.hero, data.personal);
    renderTechnicalWriting(data.technicalWriting);
    renderFooter(data.footer);
    renderProjects(data.projects);
    renderSkills(data.skills);
}