import { getImages } from '../services/service';
import Card from './card';
import Popup from './popup';

const foodArr = ['pizza', 'burger', 'sushi'];
const foodModificator = ['roasted', 'fried', 'fresh', 'home made'];

window.addEventListener('DOMContentLoaded', () => {
  const food = document.querySelectorAll('.offer__food.wrapper');
  const drinks = document.querySelector('.offer__drinks');
  const offer = document.querySelector('.offer');

  const counter = num2 => {
    let num1 = -1;
    return () => {
      if (num1 === 3) {
        num1 = -1;
      }
      return (num1 += num2);
    };
  };

  const n = counter(1);

  foodArr.forEach((item, i) => {
    getImages(item).then(hits =>
      hits.forEach(hit => {
        const card = new Card(
          hit.largeImageURL,
          'offer__card',
          `${item} ${foodModificator[n()]}`,
        ).render();
        food[i].insertAdjacentHTML('beforeend', card);
      }),
    );
  });

  const onOrderBtn = (event, name) => {
    event.preventDefault();
    new Popup(name).render();
  };

  offer.addEventListener('click', event => {
    const order = document.querySelectorAll('.offer__card_descr_button');
    let target = event.target;
    let parent = target.parentElement;

    document.querySelectorAll('.offer__card').forEach((card, i) => {
      if (
        card === parent &&
        !target.classList.contains('offer__card-active') &&
        target.nodeName === 'IMG'
      ) {
        target.classList.add('offer__card-active');
        // order.forEach().addEventListener('click', () => onOrderBtn(event, parent.dataset));
      } else if (target === order[i]) {
        onOrderBtn(event, parent.dataset.product);
      } else {
        card.firstElementChild.classList.remove('offer__card-active');
      }
    });
  });
});
