import { getImages } from '../services/service';
import spinner from '../../images/spinner.svg'

window.addEventListener('DOMContentLoaded', () => {
    const sliderList = document.querySelector('.slider__list');
    const track = document.querySelector('.slider .container');
    let listItem = '';

    const createBasicMarkup = () => {
        for (let i = 0; i < 12; i++) {
            const element = document.createElement('li');
            element.classList.add('slider__li');
            element.innerHTML = `<img class="slider__img" src="${spinner}" alt="loading..."></img>`;
            sliderList.append(element);
        }
        listItem = document.querySelectorAll('.slider__li');
    }

    createBasicMarkup();

    getImages('drinks', 12)
    .then(drinks => drinks.forEach((drink, i) => {
        listItem[i].innerHTML = `<img class="slider__img" src="${drink.largeImageURL}" alt="${drink.tags}"></img>`;
    })).catch(error => {
        document.querySelector('.slider').remove();
        throw new Error(`Something went wrong: ${error}`);
    })

    track.addEventListener('click', () => moveTrack(event));


    const moveTrack = (event) => {
        const id = event.target.id;
        let offset = sliderList.style.right;

        if(offset[offset.length - 1] === '%') {
            offset = offset.slice(0, -1);
        }

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