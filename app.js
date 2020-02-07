const noteBodyInput = document.getElementById("noteBodyInput");
noteBodyInput.focus();
noteBodyInput.value = "";

const notes = document.getElementById("notes");
const createNewNoteBtn = document.getElementById("createNewNoteBtn");
const selectedNotes = document.getElementsByClassName("selected");

var notesArray = [];

function initSetup() {
  // When page is freshly loaded, we want to check if there exists notes already
  // If there are notes in storage, then render them
  // TODO:
}
initSetup();

function createNote(content) {
  var noteBlock = document.createElement("li");
  noteBlock.addEventListener("click", selectedFunc);
  noteBlock.addEventListener("dblclick", deleteFunc);
  noteBlock.className = "noteBlock";
  // TODO:
  noteBlock.textContent = content;
  return noteBlock;
}

// Listen for new notes being added
createNewNoteBtn.addEventListener("click", function() {
  // Make sure there are no blanks
  if (noteBodyInput.value.trim().length >= 1) {
    // TODO:
  }
    noteBodyInput.value = "";
    noteBodyInput.focus();
    resetSelections();
});

// If user selects a note, but then erases the note's content, then it will deselect.
noteBodyInput.addEventListener("input", function() {
  if (noteBodyInput.value.trim().length < 1) {
    resetSelections();
  }
});

// Removes selection indicator on all notes
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

// TODO:
function deleteFunc(e) {

  noteBodyInput.value = "";
}

