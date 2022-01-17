export default class Card {

    constructor(image, className, title) {
        this.image = image;
        this.className = className;
        this.title = title;
    }

    render = () => {
        return (
            `<div class="${this.className}" data-product="${this.title}">
                <img src="${this.image}" class="offer__card_img" alt="beautiful image">
                <div class="offer__card_descr">
                    <h3>${this.title}</h3>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nihil reprehenderit aspernatur minima unde hic facere. Unde nulla deleniti placeat, aliquid dolorum voluptatum quo, magnam aut distinctio quod repellendus expedita.</div>
                    <button class="offer__card_descr_button" type="submit">Order</button>
                </div>
            </div>`
        )
    }
}