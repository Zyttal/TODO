var input = document.getElementById("textInput");
var addBtn = document.getElementById("addBtn");
var ul = document.querySelector("ul");
var list = document.querySelector("ul>li");
var toggleButton = document.getElementById("toggleButton");
var listOfItems = document.getElementById("items");

// check if input value is greater than 0

function inputLength(){
    return input.value.length;
}

// Insertion of Item

function createListElement() {
    var deleteButton = document.createElement("button");
    deleteButton.className = "btn"; // Set the class for styling
    deleteButton.appendChild(document.createTextNode("Delete"));
    
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));

    // Append the delete button to the list item (li)
    li.appendChild(deleteButton).addEventListener("click", removeItem);

    // Add a click event listener to the list item (li)
    li.addEventListener("click", toggleList);

    // Append the list item (li) to the ul
    ul.appendChild(li);

    // Clear the input field
    input.value = "";
}

addBtn.addEventListener("click", function(){
    if(inputLength() > 0){
        createListElement();
    }
});

input.addEventListener("keypress", function(event){
    if(inputLength() > 0 && event.key == "Enter"){
        createListElement();
    }
});

// Deletion Function

var elements = document.getElementsByClassName("btn");
for (var i = 0; i < elements.length; i++){
    elements[i].addEventListener("click", removeItem);
}

function removeItem(){
    this.parentNode.remove();
}     


//Toggle list item on and off when clicked on 

var list = document.querySelectorAll('ul>li');
for (var i = 0; i < list.length; i++) {
    list[i].addEventListener("click", toggleList);
}
function toggleList() {
  event.target.classList.toggle("done"); 
}

hide.style.cursor = 'pointer';
hide.addEventListener("click", function(){
     // Check if the list is currently hidden
    var isHidden = listOfItems.classList.contains("hidden");

    // Toggle the "hidden" class to show/hide the list
    listOfItems.classList.toggle("hidden", !isHidden);

    if(!isHidden){
        hide.style.marginTop = "16px";
    }

    // Toggle the chevron icon's rotation based on the current state
    var chevronIcon = toggleButton.querySelector("i");
    chevronIcon.classList.toggle("rotate", !isHidden);
});