
import { getImages } from '../services/service';
import Card from './card';
import Popup from './popup';

const foodCategories = ['pizza', 'burger', 'sushi'];
const foodModificator = ['roasted', 'fried', 'fresh', 'home made'];
const foodPrice = [190, 200, 220, 250];
let totalPrice = 0;

window.addEventListener('DOMContentLoaded', () => {
    const food = document.querySelectorAll('.offer__food.wrapper');

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

    const getIncremNum = counter(1);
    renderCards();

    function renderCards () {
        foodCategories.forEach((item, i) => {
            getImages(item).then(hits =>
                hits.forEach((hit, k) => {
                    const card = new Card(
                        hit.largeImageURL,
                        'offer__card',
                        `${item} ${foodModificator[getIncremNum()]}`,
                        foodPrice[k],
                    ).render();
                    food[i].insertAdjacentHTML('beforeend', card);
                    
                }),
            ).catch(() => {
                throw new Error;
            });
        });
    }


    const onOrderBtn = (event, name) => {
        event.preventDefault();
        new Popup(name).render();
    };

    offer.addEventListener('click', event => {
        const order = document.querySelectorAll('.offer__card_button');
        let target = event.target;
        let parent = target.parentElement;

        document.querySelectorAll('.offer__card').forEach((card, i) => {

            if (!target.classList.contains('offer__card_active') && target.nodeName === 'IMG') {
                card.firstElementChild.classList.remove('offer__card_active');
                parent.classList.add('offer__card_active');
            } else if (target === order[i]) {
                onOrderBtn(event, parent.dataset.product);
            } else {
                card.firstElementChild.classList.remove('offer__card_active');
            }
        });
    });
});
