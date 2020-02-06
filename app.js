const noteBodyInput = document.getElementById("noteBodyInput");
noteBodyInput.focus();
noteBodyInput.value = "";

const notes = document.getElementById("notes");
const createNewNoteBtn = document.getElementById("createNewNoteBtn");
const selectedNotes = document.getElementsByClassName("selected");

var notesArray = [];

var noteID = sessionStorage.getItem("noteID");
var selectedNote;

function initSetup() {
  if (sessionStorage.getItem("notesArray") != null) {
    noteID = 0;
    notesArray = sessionStorage.getItem("notesArray").split(",");
    console.log(notesArray);
    for (let i = 0; i < notesArray.length; i++) {
      var content = sessionStorage.getItem(notesArray[i]);
      var noteBlock = createNote(content);
      notes.prepend(noteBlock);
    }
  }
}
initSetup();

function createNote(content) {
  var noteBlock = document.createElement("li");
  noteBlock.addEventListener("click", selectedFunc);
  noteBlock.addEventListener("dblclick", deleteFunc);
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
    sessionStorage.setItem(noteBlock.id, noteBlock.textContent);
    notesArray.push(noteBlock.id);

    sessionStorage.setItem("notesArray", notesArray);
    notes.prepend(noteBlock);
  }
    noteBodyInput.value = "";
    noteBodyInput.focus();
    resetSelections();
});

noteBodyInput.addEventListener("input", function() {
  if (noteBodyInput.value.trim().length < 1) {
    resetSelections();
  }
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

// TODO: Problem: In our initSetup(), we always start at 1, so noteBlock1. If we delete that block, we will get an empty li
function deleteFunc(e) {
  sessionStorage.removeItem(e.target.id);
  document.getElementById(e.target.id).remove();
  var removedIndex = notesArray.indexOf(e.target.id);
  notesArray.splice(removedIndex, 1);
  console.log(notesArray);
  sessionStorage.setItem("notesArray", notesArray);
  noteID--;
  sessionStorage.setItem("noteID", noteID);
  noteBodyInput.value = "";
}
