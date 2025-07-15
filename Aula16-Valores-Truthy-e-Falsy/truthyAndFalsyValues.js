// Valores Truthy e valores Falsy 

// são diferentes de true e false

// Valores falsy no JS:

// 0, "", undefined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean(undefined));
// console.log(Boolean(null));


//Exmplos e valores Truthy (valores que quando convertido para boolean são true);
// console.log(Boolean(1));
// console.log(Boolean("Olá, mundo!"))
// console.log("Objeto:", Boolean({valor1: 1, valor2: 2}))
// console.log("Array:", Boolean([1,2]))
// console.log("Objeto vazio:", Boolean({}))
// console.log("Array vazio:", Boolean([]))

const nomes = ['Maria', 'Pedro', '', 'Matheus']
console.log(nomes);

//const nomesFiltrados = nomes.filter ((nome) => Boolean (nome));
const nomesFiltrados = nomes.filter ((nome) => (nome));

console.log(nomesFiltrados);

nomes.forEach (nome => {
   if (nome) {
      console.log(nome)

   }
});

const x = 10;
const y = null;

if (x) {
   console.log("X é uma variável thuthy")

}

if (y) {
  console.log("Y é uma variável truthy")

}
