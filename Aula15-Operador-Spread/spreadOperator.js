// Spread operators em arrays

// O operador spread, representado por três pontos (...), é uma funcionalidade do JavaScript (e outras linguagens) que permite espalhar os elementos de um array, objeto ou string em outro local onde múltiplos valores são esperados. Em termos simples, ele expande um iterável em seus elementos individuais.

const lista = ["Kelly", "Cassia", "Berg"];

// const listaBerg = [lista[0], lista[1], lista[2], "Diogo", "Afonso", "Sérgio"];

const listaBerg = [...lista, "Diogo", "Afonso", "Sérgio"];
console.log("Lista berg:", listaBerg);

console.log("lista", lista);

console.log("____________________________________________________");

//criando [...lista] (cópia), para nome inserido no lista2.push, não se repita na lista principal.

const lista2 = [...lista];

lista2.push("Leonardo");

console.log("lista 2:", lista2);
console.log("_______________________________________________________");

// Sprend operators em objetos

const professor1 = {
  materia: "Matematica",
  escola: "Escola João Salim Miguel",
  nome: "Beatriz",
};

const professor2 = {
  ...professor1,
  nome: "Décio",
};
console.log(professor1, professor2);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArray = [...arr1, ...arr2];
console.log(combinedArray);

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const combinedObject = { ...obj1, ...obj2 };
console.log(combinedObject);

function sum(x, y, z) {
  return x + y + z;
}
const numbers = [1, 2, 3];
const result = sum(...numbers);

//  uma cópia rasa (shallow copy) de um objeto ou array cria um novo objeto/array que contém cópias dos valores do primeiro nível. No entanto, se o objeto original contiver outros objetos ou arrays aninhados, a cópia rasa apenas armazena referências a esses objetos aninhados, ao invés de criar cópias independentes deles.

const original = {
  a: 1,
  b: {
    c: 2,
  },
};

// Shallow copy usando o spread operator
const shallowCopy = { ...original };

// Alterando um valor primitivo
shallowCopy.a = 10;
console.log("Original:", original.a); // Output: 1
console.log("Shallow Copy:", shallowCopy.a); // Output: 10

// Alterando um valor de um objeto aninhado
shallowCopy.b.c = 20;
console.log("Original:", original.b.c); // Output: 20
console.log("Shallow Copy:", shallowCopy.b.c); // Output: 20


// uma "deep copy" (cópia profunda) significa criar uma cópia completa e independente de um objeto, incluindo todos os seus níveis de aninhamento. Diferentemente da "shallow copy" (cópia rasa), que compartilha referências a objetos aninhados, a deep copy garante que o objeto copiado seja totalmente isolado do original, de modo que as alterações feitas em um não afetem o outro.

