import {createElement,addElement,createList,removeElement} from "./cook";
import {header} from "./navbar";
import {home} from "./home";
import {menu} from "./menu";
import {contact} from "./contact";

export class UI {
    constructor(){
        this.content = document.querySelector('.content');
        this.navbar;
        this.homeMain;
        this.btnMenu;
        this.buttons;
        this.menu;
    }
    setup(){
        this.navbar = header();
        this.homeMain = home();
        addElement(this.navbar,this.content);
        addElement(this.homeMain,this.content);
    }
    renderContent(id){
        switch(id){
            case "menu":
                addElement(menu.renderMenu(),this.content);
                break;
            case "home":
                addElement(this.homeMain,this.content);
                break;
            case "contact":
                addElement(contact(),this.content);
                break;
        }
    }
    addInteractiviti(){
        this.btnMenu = document.querySelector(".icon");
        this.buttons = document.querySelectorAll('li');
        this.menu = document.querySelector(".menu");

        this.btnMenu.addEventListener("click",(e)=>{
            e.target.parentNode.classList.toggle("active");
            this.menu.classList.toggle("menu__active")
        })

        this.buttons.forEach( button => button.addEventListener("click",()=>{
            removeElement(this.content.lastChild);
            this.renderContent(button.id)
        }))
        console.log([...this.buttons][0].id);
    }
}