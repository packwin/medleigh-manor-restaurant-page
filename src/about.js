import Index from "./index.js";
export default openAboutPage;


function openAboutPage() {
    Index.clearContent();

    Index.createPageHeader("About", "h1");

    const infoContainer = document.createElement("div");
    infoContainer.classList.add("text-container");
    content.append(infoContainer);

    const infoPara = document.createElement("p");
    infoPara.textContent = "The Medleigh Manor is a family-run business that has been serving the Medleigh community since 1931. Velit aliquam imperdiet mollis nullam volutpat porttitor ullamcorper. Primis vulputate ornare sagittis vehicula praesent dui felis. Accumsan maecenas potenti ultricies habitant morbi senectus netus. Hac habitasse platea dictumst lorem ipsum dolor sit.";
    infoContainer.append(infoPara);

    const infoParaFiller = document.createElement("p");
    infoParaFiller.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    infoContainer.append(infoParaFiller);

    const infoParaFiller2 = document.createElement("p");
    infoParaFiller2.textContent = "Lorem ipsum dolor sit amet consectetur adipiscing elit. Ex sapien vitae pellentesque sem placerat in id. Pretium tellus duis convallis tempus leo eu aenean. Urna tempor pulvinar vivamus fringilla lacus nec metus. Iaculis massa nisl malesuada lacinia integer nunc posuere. Semper vel class aptent taciti sociosqu ad litora. Conubia nostra inceptos himenaeos orci varius natoque penatibus. Dis parturient montes nascetur ridiculus mus donec rhoncus. Nulla molestie mattis scelerisque maximus eget fermentum odio. Purus est efficitur laoreet mauris pharetra vestibulum fusce.";
    infoContainer.append(infoParaFiller2);


}