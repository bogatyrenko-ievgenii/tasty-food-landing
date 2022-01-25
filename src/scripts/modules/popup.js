import orderItems from "./orderItems";

export default class Popup {
    constructor(name) {
        this.name = name;
        this.parent = document.querySelector('body');
        this.popup = null;
    }

    render = () => {
        this.popup = document.createElement('div');
        this.popup.classList.add('popup');
        this.popup.innerHTML = `<div class="popup__wrapper">
                                <div class="popup__close">&times;</div>
                                <h3 class="popup__title">Your order</h3>
                                <ul class="popup__list">
                                </ul>
                            </div>`;
        this.parent.append(this.popup);
        const list = document.querySelector('.popup__list');

        this.renderItemsFromLocalStorage(list);

        const item = new orderItems(this.name).render();
        list.append(item);
        this.parent.classList.add('popup__active');
        this.addListeners();
    };

    renderItemsFromLocalStorage = (list) => {
        const shoppingList = JSON.parse(localStorage.getItem('shopping'));
        if (shoppingList) {
            shoppingList.forEach((item, i) => {
                list.append(new orderItems(item.name, item.count, i).render());
            });
        }

    }

    addListeners = () => {
        document
            .querySelector('.popup')
            .addEventListener('click', this.handleEvent);

        window.addEventListener('keydown', this.handleEvent);
    };



    handleEvent = event => {
        const target = event.target;
        const classes = target.classList;
        if (
            classes.contains('popup__close') ||
            classes.contains('popup') ||
            event.key === 'Escape'
        ) {
            this.closeModal();
        }       
    };

    closeModal = () => {
        this.parent.classList.remove('popup__active');
        this.parent.removeChild(this.popup);
        window.removeEventListener('keydown', this.handleEvent);
    };
}
