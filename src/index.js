require('./main.scss');
import {sayHello} from './app/prueba.js';
import {importImages} from "./app/images";

import {UI} from "./app/ui/UI";
import {Connection} from "./app/connection/Connection";

importImages();
//console.log("hello js");
//let follder = document.querySelector('.content');
//follder.appendChild(header());
//sayHello();
//console.log(follder);
//console.log("hello 555");
//let navbar = header();
//console.log(navbar);

const network = new Connection();
network.fetchMenu();
//console.log(a);
async function renderApp(){
    const menuCategories = await network.fetchMenu();
    const ui = new UI(menuCategories);
    ui.setup();
    ui.addInteractiviti();
    console.log(ui)

}
document.addEventListener("DOMContentLoaded", renderApp )
//const ui = new UI();
//ui.setup();
//ui.addInteractiviti();

