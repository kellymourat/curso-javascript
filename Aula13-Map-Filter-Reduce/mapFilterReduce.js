// "array function" (função de array) é uma sintaxe alternativa para definir funções, que é mais curta e concisa, especialmente útil para funções simples.

const distanciaEmMetros = [1000, 1500, 2000, 2500, 3000, 3500, 4000];

// MAP

const distanciaEmKM = distanciaEmMetros.map((distancia) => distancia / 1000);
console.log("Distancia em KM: ", distanciaEmKM);

//const distanciaEmKM = distancia / 1000;
//console.log("Distância em Km", distancia / 1000);

// FILTER

const itensFiltrados = distanciaEmMetros.filter(
  (distancia, index, arrayOriginal) => {
    console.log(`A distancia ${distancia} está no índice ${index}`);
    console.log(`Array original: ${arrayOriginal}.`);
    if (distancia > 2000) return distancia;
  }
);
console.log("Itens Filtrados ", itensFiltrados);

// Para uma única e expressão

//const itensFiltrados = distanciaEmMetros.filter(distancia => distancia > 2000);

//console.log("Itens Filtrados: ", itensFiltrados);

// REDUCE

const distanciaTotal = distanciaEmMetros.reduce((acc, distancia ) => {
    return acc + distancia     
});

console.log("Distacia Total: ", distanciaTotal);


