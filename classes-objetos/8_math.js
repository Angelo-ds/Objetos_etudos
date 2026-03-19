// const gerarNumeroAleatorio = (numero) =>{
//     let numeroAleatorio = Math.random();
//     console.log(`Sorteio : ${numeroAleatorio}`)

//     numeroAleatorio *= numero

//     console.log(`Multiplicar: ${numeroAleatorio}`);


//     numeroAleatorio = Math.floor(numeroAleatorio);
//     console.log(`Arrendondar: ${numeroAleatorio}`)

//     numeroAleatorio += 1;
//     console.log(`Somar 1: ${numeroAleatorio}`);

//     return numeroAleatorio;

// }

// let numeroSorteado = gerarNumeroAleatorio(numero);


// console.log(`Numero sorteado: ${numeroSorteado}`);


const gerarNumeroAleatorio = (min = 2, max = 30) => {
    return Math.floor(Math.random() * (max-min+1)) +min;
}

console.log(gerarNumeroAleatorio());
console.log(gerarNumeroAleatorio(10,15));