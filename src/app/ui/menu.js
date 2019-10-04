import {createElement,addElement,createList,createMenu,removeElement,createMenuDishes} from "./cook";

class Menu{
    constructor(){
        this.containerMenu = createElement("div",{"class":"containerMenu"});
    }

    renderMenu(menu){
        createMenu(menu,this.containerMenu);
        return this.containerMenu;
    }

    cleanMenu(parent){
        while(parent.lastChild){
            removeElement(parent.lastChild);
        };
    }

    renderDishes(dishes){
        const parent = createElement("div",{"class":"dishes"});
        createMenuDishes(dishes,parent);

        return parent;
    }

}

export let menu = new Menu();