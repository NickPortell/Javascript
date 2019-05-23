var numString = "";
var numSubString = "";
var tempSum = 0;
var operator;
var num;


function append(num) {
    numString += num;
    var answerEl = document.getElementById('input');
    answerEl.value += num;
    console.log(answerEl.value);
}

function compile() {

    numString += '=';
    console.log(numString);
    var answerEl = document.getElementById('screen');

    for (var i = 0; i < Number(numString.length); i++) {
        if (numString.charAt(i) === "+") {
            tempSum = Number(numSubString);
            numSubString = "";
            operator = numString.charAt(i);

        }
        else if (numString.charAt(i) === "-") {
            tempSum = Number(numSubString);
            numSubString = "";
            operator = numString.charAt(i);

        }
        else if (numString.charAt(i) === "X") {
            tempSum = Number(numSubString);
            numSubString = "";
            operator = numString.charAt(i);

        }
        else if (numString.charAt(i) === "/") {
            tempSum = Number(numSubString);
            numSubString = "";
            operator = numString.charAt(i);

        }
        else if (numString.charAt(i) === "=") {

            switch (operator) {
                case '+': {
                    tempSum += Number(numSubString);
                    numSubString = "";
                    break;
                }
                case '-': {
                    tempSum -= Number(numSubString);
                    numSubString = "";
                    break;
                }
                case 'X': {
                    tempSum *= Number(numSubString);
                    numSubString = "";
                    break;
                }
                case '/': {
                    tempSum /= Number(numSubString);
                    numSubString = "";
                    break;
                }
                default:
                    {
                        break;
                    }
            }

            answerEl.value = tempSum;
            console.log(answerEl.value);
            break;
        }
        else {
            numSubString += numString.charAt(i);
        }
    }

    numString = tempSum.toString();
    operator = "";

}
function clear() {
    numSubString = '';
    numString = '';
    operator = '';
}

