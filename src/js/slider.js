function slider(sliderList) {

    // родитель слайдера
    let parentSlider = sliderList.parentNode,
        sliderItems = sliderList.querySelectorAll('li');

    // враппер всего слайдера
    let sliderWrap = document.createElement('div');
    sliderWrap.classList.add('slider__wrap');

    parentSlider.insertBefore(sliderWrap, sliderList);

    // враппер слайдера
    let sliderWrapList = document.createElement('div');
    sliderWrapList.classList.add('slider__wrap-list');

    sliderWrap.appendChild(sliderWrapList);
    sliderWrapList.appendChild(sliderList);

    function createElements() { // кнопки вперд/назад

        let sliderNext = createButton('slider__next', sliderWrap, 'следующий слайд');

        let sliderPrew = createButton('slider__prew', sliderWrap, 'предидущий слайд');

        // пагер
        let pager = document.createElement('div');
        pager.classList.add('pager');
        sliderWrap.appendChild(pager);

        // кнопки пагера
        for (let i = 0; i < sliderItems.length; i++) {
            let pagerButton = createButton('pager-button', pager, 'показать слайд номер: ' + (i + 1), i);
            sliderItems[i].setAttribute('data-slide', i);
        }

        function createButton(buttonClass, buttonParent, ariaText, i) {
            let elem = document.createElement('button');
            elem.classList.add(buttonClass);
            elem.setAttribute('aria-label', ariaText);
            if (i != undefined) elem.setAttribute('data-slide', i);
            buttonParent.appendChild(elem);
            return elem;
        }
    }

    function removeElements() {
        parentSlider.querySelector('.slider__next').remove();
        parentSlider.querySelector('.slider__prew').remove();
        parentSlider.querySelector('.pager').remove();
    }

    checkCreateElements()

    // resize
    window.addEventListener('resize', function () {
        windowResize();
    })

    // безопасный resize
    let check;
    function windowResize() {
        clearTimeout(check);

        check = setTimeout(function () {

            // фенкции для resize
            checkCreateElements();
        }, 100)
    }

    // проверка наличия элементов
    function checkCreateElements() {

        let widthWindow = window.innerWidth;

        if (widthWindow >= 985 && sliderItems.length == 3) {
            if (parentSlider.querySelector('.slider__next')) {
                console.log('hi!');
                removeElements();
            }
        } else {
            if (!(parentSlider.querySelector('.slider__next'))) {
                createElements();
            }
        }

        if (widthWindow >= 985) {
            sliderList.style.width = 300 * sliderItems.length + 'px';
            sliderWrapList.style.width = 300 * 3 + 'px';
        } else if (widthWindow >= 768){
            sliderList.style.width = 300 * sliderItems.length + 'px';
            sliderWrapList.style.width = 300 * 2 + 'px';
        } else {
            sliderList.style.width = 240 * sliderItems.length + 'px';
            sliderWrapList.style.width = 240 + 'px';
        }

    }
}