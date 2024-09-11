    let notes = ['banana', 'döner kaufen'];

    function renderNotes() {
    //I must define where they are to be displayed
    let contenRef = document.getElementById('content');
    contenRef.innerHTML = "";
    
    for (let indexNote = 0; indexNote < notes.length; indexNote++){
        const note = notes[indexNote];
        contenRef.innerHTML += getNoteTemplate(note);
    }
    }

    function getNoteTemplate(note){
        return `<p>+ ${note}</p>`;
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

function deleteNote(indexNote){
    notes.splice(indexNote, 1);

    addNote();
    renderNotes();
}


//notizen archivieren