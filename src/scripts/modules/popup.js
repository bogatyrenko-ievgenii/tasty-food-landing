import orderItem from "./orderItem";

export default class Popup {
    constructor(name) {
        this.name = name;
        this.parent = document.querySelector('body');
        this.popup = null;
        this.isIn = false;
        this.index = 0;
    }

    render = () => {
        this.createPopup();

        const list = document.querySelector('.popup__list');

        const items = this.readFromLocal();
        for (let item in items) {
            
            if (item === this.name) {
                this.isIn = true;
            }
            list.append(new orderItem(item, items[item], this.index).render());
            this.index += 1;
        }

        if (!this.isIn) {
            const item = new orderItem(this.name, 1, list.childElementCount).render();
            list.append(item);
        }

    
        this.parent.classList.add('popup__active');
        this.addListeners();
    };

    createPopup = () => {
        this.popup = document.createElement('div');
        this.popup.classList.add('popup');
        this.popup.innerHTML = `<div class="popup__wrapper">
                                <div class="popup__close">&times;</div>
                                <h3 class="popup__title">Your order</h3>
                                <ul class="popup__list">
                                </ul>
                            </div>`;
        this.parent.append(this.popup);
    }

    readFromLocal = () => {
        return JSON.parse(localStorage.getItem('shopping'));
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
