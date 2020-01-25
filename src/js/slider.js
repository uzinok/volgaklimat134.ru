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
    let sliderNext = document.createElement('button');
    sliderNext.classList.add('slider__next');
    sliderWrap.appendChild(sliderNext);
    
    let sliderPrew = document.createElement('button');
    sliderPrew.classList.add('slider__prew');
    sliderWrap.appendChild(sliderPrew);

    let pager = document.createElement('div');
    pager.classList.add('pager');
    sliderWrap.appendChild(pager);

    for (let i = 0; i < sliderItems.length; i++) {
        let pagerButton = document.createElement('button');
        pager.classList.add('pager-button');
        pager.appendChild(pagerButton);
    }
}