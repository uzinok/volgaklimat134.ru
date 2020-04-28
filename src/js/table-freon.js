document.addEventListener('DOMContentLoaded', function () {
    let elements = document.querySelectorAll('.freon__info');

    for (let i = 0; i < elements.length; i++) {
        let elem = elements[i],
            parenElem = elem.parentNode;


        parenElem.classList.add('hover');

        parenElem.addEventListener('click', function (e) {

            let popupParent = document.createElement('div'),
                popup = document.createElement('div'),
                closePopup = document.createElement('button');

            closePopup.setAttribute('aria-label', 'закрыть окно');
            closePopup.classList.add('close-popup');

            popupParent.classList.add('popup-parent');
            popup.classList.add('popup');

            popup.innerHTML = this.querySelector('.freon__info').innerHTML;

            document.body.appendChild(popupParent)
            popupParent.appendChild(popup);
            popup.appendChild(closePopup);

            closePopup.addEventListener('click', function () {
                popupParent.remove();
            })

            document.addEventListener("keydown", function (e) {
                e = e || event
                if (e.keyCode == 27) {
                    popupParent.remove();
                }
            });

        })
    }

})