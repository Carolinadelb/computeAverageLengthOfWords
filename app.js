/*
Escriba una función 'computeAverageLengthOfWords' que recibe dos strings y devuelve el promedio de la longitud de ambos strings.

Ejemplo de entrada:

var output = computeAverageLengthOfWords('code', 'programs');
console.log(output); // --> 6
*/


 let computeAverageLengthOfWords = (word1, word2) => {
   return (word1.length + word2.length) / 2;
 }

/* 
Escriba una función llamada getNthElement.

Dado un arreglo y un entero, getNthElement devuelve el valor según el entero dado, dentro del arreglo dado.

Notas:

Si el arreglo tiene una longitud de 0, debería devolver' undefined'.
Ejemplo de entrada:

var output = getNthElement([1, 3, 5], 1);
console.log(output); // --> 3
*/


let num = [1, 3, 5];

let filterN = num.filter((i, )=>{
  return i = 3;
});

