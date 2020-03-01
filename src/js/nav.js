document.addEventListener('DOMContentLoaded', function () {
    if (document.querySelector('.nav')) {
        let nav = document.querySelector('.nav');
        document.querySelector('.nav__button').addEventListener('click', function () {
            nav.classList.toggle('nav--open')
        })
    }
})