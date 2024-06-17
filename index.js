function my_add() {
    const x = document.getElementById('num1').value
    const y = document.getElementById('num2').value
    const z = Number(x) + Number(y)
    document.getElementById('result').innerHTML = z
    document.getElementById('result').className = 'alert alert-warning mt-4'
}

function my_sub() {
    const x = document.getElementById('num1').value
    const y = document.getElementById('num2').value
    const z = Number(x) - Number(y)
    document.getElementById('result').innerHTML = z
    document.getElementById('result').className = 'alert alert-warning mt-4'
}
function my_mult() {
    const x = document.getElementById('num1').value
    const y = document.getElementById('num2').value
    const z = Number(x) * Number(y)
    document.getElementById('result').innerHTML = z
    document.getElementById('result').className = 'alert alert-warning mt-4'
}
function my_div() {
    const x = document.getElementById('num1').value
    const y = document.getElementById('num2').value
    const z = Number(x) / Number(y)
    let n = z.toFixed(2)
    document.getElementById('result').innerHTML = n
    document.getElementById('result').className = 'alert alert-warning mt-4'
}



