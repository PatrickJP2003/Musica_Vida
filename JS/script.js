document.addEventListener("DOMContentLoaded", function() {
    var dynamicText = document.getElementById("dynamic-text");
    var locations = ["París", "Londres", "New York", "Tokio", "Roma"];
    var index = 0;

    function changeText() {
        dynamicText.textContent = locations[index];
        index = (index + 1) % locations.length;
    }

    setInterval(changeText, 3000); // Cambia el texto cada 3 segundos
});
// Mostrar/ocultar el botón cuando el usuario haga scroll
window.onscroll = function() {
    const btn = document.getElementById("btnScrollTop");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        btn.style.display = "flex"; // Mostrar el botón
    } else {
        btn.style.display = "none"; // Ocultar el botón
    }
};

// Función para hacer scroll hacia el inicio
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Scroll suave
    });
}
// Detectar el scroll y cambiar la clase de la navbar
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 500) { // Cambiar a negro después de 500px
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


