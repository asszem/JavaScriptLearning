// setup main elements as variables
let addButton = document.getElementById('addButton');
let todoContainer = document.getElementById('todoContainer');
let inputField = document.getElementById('inputField');

// Add an event listener to the button
addButton.addEventListener('click', function(){
    // Create a new paragraph for each todo item
    var paragraph = document.createElement('p');
    // Set the inner text of the paragraph to the value of the input field
    paragraph.innerText = inputField.value;
    // apply styling to the paragraph 
    paragraph.classList.add('paragraph-styling')
    // the created paragraph element need to be added to the todoContainer
    todoContainer.appendChild(paragraph);
    // to remove old value from the input field
    inputField.value ='';
    // add new event listeners to handle existing todo items
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = 'line-through';
    })
    paragraph.addEventListener('dblclick', function(){
        todoContainer.removeChild(paragraph);
    })
})