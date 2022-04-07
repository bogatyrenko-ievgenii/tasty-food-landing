export default class Card {

    constructor(image, className, title, price) {
        this.image = image;
        this.className = className;
        this.title = title;
        this.price = price;
    }

    render = () => {
        return (
            `<div class="${this.className}">
                <div class="${this.className}_wrapper">
                <img src="${this.image}" class="${this.className}_img" alt="beautiful image">
                <div class="${this.className}_descr" data-product="${this.title}">
                    <h3>${this.title}</h3>
                    <div class="${this.className}_text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                    <h2 class="${this.className}_price">${this.price} UAH</h2>
                    <button class="${this.className}_button" type="submit">Order</button>
                </div>
            </div>`
        )
    }
}