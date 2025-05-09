// --- Eliminar Elementos de una Lista ---
// Modificar el ejercicio anterior para que cada elemento 
// generado tenga un botón de "Eliminar" que borre solo ese elemento de la lista.

const addButton2 = document.getElementById('add2');
const list2 = document.getElementById('list2');
let itemCount2 = 0;

addButton2.addEventListener('click', () => {
    itemCount2++;

    const newItem = document.createElement('li');

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';

    deleteButton.addEventListener('click', () => {
        list2.removeChild(newItem);
    });

    newItem.textContent = `Elemento ${itemCount2}`;
    newItem.appendChild(deleteButton);
    
    list2.appendChild(newItem);
});