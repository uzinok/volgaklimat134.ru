document.addEventListener('DOMContentLoaded', function() {
    // удаляем сласс noJs
    let noJs = document.querySelectorAll('.noJs');
    
    for (let i = 0; i < noJs.length; i++) {
        noJs[i].classList.remove('noJs');
    }
    
    // вызываем сдайдер 
    let sliders = document.querySelectorAll('.slider');
    
    for (let i = 0; i < sliders.length; i++) {
        slider(sliders[i]);
    }
})
