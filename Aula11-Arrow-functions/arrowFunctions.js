//const calculadoraSoma = function (valor1, valor2) {
//    return valor1 + valor2;
//}

// arrow functions (funções de seta) são uma forma mais concisa de escrever funções, introduzidas no ES6 (ECMAScript 2015).

const calcularSoma = (valor1, valor2) => valor1 + valor2;

const valor1 = 12;
const valor2 = 24;

const resultadoSoma = calcularSoma(valor1, valor2); 
  
console.log(`A soma entre ${valor1} e ${valor2} é ${calcularSoma(valor1,valor2)}`)

const imprimir = impressao => console.log(impressao);

imprimir("Olá Mundo");