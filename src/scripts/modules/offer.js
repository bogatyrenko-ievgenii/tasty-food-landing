import getImages from '../services/service';

import Card from './card';

const foodArr = ['pizza', 'burger', 'sushi'];

window.addEventListener('DOMContentLoaded', () => {
    const food = document.querySelector('.offer__food');
    const drinks = document.querySelector('.offer__drinks');

    console.log(getImages('pizza').length)

    
})
