import "./styles.css";

import openHomePage from "./home.js";
import openMenuPage from "./menu.js";
import openAboutPage from "./about.js";

// #region DOM accessors
const content = document.getElementById("content");

const btnHome = document.getElementById("btn-home");
btnHome.addEventListener("click", openHomePage);

const btnMenu = document.getElementById("btn-menu");
btnMenu.addEventListener("click", openMenuPage);

const btnAbout = document.getElementById("btn-about");
btnAbout.addEventListener("click", openAboutPage);

// #endregion

function clearContent() {
    content.replaceChildren();
}

function createPageHeader(headerText, headerType) {
    const header = document.createElement(headerType);
    header.textContent = headerText;
    header.id = "page-header";

    content.prepend(header);

    return header;
}


const exports =  { content, clearContent, createPageHeader };
export default exports;
