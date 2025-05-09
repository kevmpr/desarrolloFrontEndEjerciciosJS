// --- Agregar Elementos a una Lista ---
// Crear una lista desordenada vacía y un botón. 
// Al hacer clic en el botón, agregar un nuevo elemento a la lista 
// con un número que se incremente automáticamente.

const addButton1 = document.getElementById('add1');
const list1 = document.getElementById('list1');
let itemCount1 = 0;

addButton1.addEventListener('click', () => {
    itemCount1++;
    const newItem = document.createElement('li');
    newItem.textContent = `Elemento ${itemCount1}`;
    list1.appendChild(newItem);
});