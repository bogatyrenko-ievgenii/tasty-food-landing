export default class Popup {
  constructor(name) {
    this.name = name;
    this.parent = document.querySelector('body');
  }

  render = () => {
    const popup = document.createElement('div');
    popup.classList.add('popup');
    popup.innerHTML = `<div class="popup__wrapper">
                        <h3 class="popup__title">Your order</h3>
                        <ul class="popup__list">
                            <li class="popup__item">
                                <span class="popup__item_name">${this.name}</span>
                                <button type="button" id="decr" class="popup__item_btn">-</button>
                                <span class="popup__item_value">0</span>
                                <button type="button" id="incr" class="popup__item_btn">+</button>
                            </li>
                        </ul>
                    </div>
                `;
    
    this.parent.append(popup);
  };
}
