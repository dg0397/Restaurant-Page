require('./main.scss');
import {sayHello} from './app/prueba.js';
import {importImages} from "./app/images";

import {UI} from "./app/ui/UI";

importImages();
//console.log("hello js");
//let follder = document.querySelector('.content');
//follder.appendChild(header());
//sayHello();
//console.log(follder);
//console.log("hello 555");
//let navbar = header();
//console.log(navbar);

const ui = new UI();
ui.setup();
ui.addInteractiviti();