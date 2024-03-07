document.addEventListener("DOMContentLoaded", function () {
    var hamBurger = document.querySelector(".hamburger");

    hamBurger.addEventListener("click", function (e) {
        this.classList.toggle("active");
        console.log("--->", hamBurger);
    });
});
