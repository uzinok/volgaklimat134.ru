document.addEventListener('DOMContentLoaded', function () {
    if (document.querySelector('.btn--calc')) {

        document.querySelector('.btn--calc').disabled = false;
        document.querySelector('.btn--calc').innerHTML = "расчитать мощьность";

        document.querySelector('.btn--calc').addEventListener('click', function (e) {
            e = e || event;
            e.preventDefault();
            calculate();
        })
    }
})

function calculate() {

    var S = document.getElementsByName("ploshad")[0].value;

    var H = document.getElementsByName("visota")[0].value;

    var insolation = document.getElementsByName("insol")[0].value;

    var personsAmount = document.getElementsByName("lyudi")[0].value;

    var computersAmount = document.getElementsByName("kompi")[0].value;

    var tvs = document.getElementsByName("teliki")[0].value;

    var power = (S * H * insolation / 1000) + (personsAmount * 0.13) + (computersAmount * 0.3) + (tvs * 0.2);



    document.getElementsByName("moshnost")[0].value = power;

}