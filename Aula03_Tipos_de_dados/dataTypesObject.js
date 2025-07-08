
const fichaDaKelly = {
   nome: "kelly",
   idade: 30,
   profissao: "programadora",
   temFilhos: false, 
}; 

console.log('Ficha Da kelly: ', fichaDaKelly);

console.log('Nome:', fichaDaKelly);

console.log('Idade: ' + fichaDaKelly.idade);

fichaDaKelly.carro = "Opel"; // add uma nova propriedade.

console.log('ficha Da Kelly ', fichaDaKelly); // adcionando object 

delete fichaDaKelly.idade; // manipulando object, removendo propriedades. 

console.log('ficha Da Kelly ', fichaDaKelly)

console.log('Idade', fichaDaKelly.idade); // retorna o valo undefined.


console.log("Olá, " + fichaDaKelly.nome); // Sem interpolação (tradicional):
console.log(`profissão: ${fichaDaKelly.profissao}`) //template literal, permite interpolar variáveis com ${...}.
console.log(`Olá, ${fichaDaKelly.nome}`); // Mais limpo, mais fácil de ler e escrever.

console.log('A' + 'B');
console.log('A' + 2); // concatenação de strings é o processo de combinar duas ou mais strings em uma única string. O operador "+" é frequentemente usado para concatenar strings, ou seja - no console imprime AB.