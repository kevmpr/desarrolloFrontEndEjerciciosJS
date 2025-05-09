//---Imprimir con Retraso ---
// Usar una función flecha y setTimeout para imprimir cada elemento 
// de un array con un retraso de 1 segundo por elemento.

const delayedPrint = (elements) => {
    elements.forEach((element, index) => {
        setTimeout(() => {
            console.log(element);
        }, (index + 1) * 1000);
    });
}

const elements = ['Kevin', 'Lucia', 'Federico', 'Paula', 'Teresa'];
delayedPrint(elements);