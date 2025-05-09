//--- Filtrar Números Pares ---
// Crear una función que reciba un array de números 
// y devuelva un nuevo array que contenga solo los números pares.

const getEvenNumbers = (numbers) => {
    return numbers.filter(num => num % 2 == 0)
}

const numbers = [1,4,5,7,2,21,-8]
const evenNumbers = getEvenNumbers(numbers)

evenNumbers.forEach(num => console.log(num));