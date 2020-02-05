const noteTitleInput = document.getElementById("noteTitle");
const noteBodyInput = document.getElementById("noteBody");

noteTitleInput.focus();

// Make sure that the inputs are empty (even with refresh)
noteTitleInput.value = "";
noteBodyInput.value = "";

const notes = document.getElementById("notes");

const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", function() {
  
  // We don't want any blank entries
  if (noteTitleInput.value === "" || noteBodyInput.value === "") {
    alert("ERROR: Please enter both the title and the message to create a note");
    return;
  }

  // Create a li with the note title and append to the ul
  var noteBlock = document.createElement("li");
  noteBlock.className = "note-block";
  noteBlock.innerHTML = noteTitleInput.value;

  notes.append(noteBlock);

  // Clear inputs
  noteTitleInput.value = "";
  noteBodyInput.value = "";

  notes.scrollTop = notes.scrollHeight;

});


