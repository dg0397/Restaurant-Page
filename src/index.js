require('./main.scss');
import {importImages} from "./app/images";

import {UI} from "./app/ui/UI";
import {Connection} from "./app/connection/Connection";

importImages();

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

