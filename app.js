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
    noteBlock.className = "noteBlock unselectable not-selected";
    noteBlock.name = "noteBlock";
    noteBlock.textContent = noteBodyInput.value;
    notes.prepend(noteBlock);
  }
    noteBodyInput.value = "";
    noteBodyInput.focus();
    notes.scrollTop = notes.scrollHeight;
});

notes.onclick = function(event) {
  const target = event.target;
  if (target.classList[0] === "noteBlock") {
    noteBodyInput.value = target.textContent;
    noteBodyInput.focus();
    
    // TODO: The li should stay highlighted in lightskyblue after clicking
    // so that we can know what note we are currently looking at
    // Idea #1: Use classes to change and remove etc. Idk
    target.classList.remove("not-selected");
    target.className += " selected";
    }
};
