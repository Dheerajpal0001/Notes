const btn = document.querySelector(".btn");
const notesContainer = document.querySelector(".notes-container");
const save = document.querySelector(".save");
const para = `<p contenteditable="true" class="note1">
<img src="./download (1).jpeg" id="del" width="20px" alt="">
</p>`;

// Function to save notes to localStorage
const saveNotes = () => {
    localStorage.setItem('notes', notesContainer.innerHTML);
};

// Function to load notes from localStorage
const loadNotes = () => {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
        notesContainer.innerHTML = savedNotes;
    }
};

// Load notes when the page is loaded
window.addEventListener("load", loadNotes);

btn.addEventListener("click", () => {
    notesContainer.insertAdjacentHTML("afterbegin", para);
    saveNotes(); // Save notes after adding a new one
});

notesContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        saveNotes(); // Save notes after deleting one
    }
});

save.addEventListener('click', (e)=>{
    saveNotes();
})




