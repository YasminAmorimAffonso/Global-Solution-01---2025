const perguntas = [
    {
      pergunta: "Qual a causa das enchentes nas cidades?",
      opcoes: [
        "A - Grande quantidade de chuva e escoamento ruim",
        "B - Correntes de ar",
        "C - Muitos animais agrupados",
      ],
      certa: 0
    },
    {
      pergunta: "Como evitar os desastres ambientais? ",
      opcoes: [
        "A - Poluindo os rios",
        "B - Gerando queimadas",
        "C - Educando e conscientizando",
      ],
      certa: 2
    },
    {
      pergunta: "Qual dessas é uma solução sustentável para escoamento da água da chuva?",
      opcoes: [
        "A - Cobrir rios",
        "B - Instalação de sistemas de drenagem",
        "C - Aumentar o uso de agrotóxicos",
      ],
      certa: 1
    },
    {
      pergunta: "O que acontece quando se joga lixo nos bueiros?",
      opcoes: [
        "A - Nada, tudo funciona normalmente",
        "B - Entope e causa alagamentos",
        "C - Ajuda o escoamento",
      ],
      certa: 1
    },
    {
      pergunta: "Como proceder durante uma enchente?",
      opcoes: [
        "A - Não se deve fazer nada",
        "B - Ligar para o corpo de bombeiros",
        "C - Transitar por locais de risco",
      ],
      certa: 1
    },
    {
      pergunta: "Uma boa prática em casa para prevenir enchentes é:",
      opcoes: [
        "A - Lavar calçada com mangueira",
        "B - Deixar lixo na rua",
        "C - Manter calhas limpas",
      ],
      certa: 2
    },
    {
      pergunta: "O lixo jogado nas ruas pode:",
      opcoes: [
        "A - Bloquear o vento",
        "B - Reduzir o desmatamento",
        "C - Facilitar o alagamento",
      ],
      certa: 2
    },
    {
      pergunta: "O que é uma área de risco para enchentes?",
      opcoes: [
        "A - Área próxima a rios e córregos",
        "B - Área alta e seca",
        "C - Área bem urbanizada",
      ],
      certa: 0
    },
    {
      pergunta: "Para reduzir riscos de enchentes, os governos devem:",
      opcoes: [
        "A - Construir sem estudo",
        "B - Desmatar margens de rios",
        "C - Investir em infraestrutura de drenagem",
      ],
      certa: 2
    },
    {
      pergunta: "Qual dessas práticas é mais recomendada?",
      opcoes: [
        "A - Construir em encostas",
        "B - Canalizar rios sem planejamento",
        "C - Preservar matas ciliares",
      ],
      certa: 2
    }
];
  
let questaoAtual = 0;
let acertos = 0;

const textoPergunta = document.getElementById("pergunta");
const listaAlternativas = document.getElementById("opcoes");
const botaoAvancar = document.getElementById("proxima");
const exibirResultado = document.getElementById("resultado");
const mostrarBotao = document.getElementById('mostrarBotao');
const fecharBotao = document.getElementById('fecharBotao');
const gabarito2 = document.querySelector('.gabarito');
const gabarito = document.getElementById("gabarito");
const conjuntoGabarito = document.getElementById("conjunto-gabarito");

function mostrarQuestao() {
  const item = perguntas[questaoAtual];

  textoPergunta.textContent = item.pergunta;
  listaAlternativas.innerHTML = "";
  botaoAvancar.disabled = true;

  item.opcoes.forEach((textoOpcao, indice) => {
    const opcao = document.createElement("button");
    opcao.textContent = textoOpcao;
    opcao.type = "button";
    opcao.onclick = () => verificarResposta(opcao, indice);
    listaAlternativas.appendChild(opcao);
  });
}

function verificarResposta(botaoSelecionado, escolha) {
  for (const botao of listaAlternativas.children) {
    botao.disabled = true;
  }

  botaoSelecionado.classList.add("ativo");

  if (escolha === perguntas[questaoAtual].certa) {
    acertos++;
  }

  botaoAvancar.disabled = false;
}

botaoAvancar.addEventListener("click", () => {
  questaoAtual++;
  if (questaoAtual < perguntas.length) {
    mostrarQuestao();
  } else {
    finalizarQuiz();
  }
});

mostrarBotao.addEventListener('click', () => {

      mostrarBotao.classList.toggle("active");

      fecharBotao.classList.toggle("active");

      gabarito.classList.toggle("active");

      conjuntoGabarito.classList.toggle("active");

    });

fecharBotao.addEventListener('click', () => {


      fecharBotao.classList.remove("active");

      mostrarBotao.classList.remove("active");

      gabarito.classList.remove("active");

      conjuntoGabarito.classList.remove("active");

    });

function finalizarQuiz() {
  textoPergunta.textContent = "Você finalizou o quiz!";
  listaAlternativas.style.display = "none";
  botaoAvancar.style.display = "none";
  exibirResultado.textContent = (`Seu total de acertos foi ${acertos} de ${perguntas.length} perguntas.`);
}

mostrarQuestao();
