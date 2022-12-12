// Create three variables that hold references to the input, button, and list elements using const.
const input = document.getElementById("favchap");
const addButton = document.querySelector("button");
const list = document.querySelector("ul");
// Create an click event listener for the Add Chapter button using addEventListener and an anonymous function.
addButton.addEventListener('click',function(){
    if(input.value){
        const listElement = document.createElement("li");
        const deletebutton = document.createElement('button');
        const span = document.createElement('span');
        span.innerHTML = input.value;
        deletebutton.textContent = " ❌";
        listElement.appendChild(span);
        listElement.appendChild(deletebutton);
        list.appendChild(listElement);
        // delete
       deletebutton.addEventListener('click',function(){
        list.removeChild(listElement);
       });
       // focus 
       input.focus();
       // empty
       input.value ="";
    }
});
