window.addEventListener('DOMContentLoaded', () => {

    const days = document.querySelector('#days'),
    hours = document.querySelector('#hours'),
    minutes = document.querySelector('#minutes'),
    seconds = document.querySelector('#seconds');

    let d1 = new Date();
    let d = d1.getDate();
    let m = d1.getMonth();
    let y = d1.getFullYear();
    let h = d1.getHours();
    let min = d1.getMinutes();

    let endTime;

    const localTime = localStorage.getItem('time');
    
    if (!localTime) {
        endTime = `${y}/${m + 1}/${d + 2} ${h}:${min}`;
        localStorage.setItem('time', endTime)
    } else {
        endTime = localTime;
    }


    const getDays = (time) => {
        return Math.floor(time / (1000 * 60 * 60 * 24))
    }

    const getHours = (time) => {
        return Math.floor(time / (1000 * 60 * 60) % 24);
    };

    const getMinutes = (time) => {
        return Math.floor(time / (1000 * 60) % 60);
    }

    const getSeconds = (time) => {
        return Math.floor(time / 1000 % 60);
    }

    const getTimeToRemaining = () => {
        let time = Date.parse(endTime) - new Date();
        return time > 0 ? time : 0;
    }

    const setClock = (time) => {
        const addZero = (number) => {
            return number >= 0 && number <= 9 ? `0${number}` : number;
        }

        let sec = addZero(getSeconds(time));
        let min = addZero(getMinutes(time));
        let hour = addZero(getHours(time));
        let day = addZero(getDays(time));

        days.textContent = day;
        hours.textContent = hour;
        minutes.textContent = min;
        seconds.textContent = sec;
    }


    const getStart = () => {
        let newTime = 0;

        const clock = setInterval(() => {
            newTime = getTimeToRemaining();

            if (newTime <= 0) {
                stopCountDown();
            } else {
                
                if(localStorage.getItem('promotionEnded')) {
                    localStorage.setItem('promotionEnded', false);
                }

                setClock(newTime);
            }
        }, 1000);

        const stopCountDown = () => {
            clearInterval(clock);
            localStorage.setItem('promotionEnded', true);
        }
    }

    getStart();

})