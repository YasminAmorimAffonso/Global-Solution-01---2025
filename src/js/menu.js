

document.addEventListener("DOMContentLoaded", () => {

    const hamburguer = document.getElementById("hamburguer");

    const menu = document.getElementById("menu");

    const cabecalho = document.getElementById("cabecalho");

    hamburguer.addEventListener("click", () => {

        hamburguer.classList.toggle("active");

        menu.classList.toggle("active");

        cabecalho.classList.toggle("active");

    });

    menu.querySelectorAll("a").forEach(item =>{

        item.addEventListener("click", () => {

            if (window.innerWidth <= 768) {

                hamburguer.classList.remove("active");

                menu.classList.remove("active");

                cabecalho.classList.remove("active");

                
            }

        });

    });

});