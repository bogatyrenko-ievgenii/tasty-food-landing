window.addEventListener('DOMContentLoaded', () => {

    const tabs = document.querySelectorAll('.tabs__header-item');
    const content = document.querySelectorAll('.tabs__content');
    const tabsParent = document.querySelector('.tabs__header-items');


    const removeActivClass = () => {

        tabs.forEach(element => {
            element.classList.remove('tabs__header-item-active')
        });

        content.forEach(element => {
            element.classList.remove('tabs__content-active')
        });
    }

    const getActiveItem = (trgt) => {
        let num;
        tabs.forEach((element, i) => {
            if (element === trgt) {
                num = i;
                return;
            }
        })
        return num;
    }

    const addActiveClass = (activeElem = 0) => {

        tabs.forEach((element, i) => {
            if (i === activeElem) {
                element.classList.add('tabs__header-item-active')
            }
        });

        content.forEach((element, i) => {
            if (i === activeElem) {
                element.classList.add('tabs__content-active')
            }
        });
    }

    tabsParent.addEventListener('click', (event) => {
        let trgt = event.target;
        let activeElem = getActiveItem(trgt);
        removeActivClass();
        addActiveClass(activeElem);
    });


})