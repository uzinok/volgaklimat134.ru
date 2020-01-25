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

    // кнопки вперд/назад

    let sliderNext = createButton('slider__next', sliderWrap, 'следующий слайд');

    let sliderPrew = createButton('slider__prew', sliderWrap, 'предидущий слайд');

    // пагер
    let pager = document.createElement('div');
    pager.classList.add('pager');
    sliderWrap.appendChild(pager);

    // кнопки пагера
    for (let i = 0; i < sliderItems.length; i++) {
        let pagerButton = createButton('pager-button', pager, 'показать слайд номер: ' + ( i + 1), i);
        sliderItems[i].setAttribute('data-slide', i);
    }

    function createButton(buttonClass, buttonParent, ariaText, i) {
        let elem = document.createElement('button');
        elem.classList.add(buttonClass);
        elem.setAttribute('aria-label', ariaText);
        if(i != undefined)elem.setAttribute('data-slide', i);
        buttonParent.appendChild(elem);
        return elem;
    }
}