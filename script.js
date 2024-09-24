let notes = ['banana', 'döner kaufen'];

let trashNotes = [];


function renderNotes() {
    //I must define where they are to be displayed
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = "";
    
    for (let indexNote = 0; indexNote < notes.length; indexNote++){
    contentRef.innerHTML += getNoteTemplate(indexNote);
    }
}

function  renderTrashNotes(){ // Move deleted notes to the trash bin
    let trashContentRef = document.getElementById('trash_content');
    trashContentRef.innerHTML = "";
        
    for (let indexTrashNote = 0; indexTrashNote < trashNotes.length; indexTrashNote++){
        trashContentRef.innerHTML += getTrashNoteTemplate(indexTrashNote);
    }
}

function getNoteTemplate(indexNote){
    return `<p>+ ${notes[indexNote]}<button onclick="deleteNote(${indexNote})">Delete</button></p>`;
}

function getTrashNoteTemplate(indexTrashNote){
    return `<p>+ ${trashNotes[indexTrashNote]}</p>`;
}


//notizen hinzufügen
function addNote(){
    let noteInputRef = document.getElementById('note_input');
    let noteInput = noteInputRef.value.trim();

    if (noteInput !== ''){
    notes.push(noteInput);
    renderNotes();
    noteInputRef.value = '';
    }

    //Delete or clear again after entering the note
    noteInputRef.value = ''; 
}

//notizen löschen


// Anzeige updaten

function deleteNote(indexNote){
    let trashNote = notes.splice(indexNote, 1);
    trashNotes.push(trashNote[0]);
    renderNotes();
    renderTrashNotes();
}

function trashNote(indexTrashNote) {
    let trashNote = trashNotes.splice(indexTrashNote, 1);
    notes.push(trashNote[0]);
    renderNotes();
    renderTrashNotes();
}

renderNotes();
renderTrashNotes();