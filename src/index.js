require('./main.scss');
import {importImages} from "./app/images";

import {UI} from "./app/ui/UI";
import {connection} from "./app/connection/Connection";

importImages();

//console.log(a);
async function renderApp(){
    
    const menuCategories = await connection.fetchMenu();
    const ui = new UI(menuCategories);
    ui.setup();
    ui.addInteractiviti();
    console.log(ui)

}
document.addEventListener("DOMContentLoaded", renderApp )
//const ui = new UI();
//ui.setup();
//ui.addInteractiviti();

