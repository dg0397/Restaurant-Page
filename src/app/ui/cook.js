export function createElement(target,attributes = "",text = "") {
    const el = document.createElement(target);
    if(text){
        el.textContent = text;
    }
    if(attributes){
        for (const key in attributes) {
            el.setAttribute(key, attributes[key]);
        }
    }
    return el;
} 

export function addElement(target,parent) {
    parent.appendChild(target);
}

export function removeElement(target){
    target.parentNode.removeChild(target);
}

export function createList(content,parent){

    for(let obj of content){
        let li = createElement("li",{"id": obj.id});
        let a = createElement("a",{"href":"#"},obj.text);

        addElement(a,li);
        addElement(li,parent);
    
    }

}

export function createContactItems(content,parent){
    for(let obj of content){
        let contactInfo = createElement("div",{"class":"contact__info"});
        let containerIcon = createElement("div",{"class":"container__icon"});
        let img = createElement("img",{"src":obj.src,"alt":obj.alt});
        let p = createElement("p","",obj.text);

        addElement(img,containerIcon);
        
        addElement(containerIcon,contactInfo);
        addElement(p,contactInfo);

        addElement(contactInfo,parent);
    }
}

export function createSocialMediaIcons(content,parent){
    for(let obj of content){
        let a = createElement("a",{"href":"#","aria-label":obj.label});
        let i = createElement("i",{"class":`fab ${obj.class}`});

        addElement(i,a);

        addElement(a,parent);
    }
}
export function createMenu(content,parent){
    for(let obj of content){
        let item = createElement("div", {"class":"category"},obj.strCategory);
        addElement(item,parent);
    }
}

export function createMenuDishes(content,parent){
    for(let obj of content){
        let containerDish = createElement("div",{"class":"dish"});
        let containerImg = createElement("div",{"class":"container__img"});
        let img = createElement("img",{"src":obj.strMealThumb});
        let name = createElement("h3",{"class":"name"},obj.strMeal);
        let btn = createElement("button",{"id":obj.idMeal,"class":"button"},"Select");
        
        //btn.addEventListener("click",(e)=>{
        //    console.log(e.target.id);
        //})

        addElement(img,containerImg);

        
        addElement(containerImg,containerDish);
        addElement(name,containerDish);
        addElement(btn,containerDish);

        addElement(containerDish,parent);
    }
}

export function createDish(content,parent){
    
    let containerDish = createElement("div",{"class":"container__dish"})
    let containerImg = createElement("div",{"class":"container__img"});
    let img = createElement("img",{"src":content.strMealThumb});
    let name = createElement("h3",{"class":"name"},content.strMeal);
    let p = createElement("p","","Ingredients:");
    let list = createElement("ul",{"class":"ingredients"});
    
    let i = 1 
    while(content[`strIngredient${i}`]){
        let li = createElement("li",{"class":"ingredient"},content[`strIngredient${i}`]);
        addElement(li,list);
        i++;
    }

    addElement(img,containerImg);

    addElement(containerImg,containerDish);
    addElement(name,containerDish);
    addElement(p,containerDish);
    addElement(list,containerDish);

    addElement(containerDish,parent);
    
}
