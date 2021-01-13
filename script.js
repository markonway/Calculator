// take the input field
let inputField = document.getElementById("input-field")

// function to insert the values on the input
function insertValue(value){
    let buttonValue = value.innerHTML // take the button value
    inputField.value = inputField.value + buttonValue // take the input value and put the button value 
}

// function to show the result
function result(){
    let result = eval(inputField.value) // calculates the input values
    inputField.value = result
}


// function to clear the input
function clearValue(){
    inputField.value = ""
}

