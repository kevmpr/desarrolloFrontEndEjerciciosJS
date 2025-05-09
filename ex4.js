// --- Operación con Callback ---
// Crear una función que reciba un callback y dos números, aplique el callback 
// y devuelva el resultado. Implementar al menos dos callbacks diferentes.

const calculator = (operation, number1, number2) => {
    return operation(number1, number2);
}

const addition = (number1, number2) => {
    return number1 + number2;
}

const substraction = (number1, number2) => {
    return number1 - number2;
}

const multiplication = (number1, number2) => {
    return number1 * number2;
}

const division = (number1, number2) => {
    return number1 / number2;
}

const result1 = calculator(addition, 4, 2) // 6
const result2 = calculator(substraction, 18, 4) // 14
const result3 = calculator(multiplication, 3, 9) // 27
const result4 = calculator(division, 81, 9) // 9

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);