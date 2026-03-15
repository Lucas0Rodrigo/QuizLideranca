// ==========================================
// RADAR DE PROJETO (5 PERGUNTAS DE CENÁRIO)
// ==========================================

const diagnosticQuestions = [
    {
        q: "1. Qual é a situação real do prazo para essa entrega?",
        options: [
            { t: "Curtíssimo. Estamos atrasados e a margem de erro é zero.", p: "Autocrático" },
            { t: "Folgado. Estamos na fase de planejamento e mapeamento.", p: "Democrático" },
            { t: "Razoável, mas o foco não é a velocidade, e sim criar algo inédito.", p: "Transformacional" },
            { t: "O prazo não é o maior problema agora, o problema é que a equipe travou.", p: "Servidor" }
        ]
    },
    {
        q: "2. Como está o clima da equipe neste exato momento?",
        options: [
            { t: "Precisam de direção clara. Há muita confusão sobre o que fazer.", p: "Autocrático" },
            { t: "Eles querem participar mais e dar opinião sobre o rumo do projeto.", p: "Democrático" },
            { t: "Estão na zona de conforto, falta um empurrão para pensarem grande.", p: "Transformacional" },
            { t: "Estão exaustos, desmotivados ou com sobrecarga emocional.", p: "Servidor" }
        ]
    },
    {
        q: "3. Qual é o nível de risco e impacto desse projeto para a empresa?",
        options: [
            { t: "Risco altíssimo, financeiro e de imagem. Se der errado, a crise será grande.", p: "Autocrático" },
            { t: "É um projeto que afeta a rotina de todos, então precisa de aprovação geral.", p: "Democrático" },
            { t: "É um projeto laboratório, feito justamente para testarmos novas tecnologias.", p: "Transformacional" },
            { t: "É um projeto interno com foco na qualidade de vida e melhoria de processos.", p: "Servidor" }
        ]
    },
    {
        q: "4. Qual é o nível de maturidade e autonomia técnica da equipe para essa tarefa?",
        options: [
            { t: "Estão perdidos diante do desafio ou são inexperientes na ferramenta.", p: "Autocrático" },
            { t: "É uma equipe sênior, com especialistas que sabem debater as melhores rotas.", p: "Democrático" },
            { t: "Têm a técnica, mas estão presos nos mesmos formatos de sempre.", p: "Transformacional" },
            { t: "A técnica não falta, o que falta é confiança e segurança psicológica.", p: "Servidor" }
        ]
    },
    {
        q: "5. Se você tivesse que definir o principal objetivo deste ciclo de trabalho, seria:",
        options: [
            { t: "Executar o plano com disciplina militar para apagar o incêndio atual.", p: "Autocrático" },
            { t: "Garantir que todos os setores estejam alinhados e de acordo com as entregas.", p: "Democrático" },
            { t: "Quebrar paradigmas e entregar algo que deixe o cliente de queixo caído.", p: "Transformacional" },
            { t: "Blindar a equipe de pressões externas e recuperar a saúde mental do time.", p: "Servidor" }
        ]
    }
];

let currentIndex = 0;
let scores = { Transformacional: 0, Servidor: 0, Democrático: 0, Autocrático: 0 };

window.onload = () => {
    renderQuestion();
};

function renderQuestion() {
    const question = diagnosticQuestions[currentIndex];
    
    document.getElementById('question-text').innerText = question.q;
    document.getElementById('current-index').innerText = currentIndex + 1;
    
    const container = document.getElementById('options-container');
    container.innerHTML = ''; 
    
    question.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.innerText = opt.t;
        btn.onclick = () => handleAnswer(opt.p);
        container.appendChild(btn);
    });

    const progress = (currentIndex / 5) * 100;
    const progressFill = document.getElementById('progress-fill');
    if (progressFill) {
        progressFill.style.width = progress + "%";
    }
}

function handleAnswer(profile) {
    scores[profile]++; 
    currentIndex++; 
    
    if (currentIndex < 5) {
        renderQuestion();
    } else {
        const neededProfile = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
        localStorage.setItem('projectNeeds', neededProfile);
        window.location.href = 'resultado-diagnostico.html';
    }
}