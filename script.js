    let notes = ['banana', 'döner kaufen'];

    function renderNotes() {
    //I must define where they are to be displayed
    let contenRef = document.getElementById('content');
    contenRef.innerHTML = "";
    
    for (let indexNote = 0; indexNote < notes.length; indexNote++){
        contenRef.innerHTML += getNoteTemplate(indexNote);
    }
    }

    function getNoteTemplate(indexNote){
        return `<p>+ ${notes[indexNote]}<button onclick="deleteNote(${indexNote})">Delete</button></p>`;
    }


//notizen hinzufügen
function addNote(){
    let noteInputRef = document.getElementById('note_input');
    let noteInput = noteInputRef.value;

    notes.push(noteInput);
    renderNotes();

    //Delete or clear again after entering the note
    noteInputRef.value = ''; 
}

//notizen löschen


// Anzeige updaten

function deleteNote(indexNote){
    notes.splice(indexNote, 1);

    renderNotes();
}


//notizen archivieren