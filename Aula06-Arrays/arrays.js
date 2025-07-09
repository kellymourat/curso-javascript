//  array é uma estrutura de dados que permite armazenar múltiplos valores sob um único nome, organizados em uma sequência.

const ListaDeConvidados = ["kelly", "Maria", "Catia", "Michele", "Cassia"];

console.log("Lista de convidados: ", ListaDeConvidados);

// length é uma propriedade usada para obter o número de elementos em um array ou o número de caracteres em uma string
console.log("Quanttos convidados ?", ListaDeConvidados.length);

// Para acessar um elemento específico em um array, utiliza-se a notação de colchetes [] seguida do índice do elemento desejado. Por exemplo, se você tem um array chamado frutas e deseja acessar o primeiro elemento (índice 0), você usaria frutas[0].
 
console.log("Convidado número 1:", ListaDeConvidados[0]);
console.log("Convidado número 4", ListaDeConvidados[3]);
console.log("Ultimo convidado da lista",ListaDeConvidados[ListaDeConvidados.length -1]);

// Criando um array de frutas
let frutas = ["maçã", "banana", "laranja"];

// Acessando o segundo elemento (índice 1)
console.log(frutas[1]);

// Adicionando um novo elemento ao final do array
frutas.push("uva");

// Imprimindo o array atualizado
console.log(frutas); 