

class Senai{
    constructor(codigo,cidade,anoConstrucao,quantidadedeCursos){
        this.codigo = codigo;
        this.cidade = cidade;
        this.anoConstrucao = anoConstrucao;
        this.quantidadedeCursos =  quantidadedeCursos;

        this.idade = new Date().getFullYear() - anoConstrucao;
    }

    dadosEscola(){
        console.log(`\n==RELATÓRIO DE CADASTRO: ${this.cidade.toUpperCase()} ===`);
        console.log(`Código: ${this.codigo}`);
        console.log(`Fundação: ${this.anoConstrucao} (${this.idade} anos de história)`);
        console.log(`Capacidade: ${this.quantidadedeCursos} cursos ativos.`); //o THIS dentro de um objeto só vai se referir a variavel dentro daquele objeto, se houver algo do lado de fora (scopo global) ele não traz.
        console.log('--------------------------------------------------------------------------------------------==\n');
    
    }
}
const escolaA = new Senai(603, 'Araraquara','2000','39');
const escolaB = new Senai(145, 'São Carlos','2000','27');
const escolaC = new Senai(545, 'Américo Brasiliense','200','15');



const compararEscolas = (escolaA,escolaB,escolaC) =>{
    console.log(`> Comparando oferta de cursos: ${escolaA.cidade} vs ${escolaB.cidade} vs ${escolaC.cidade}...`)

    if (escolaA.quantidadedeCursos > escolaB.quantidadedeCursos && escolaA.quantidadedeCursos > escolaC.quantidadedeCursos){
        console.log(`Resultado: O SENAI ${escolaA.cidade} possui mais cursos`);

    } else if (escolaB.quantidadedeCursos > escolaA.quantidadedeCursos && escolaB.quantidadedeCursos > escolaC.quantidadedeCursos){
        console.log(`Resultado: O SENAI ${escolaB.cidade} possui mais cursos`);
    } else if (escolaC. quantidadedeCursos > escolaA.quantidadedeCursos && escolaC.quantidadedeCursos > escolaB.quantidadedeCursos){
        console.log(`Resultado: O SENAI ${escolaC.cidade} possui mais cursos`);
    }else{
        console.log(`Resultado: Todas as unidades possuem a mesma quantidade de cursos.`);
    }
    console.log(`Status: ${escolaA.cidade} (${escolaA.quantidadedeCursos}) | ${escolaB.cidade} (${escolaB.quantidadedeCursos}) | ${escolaC.cidade} (${escolaC.quantidadedeCursos}) \n`);
}

compararEscolas(escolaA,escolaB,escolaC);