document.addEventListener('DOMContentLoaded', function () {
    if (document.querySelector('.nav')) {
        let nav = document.querySelector('.nav');

        let navButton = document.createElement('button');
        navButton.classList.add('nav__button');
        navButton.setAttribute('aria-label', 'Открыть меню');
        nav.appendChild(navButton);


        if (document.querySelector('.nav')) {
            navButton.addEventListener('click', function () {
                nav.classList.toggle('nav--open')
            })
        }
    }
})