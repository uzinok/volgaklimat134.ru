window.onload = function () {
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
        console.log("отступ окна: " + my_section.offsetTop + " высота скролла с высотой vh:" + h + " высота скролла " + window.pageYOffset || document.documentElement.scrollTop);
        if (!(my_section.offsetTop + my_section.offsetHeight/3 <= scrollTop || h <= my_section.offsetTop + my_section.offsetHeight/3)) {
            console.log("Виден блок: " + my_section.id);
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