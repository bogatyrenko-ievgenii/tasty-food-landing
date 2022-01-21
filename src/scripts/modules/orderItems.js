export default class orderItems {
    constructor (name, count = 1, index = 0) {
        this.name = name;
        this.count = count;
        this.index = index
    }

    render = () => {
        const item = document.createElement('li');
        item.classList.add('popup__item');
        item.innerHTML = `<span class="popup__item_name">${this.name}</span>
                        <div class="popup__operations">
                            <div id="decr" class="popup__item_action">-</div>
                            <div class="popup__item_amount">${this.count}</div>
                            <div id="incr" class="popup__item_action">+</div>
                            <div id="remove" class="popup__item_action">Remove</div>
                        <div>`;
        item.addEventListener('click', () => this.handleClick(event, item));
        this.saveInLocalStorge({name: this.name, count: this.count});
        return item;
    }

    handleClick = (event, item) => {
        const id = event.target.id;
        const amount = document.querySelectorAll('.popup__item_amount')[this.index];

        if (id === 'decr') {
            if (this.count > 1) this.count -= 1;
            amount.innerHTML = this.count;
        } else if (id === 'incr') {
            if (this.count < 99) this.count += 1;
            amount.innerHTML = this.count;
        } else if (id === 'remove') {
            item.remove();
        }
    }

    saveInLocalStorge = (item) => {
        const arr = JSON.parse(localStorage.getItem('shopping'));
        if (!arr) {
            const newArr = [];
            newArr.push(item);
            this.serializing(newArr);
        } else {
            let isIn = arr.some(arrItem => {
                return arrItem.name === item.name;
            });
            if (!isIn) {
                arr.push(item);
                this.serializing(arr);
            }
        }
    }

    serializing = (arr) => {
        const serialized = JSON.stringify(arr);
        localStorage.setItem('shopping', serialized);
    }

}