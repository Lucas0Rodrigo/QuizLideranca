// ==========================================
// 1. ALGORITMO DE EMBARALHAMENTO (Fisher-Yates)
// ==========================================
// Garante que a ordem dos botões sempre mude, evitando vício nas respostas
function shuffleArray(array) {
    let newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// ==========================================
// 2. BANCO DE DADOS (15 QUESTÕES)
// ==========================================
const allQuestions = [
    {
        q: "Um cliente VIP antecipou o prazo de entrega do projeto em duas semanas. Como você repassa isso à equipe?",
        options: [
            { t: "Reorganizo o cronograma imediatamente, corto escopo não essencial e distribuo as novas metas.", p: "Comandante" },
            { t: "Reúno todos, explico a situação com transparência e pergunto: 'Como podemos resolver isso juntos?'", p: "Democrático" },
            { t: "Mostro como essa entrega antecipada vai nos posicionar como líderes de mercado e nos abrir portas.", p: "Visionário" },
            { t: "Sento com os líderes de cada área para entender onde estão os gargalos e ofereço suporte.", p: "Coach" }
        ]
    },
    {
        q: "Dois desenvolvedores seniores estão discutindo feio sobre qual tecnologia usar na nova funcionalidade. O que você faz?",
        options: [
            { t: "Analiso os dados práticos de desempenho e decido pela opção mais rápida e segura para o projeto.", p: "Comandante" },
            { t: "Faço uma reunião com o time inteiro para que todos votem e cheguemos a um consenso.", p: "Democrático" },
            { t: "Lembro a eles o objetivo final do nosso produto e peço que escolham a que melhor atende a essa visão.", p: "Visionário" },
            { t: "Faço uma mediação, ajudando ambos a verem os pontos fortes do outro e chegarem a um acordo.", p: "Coach" }
        ]
    },
    {
        q: "Um membro da equipe cometeu um erro crítico que derrubou o sistema por 2 horas. A poeira baixou, como você age?",
        options: [
            { t: "Crio novos processos de verificação e exijo relatórios de erro para que isso nunca mais se repita.", p: "Comandante" },
            { t: "Reúno a equipe para uma 'retrospectiva sem culpa' para entendermos juntos onde o processo falhou.", p: "Democrático" },
            { t: "Uso o erro como exemplo de que estamos arriscando e inovando, mas ajusto a direção.", p: "Visionário" },
            { t: "Chamo a pessoa para um bate-papo em particular, dou feedback construtivo e vejo como posso ajudá-la a melhorar.", p: "Coach" }
        ]
    },
    {
        q: "O orçamento do seu departamento foi cortado em 20%. Qual a sua primeira atitude?",
        options: [
            { t: "Faço os cortes cirúrgicos necessários imediatamente para não comprometer a operação principal.", p: "Comandante" },
            { t: "Abro a planilha de custos com o time e decidimos juntos onde podemos economizar.", p: "Democrático" },
            { t: "Refaço o planejamento estratégico focando em inovação com baixo custo para contornar a crise.", p: "Visionário" },
            { t: "Garanto que os cortes não afetem os programas de treinamento e bem-estar da equipe.", p: "Coach" }
        ]
    },
    {
        q: "Você notou que uma pessoa do time está muito desmotivada e entregando abaixo do esperado. Qual a abordagem?",
        options: [
            { t: "Deixo as metas dela mais claras e dou um prazo para que a produtividade volte ao normal.", p: "Comandante" },
            { t: "Pergunto ao resto da equipe se notaram algo e tento melhorar o clima do ambiente de trabalho.", p: "Democrático" },
            { t: "Relembro a ela o impacto do trabalho dela no grande propósito da empresa.", p: "Visionário" },
            { t: "Faço reuniões 1:1 focadas em entender suas frustrações de carreira e traçar um plano de desenvolvimento.", p: "Coach" }
        ]
    },
    {
        q: "A diretoria pediu uma ideia inovadora para o próximo trimestre. Como você conduz isso?",
        options: [
            { t: "Avalio as tendências de mercado, tomo a decisão e passo as diretrizes para a equipe executar.", p: "Comandante" },
            { t: "Organizo uma sessão de brainstorming onde todas as ideias são bem-vindas e votadas.", p: "Democrático" },
            { t: "Apresento um conceito ousado e disruptivo que venho pensando e inspiro a equipe a comprar a ideia.", p: "Visionário" },
            { t: "Incentivo os membros menos experientes a liderarem a apresentação de ideias para desenvolverem confiança.", p: "Coach" }
        ]
    },
    {
        q: "Durante uma reunião, um cliente faz críticas pesadas e injustas ao trabalho da sua equipe. Qual a sua reação?",
        options: [
            { t: "Defendo o trabalho com dados concretos, imponho limites, mas proponho uma solução prática.", p: "Comandante" },
            { t: "Ouço pacientemente e depois discuto com a equipe como podemos melhorar nossa comunicação com ele.", p: "Democrático" },
            { t: "Reenquadro a crítica do cliente, mostrando a ele o panorama geral e a direção inovadora que estamos tomando.", p: "Visionário" },
            { t: "Após a reunião, converso com a equipe para garantir que a crítica não abale a autoconfiança deles.", p: "Coach" }
        ]
    },
    {
        q: "A empresa adotou um novo software obrigatório, mas a equipe está resistindo à mudança. O que fazer?",
        options: [
            { t: "Estabeleço uma data limite para a transição e cobro o uso exclusivo da nova ferramenta.", p: "Comandante" },
            { t: "Crio um comitê com representantes da equipe para avaliar as dificuldades e adaptar a transição.", p: "Democrático" },
            { t: "Faço uma apresentação mostrando como essa ferramenta vai revolucionar a forma como trabalhamos no futuro.", p: "Visionário" },
            { t: "Identifico quem tem mais facilidade e peço que sejam 'mentores' dos colegas com mais dificuldade.", p: "Coach" }
        ]
    },
    {
        q: "Um talento da sua equipe recebeu uma proposta de outra empresa. Como você tenta retê-lo?",
        options: [
            { t: "Ofereço um aumento de salário ou bônus por produtividade, se os números justificarem.", p: "Comandante" },
            { t: "Pergunto o que a equipe acha que podemos melhorar no nosso ambiente para reter talentos.", p: "Democrático" },
            { t: "Mostro a ele o futuro da nossa empresa e os projetos incríveis que ele lideraria se ficasse.", p: "Visionário" },
            { t: "Converso sobre os objetivos de vida dele para ver se consigo alinhar o crescimento dele aqui dentro.", p: "Coach" }
        ]
    },
    {
        q: "Sua equipe bateu a meta anual no mês de outubro. O que você faz nos dois meses restantes?",
        options: [
            { t: "Dobro a meta. Se conseguimos em 10 meses, podemos ir muito mais longe.", p: "Comandante" },
            { t: "Organizo uma comemoração com todos e decidimos juntos um ritmo mais leve para o fim do ano.", p: "Democrático" },
            { t: "Aproveito o tempo livre para focar na criação de um produto totalmente novo para o ano que vem.", p: "Visionário" },
            { t: "Uso esse tempo para que a equipe faça cursos, treinamentos e invista no próprio desenvolvimento.", p: "Coach" }
        ]
    },
    {
        q: "Um projeto que você defendeu fracassou. Na hora de dar explicações à diretoria, você:",
        options: [
            { t: "Assumo a culpa total, mostro os números do fracasso e o plano de contingência já em ação.", p: "Comandante" },
            { t: "Levo o relatório feito junto com a equipe, mostrando os aprendizados que tivemos coletivamente.", p: "Democrático" },
            { t: "Explico que a inovação exige riscos e mostro como esse erro pavimenta o caminho para a próxima grande ideia.", p: "Visionário" },
            { t: "Foco em como a equipe amadureceu durante o processo e nas novas habilidades que adquiriram.", p: "Coach" }
        ]
    },
    {
        q: "Você assumiu uma equipe nova que está cheia de 'panelinhas'. Como você unifica o grupo?",
        options: [
            { t: "Desfaço as panelinhas na marra, mudando as pessoas de projeto e cobrando resultados.", p: "Comandante" },
            { t: "Crio dinâmicas de grupo e peço a opinião deles sobre como podemos melhorar o clima.", p: "Democrático" },
            { t: "Apresento uma meta tão grande e inspiradora que eles esquecem as diferenças para focar no objetivo.", p: "Visionário" },
            { t: "Faço reuniões individuais para entender as motivações de cada um e promover a empatia entre eles.", p: "Coach" }
        ]
    },
    {
        q: "Há uma tarefa muito burocrática e chata que precisa ser feita toda semana. Como você distribui?",
        options: [
            { t: "Crio uma escala obrigatória e rigorosa onde cada um faz um pouco, sem exceção.", p: "Comandante" },
            { t: "Coloco em votação para decidirmos juntos a forma mais justa de revezar esse trabalho.", p: "Democrático" },
            { t: "Tento automatizar o processo usando uma nova tecnologia para que ninguém precise fazer isso no futuro.", p: "Visionário" },
            { t: "Vejo quem precisa desenvolver disciplina organizacional e dou a tarefa como um exercício guiado.", p: "Coach" }
        ]
    },
    {
        q: "Surgiu uma fofoca maldosa sobre um membro da equipe. O que você faz?",
        options: [
            { t: "Chamo quem espalhou a fofoca e dou uma advertência clara e direta sobre comportamento profissional.", p: "Comandante" },
            { t: "Faço uma reunião geral de alinhamento sobre cultura, respeito e convivência no trabalho.", p: "Democrático" },
            { t: "Ignoro as fofocas e focado em manter todos ocupados com projetos grandiosos.", p: "Visionário" },
            { t: "Converso separadamente com o alvo da fofoca para dar apoio e com o fofoqueiro para entender o problema real.", p: "Coach" }
        ]
    },
    {
        q: "Última etapa: Como você prefere ser lembrado pela sua equipe quando sair da empresa?",
        options: [
            { t: "Como o líder que trouxe os melhores resultados que a empresa já viu.", p: "Comandante" },
            { t: "Como o líder que criou o melhor ambiente de trabalho e uma equipe unida.", p: "Democrático" },
            { t: "Como o líder que mudou a história da empresa e implementou inovações reais.", p: "Visionário" },
            { t: "Como o líder que ajudou cada um deles a se tornarem profissionais e pessoas melhores.", p: "Coach" }
        ]
    }
];

// ==========================================
// 3. VARIÁVEIS GERAIS DO JOGO
// ==========================================
let selectedQuestions = [];
let currentIndex = 0;
let scores = { Visionário: 0, Democrático: 0, Coach: 0, Comandante: 0 };

// ==========================================
// 4. INICIALIZAÇÃO
// ==========================================
window.onload = () => {
    // Se estiver na tela de Quiz
    if (document.getElementById('question-text')) {
        startQuiz();
    }
    // Se estiver na tela de Resultado
    if (document.getElementById('res-Visionário')) {
        showResult();
    }
};

// ==========================================
// 5. LÓGICA DO QUIZ
// ==========================================
function startQuiz() {
    // Pega as exatas 15 questões (sem embaralhar a ordem geral se não quiser, 
    // mas vamos embaralhar só por garantia para não ficar repetitivo se jogar de novo)
    selectedQuestions = shuffleArray(allQuestions).slice(0, 15);
    renderQuestion();
}

function renderQuestion() {
    const question = selectedQuestions[currentIndex];
    
    // Atualiza Textos
    document.getElementById('question-text').innerText = question.q;
    document.getElementById('current-index').innerText = currentIndex + 1;
    
    const container = document.getElementById('options-container');
    container.innerHTML = ''; 
    
    // Embaralha AS OPÇÕES para que o "Comandante" ou "Coach" não fiquem sempre na mesma letra
    const randomizedOptions = shuffleArray(question.options);
    
    randomizedOptions.forEach(opt => {
        const btn = document.createElement('button');
        btn.innerText = opt.t;
        btn.onclick = () => handleAnswer(opt.p);
        container.appendChild(btn);
    });

    // Atualiza a barra de progresso dinamicamente
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
        // Encontra qual perfil teve mais pontos
        const winner = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
        // Salva no navegador para mostrar na próxima tela
        localStorage.setItem('userLeaderProfile', winner);
        window.location.href = 'resultado.html';
    }
}

// ==========================================
// 6. EXIBIÇÃO DE RESULTADOS
// ==========================================
function showResult() {
    const finalProfile = localStorage.getItem('userLeaderProfile');
    if (finalProfile) {
        // Remove a classe "hidden" apenas do cartão vencedor
        const winningCard = document.getElementById(`res-${finalProfile}`);
        if (winningCard) {
            winningCard.classList.remove('hidden');
        }
    }
}

// ==========================================
// 7. FERRAMENTAS PARA APRESENTAÇÃO (DEBUG)
// ==========================================
function toggleSecretMenu() {
    const menu = document.getElementById('secret-menu');
    if (menu) {
        menu.classList.toggle('hidden');
    }
}

function forceResult(profile) {
    localStorage.setItem('userLeaderProfile', profile);
    window.location.href = 'resultado.html';
}