//--- Calcular Promedio ---
// Escribir una función que tome un array de números y calcule el promedio.
const averageNumbers = (numbers) => {
    return numbers.reduce((total, number) => total + number, 0);
}

const numbers = [28, 12, 39, 11, 79, 22, 81];
const average = averageNumbers(numbers);

console.log(average)