const noteBodyInput = document.getElementById("noteBodyInput");
noteBodyInput.focus();
noteBodyInput.value = "";

const notes = document.getElementById("notes");
const createNewNoteBtn = document.getElementById("createNewNoteBtn");
const selectedNotes = document.getElementsByClassName("selected");
const hintMessage = document.getElementsByClassName("hintMessage");

// Stores all the notes in a array
var notesArray = [];

function initSetup() {
  if (sessionStorage.getItem("notesArray") != null && sessionStorage.getItem("notesArray") != "") {
    notesArray = JSON.parse(sessionStorage.getItem("notesArray"));
    
    notesArray.forEach(function(note) {
      var noteBlock = createNote(note);
      notes.prepend(noteBlock);
    });
  }
}
initSetup();

function createNote(content) {
  var noteBlock = document.createElement("li");
  noteBlock.addEventListener("click", selectedFunc);
  noteBlock.addEventListener("dblclick", deleteFunc);
  noteBlock.className = "noteBlock";
  noteBlock.textContent = content;
  return noteBlock;
}

// Listen for new notes being added
createNewNoteBtn.addEventListener("click", function() {
  // Make sure there are no blanks
  if (noteBodyInput.value.trim().length >= 1) {
    notesArray.push(noteBodyInput.value);
    var noteBlock = createNote(noteBodyInput.value);
    notes.prepend(noteBlock);
    sessionStorage.setItem("notesArray", JSON.stringify(notesArray));
    // Display hints
    for (let i = 0; i < hintMessage.length; i++) {
      hintMessage[i].style.visibility = "visible";
    }
  }

  noteBodyInput.value = "";
  noteBodyInput.focus();
  resetSelections();
});

// Remove selection highlights if anything changes in notesBodyInput
noteBodyInput.addEventListener("input", function() {
  resetSelections();
});

// Removes selection indicator on all notes
function resetSelections() {
  for (let i = 0; i < selectedNotes.length; i++) {
    selectedNotes[i].classList.remove("selected");
  }
}

// Highlight (by changing background color thru css) selected element
function selectedFunc(e) {
  resetSelections();
  e.target.classList.add("selected");
  noteBodyInput.value = e.target.textContent;
  noteBodyInput.focus();
}


// Remove selected element from both array and storage
function deleteFunc(e) {
  notesArray.splice(notesArray.indexOf(e.target.textContent), 1);
  sessionStorage.setItem("notesArray", JSON.stringify(notesArray));
  notes.removeChild(e.target);
  noteBodyInput.value = "";
}

