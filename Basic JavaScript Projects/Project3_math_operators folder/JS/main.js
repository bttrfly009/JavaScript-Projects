function Math_addition() { //Basic addition function
    var addition = 4 + 5;
    document.getElementById("Math").innerHTML = "4 + 5 = " + addition;
}
function Math_subtraction() { //Subtraction
    var subtraction = 20 - 11;
    document.getElementById("Math").innerHTML = "20 - 11 = " + subtraction;
}
function Math_multiplication() { //Multiplication
    var multiplication = 3 * 3;
    document.getElementById("Math").innerHTML = "3 * 3 = " + multiplication;
}
function Math_division() { //Division
    var division = 27 / 3;
    document.getElementById("Math").innerHTML = "27 / 3 = " + division;
}
function More_Math() { //Multiple operations
    var multipleop = (6 + 7) * 10 / 13 - 1;
    document.getElementById("Math").innerHTML = "6 plus 7, multiplied by 10, divided by 13, minus 1 equals " + multipleop;
}
function modulus_Operator() { //Remainder
    var remainder = 105 % 12;
    document.getElementById("Math").innerHTML = "When you divide 105 by 12, you have a remainder of: " + remainder;
}
function negation_Operator() { //Negative
    var negative = 9;
    document.getElementById("Math").innerHTML = -negative;
}
function increment() { //+1
    var inc = 8;
    inc++
    document.write(inc)
}
function decrement() {//-1
    var decr = 10;
    decr--;
    document.write(decr);
}
window.alert(Math.random()*99); //Random number