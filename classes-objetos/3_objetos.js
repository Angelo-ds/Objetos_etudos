// let quadrado = { //cria um  objeto com CHAVES "{}"
//     lados: 4, // o Lados é uma chave, e o 4 é o valor da chave
//     area: function(lado){
//         return lado * lado
//     },
//     perimetro: function(lado){
//         return lado + lado + lado + lado //o this referencia um outro objeto dentro da função
//     } // os objetos sempre finalizam com virgula se não forem o ultimo item, se for o ultimo não coloca nada.
// let quadrado2 = []; //cria um array/vetor com COLCHETES "[]"

//quadrado.cor = '#000'; //tem como incrementar coisas no objeto com o mero "."

const senai = {
    condigo: 603,
    cidade: 'araraquara'
};

senai.telefone = 1533035252;
senai.rua = 'Hugo Negrini';
senai.telefone = 1723158968
// delete senai.rua

senai.endereco = {rua:'Hugo Negrini', bairro: 'Quitandinha',
     numero: 56}
senai.alunos = ['SESI', 'EEBA', 'comunidade']

senai.endereco.numero = 62
senai.alunos[2] ='TECNICO' // para acessar o array precisa do colchete