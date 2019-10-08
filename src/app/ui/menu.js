import {createElement,createMenu,removeElement,createMenuDishes,createDish} from "./cook";

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
    renderDish(dish){
        const parent = createElement("div",{"class":"showDish"});
        createDish(dish,parent);
        return parent;
    }

}

export let menu = new Menu();