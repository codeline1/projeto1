const taskForm = document.getElementById('taskForm');
const taskList = document.getElementById('taskList');
const saveFileButton = document.getElementById('saveFile');

let tasks = [];

taskForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const task = {
        text: taskForm.task.value,
        completed: false
    };
    tasks.push(task);
    renderTasks();
    taskForm.reset();
});

function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <input type="checkbox" ${task.completed ? 'checked' : ''}>
            <span class="${task.completed ? 'completed' : ''}">${task.text}</span>
            <button class="delete">Excluir</button>
        `;
        taskList.appendChild(li);

        // ... (restante do código para marcar como concluída e excluir)
    });
}

saveFileButton.addEventListener('click', () => {
    const filename = prompt('Digite o nome do arquivo JSON (ex: minhas_tarefas.json):');

    if (filename) {
        const data = JSON.stringify(tasks, null, 2);
        const blob = new Blob([data], { type: 'application/json' });
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        a.click();
    }
});
