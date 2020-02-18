document.addEventListener('DOMContentLoaded', function () {
if (document.querySelector("[name='tel']")) {

    // при помощи метода выделения текста в полях ввода текста ставим курсор в нужное положение
    function setCursorPosition(pos, elem) {
        elem.focus();
        elem.setSelectionRange(pos, pos);
    }

    function mask(event) {
        // маску получу из placeholder
        var matrix = input.placeholder,
            i = 0,
            // все буквенные символы заменяем на пустую строку
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, "");

        // выравниваем количество символов в маске по введенному количеству символов
        if (def.length >= val.length) val = def;

        // тут сравниваем последний введенный символ и сравниваем с маской.
        this.value = matrix.replace(/./g, function (a) {
            // все знаки "_" заменяем на цыфры, другие сиволы уже отсеяли
            // далее заменяем все по маске
            // return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a;
            var b = "";

            if (/[_\d]/.test(a) && i < val.length) {
                b = val.charAt(i++);
            } else if (!(i >= val.length && a)) {
                b = a;
            }


            return b;
        });
        // если потеряли фокус
        if (event.type == "blur") {
            // если только два символа то чистим поле
            if (this.value.length == 2) this.value = ""
            // либо ставим курсор в нужное положение
        } else setCursorPosition(this.value.length, this)
    };

    var input = document.querySelector("[name='tel']");
    // при вводе номера 
    input.addEventListener("input", mask, false);
    // при событии фокуса
    input.addEventListener("focus", mask, false);
    // при потери фокуса
    input.addEventListener("blur", mask, false);
}

})