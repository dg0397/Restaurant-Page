import {createElement,addElement,createList} from "./cook";

class Menu{
    constructor(){
        this.containerMenu = createElement("div",{"class":"containerMenu"});
    }

    renderMenu(){
        return this.containerMenu;
    }

}

export let menu = new Menu();