// ==========================================
// 1. ALGORITMO DE EMBARALHAMENTO (Fisher-Yates)
// ==========================================
function shuffleArray(array) {
    let newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// ==========================================
// 2. BANCO DE DADOS (15 QUESTÕES - 4 PERFIS SENAI)
// ==========================================
const allQuestions = [
    {
        q: "Um prazo importante mudou e a equipe precisa entregar o projeto na metade do tempo. Como você age?",
        options: [
            { t: "Assumo o controle, redefino as tarefas e cobro os prazos estritamente para garantir a entrega.", p: "Autocrático" },
            { t: "Faço uma reunião rápida para ouvirmos o grupo e decidirmos juntos como vamos reorganizar o trabalho.", p: "Democrático" },
            { t: "Faço um discurso inspirador lembrando o propósito do projeto e como esse desafio nos fará inovar.", p: "Transformacional" },
            { t: "Converso individualmente para ver como posso ajudar a tirar os obstáculos do caminho de cada um.", p: "Servidor" }
        ]
    },
    {
        q: "Faltam poucas horas para o lançamento e ocorre um erro crítico no sistema que paralisa a operação.",
        options: [
            { t: "Tomo a decisão imediata sobre a solução técnica e delego ações sem espaço para debate.", p: "Autocrático" },
            { t: "Pergunto rapidamente a opinião do time técnico para que a equipe escolha o melhor plano B.", p: "Democrático" },
            { t: "Encorajo a equipe a ver a crise como uma oportunidade para testarmos uma nova tecnologia.", p: "Transformacional" },
            { t: "Garanto suporte total, pedindo lanches e zelando pelo bem-estar de quem está resolvendo o erro.", p: "Servidor" }
        ]
    },
    {
        q: "Dois membros seniores da equipe estão brigando publicamente sobre qual ideia de design utilizar.",
        options: [
            { t: "Intervenho, escolho a ideia mais viável e encerro a discussão.", p: "Autocrático" },
            { t: "Coloco as duas ideias em pauta e faço a equipe inteira votar na melhor.", p: "Democrático" },
            { t: "Desafio os dois a fundirem as ideias para criarmos algo completamente revolucionário.", p: "Transformacional" },
            { t: "Faço uma mediação em particular focando em preservar a relação e o lado emocional de ambos.", p: "Servidor" }
        ]
    },
    {
        q: "Um novo software de gestão obrigatório foi adotado, mas a equipe está resistindo muito em usá-lo.",
        options: [
            { t: "Exijo o uso imediato e deixo claro que é a nova regra da empresa.", p: "Autocrático" },
            { t: "Crio um comitê com representantes da equipe para encontrar formas de facilitar a transição.", p: "Democrático" },
            { t: "Mostro como essa ferramenta vai nos transformar na equipe mais eficiente do mercado.", p: "Transformacional" },
            { t: "Ofereço treinamento personalizado, focando nas maiores dificuldades e angústias de cada pessoa.", p: "Servidor" }
        ]
    },
    {
        q: "O cliente mandou um feedback dizendo que a equipe está entregando as tarefas de forma muito lenta.",
        options: [
            { t: "Repasso o feedback severamente e exijo aumento de velocidade a partir de hoje.", p: "Autocrático" },
            { t: "Levo o feedback para o grupo e pergunto: 'Onde acham que podemos ganhar tempo?'", p: "Democrático" },
            { t: "Uso a crítica como combustível para inspirá-los a superar expectativas na próxima entrega.", p: "Transformacional" },
            { t: "Defendo a equipe internamente e ajusto processos para não sobrecarregar a saúde mental deles.", p: "Servidor" }
        ]
    },
    {
        q: "É o começo do ano e você precisa traçar as metas anuais do seu departamento.",
        options: [
            { t: "Defino as metas baseadas nos números da diretoria e passo as diretrizes aos funcionários.", p: "Autocrático" },
            { t: "Faço um workshop colaborativo onde o time decide e assina as metas coletivamente.", p: "Democrático" },
            { t: "Apresento uma visão grandiosa do futuro e os motivo a quebrarem recordes da indústria.", p: "Transformacional" },
            { t: "Construo as metas do departamento alinhadas ao plano de desenvolvimento pessoal de cada um.", p: "Servidor" }
        ]
    },
    {
        q: "O funcionário mais talentoso da sua equipe recebeu uma proposta de emprego de um concorrente.",
        options: [
            { t: "Avalio se ele é insubstituível e faço uma contraproposta financeira direta.", p: "Autocrático" },
            { t: "Pergunto ao time o que a outra empresa tem de diferente que podemos adotar na nossa.", p: "Democrático" },
            { t: "Mostro as inovações em que ele está envolvido e como o trabalho dele aqui mudará o mercado.", p: "Transformacional" },
            { t: "Apoio a decisão que for melhor para a vida pessoal e carreira dele, com total empatia.", p: "Servidor" }
        ]
    },
    {
        q: "Por um descuido de orçamento, o projeto da equipe gerou um prejuízo razoável para a empresa.",
        options: [
            { t: "Assumo a culpa para a chefia, mas crio controles rígidos imediatos no setor.", p: "Autocrático" },
            { t: "Sento com a equipe inteira, abro as planilhas e achamos soluções de economia em conjunto.", p: "Democrático" },
            { t: "Aproveito o erro para convencer a diretoria de que precisamos pivotar para uma nova estratégia.", p: "Transformacional" },
            { t: "Acalmo a equipe, que está se sentindo culpada, e garanto que ninguém perderá o emprego.", p: "Servidor" }
        ]
    },
    {
        q: "Um funcionário cometeu um erro que afetou gravemente a apresentação para o cliente final.",
        options: [
            { t: "Dou uma advertência e estabeleço checagem dupla em todos os trabalhos dele.", p: "Autocrático" },
            { t: "Discutimos a falha em grupo para que todos aprendam a evitar o mesmo erro.", p: "Democrático" },
            { t: "Encorajo o funcionário, mostrando que quem tenta inovar está sujeito a falhas.", p: "Transformacional" },
            { t: "Chamo-o para conversar em particular e pergunto se ele está passando por problemas em casa.", p: "Servidor" }
        ]
    },
    {
        q: "A equipe bateu a meta de vendas com um mês de antecedência. Como você celebra?",
        options: [
            { t: "Parabenizo a todos e aumento a meta do próximo mês para mantermos o ritmo.", p: "Autocrático" },
            { t: "Disponibilizo um fundo e deixo o time votar livremente em como querem celebrar.", p: "Democrático" },
            { t: "Faço um discurso motivacional sobre como estamos no caminho de sermos os líderes absolutos.", p: "Transformacional" },
            { t: "Reconheço o esforço individual de cada um e dou meio período de folga como prêmio.", p: "Servidor" }
        ]
    },
    {
        q: "Uma fofoca mal-intencionada começou a circular no escritório e está destruindo o clima.",
        options: [
            { t: "Identifico os responsáveis e aplico punições para cortar o mal pela raiz.", p: "Autocrático" },
            { t: "Crio uma roda de conversa geral focada em transparência e respeito no ambiente de trabalho.", p: "Democrático" },
            { t: "Inspiro a equipe a focar em projetos grandiosos e não perder tempo com intrigas pequenas.", p: "Transformacional" },
            { t: "Acolho quem foi vítima da fofoca e ofereço suporte emocional para restabelecer o equilíbrio.", p: "Servidor" }
        ]
    },
    {
        q: "Um novo funcionário recém-formado acaba de entrar na sua equipe de projetos.",
        options: [
            { t: "Entrego o manual de processos, os indicadores e dou 30 dias para ele entregar resultados.", p: "Autocrático" },
            { t: "Apresento ao grupo e peço que a equipe divida a responsabilidade da integração dele.", p: "Democrático" },
            { t: "Mostro a visão revolucionária da empresa e como ele será essencial para as inovações.", p: "Transformacional" },
            { t: "Zelo pelo conforto dele nos primeiros dias e faço reuniões semanais para saber como ele está.", p: "Servidor" }
        ]
    },
    {
        q: "Durante o brainstorming, um membro muito quieto sugere uma ideia ousada e maluca.",
        options: [
            { t: "Corto a ideia rapidamente se eu perceber que ela não se encaixa no orçamento.", p: "Autocrático" },
            { t: "Pergunto ao resto do grupo se a maioria concorda com a viabilidade da ideia.", p: "Democrático" },
            { t: "Abraço a ideia na hora! A inovação exige ousadia e eu o ajudo a apresentar o protótipo.", p: "Transformacional" },
            { t: "Elogio a coragem dele por ter se expressado e ajudo a lapidar a ideia sem expô-lo ao risco.", p: "Servidor" }
        ]
    },
    {
        q: "Uma tarefa chata, manual e burocrática precisa ser realizada toda sexta-feira.",
        options: [
            { t: "Crio uma escala obrigatória de revezamento; é o trabalho e precisa ser feito.", p: "Autocrático" },
            { t: "Deixo o time decidir entre eles qual é a forma mais justa de lidar com isso.", p: "Democrático" },
            { t: "Motivo a equipe a encontrar uma solução tecnológica inovadora para automatizar o problema.", p: "Transformacional" },
            { t: "Sempre que percebo o time estressado, puxo essa tarefa burocrática para mim.", p: "Servidor" }
        ]
    },
    {
        q: "No meio do projeto, o cliente muda completamente a direção do que ele deseja.",
        options: [
            { t: "Travo o pedido, cobro aditivo no contrato e estipulo um novo cronograma fixo.", p: "Autocrático" },
            { t: "Levo o cenário para a equipe e juntos votamos se aceitamos o novo desafio ou não.", p: "Democrático" },
            { t: "Aproveito a mudança e prometo entregar algo ainda mais inovador do que ele imaginou.", p: "Transformacional" },
            { t: "Blindo a minha equipe do estresse do cliente e ajusto as emoções antes de focar na entrega.", p: "Servidor" }
        ]
    }
];

// ==========================================
// 3. VARIÁVEIS GERAIS DO JOGO
// ==========================================
let selectedQuestions = [];
let currentIndex = 0;
let scores = { Transformacional: 0, Servidor: 0, Democrático: 0, Autocrático: 0 };

// ==========================================
// 4. INICIALIZAÇÃO E LÓGICA
// ==========================================
window.onload = () => {
    if (document.getElementById('question-text')) {
        startQuiz();
    }
};

function startQuiz() {
    selectedQuestions = shuffleArray(allQuestions);
    renderQuestion();
}

function renderQuestion() {
    const question = selectedQuestions[currentIndex];
    
    document.getElementById('question-text').innerText = question.q;
    document.getElementById('current-index').innerText = currentIndex + 1;
    
    const container = document.getElementById('options-container');
    container.innerHTML = ''; 
    
    const randomizedOptions = shuffleArray(question.options);
    
    randomizedOptions.forEach(opt => {
        const btn = document.createElement('button');
        btn.innerText = opt.t;
        btn.onclick = () => handleAnswer(opt.p);
        container.appendChild(btn);
    });

    const progress = (currentIndex / 15) * 100;
    const progressFill = document.getElementById('progress-fill');
    if (progressFill) {
        progressFill.style.width = progress + "%";
    }
}

function handleAnswer(profile) {
    scores[profile]++; 
    currentIndex++; 
    
    if (currentIndex < 15) {
        renderQuestion();
    } else {
        const winner = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
        localStorage.setItem('userLeaderProfile', winner);
        window.location.href = 'resultado.html';
    }
}