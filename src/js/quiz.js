const perguntas = [
    {
      pergunta: "Qual a causa das enchentes nas cidades?",
      opcoes: [
        "Grande quantidade de chuva e escoamento ruim",
        "Correntes de ar",
        "Muitos animais agrupados",
      ],
      certa: 0
    },
    {
      pergunta: "Como evitar os desastres ambientais? ",
      opcoes: [
        "Poluindo os rios",
        "Gerando queimadas",
        "Educando e conscientizando",
      ],
      certa: 2
    },
    {
      pergunta: "Qual dessas é uma solução sustentável para escoamento da água da chuva?",
      opcoes: [
        "Cobrir rios",
        "Instalação de sistemas de drenagem",
        "Aumentar o uso de agrotóxicos",
      ],
      certa: 1
    },
    {
      pergunta: "O que acontece quando se joga lixo nos bueiros?",
      opcoes: [
        "Nada, tudo funciona normalmente",
        "Entope e causa alagamentos",
        "Ajuda o escoamento",
      ],
      certa: 1
    },
    {
      pergunta: "Como proceder durante uma enchente?",
      opcoes: [
        "Não se deve fazer nada",
        "Ligar para o corpo de bombeiros",
        "Transitar por locais de risco",
      ],
      certa: 1
    },
    {
      pergunta: "Uma boa prática em casa para prevenir enchentes é:",
      opcoes: [
        "Lavar calçada com mangueira",
        "Deixar lixo na rua",
        "Manter calhas limpas",
      ],
      certa: 2
    },
    {
      pergunta: "O lixo jogado nas ruas pode:",
      opcoes: [
        "Bloquear o vento",
        "Reduzir o desmatamento",
        "Facilitar o alagamento",
      ],
      certa: 2
    },
    {
      pergunta: "O que é uma área de risco para enchentes?",
      opcoes: [
        "Área próxima a rios e córregos",
        "Área alta e seca",
        "Área bem urbanizada",
      ],
      certa: 0
    },
    {
      pergunta: "Para reduzir riscos de enchentes, os governos devem:",
      opcoes: [
        "Construir sem estudo",
        "Desmatar margens de rios",
        "Investir em infraestrutura de drenagem",
      ],
      certa: 2
    },
    {
      pergunta: "Qual dessas práticas é mais recomendada?",
      opcoes: [
        "Construir em encostas",
        "Canalizar rios sem planejamento",
        "Preservar matas ciliares",
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
      gabarito2.style.display = 'block';
      mostrarBotao.style.display = 'none';
    });

fecharBotao.addEventListener('click', () => {
      gabarito2.style.display = 'none';
      mostrarBotao.style.display = 'inline';
    });

function finalizarQuiz() {
  textoPergunta.textContent = "Você finalizou o quiz!";
  listaAlternativas.innerHTML = "";
  botaoAvancar.style.display = "none";
  exibirResultado.textContent = (`Seu total de acertos foi ${acertos} de ${perguntas.length} perguntas.`);
}

mostrarQuestao();
