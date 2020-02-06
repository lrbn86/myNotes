const noteBodyInput = document.getElementById("noteBodyInput");
const notes = document.getElementById("notes");
const createNewNoteBtn = document.getElementById("createNewNoteBtn");

var noteID = 0;
var selectedNote;

noteBodyInput.focus();
noteBodyInput.value = "";

createNewNoteBtn.addEventListener("click", function() {
  if (noteBodyInput.value.trim().length >= 1) {
    var noteBlock = document.createElement("li");
    noteID++;
    noteBlock.id = "noteBlock" + noteID;
    noteBlock.className = "noteBlock";
    noteBlock.textContent = noteBodyInput.value;
    notes.append(noteBlock);
    console.log(noteBlock.textContent);
  }
    noteBodyInput.value = "";
    noteBodyInput.focus();

});
