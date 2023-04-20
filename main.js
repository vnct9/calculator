function add()
{
    var number1 = parseInt(document.getElementById("num").value);
    var number2 = parseInt(document.getElementById("numm").value);
    var answer = number1 + number2;
    document.getElementById("label").innerHTML = "Answer: " + answer;
    console.log(answer);
}
function subtract()
{
    var number1 = parseInt(document.getElementById("num").value);
    var number2 = parseInt(document.getElementById("numm").value);
    var answer = number1 - number2;
    document.getElementById("label").innerHTML = "Answer: " + answer;
    console.log(answer);
}
function multiply()
{
    var number1 = parseInt(document.getElementById("num").value);
    var number2 = parseInt(document.getElementById("numm").value);
    var answer = number1 * number2;
    document.getElementById("label").innerHTML = "Answer: " + answer;
    console.log(answer);
}
function divide()
{
    var number1 = parseInt(document.getElementById("num").value);
    var number2 = parseInt(document.getElementById("numm").value);
    var answer = number1 / number2;
    document.getElementById("label").innerHTML = "Answer: " + answer;
    console.log(answer);
}