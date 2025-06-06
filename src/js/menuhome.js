

document.addEventListener("DOMContentLoaded", () => {

    const hamburguer = document.getElementById("hamburguer");

    const menu = document.getElementById("menu");

    const cores = document.getElementById("cores");

    const cabecalho = document.getElementById("cabecalho");

    const gradient = document.getElementById("gradient");

    const creme = document.getElementById("creme");

    const azul = document.getElementById("azul");

    const titulo = document.getElementById("titulo");

    const problema = document.getElementById("problema");

    const solucoes = document.getElementById("solucoes");

    const objetivos = document.getElementById("objetivos");

    const publico = document.getElementById("publico");

    const beneficios = document.getElementById("beneficios");

    const diaadia = document.getElementById("diaadia");

    const quiz = document.getElementById("quiz");




    creme.addEventListener("click", () => {


        menu.classList.remove("azul");

        cabecalho.classList.remove("azul");

        hamburguer.classList.remove("azul");

        titulo.classList.remove("azul");

        problema.classList.remove("azul");

        solucoes.classList.remove("azul");

        objetivos.classList.remove("azul");

        publico.classList.remove("azul");

        beneficios.classList.remove("azul");

        diaadia.classList.remove("azul");

        quiz.classList.remove("azul");




        titulo.classList.toggle("creme");

        problema.classList.toggle("creme");

        solucoes.classList.toggle("creme");

        objetivos.classList.toggle("creme");

        publico.classList.toggle("creme");

        beneficios.classList.toggle("creme");

        diaadia.classList.toggle("creme");

        quiz.classList.toggle("creme");

        

    });

    azul.addEventListener("click", () => {


            menu.classList.remove("creme");
            
            cabecalho.classList.remove("creme");

            hamburguer.classList.remove("creme");

            titulo.classList.remove("creme");

            problema.classList.remove("creme");

            solucoes.classList.remove("creme");
    
            objetivos.classList.remove("creme");
    
            publico.classList.remove("creme");
    
            beneficios.classList.remove("creme");
    
            diaadia.classList.remove("creme");
    
            quiz.classList.remove("creme");




            menu.classList.toggle("azul")

            cabecalho.classList.toggle("azul");

            hamburguer.classList.toggle("azul");

            titulo.classList.toggle("azul");

            problema.classList.toggle("azul");
    
            solucoes.classList.toggle("azul");
    
            objetivos.classList.toggle("azul");
    
            publico.classList.toggle("azul");
    
            beneficios.classList.toggle("azul");
    
            diaadia.classList.toggle("azul");
    
            quiz.classList.toggle("azul");



    });

    gradient.addEventListener("click", () => {

            menu.classList.remove("creme");
            
            cabecalho.classList.remove("creme");

            hamburguer.classList.remove("creme");

            titulo.classList.remove("creme");

            problema.classList.remove("creme");

            solucoes.classList.remove("creme");
    
            objetivos.classList.remove("creme");
    
            publico.classList.remove("creme");
    
            beneficios.classList.remove("creme");
    
            diaadia.classList.remove("creme");
    
            quiz.classList.remove("creme");


            menu.classList.remove("azul");

            cabecalho.classList.remove("azul");
    
            hamburguer.classList.remove("azul");
    
            titulo.classList.remove("azul");
    
            problema.classList.remove("azul");
    
            solucoes.classList.remove("azul");
    
            objetivos.classList.remove("azul");
    
            publico.classList.remove("azul");
    
            beneficios.classList.remove("azul");
    
            diaadia.classList.remove("azul");
    
            quiz.classList.remove("azul");


    });



    hamburguer.addEventListener("click", () => {

        hamburguer.classList.toggle("active");

        menu.classList.toggle("active");

        cabecalho.classList.toggle("active");

        cores.classList.toggle("active")

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