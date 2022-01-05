function add() {
var X = 6 + 3;
document.write(typeof "Word");
document.write("9" + 9);
document.write(2E310);
document.write(-3E310)
document.write(9>1);
document.write(4>9);
document.write(9 == 9);
document.write(7 == 9); //Different value
K = "Black";
Y = "Red";
document.write(K===Y); //Different string
W = 9;
Z = 7;
document.write(W===Z);//Same but different
J = "99";
N = 99;
document.write(J===N); //Same value
A = 1;
B = 1;
document.write(A===B);
document.write(9 > 7 && 9 > 6);
document.write(9 > 11 && 9 > 17);
document.write(9 > 6 || 9 > 66);
}
function not_Function() {
    document.getElementById("Not").innerHTML = !(20 > 10);
}
function nott_Function() {
    document.getElementById("Not").innerHTML = !(5 > 10);
}