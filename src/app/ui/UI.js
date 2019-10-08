import {createElement,addElement,createList,removeElement} from "./cook";
import {header} from "./navbar";
import {home} from "./home";
import {menu} from "./menu";
import {contact} from "./contact";
import {connection} from "../connection/Connection";

export class UI {
    constructor(menuItems){
        this.content = document.querySelector('.content');//main content
        this.navbar;// navigation bar
        this.homeMain; // Home
        this.btnMenu; // Hamburger Button 
        this.buttons;// menu itens
        this.menu; // menu body
        this.menuDishes; // content of dishes (main menu) 
        this.menuItems = menuItems; // items of menu 
        this.contact;// contact page container
        this.categories; // categories menu (beef)
        this.containerDishes; // container of dishes;
        this.dishes;
        this.flag = true;
        this.flagDish = true;
        this.dish;
    }
    setup(){
        this.navbar = header();
        this.homeMain = home();
        this.menuDishes = menu.renderMenu(this.menuItems);
        this.contact = contact();
        addElement(this.navbar,this.content);
        addElement(this.homeMain,this.content);
    }
    renderContent(id){
        switch(id){
            case "menu":
                addElement(this.menuDishes,this.content);
                if(this.flag){this.renderDishes()}else{return};
                break;
            case "home":
                addElement(this.homeMain,this.content);
                break;
            case "contact":
                addElement(this.contact,this.content);
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
            this.renderContent(button.id);
            this.menu.classList.remove("menu__active");
            this.btnMenu.classList.remove("active");
        }));
    }
    renderDishes(){
       // console.log("hey dishes");
        this.categories = document.querySelectorAll('.category');
        //console.log(this.categories);

        this.categories.forEach(category => {
            category.addEventListener("click", async (e)=>{
              
              this.dishes = await connection.fetchDishes(e.target.textContent);
             // console.log(this.dishes);
              //menu.cleanMenu(this.menuDishes);
             // console.log("hey");
              removeElement(this.menuDishes);
              this.containerDishes = menu.renderDishes(this.dishes);
             // console.log(this.containerDishes);
              addElement(this.containerDishes,this.content);

              this.flag = false;

              this.containerDishes.querySelectorAll("button").
                    forEach( dish => { 
                        dish.addEventListener("click", async (e) =>{
                            if(this.flagDish){
                                this.flagDish = false;
                                let dish = await connection.fetchDish(e.target.id);
                                console.log(dish);

                                this.dish = menu.renderDish(dish);

                                addElement(this.dish,this.content);

                                this.dish.querySelector(".icon").addEventListener("click",()=> {
                                    removeElement(this.dish);
                                    this.flagDish = true;
                                })
                            }else{return}
                        })
                    });
            });
        }); 
    }
}