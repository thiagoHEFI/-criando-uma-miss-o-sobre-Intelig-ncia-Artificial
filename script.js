
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const progresso = document.querySelector(".progresso");
const numeroPergunta = document.querySelector(".numero-pergunta");

const perguntas = [

    {
        enunciado: "Qual característica você mais procura em um carro esportivo?",
        alternativas: [
            {
                texto: "🔥 Potência e velocidade máxima",
                afirmacao: "<b>Você tem espírito de supercarro!</b> Para você, desempenho e velocidade são prioridade."
            },
            {
                texto: "✨ Design e presença na rua",
                afirmacao: "<b>Você gosta de chamar atenção!</b> Um carro precisa ser bonito, marcante e ter muita presença."
            },
            {
                texto: "⚙️ Tecnologia e desempenho equilibrado",
                afirmacao: "<b>Você é fã de tecnologia!</b> Gosta de carros modernos que unem desempenho, conforto e inovação."
            },
            {
                texto: "🏁 Experiência de dirigir",
                afirmacao: "<b>Você nasceu para dirigir!</b> Para você, a diversão ao volante é mais importante que números."
            }
        ]
    },

    {
        enunciado: "Onde você gostaria de dirigir seu carro esportivo?",
        alternativas: [
            {
                texto: "🏁 Em uma pista de corrida",
                afirmacao: "<b>Seu lugar é na pista!</b> Você gosta de explorar todo o potencial do carro."
            },
            {
                texto: "🌆 Pela cidade à noite",
                afirmacao: "<b>Você gosta de estilo!</b> Seu carro precisa combinar com as luzes da cidade e chamar atenção."
            },
            {
                texto: "🛣️ Em uma estrada cheia de curvas",
                afirmacao: "<b>Você valoriza a pilotagem!</b> Curvas e uma boa experiência ao volante são essenciais."
            },
            {
                texto: "🌴 Em uma viagem longa",
                afirmacao: "<b>Você quer desempenho sem abrir mão do conforto!</b>"
            }
        ]
    },

    {
        enunciado: "Qual motor seria mais interessante para você?",
        alternativas: [
            {
                texto: "🚀 V8 ou V10 com muito ronco",
                afirmacao: "<b>Você gosta de motores emocionantes!</b> O ronco do motor faz parte da experiência."
            },
            {
                texto: "⚡ Motor elétrico extremamente rápido",
                afirmacao: "<b>Você está de olho no futuro!</b> Aceleração instantânea e tecnologia são sua praia."
            },
            {
                texto: "💨 Motor turbo com muita potência",
                afirmacao: "<b>Você gosta de desempenho!</b> Potência e aceleração fazem seus olhos brilharem."
            },
            {
                texto: "🔧 Motor equilibrado e confiável",
                afirmacao: "<b>Você pensa de forma inteligente!</b> Prefere um conjunto equilibrado e eficiente."
            }
        ]
    },

    {
        enunciado: "Qual estilo de carro mais combina com você?",
        alternativas: [
            {
                texto: "🏎️ Supercarro baixo e agressivo",
                afirmacao: "<b>Você tem estilo de supercarro!</b> Quanto mais agressivo, melhor."
            },
            {
                texto: "🚘 Coupé esportivo",
                afirmacao: "<b>Você é fã dos clássicos esportivos!</b> Gosta de desempenho com um design elegante."
            },
            {
                texto: "💪 Muscle car",
                afirmacao: "<b>Você tem espírito americano!</b> Potência, presença e motores fortes combinam com você."
            },
            {
                texto: "⚡ Carro esportivo elétrico",
                afirmacao: "<b>Você é moderno!</b> Tecnologia, silêncio e aceleração absurda são sua combinação."
            }
        ]
    },

    {
        enunciado: "Qual detalhe faria você escolher um carro?",
        alternativas: [
            {
                texto: "🔥 O ronco do motor",
                afirmacao: "<b>Som é tudo!</b> Para você, um esportivo precisa ter personalidade até no barulho."
            },
            {
                texto: "👀 O visual agressivo",
                afirmacao: "<b>Design é prioridade!</b> Você quer um carro que seja impossível de ignorar."
            },
            {
                texto: "📱 Tecnologia e painel moderno",
                afirmacao: "<b>Tecnologia é essencial!</b> Você gosta de estar sempre conectado às novidades."
            },
            {
                texto: "🏎️ Desempenho nas curvas",
                afirmacao: "<b>Você valoriza a pilotagem!</b> Controle, estabilidade e diversão são fundamentais."
            }
        ]
    },

    {
        enunciado: "Se pudesse escolher um carro para sua garagem, qual estilo escolheria?",
        alternativas: [
            {
                texto: "🇮🇹 Uma máquina italiana",
                afirmacao: "<b>Seu estilo é italiano!</b> Você combina com carros que unem design, emoção e desempenho."
            },
            {
                texto: "🇩🇪 Um esportivo alemão",
                afirmacao: "<b>Seu estilo é alemão!</b> Precisão, tecnologia e desempenho fazem parte do seu perfil."
            },
            {
                texto: "🇯🇵 Um esportivo japonês",
                afirmacao: "<b>Seu estilo é japonês!</b> Você gosta de carros icônicos, tecnologia e muita personalidade."
            },
            {
                texto: "🇺🇸 Um muscle car americano",
                afirmacao: "<b>Seu estilo é americano!</b> Você gosta de potência, presença e muita personalidade."
            }
        ]
    }

];

let indiceAtual = 0;
let resultadoFinal = "";

function mostrarPergunta() {

    if (indiceAtual >= perguntas.length) {
        mostrarResultado();
        return;
    }

    const perguntaAtual = perguntas[indiceAtual];

    caixaPerguntas.textContent = perguntaAtual.enunciado;

    caixaAlternativas.innerHTML = "";

    numeroPergunta.textContent =
        `PERGUNTA ${indiceAtual + 1} / ${perguntas.length}`;

    progresso.style.width =
        `${((indiceAtual) / perguntas.length) * 100}%`;

    perguntaAtual.alternativas.forEach((alternativa) => {

        const botao = document.createElement("button");

        botao.textContent = alternativa.texto;

        botao.addEventListener("click", () => {
            selecionarResposta(alternativa);
        });

        caixaAlternativas.appendChild(botao);
    });
}

function selecionarResposta(alternativaEscolhida) {

    resultadoFinal += alternativaEscolhida.afirmacao + " ";

    indiceAtual++;

    progresso.style.width =
        `${(indiceAtual / perguntas.length) * 100}%`;

    mostrarPergunta();
}

function mostrarResultado() {

    caixaPerguntas.textContent =
        "🏆 SEU PERFIL AUTOMOTIVO FOI DEFINIDO!";

    numeroPergunta.textContent = "RESULTADO FINAL";

    textoResultado.innerHTML = resultadoFinal;

    caixaAlternativas.innerHTML = "";

    caixaResultado.style.display = "block";

    progresso.style.width = "100%";
}

function reiniciarQuiz() {

    indiceAtual = 0;

    resultadoFinal = "";

    caixaResultado.style.display = "none";

    mostrarPergunta();
}

mostrarPergunta();
