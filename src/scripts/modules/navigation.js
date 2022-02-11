window.addEventListener('DOMContentLoaded', () => {

    const nav = document.querySelector('#nav');

    nav.addEventListener('click', (event) => {
        let data = event.target.dataset.scroll;
        const elemToScroll = document.querySelector(data);

        scrollTo(elemToScroll);
    })

    function scrollTo (element) {
        scroll({
            left: 0,
            top: element.offsetTop,
            behavior: 'smooth',
        })
    }
})

