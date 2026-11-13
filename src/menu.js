import Index from "./index.js";
export default openMenuPage;


function openMenuPage() {
    Index.clearContent();

    Index.createPageHeader("Menu", "h1");

    const comingSoon = document.createElement("h2");
    comingSoon.style.textAlign = "center";
    comingSoon.textContent = "Coming Soon!";
    Index.content.append(comingSoon);

}