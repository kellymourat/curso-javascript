// Em JavaScript, um template literal (também chamado de template string) é uma forma de criar strings que permite a inclusão de expressões dentro delas, utilizando crases (``) em vez de aspas simples ou duplas.

function imprimir () {
   console.log("Olá Mundo");

}

imprimir();

function calculadoraSoma(valor1, valor2) {
      return valor1 + valor2;

}

const valor1 = 2;
const valor2 = 4;
console.log(`A soma entre ${valor1} e 4 é ${calculadoraSoma(2, 4)}`);