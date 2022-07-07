let bmi;

function calculate() {
    let weight = document.getElementById('weight').value ;
    let height = document.getElementById('height').value ;
    bmi = ( parseFloat(weight) / (parseFloat(height) * parseFloat(height)) ) * 10000 ;
    alert('bmi is: ' + bmi) ;
}

// calculate()