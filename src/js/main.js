window.onload = function () {
    
    document.addEventListener("touchstart", function() {
        var clear_class = document.querySelectorAll(".hover");
        for(var i = 0; i < clear_class.length; i++) {
            clear_class[i].classList.remove("hover");
        }

    });

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

            button_menu.addEventListener("touchstart", function(e) {
                e.preventDefault();

                console.log(e);

                if(this.classList.contains("hover")) {
                    this.classList.remove("hover");
                    my_scroll(this);
                }
                else {
                    this.classList.add("hover");
                }
                
            });

            button_menu.addEventListener("mouseover", function() {
                this.classList.add("menu-scroll");
            });

            button_menu.addEventListener("mouseout", function() {
                this.classList.remove("menu-scroll");
            });

            button_menu.addEventListener("click", function(e) {
                e.preventDefault();

                my_scroll(this);
            });
            
            

            
        }

        

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



        var my_scroll_btn = document.querySelectorAll(".button-scroll");

        for(var i = 0; i < my_scroll_btn.length; i++) {
        
            my_scroll_btn[i].addEventListener("click", function(e) {
                    e.preventDefault();
    
                    my_scroll(this);
                });
        };


};
