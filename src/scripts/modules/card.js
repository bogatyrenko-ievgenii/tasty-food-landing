export default class Card {

    constructor(image, className, title) {
        this.image = image;
        this.className = className;
        this.title = title;
    }

    render = () => {
        return (
            `<div class="${this.className}">
                <div class="${this.className}_wrapper">
                <img src="${this.image}" class="${this.className}_img" alt="beautiful image">
                <div class="${this.className}_descr" data-product="${this.title}">
                    <h3>${this.title}</h3>
                    <div class="${this.className}_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nihil reprehenderit aspernatur minima unde hic facere. Unde nulla deleniti placeat, aliquid dolorum voluptatum quo.</div>
                    <button class="${this.className}_button" type="submit">Order</button>
                </div>
            </div>`
        )
    }
}