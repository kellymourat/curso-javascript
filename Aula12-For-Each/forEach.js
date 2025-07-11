const notasFinais = [
  { nome: "Kelly", nota: 4.5 },
  { nome: "Cassia", nota: 10 },
  { nome: "Junior", nota: 10 },
  { nome: "Catia", nota: 8.9 },
];

for (let i = 0; i < notasFinais.length; i++) {
  if (notasFinais[i].nota >= 6) {
    console.log(
      `${notasFinais[i].nome} está aprovado(a), nota ${notasFinais[i].nota}`
    );
  } else {
    console.log(
      `${notasFinais[i].nome} está aprovado(a), nota ${notasFinais[i].nota}`
    );
  }
}
console.log("_________________________________________________");

for (let aluno of notasFinais) {
  if (aluno.nota >= 6) {
    console.log(`O aluno ${aluno.nome} está aprovaddo com ${aluno.nota}`);
  } else {
    console.log(`O aluno ${aluno.nome} está reprovaddo com ${aluno.nota}`);
  }
}
console.log("_________________________________________________");

// forEach é um método que permite iterar sobre os elementos de um array, executando uma função para cada um deles. É uma forma de percorrer um array e aplicar a mesma lógica a cada elemento, sem a necessidade de um loop for tradiciona

notasFinais.forEach((aluno) => {
  if (aluno.nota >= 6) {
    console.log(`O aluno ${aluno.nome} está aprovaddo com ${aluno.nota}`);
  } else {
    console.log(`O aluno ${aluno.nome} está reprovaddo com ${aluno.nota}`);
  }
});
