import {createElement,addElement,createContactItems,createSocialMediaIcons} from "./cook";

export function contact(){
    const containerContact = createElement("div",{"class":"containerContact"});
    const containerContacInfo = createElement("div",{"class":"container__contact__info"});
    const contianerSocialMedia = createElement("div",{"class":"social__media__icons"});

    const info = [
        {src: "./static/images/icon-location.svg",alt: "icon location",text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"},
        {src: "./static/images/icon-phone.svg",alt: "icon phone",text: "+1-543-123-4567"},
        {src: "./static/images/icon-email.svg",alt: "icon email",text: "example@restaurantApp.com"}
    ];

    createContactItems(info,containerContacInfo);

    const media = [
        {label :"Follow us on Facebook", class : "fa-facebook-f"},
        {label :"Follow us on Twitter" , class : "fa-twitter"},
        {label :"Follow us on Instagram" , class :"fa-instagram"}
    ];

    createSocialMediaIcons(media,contianerSocialMedia);

    addElement(containerContacInfo,containerContact);
    addElement(contianerSocialMedia,containerContact);

    return containerContact;

}