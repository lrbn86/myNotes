const noteBodyInput = document.getElementById("noteBodyInput");
noteBodyInput.focus();
noteBodyInput.value = "";

const notes = document.getElementById("notes");
const createNewNoteBtn = document.getElementById("createNewNoteBtn");
const selectedNotes = document.getElementsByClassName("selected");

var noteID = sessionStorage.getItem("noteID");
var selectedNote;

function initSetup() {
  noteID = 0;
  for (let i = 1; i < sessionStorage.length; i++) {
    const item = sessionStorage.getItem("noteBlock" + i);
    var noteBlock = createNote(item);
    noteBlock.addEventListener("click", selectedFunc);
    notes.prepend(noteBlock);
  }
}
initSetup();

function createNote(content) {
  var noteBlock = document.createElement("li");
  noteID++;
  sessionStorage.setItem("noteID", noteID);
  noteBlock.id = "noteBlock" + noteID;
  noteBlock.className = "noteBlock";
  noteBlock.textContent = content;
  return noteBlock;
}

// Listen for new notes being added
createNewNoteBtn.addEventListener("click", function() {
  if (noteBodyInput.value.trim().length >= 1) {
    var noteBlock = createNote(noteBodyInput.value);
    noteBlock.addEventListener("click", selectedFunc);
    sessionStorage.setItem(noteBlock.id, noteBlock.textContent);
    notes.prepend(noteBlock);
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
