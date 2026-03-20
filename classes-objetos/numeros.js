const sliderMin = document.querySelector('.intervalo__slider--min');
const sliderMax = document.querySelector('.intervalo__slider--max');
const elementoNumero = document.querySelector('.area__numero')
const historicoLista = document.querySelector('.historico__lista')
const sorteio = document.querySelector('.area__button');
const limpar = document.querySelector('.sorteador__limpar');
const mensagem = document.querySelector('.area_mensagem');

mensagem.textContent('TESTEEEE');


const atualizarValorSlider= () => {
    const min = Number(sliderMin.value);
    const max = Number(sliderMax.value);

    console.log(min,max);



    document.querySelector('.intervalo__valor--min').textContent = min;
    document.querySelector('.intervalo__valor--max').textContent = max;



    

};
slider_max.addEventListener('input', atualizarValorSlider);
slider_min.addEventListener('input', atualizarValorSlider);


atualizarValorSlider()



const verificarNumero = () => {
    if (sliderMin  > sliderMax){
        historico_lista.innerHTML('<li>O valor mínimo não pode ser maior que o valor máximo</li>')
    }
}



const gerarNumeroAleatorio =(min,max) => {
    let numeroAleatorio = Math.floor(Math.random()) * (max-min +1);
    numeroAleatorio += min;
    return numeroAleatorio;
}

const atualizarTexto = (elemento,valor) => {

}









sorteio.addEventListener('click', () => {
    verificarNumero
});



limpar.addEventListener('click', () => {
    alert('deu')
});
