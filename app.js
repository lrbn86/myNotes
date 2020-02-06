const noteBodyInput = document.getElementById("noteBodyInput");
const notes = document.getElementById("notes");
const createNewNoteBtn = document.getElementById("createNewNoteBtn");
const selectedNotes = document.getElementsByClassName("selected");

var noteBoxes;
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
    noteBlock.name = "noteBlock";
    noteBlock.textContent = noteBodyInput.value;
    notes.prepend(noteBlock);

    noteBoxes = document.getElementsByClassName("noteBlock");
    for (let i = 0; i < noteBoxes.length; i++) {
      noteBoxes[i].addEventListener("click", selectedFunc);
    }
  }
    noteBodyInput.value = "";
    noteBodyInput.focus();
    notes.scrollTop = notes.scrollHeight;
    resetSelections();
});

function resetSelections() {
  for (let i = 0; i < selectedNotes.length; i++) {
    selectedNotes[i].classList.remove("selected");
  }
}

function selectedFunc(e) {
  resetSelections();
  e.target.classList.add("selected");
  noteBodyInput.value = e.target.textContent;
  noteBodyInput.focus();
}
