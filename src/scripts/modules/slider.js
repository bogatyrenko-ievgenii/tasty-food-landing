import { getImages } from '../services/service'

window.addEventListener('DOMContentLoaded', () => {
    const sliderList = document.querySelector('.slider__list');
    const track = document.querySelector('.slider .container');

    getImages('drinks', 12)
    .then(drinks => drinks.forEach(drink => {

        const element = document.createElement('li');
        element.classList.add('slider__li');
        element.innerHTML = `<img class="slider__img" src="${drink.largeImageURL}" alt="${drink.tags}"></img>`;
        sliderList.append(element);

    }))

    track.addEventListener('click', () => moveTrack(event));


    const moveTrack = (event) => {
        const id = event.target.id;
        let offset = sliderList.style.right;

        if(offset[offset.length - 1] === '%') {
            offset = offset.slice(0, -1);
        }

        console.log(sliderList.childElementCount);


        if(id === 'prev') {
            if(offset > 0) {
                sliderList.style.right = `${+offset - 100}%`;
            } else {
                sliderList.style.right = `${sliderList.childElementCount * 100 -100}%`;
            }
        }

        if(id === 'next') {
            if(offset < sliderList.childElementCount * 100 - 100) {
                sliderList.style.right = `${+offset + 100}%`;
            } else {
                sliderList.style.right = '0%';
            }
        }

    }
});