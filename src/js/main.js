window.onload = function () {
    var 
        menu = document.querySelector(".main-menu"),
        section_scroll = document.querySelectorAll(".section-js");

        for(var i = 0; i < section_scroll.length; i++) {

            var button_menu = document.createElement("a");
            menu.appendChild(button_menu);

            var
            my_attr = section_scroll[i].getAttribute("data-title"),
            my_id = section_scroll[i].getAttribute("id");

            button_menu.classList.add("main-menu__button");

            button_menu.setAttribute("data-title", my_attr);
            button_menu.setAttribute("href", "#" + my_id);
            

            button_menu.addEventListener("mouseover", function() {
                this.classList.add("button-scroll");
            });

            button_menu.addEventListener("mouseout", function() {
                this.classList.remove("button-scroll");
            });

            button_menu.addEventListener("click", function (e) {
                e.preventDefault();

                var
                hash = this.getAttribute("href"),
                height_scroll = window.pageYOffset,
                top_section = document.querySelector(hash).getBoundingClientRect().top,
                my_height_scroll = height_scroll + top_section;
                
                window.scrollTo({
                    top: my_height_scroll,
                    left: 0,
                    behavior: 'smooth'
                  });
            });
            
            

            
        }


};
