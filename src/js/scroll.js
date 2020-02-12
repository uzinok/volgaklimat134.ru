document.addEventListener('DOMContentLoaded', function () {

    var hiddenElement = document.querySelector(".contact");

    var btns = document.querySelectorAll('.scrollJs');

    function handleButtonClick() {
        hiddenElement.scrollIntoView({
            block: "start",
            behavior: "smooth"
        });
    }

    for (let i = 0; i < btns.length; i++){
        btns[i].addEventListener('click', handleButtonClick);
    }
})