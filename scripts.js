( () => {
    "use strict";
    var e = document.querySelector(".menu_toggle");
    e.addEventListener("click", (function() {
        var s = document.querySelector(".nav_links");
        s.classList.contains("open") ? (s.classList.remove("open"),
        e.setAttribute("aria-expanded", "false"),
        e.src = "/images/menu.svg") : (s.classList.add("open"),
        e.setAttribute("aria-expanded", "true"),
        e.src = "/images/close.svg")
    }
    ))
}
)();
