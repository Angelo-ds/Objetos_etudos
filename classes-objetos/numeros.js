// Seleciona os elementos do HTML usando querySelector
const sliderMin = document.querySelector('.intervalo__slider--min'); 
const sliderMax = document.querySelector('.intervalo__slider--max'); 
const elementoNumero = document.querySelector('.area__numero');
const historicoLista = document.querySelector('.historico__lista');
const sorteio = document.querySelector('.area__button');
const limpar = document.querySelector('.sorteador__limpar');
const mensagem = document.querySelector('.area_mensagem');

// Função que atualiza os valores dos sliders na tela
const atualizarValorSlider = () => {
    const min = Number(sliderMin.value);
    const max = Number(sliderMax.value);

    document.querySelector('.intervalo__valor--min').textContent = min;
    document.querySelector('.intervalo__valor--max').textContent = max;
};

// Eventos dos sliders
sliderMax.addEventListener('input', atualizarValorSlider);
sliderMin.addEventListener('input', atualizarValorSlider);

// Executa ao iniciar
atualizarValorSlider();

// Função que gera um número aleatório entre min e max
const gerarNumeroAleatorio = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Função para atualizar texto
const atualizarTexto = (elemento, valor) => {
    elemento.textContent = valor;
};

// Número inicial
atualizarTexto(elementoNumero, 20);

// Criar item do histórico
const criarItemHistorico = (numero) => {
    const li = document.createElement('li'); //cria uma li dentro o html
    li.textContent = numero; // escreve o numero aleatorio dentro dela

    li.addEventListener('click', () => { //ao clicar no botão escreve  uma li nova
        navigator.clipboard.writeText(numero);
    });

    return li;
};

// Atualizar histórico
const atualizarHistorico = (lista, item, limite) => {
    lista.prepend(item); // cria uma li no começo

    if (lista.children.length > limite) {
        lista.removeChild(lista.lastChild); //remove a li de acordo com o limite
    }
};

// Limpar histórico
const limparHistorico = () => {
    if (confirm('Deseja realmente limpar o histórico de sorteios?')) {
        historicoLista.textContent = '';
        elementoNumero.textContent = '0';
    }
};

// Evento do botão de sortear
sorteio.addEventListener('click', () => {
    const min = Number(sliderMin.value);
    const max = Number(sliderMax.value);

    // Validação
    if (min > max) {
        mensagem.textContent = 'O número mínimo não pode ser maior que o máximo.';
        return;
    }

    mensagem.textContent = '';

    const numero = gerarNumeroAleatorio(min, max);
    atualizarTexto(elementoNumero, numero);

    const item = criarItemHistorico(numero);
    atualizarHistorico(historicoLista, item, 5);
});

// Evento do botão limpar
limpar.addEventListener('click', limparHistorico);
// desafio prever o erro do usuario