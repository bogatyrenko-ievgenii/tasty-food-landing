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
                                    <li class="popup__item">
                                        <span class="popup__item_name">${this.name}</span>
                                        <div class="popup__count">
                                            <button type="button" id="decr" class="popup__item_btn popup__item_btn-count">-</button>
                                            <span class="popup__item_value">0</span>
                                            <button type="button" id="incr" class="popup__item_btn popup__item_btn-count">+</button>
                                            <button type="button" id="remove" class="popup__item_btn">Remove</button>
                                        <div>
                                    </li>
                                </ul>
                            </div>`;
    
    this.parent.append(this.popup);
    this.parent.classList.add('popup__active');
    this.addListeners();
  };

  addListeners = () => {
    document.querySelector('.popup')
    .addEventListener('click', this.onCloseModal);

    window.addEventListener('keydown', this.onCloseModal);
  }

  onCloseModal = (event) => {
      const clazzes = event.target.classList;
      const key = event.key;
      if(clazzes.contains('popup__close') || clazzes.contains('popup') || key === 'Escape') {
        this.closeModal();
      }
  }

    closeModal= () => {
        this.parent.classList.remove('popup__active');
        this.parent.removeChild(this.popup);
        window.removeEventListener('keydown', this.onCloseModal);
        
    }
}
