const noteTitleInput = document.getElementById("noteTitle");
const noteBodyInput = document.getElementById("noteBody");
//noteTitleInput.focus();

const notes = document.getElementById("notes");

const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", function() {

  var noteBlock = document.createElement("li");
  noteBlock.className = "note-block";
  noteBlock.innerHTML = noteTitleInput.value;

  notes.append(noteBlock);

  noteTitleInput.value = "";
  noteBodyInput.value = "";

});


