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
    noteBlock.className = "noteBlock unselectable";
    noteBlock.name = "noteBlock";
    noteBlock.textContent = noteBodyInput.value;
    notes.append(noteBlock);
  }
    noteBodyInput.value = "";
    noteBodyInput.focus();
});

function getEventTarget(e) {
  e = e || window.event;
  return e.target || e.srcElement;
}

notes.onclick = function(event) {
  const target = event.target;
  if (target.classList[0] === "noteBlock") {
    noteBodyInput.value = target.textContent;
    noteBodyInput.focus();
  }
};
