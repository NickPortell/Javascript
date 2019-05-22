var numString = "";
var numSubString = "";
var numSubString2 = "";
var tempSum = 0;
var operator;
var num;


function append(num) {
    numString += num;
    var answerEl = document.getElementById('answer');
    answerEl.value += num;
    console.log(num);
}

function compile() {

    numString+= '=';
    console.log(numString);
    
    for (var i = 0; i < numString.Length; i++) {

        
        if (numString[i] === "+") {
            tempSum += Number(numSubString);
            numSubString = "";
            operator = numString[i];
            console.log(tempSum);

        }
        else if (numString[i] === "-") {
            tempSum -= Number(numSubString);
            numSubString = "";
            operator = numString[i];
            console.log(tempSum);

        }
        else if (numString[i] === "X") {
            tempSum *= Number(numSubString);
            numSubString = "";
            operator = numString[i];
            console.log(tempSum);

        }
        else if (numString[i] === "/") {
            tempSum /= Number(numSubString);
            numSubString = "";
            operator = numString[i];
            console.log(tempSum);

        }
        else if (numString[i] === "="){
            var answerEl = document.getElementById('answer');
            answerEl.value = tempSum;
            console.log(tempSum);
        break;
        }
        else {
            numSubString += numString[i];
            console.log(numSubString);
        }
    }

}




/*if (numString[i] === '+') {
    numSubString = numString.subString(0, i);
} 
if (numString[i] === '-') {
    numSubString = numString.subString(0, i);
}
if (numString[i] === 'X') {
    numSubString = numString.subString(0, i);
}
if (numString[i] === '/') {
    numSubString = numString.subString(0, i);
}*/


function Multiply(num1, num2) {
    var sum = numString1 * numString2;
}
function Addition() {
    var sum = numString1 * numString2;
}
function Substraction() {
    var sum = numString1 * numString2;
}
function Division() {
    var sum = numString1 * numString2;
}
