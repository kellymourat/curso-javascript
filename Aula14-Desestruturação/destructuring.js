// desestruturação de arrays é um recurso que permite extrair valores de um array e atribuí-los a variáveis distintas, de forma mais concisa e legível. Simplifica o acesso a elementos específicos de um array, tornando o código mais eficiente, especialmente ao lidar com arrays complexos ou quando se precisa apenas de alguns elementos. 

// const nomes = ["Maria", "Beatriz", "Matheus" ];

// const nome1 = nomes[0];
// const nome2 = nomes[1];
// const nome3 = nomes[2];

// const [nome1, nome2, nome3] = nomes;

// console.log("Nome 1: ", nome1);
// console.log("Nome 2: ", nome2);
// console.log("Nome 3: ", nome3);

const casais = [["Maria", "Decio"], ["Matheus", "Beatriz"]];

// const [casal1, casal2] = casais;

// console.log("Casal 1",casal1);
// console.log("Casal 2",casal2);~

const [[nome1, nome2], [nome3, nome4]] = casais;

// console.log("nome 1:", nome1);
// console.log("nome 2:", nome2);
// console.log("nome 3:", nome3);
// console.log("nome 4:", nome4);

// Desestruturação de objetos 
// Desestruturação (ou "destructuring") é uma expressão que permite extrair valores de arrays ou propriedades de objetos e atribuí-los a variáveis individuais de forma mais concisa e legível. Em vez de acessar cada elemento ou propriedade separadamente (ex: objeto.propriedade), a desestruturação permite fazer isso de uma vez só, em uma única linha de código. 


// const pessoa = {
//   nome: "Maria",
//   sobrenome: "Elena",
//   familia:["Décio", "Beatriz", "Matheus"]

// }

// const { nome: primeiroNome, sobrenome: segundoNome, familia: nembrosFamilia } = pessoa;

// console.log(primeiroNome, segundoNome, nembrosFamilia)


const pessoa = {
  nome: "Maria",
  sobrenome: "Elena",
  familia:["Décio", "Beatriz", "Matheus"]

}

const {nome, sobrenome, familia} = pessoa;

console.log(pessoa)







