import orderItem from "./orderItem";
import getAmount from "./totalPrice";

export default class Popup {
    constructor(name) {
        this.name = name;
        this.parent = document.querySelector('body');
        this.popup = null;
        this.isIn = false;
        this.index = 0;
        this.note = localStorage.getItem('note');
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
        if(this.note === null) {
            this.note = '';
        }
        
        this.popup = document.createElement('div');
        this.popup.classList.add('popup');
        this.popup.innerHTML = `<div class="popup__wrapper">
                                <div class="popup__close">&times;</div>
                                <h3 class="popup__title">Your order</h3>
                                <ul class="popup__list">
                                </ul>
                                <textarea class="popup__textarea" name="alergen" placeholder="Here you can leave some info about allergens or sth else." rows="3">${this.note}</textarea>
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
        this.saveNote();
        this.parent.classList.remove('popup__active');
        this.parent.removeChild(this.popup);
        window.removeEventListener('keydown', this.handleEvent);
        this.showMessage();
        getAmount();
    };

    saveNote = () => {
        const textarea = document.querySelector('.popup__textarea');
        localStorage.setItem('note', textarea.value);
    }

    showMessage = () => {
        const message = document.createElement('div');
        message.classList.add('popup__message')
        message.textContent = 'To complete your order, please, click on pizza ;-)';

        this.parent.append(message)
        message.onclick = () => scrollTo({top: 0, behavior: "smooth"});
        setTimeout(() => {
            message.remove();
        }, 3000)

        let pos = 1;
        let multNum = 1.2;

        const animation = () => {
            pos*=multNum;
            message.style.top = pos + 'px';

            if (pos < 100) {
                requestAnimationFrame(animation)
            } else {
                pos -= 3;
                multNum = 1.0015;
                requestAnimationFrame(animation)
            }
        }

        requestAnimationFrame(animation);
        

    }
}
