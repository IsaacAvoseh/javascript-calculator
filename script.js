let numberField1 = document.getElementById('numberField1');
let numberField2 = document.getElementById('numberField2');
let resultField = document.getElementById('resultField');
let form = document.getElementById('calculator');

form.addEventListener("submit", function(event) {

    if (!numberField1.value || !numberField2.value) {
        alert("Enter value in fields please!")
    } else {
        let x = numberField1.value;
        let y = numberField2.value;

        let result = x / y;
        let percentage = result * 100;

        resultField.innerText = "Result: " + percentage + "%";
        event.preventDefault();
    }
})