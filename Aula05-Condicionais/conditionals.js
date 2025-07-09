//  estruturas de controle de fluxo que permitem que o código execute diferentes ações com base em condições específicas. As mais comuns são if, else if e else.

const idadeMaria = 16;
const maiorIdade = 18;

if (idadeMaria >= 18) {
  console.log ("Maria pode dirigir ");
} else {
   const anosFaltantes = maiorIdade - idadeMaria;
   console.log("Maria NÃO pode dirigir")
   console.log(`Faltam ${anosFaltantes} anos pra Maria poder dirigir.`);
}

// operadores ternários , simplificando estrutura de controle if else.

idadeMaria >= maiorIdade 
 ? console.log("Maria pode dirigir")
 : console.log ("Maria NÃO PODE dirigir");

console.log("____________________________________________")

const idadePessoa = 66;

// 0 a 12 anos -> infância
// 13 a 17 anos -> adolescência
// 18 a 25 anos -> jovem adulto
// 25 a 60 anos -> adulto
// mais que 60 anos -> idoso 

if (idadePessoa >= 0 && idadePessoa <= 12) {
  console.log("infância");
} else if (idadePessoa >= 13 && idadePessoa <= 17) {
     console.log("Adolescência");           
} else if (idadePessoa >= 18 && idadePessoa <= 25) {
   console.log("Jovem adulto");        
}  else if (idadePessoa >= 25 && idadePessoa <= 60) {
   console.log("Adulto");        
} else {
   console.log("Idoso");        
}




