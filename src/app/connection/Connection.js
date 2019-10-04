export class Connection {
    constructor(){
        this.url = "https://www.themealdb.com/api/json/v1/1/";
    }
    async fetchMenu(){
       let url = this.url + "categories.php";
        let menu = [];
        
        const itens = await fetch(url)
                        .then(data => data.json());
        menu.push(...itens.categories.slice(0,7));
        return menu;
    }
     async fetchDishes(id){
        let url = `${this.url}filter.php?c=${id}`;
        let dishes = [];
        
        const plates = await fetch(url)
                               .then(data => data.json());
        dishes.push(...plates.meals.slice(0,(plates.meals.length/2)))
        return  dishes; 
    }
}

export let connection = new Connection();
