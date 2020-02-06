const noteBodyInput = document.getElementById("noteBodyInput");
const notes = document.getElementById("notes");

var noteID = 0;

var selectedNote;

noteBodyInput.focus();
noteBodyInput.value = "";

noteBodyInput.addEventListener("input", function() {
  // Check if ul contains any li's
  // if it does, then create a new li
  // else ...What do we do if it does have some li's
  if(!notes.hasChildNodes() && noteBodyInput.value.length >= 1) {
    const noteBlock = document.createElement("li");
    noteBlock.innerHTML = noteBodyInput.value;
    noteBlock.id = "noteBlock" + noteID;
    noteBlock.className = "noteBlock";
    selectedNote = noteBlock.id;
    notes.append(noteBlock);
  } else {
    // Check what li we are on
    var targetNote = document.getElementById(selectedNote);
    if (noteBodyInput.value.length < 1) {
      notes.removeChild(targetNote);
    }
    targetNote.innerHTML = noteBodyInput.value;
    console.log(targetNote.innerHTML);

  }
});
