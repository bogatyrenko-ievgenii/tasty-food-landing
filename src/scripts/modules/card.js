export default class Card {

    constructor(title, image, className) {
        this.title = title;
        this.image = image;
        this.className = className;
    }

    render = () => {
        return (
            
            `<div class="${this.className}">
                <h2>${this.title}</h2>
                <img src="${this.image}" alt="food">
            </div>`
        )
    }
}