const listaDeConvidados = ["Matheus", "Izabelli", "Amanda", "Paula"];

// Push / Pop / Shift / Unshift

listaDeConvidados.push("kelly"); // Push é utilizado para adicionar um ou mais elementos ao final de um array.
listaDeConvidados.pop(); // Pop remove o último elemento de um array.
listaDeConvidados.pop();
console.log(listaDeConvidados);                                 
listaDeConvidados.unshift("Cassia");// Unshift adiciona um ou mais elementos ao início de um array
listaDeConvidados.shift(); // remove o primeiro item da lista 

console.log(listaDeConvidados);

console.log("Cassia está na lista? ", listaDeConvidados.includes("Matheus")); // Includes verifica se o elemento está na lista. 