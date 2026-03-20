const sliderMin = document.querySelector('.intervalo__slider--min');
const sliderMax = document.querySelector('.intervalo__slider--max');
const elementoNumero = document.querySelector('.area__numero')
const historicoLista = document.querySelector('.historico__lista')
const sorteio = document.querySelector('.area__button');
const limpar = document.querySelector('.sorteador__limpar');
const mensagem = document.querySelector('.area_mensagem');
isso = [2,2,2,2]

const atualizarValorSlider= () => {
    const min = Number(sliderMin.value);
    const max = Number(sliderMax.value);

    console.log(min,max);



    document.querySelector('.intervalo__valor--min').textContent = min;
    document.querySelector('.intervalo__valor--max').textContent = max;



    

};
sliderMax.addEventListener('input', atualizarValorSlider);
sliderMin.addEventListener('input', atualizarValorSlider);


atualizarValorSlider()



const verificarNumero = () => {
    if (sliderMin  > sliderMax){
        historicoLista.textContent('O numero mínimo não pode ser maior que o número máximo.')
    }
}



const gerarNumeroAleatorio =(min,max) => {
    let numeroAleatorio = Math.floor(Math.random()) * (max-min +1);
    numeroAleatorio += min;
    return numeroAleatorio;
}

const atualizarTexto = (elemento,valor) => {
    elemento.textContent = valor;
}

atualizarTexto(elementoNumero,20)


const criarItemHistorico = (numero) => {
    const li = document.createElement('li');
    li.textContent = numero;

    li.addEventListener('click', () => {
        navigator.clipboard.writeText(numero);
    });

    return li;
}


const atualizarHistorico = (lista, item, limite) => {

    lista.prepend(item);

    if (lista.children.length > limite) {
        lista.removechild(lista.lastChild);
    }

};

const limparHistorio = () =>{
    if (confirm('Deseja realmente limpar o histórico de sorteios?')){
        listaNumeros.textContent = '';
        elementoNumero.textContent = '0'
    }

}








sorteio.addEventListener('click', () => {
    verificarNumero
});



limpar.addEventListener('click', () => {
    alert('deu')
});
                                                                                                                  