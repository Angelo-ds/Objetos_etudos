// modo rice and beans
class Senai {
    constructor(codigo, cidade, anoConstrucao, quantidadedeCursos,statusFuncionamento){
      this.codigo = codigo;
      this.cidade = cidade;
      this.anoConstrucao = anoConstrucao; 
      this.quantidadedeCursos = quantidadedeCursos;
      this.statusFuncionamento = false;
      this.idade = new Date().getFullYear() - this.anoConstrucao;
    }
  
    dadosEscola() {
    console.log(`\n== UNIDADE: ${this.cidade.toUpperCase()} ==`);
    if (this.statusFuncionamento == false){
        console.log('Status atual: FECHADO')
    }
    if (this.statusFuncionamento == true){
        console.log('Status atual: ABERTO')
    }
      console.log(`Idade: ${this.idade} anos | Cursos: ${this.quantidadedeCursos}`);
      console.log('------------------------------------------------\n');
    }
  
    abrirEscola() {
    if (this.statusFuncionamento == false){
        this.statusFuncionamento = true;
        console.log(`\n== [SISTEMA] O SENAI ${this.cidade} agora está ABERTO. Bem-vindos! ==`);
        this.dadosEscola();
        
        }
    }
  
    fecharEscola() {
    if (this.statusFuncionamento == true){
        this.statusFuncionamento = false;
        console.log(`\n== [SISTEMA] O SENAI ${this.cidade} foi FECHADO. Até amanhâ! ==`);
        this.dadosEscola();
        }
    }
  }


  
// Instanciando corretamente
const escolaA = new Senai(603, 'Araraquara', 2000, 39);
escolaA.dadosEscola();
escolaA.abrirEscola();
escolaA.fecharEscola();







// MODO AVANÇADO
// class Senai {
//     constructor(codigo, cidade, anoConstrucao, quantidadedeCursos, statusFuncionamento = false) {
//       this.codigo = codigo;
//       this.cidade = cidade;
//       this.anoConstrucao = anoConstrucao; 
//       this.quantidadedeCursos = quantidadedeCursos;
//       this.statusFuncionamento = statusFuncionamento;
//       this.idade = new Date().getFullYear() - this.anoConstrucao;
//     }
  
//     dadosEscola() {
//       const status = this.statusFuncionamento ? "ABERTO" : "FECHADO"; // o "?" ve se é verdadeiro o statusFuncionamento, e o ":" separa o que vai aparecer se for verdadeiro, do que vai aparecer do falso, respectivamente.
//       console.log(`\n== UNIDADE: ${this.cidade.toUpperCase()} ==`);
//       console.log(`Status atual: ${status}`);
//       console.log(`Idade: ${this.idade} anos | Cursos: ${this.quantidadedeCursos}`);
//       console.log('------------------------------------------------\n');
//     }
  
//     abrirEscola() {
//       this.statusFuncionamento = true;
//       console.log(`\n== [SISTEMA] O SENAI ${this.cidade.toUpperCase()} agora está ABERTO. Bem-vindos! ==`);
//       this.dadosEscola();
//     }
  
//     fecharEscola() {
//       this.statusFuncionamento = false;
//       console.log(`\n== [SISTEMA] O SENAI ${this.cidade.toUpperCase()} foi FECHADO. Até amanhâ! ==`);
//       this.dadosEscola();
//     }
//   }
  
//   // Instanciando corretamente
//   const escolaA = new Senai(603, 'Araraquara', 2000, 39);
//   escolaA.dadosEscola();
//   escolaA.abrirEscola();
//   escolaA.fecharEscola();

