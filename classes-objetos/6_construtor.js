class Senai{
    constructor(codigo,cidade,data){
        this.codigo = codigo;
        this.cidade = cidade;
        this.data = data;
    }

    dadosEscola(){
        console.log(`Unidade ${this.cidade} | Código interno: ${this.codigo} | Ano de Inauguração: ${this.data}`);
    }
}

const escolaA = new Senai(603, 'Araraquara','1990');
const escolaB = new Senai(145, 'São Carlos','2000');
const escolaC = new Senai(545, 'Américo Brasiliense','3024');

escolaA.dadosEscola();
escolaB.dadosEscola();
escolaC.dadosEscola();