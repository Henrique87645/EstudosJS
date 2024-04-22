function addNote() {
const noteContent = document.getElementById("note-content").value.trim();
    if(noteContent !== "") {
        const noteElement = document.createElement("div");
        noteElement.classList.add("note");
        noteElement.innerHTML = `
        <P>${noteContent}</P>
        <button onclick="editNote(this)">Edit</button>
        <button onclick="deleteNote(this)">Delete</button>
        `;
        document.getElementById("notes-container").appendChild(noteElement);
        document.getElementById("note-content").value = "";
    } else {
        alert("Por favor insira uma observação antes de adicionar.");
    }
}

function editNote(button) {
    const noteElement = button.parentNode;
    const noteContent = noteElement.querySelector('p').textContent;
    const updatedContent = prompt('Edite sua nota:', noteContent);
    if (updatedContent !== null) {
        noteElement.querySelector('p').textContent = updatedContent;
    }
}

function deleteNote(button) {
    const noteElement = button.parentNode;
    noteElement.remove();
}

function setReminder() {
    const reminderTime = document.getElementById('reminder-input').value;
    if (reminderTime !== '') {
        alert('Lembrete definido para: ' + reminderTime);
    } else {
        alert('Selecione um horário para o lembrete.');
    }
}

function searchNotes() {
    const searchTerm = document.getElementById('search-input').value.trim().toLowerCase();
    const notes = document.querySelectorAll('.note');
    notes.forEach(note => {
        const noteText = note.querySelector('p').textContent.toLowerCase();
        if (noteText.includes(searchTerm)) {
            note.style.display = 'block';
        } else {
            note.style.display = 'none';
        }
    });
}