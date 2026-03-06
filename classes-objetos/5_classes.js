class Senai{
    codigo;
    cidade;

    descreverEscola(){
        console.log(`O código ${senai.codigo} pertence a Escola SENAI de ${senai.cidade}.`)
    }
}

// instânciar é uma ocorrencia, ou seja uma criação de um novo objeto
// o "new" é uma instância que cria um novo senai para esse objeto
const senaiArqa = new senai();
senaiArqa.codigo = 603;
senaiArqa.cidade = 'Araraquara';

const senaiMat = new senai();
senaiMat.cidade = 'Matão';
senai.codigo = 145;
senaiMat.rua = 'Rua das Flores'

senaiArqa.descreverEscola();
senaiMat.descreverEscola();