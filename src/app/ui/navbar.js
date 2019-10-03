import {createElement,addElement,createList} from "./cook";

export function header() {
    const header = createElement("header",{"id":"header"});
    const title = createElement("div",{"class":"title"},"Gamma Restaurant");
    const nav = createElement("nav",{"id":"nav"});
    const icon = createElement("div",{"class":"icon"});
    const burgerIcon = createElement("div", {"class":"hamburger"});
    const menu = createElement("ul",{"class":"menu"});

    const contentMenu = [
        {"id":"home", "text" : "Home"},
        {"id":"menu", "text" : "Menu"},
        {"id":"contact", "text" : "Contact"}
    ];

    //nav
    addElement(burgerIcon,icon);
    createList(contentMenu,menu);

    //icon.addEventListener("click",(e)=>{
    //    e.target.parentNode.classList.toggle("active");
    //    menu.classList.toggle("menu__active")
    //})
    
    addElement(icon,nav);
    addElement(menu,nav);

    //all elements

    addElement(title,header);
    addElement(nav,header);

    return header;
}