document.addEventListener(
    "DOMContentLoaded",
    function() {
        let fixedNav = document.getElementById("fixed-nav");

        window.onscroll = function() {
            //add the "scrolled" class to the fixed-nav element when scrolling down
            if (window.scrollY > 50) {
                fixedNav.classList.add('scrolled');
            }
            else {
                fixedNav.classList.remove('scrolled');
            }
        };
    });