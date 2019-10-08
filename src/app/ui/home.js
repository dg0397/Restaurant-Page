import {createElement,addElement} from "./cook";

export function home() {
    const containerHome = createElement("div",{"class":"containerHome"});
    const section = createElement("section",{"class":"main"});
    const containerImg = createElement("div",{"class":"container__img"});
    const img = createElement("img",{"src":"./static/images/home.png","alt":"home picture"});
    const header1 = createElement('h1',"","Restaurant App");
    const p = createElement("p", "", "Check our menu and select what you want");
    const footer = createElement("footer");
    const footerP = createElement("p",{"class":"attribution"});
    footerP.innerHTML = `Challenge by <a href="https://www.theodinproject.com/courses/javascript/lessons/restaurant-page" target="_blank">The Odin Project</a>. Coded by <a href="https://github.com/dg0397" target="_blank">DG0397</a>.`;

    addElement(img,containerImg);
    addElement(containerImg,section);
    addElement(header1,section);
    addElement(p,section);

    addElement(footerP,footer);

    addElement(section,containerHome);
    addElement(footer,containerHome);

    return containerHome;
}