
export default class orderItem {
    constructor (name, count = 1, index) {
        this.name = name;
        this.count = count;
        this.index = index
    }

    render = () => {
        this.saveInLocal();
        const item = document.createElement('li');
        item.classList.add('popup__item');
        item.innerHTML = `<span class="popup__item_name">${this.name}</span>
                        <div class="popup__operations">
                            <div id="decr" class="popup__item_action">-</div>
                            <div class="popup__item_amount">${this.count}</div>
                            <div id="incr" class="popup__item_action">+</div>
                            <div id="remove" class="popup__item_action">Remove</div>
                        <div>`;
        this.addListener(item);
        return item;
    }

    handleClick = (event, item) => {
        const id = event.target.id;
        const amount = document.querySelectorAll('.popup__item_amount')[this.index];

        console.log(this.index);

        if (id === 'decr') {
            if (this.count > 1) this.count -= 1;
            amount.innerHTML = this.count;
        } else if (id === 'incr') {
            if (this.count < 99) this.count += 1;
            amount.innerHTML = this.count;
        } else if (id === 'remove') {
            
            this.removeFromLocal();
            item.classList.add('popup__item_disabled');
            return;
        }

        this.saveInLocal();
    }

    addListener = (item) => {
        item.addEventListener('click', () => this.handleClick(event, item));
    }


    saveInLocal = () => {
        const shopping = JSON.parse(localStorage.getItem('shopping'));
        if(shopping === null) {
            const newShopping = {[this.name] : this.count}
            this.serializing(newShopping);
        } else {
            const newShopping = {...shopping, ...{[this.name] : this.count}}
            this.serializing(newShopping)
        }
    }

    removeFromLocal = () => {
        const shopping = JSON.parse(localStorage.getItem('shopping'));
        const newShopping = {...shopping};
        for (let key in shopping) {
            if (key === this.name) {
                delete newShopping[this.name]
            }
        }
        this.serializing(newShopping);
    }
    

    serializing = (obj) => {
        const serialized = JSON.stringify(obj);
        localStorage.setItem('shopping', serialized);
    }

}
