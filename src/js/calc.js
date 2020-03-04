document.addEventListener('DOMContentLoaded', function () {
    if(document.querySelector('.btn--calc')) {
        document.querySelector('.btn--calc').addEventListener('click', function(e) {
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

    var power = (S * H * insolation/1000) + (personsAmount * 0.13) + (computersAmount * 0.3) + (tvs * 0.2);


    if(check(["ploshad", "visota", "insol", "lyudi", "kompi", "teliki"])){
        document.getElementsByName("moshnost")[0].value = power;
          document.getElementById("err_calc").innerHTML = "";
          document.getElementById("err_calc").classList.remove('warning');
    }
}

function check(elems){
    var f = true;
    for(var i = 0; i < elems.length; i++){
        if(document.getElementsByName(elems[i])[0].value == false){
            document.getElementById("err_calc").innerHTML = "<span class=\"red\">Пожалуйста, заполните все поля</span>";
            document.getElementById("err_calc").classList.add('warning');
            f = false;
            break;
        }
    }
    return f;
}