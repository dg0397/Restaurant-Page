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