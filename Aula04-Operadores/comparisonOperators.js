// operadores de comparação são usados para comparar valores e retornar um valor booleano (verdadeiro ou falso) indicando o resultado da comparação.

// == (igualdade): Compara se dois valores são iguais,  após converter ambos para um tipo comum, se necessário. 
// === (igualdade estrita): Compara se dois valores são iguais e do mesmo tipo, sem conversão. 
// != (desigualdade): Compara se dois valores são diferentes, após conversão de tipo. 
// !== (desigualdade estrita): Compara se dois valores são diferentes ou de tipos diferentes. 
// > (maior que): Compara se o valor da esquerda é maior que o da direita. 
// >= (maior ou igual a): Compara se o valor da esquerda é maior ou igual ao da direita. 
// < (menor que): Compara se o valor da esquerda é menor que o da direita. 
// <= (menor ou igual a): Compara se o valor da esquerda é menor ou igual ao da direita. 

console.log("____________________________________________________")

const idadeKel = 30;
const idadeBia = 25;

console.log("Kel é mais velha que Bia ? ", idadeKel > idadeBia);
console.log("Bia é mais velha que kel ? ", idadeKel < idadeBia);
console.log("Idade kel, é menor ou igual idade de Bia ?", idadeKel <= idadeBia);

const maiorIdade = 18;

console.log("Bia é maior de idade ?", idadeBia >= maiorIdade);

const x = 10;
const y = 20;
const z = "10";
console.log("O valor " + x + " é igual ao valor " + y, x===y);
console.log("O valor " + x + " é igual ao valor " + z, x===z);
console.log("O valor " + x + " é igual ao valor " + z, x==z);
