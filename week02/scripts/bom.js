const input = document.querySelector('#favchap')//#when have id
const button = document.querySelector('button')//<>
const list = document.querySelector('ul')

//click event listener 

button.addEventListener('click', function() {
    // Code to execute when a key is released
    if (input.value.trim() !== '') {
    // check if is not blank

        const li = document.createElement('li')

        const deleteButton = document.createElement('button');

        li.textContent = input.value; 
        //Populate the li element variable's textContent 
        //or innerHTML with the input value.

        deleteButton.textContent = '❌';


        li.append(deleteButton);

        list.append(li);

        // Add an event listener to the delete button to remove the list item
        deleteButton.addEventListener('click', function() {
            list.removeChild(li);
            input.focus();
        });
        
        input.value = '';

        input.focus();      
    } 

    else {
        input.focus();
    }

  });

