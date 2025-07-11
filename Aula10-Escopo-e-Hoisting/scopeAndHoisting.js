// Escopo

//1. Escopo Global:
//Variáveis declaradas fora de qualquer função ou bloco de código têm escopo global e são acessíveis de qualquer lugar no código. 

//2. Escopo Local:
//Variáveis declaradas dentro de uma função ou bloco de código (como um loop if ou for usando let ou const) têm escopo local e só podem ser acessadas dentro desse escopo ou de escopos internos a ele. 

// escopo de bloco se refere à área de código delimitada por chaves ({}) onde variáveis declaradas com let e const têm sua visibilidade restrita. Isso significa que essas variáveis só podem ser acessadas dentro do bloco em que foram definidas. Estruturas como if, for, while e outras que utilizam chaves criam escopos de bloco.

// escopo da função refere-se à área dentro de uma função onde as variáveis e funções declaradas são acessíveis. Ele define o contexto de execução e a visibilidade de determinados elementos do código dentro dessa função, mas não fora dela. 

const x = 'variavel global';

// Escopo de bloco
if (x) {
   const z = 'variavel de bloco'
   console.log("X é: ", x);
   console.log("z é: ", z);
}

// Escopo de função 
const funcao = () => {
   const a = 'variavel do escopo da funcao'
   console.log("Na Função, A é", a);

}

funcao ();

// Hoisting 
// "hoisting" é o comportamento em que as declarações de variáveis e funções são movidas para o topo do seu escopo, seja ele global ou de função, durante a fase de compilação do código, antes da sua execução



