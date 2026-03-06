let quadrado = { //cria um  objeto com CHAVES "{}"
    lados: 4, // o Lados é uma chave, e o 4 é o valor da chave
    area: function(lado){
        return lado * lado
    },
    perimetro: function(lado){
        return lado + lado + lado + lado //o this referencia um outro objeto dentro da função
    }
}; // os objetos sempre finalizam com virgula se não forem o ultimo item, se for o ultimo não coloca nada.
// let quadrado2 = []; //cria um array/vetor com COLCHETES "[]"

quadrado.cor = '#000'; //tem como incrementar coisas no objeto com o mero ".""