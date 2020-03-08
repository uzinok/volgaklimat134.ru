document.addEventListener('DOMContentLoaded', function () {

    if (document.querySelector('.nuber-calc')) {


        let arrNuberCalc = document.querySelectorAll('.nuber-calc');

        for(let i = 0; i < arrNuberCalc.length; i++) {
            mycalc(arrNuberCalc[i]);
        }

        function mycalc(nuberCalc) {
            let numberDown = nuberCalc.querySelector('.number-down'),
                numberUp = nuberCalc.querySelector('.number-up'),
                numberInp = nuberCalc.querySelector('[type="number"]'),
                min = numberInp.getAttribute('min') || 0,
                max = numberInp.getAttribute('max') || 100000,
                step = numberInp.getAttribute('step') || 1;

                numberUp.disabled = false;
                numberDown.disabled = false;

            numberDown.addEventListener('click', function (e) {

                e = e || event;
                e.preventDefault();

                numberInp.focus();

                valueInp = numberInp.value || 0;

                if (!(min >= valueInp - step)) {
                    numberInp.value = (valueInp * 10 - step * 10) / 10;
                } else {
                    numberInp.value = min;
                }
            })

            numberUp.addEventListener('click', function (e) {

                e = e || event;
                e.preventDefault();

                numberInp.focus();

                valueInp = numberInp.value || 0;

                if (!(max <= valueInp + step)) {
                    numberInp.value = (valueInp * 10 + step * 10) / 10;
                } else {
                    numberInp.value = max;
                }
            })
        }
    }
})