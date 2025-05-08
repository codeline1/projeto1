const form = document.getElementById('taskForm');
const taskList = document.getElementById('taskList');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const datetime = document.getElementById('datetime').value;
    // ... outros valores

    const newTask = document.createElement('li');
    newTask.innerHTML = `
        <span>${name} - ${datetime}</span>
        <button onclick="editar()">Editar</button>
        <button onclick="remover()">Remover</button>
    `;

    taskList.appendChild(newTask);

    form.reset();
});
