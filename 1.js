function moveLowestToStart(arr) {
  let lowestValueIndex = 0;

  // Encontrar el índice del valor más bajo en la matriz
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[lowestValueIndex]) {
      lowestValueIndex = i;
    }
  }

  // Almacenar el valor del elemento más bajo en una variable temporal
  const temp = arr[lowestValueIndex];

  // Desplazar hacia atrás los elementos que estaban antes
  for (let i = lowestValueIndex; i > 0; i--) {
    arr[i] = arr[i - 1];
  }

  // Asignar el valor almacenado anteriormente a la primera posición de la matriz
  arr[0] = temp;

  return arr;
}

// Ejemplo de uso 
const arr = [4, 2, 6, 3, 5];
console.log(moveLowestToStart(arr)); // Output: [1, 4, 2, 3, 5]
