let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

function add() {
    document.getElementById('sum-el').textContent = "Addition: " + (num1 + num2);
    console.log('Working')        
}

function subtract() {
    document.getElementById('sum-el').textContent = "Substraction: " +  (num1 - num2);
    console.log('Working')        
    
}

function divide() {
    document.getElementById('sum-el').textContent ="Division: " + (num1 / num2);
    console.log('Working')        
    
}

function multiply() {
    document.getElementById('sum-el').textContent = "Multiplication: " +  (num1 * num2);
    console.log('Working')        
    
}

