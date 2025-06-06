

document.addEventListener("DOMContentLoaded", () => {

    const hamburguer = document.getElementById("hamburguer");

    const menu = document.getElementById("menu");

    const cores = document.getElementById("cores");

    const cabecalho = document.getElementById("cabecalho");

    const gradient = document.getElementById("gradient");

    const creme = document.getElementById("creme");

    const azul = document.getElementById("azul");

    const fundo = document.getElementById("fundo");



    creme.addEventListener("click", () => {


        menu.classList.remove("azul");

        cabecalho.classList.remove("azul");

        hamburguer.classList.remove("azul");

        fundo.classList.remove("azul");



        fundo.classList.toggle("creme");
        

    });

    azul.addEventListener("click", () => {


            menu.classList.remove("creme");
            
            cabecalho.classList.remove("creme");

            hamburguer.classList.remove("creme");

            fundo.classList.remove("creme");




            menu.classList.toggle("azul")

            cabecalho.classList.toggle("azul");

            hamburguer.classList.toggle("azul");

            fundo.classList.toggle("azul");



    });

    gradient.addEventListener("click", () => {

            menu.classList.remove("creme");
            
            cabecalho.classList.remove("creme");

            hamburguer.classList.remove("creme");

            fundo.classList.remove("creme");


            menu.classList.remove("azul");

            cabecalho.classList.remove("azul");
    
            hamburguer.classList.remove("azul");

            fundo.classList.remove("azul");


    });



    hamburguer.addEventListener("click", () => {

        hamburguer.classList.toggle("active");

        menu.classList.toggle("active");

        cabecalho.classList.toggle("active");

        cores.classList.toggle("active");

    });

menu.querySelectorAll("a").forEach(item => {

    item.addEventListener("click", () => {

        if (window.innerWidth <= 768) {

            hamburguer.classList.remove("active");

            menu.classList.remove("active");

            cabecalho.classList.remove("active");

            cores.classList.remove("active");


        }

    });

});


});