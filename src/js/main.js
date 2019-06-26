window.onload = function () {

    // проверка формы

    var
        form = document.querySelector("#contact_form"),
        bul = false;

    form.onsubmit = function () {

        if (document.querySelector(".js_error_message")) document.querySelector(".js_error_message").remove();

        if (document.querySelector("[name='name']").value) {
            bul = true;
        } else {
            error_message(document.querySelector("[name='name']"), "Вы не ввели свое имя!");
            return false;
        }

        if (document.querySelector("[name='tel']").value) {
            bul = true;
        } else {
            error_message(document.querySelector("[name='tel']"), "Вы не ввели номер телефона!");
            return false;
        }

        if (document.querySelector("[name='raion']").value != 0) {
            bul = true;
        } else {
            error_message(document.querySelector("[name='raion']"), "Выберете ваш район!");
            return false;
        }

        if (document.querySelector("[name='service']").value != 0) {
            bul = true;
        } else {
            error_message(document.querySelector("[name='service']"), "Выберете услугу!");
            return false;
        }

        // отправка данных
        if (bul == true) {

            // document.querySelector(".contact__submit").disabled = false;
            var xhr = new XMLHttpRequest();

            xhr.open('POST', './php/contact_form.php', true);

            xhr.send();

            xhr.onreadystatechange = function () {
                if (this.readyState != 4) return;

                // по окончании запроса доступны:
                // status, statusText
                // responseText, responseXML (при content-type: text/xml)

                if (this.status != 200) {
                    // обработать ошибку
                    document.querySelector(".contact__submit").innerHTML = 'ошибка: ' + (this.status ? this.statusText : 'запрос не удался');
                    return;
                }else {
                    alert(xhr.responseText);
                  }

                // получить результат из this.responseText или this.responseXML
                document.querySelector(".contact__submit").innerHTML = this.responseText;
            }

            document.querySelector(".contact__submit").innerHTML = 'Загружаю...'; // (2)
            document.querySelector(".contact__submit").disabled = true;
            
        }
        // \отправка данных
        return false;
    }

    block = document.querySelector(".for_textarea");

    document.querySelector("[name='review']").addEventListener("keyup", function () {

        var val_text = document.querySelector("[name='review']").value;

        val_text = val_text.replace(/ /g, "&nbsp;");
        val_text = val_text.replace(/<|>/g, "_");

        block.innerHTML = val_text
        var height_textarea = block.offsetHeight;
        document.querySelector("[name='review']").style.height = height_textarea + "px";

        if (document.querySelector(".js_error_message")) document.querySelector(".js_error_message").remove();
        document.querySelector(".contact__submit").disabled = false;

        if (/href=/.test(document.querySelector("[name='review']").value) || /www./.test(document.querySelector("[name='review']").value) || /http/.test(document.querySelector("[name='review']").value)) {
            error_message(document.querySelector("[name='review']"), "Вы пытаетесь отправить ссылку?");
            document.querySelector(".contact__submit").disabled = true;
        }

    })

    // вывод ошибки
    function error_message(err_el, error_text) {

        var coord = err_el.getBoundingClientRect();
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        var error_message = document.createElement("div");
        error_message.classList.add("js_error_message");
        error_message.innerText = error_text;
        error_message.style.top = (coord.y + scrollTop) - 40 + "px"
        error_message.style.left = coord.x + 5 + "px"
        document.querySelector("body").appendChild(error_message);
        err_el.focus();
    }
    // \вывод ошибки

    // \проверка формы

    // меню
    var
        menu = document.querySelector(".main-menu"),
        section_scroll = document.querySelectorAll(".section-js");

    for (var i = 0; i < section_scroll.length; i++) {

        var button_menu = document.createElement("a");
        menu.appendChild(button_menu);

        var
            my_attr = section_scroll[i].getAttribute("data-title"),
            my_id = section_scroll[i].getAttribute("id");

        button_menu.classList.add("main-menu__button");

        button_menu.setAttribute("data-title", my_attr);
        button_menu.setAttribute("href", "#" + my_id);

        button_menu.addEventListener("mouseover", function () {
            this.classList.add("menu-scroll");
        });

        button_menu.addEventListener("mouseout", function () {
            this.classList.remove("menu-scroll");
        });

        button_menu.addEventListener("click", function (e) {
            e.preventDefault();

            my_scroll(this);
        });

    }

    // подсветка ссылок навигации

    // section_scroll - все разделы на которые есть ссылки в навигации лендинга


    function my_light_link_nav(my_section) {

        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        var h_window = window.innerHeight ||
            document.documentElement.clientHeight ||
            document.body.clientHeight
        var h = scrollTop + h_window;
        if (!(my_section.offsetTop + my_section.offsetHeight / 3 <= scrollTop || h <= my_section.offsetTop + my_section.offsetHeight / 3)) {
            document.querySelector(".main-menu__button[href='#" + my_section.id + "']").classList.add("active");
        } else {
            document.querySelector(".main-menu__button[href='#" + my_section.id + "']").classList.remove("active");
        }

    }
    section_scroll.forEach(my_section => {
        my_light_link_nav(my_section);

        document.addEventListener("scroll", () => {
            my_light_link_nav(my_section);
        })
    });


    // my_light_link_nav(section_scroll[3]);

    // document.addEventListener("scroll", () => {
    //     my_light_link_nav(section_scroll[3]);
    // })





    // \подсветка ссылок навигации
    // \меню


    // функция скрола
    function my_scroll(button_menu) {
        var
            hash = button_menu.getAttribute("href"),
            height_scroll = window.pageYOffset,
            top_section = document.querySelector(hash).getBoundingClientRect().top,
            my_height_scroll = height_scroll + top_section;

        window.scrollTo({
            top: my_height_scroll,
            left: 0,
            behavior: 'smooth'
        });
    }

    // функция скрола


    // скролл по якорям
    var my_scroll_btn = document.querySelectorAll(".button-scroll");

    for (var i = 0; i < my_scroll_btn.length; i++) {

        my_scroll_btn[i].addEventListener("click", function (e) {
            e.preventDefault();

            my_scroll(this);
        });
    };
    // \скролл по якорям

    // замена надписи
    var time = new Date();

    var my_time = time.getHours();
    if (!(8 <= my_time <= 21)) {
        document.querySelectorAll(".js-text");
        for (i = 0; i < document.querySelectorAll(".js-text").length; i++) {
            document.querySelectorAll(".js-text")[i].innerHTML = "К сожаленью сейчас наш рабочий день завершен, мы работаем с 8:00 до 21:00. А сейчас вы можете заказать звонок в форме.";
        }
    }

    // \замена надписи


};