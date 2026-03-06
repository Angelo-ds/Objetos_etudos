let cidade = "São Paulo"
const senai = {
    codigo: 603,
    cidade: 'araraquara',

    descreverEscola: () =>{
        console.log(`O código ${senai.codigo} pertence a Escola SENAI de ${senai.cidade}.`)
    }   //na arrow key o "this" pega do escopo global e não do objeto
};
// obejtos criados sempre herdarão do pai chamado "object"


senai.codigo =608
senai.cidade = 'Matao'


senai.descreverEscola()
