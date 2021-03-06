function checkAddition(operand1, operand2, answer) {
    var response = "FAIL!";
    if(answer == (operand1 + operand2)) {
      response = "Success!";
    }
    return response;
}

function checkMultiplication(operand1, operand2, answer) {
  var response = "FAIL!";
  if(answer == (operand1 * operand2)) {
    response = "Success!";
  }
  return response;
}

function checkSubtraction(operand1, operand2, answer) {
  var response = "FAIL!";
  if(answer == (operand1 - operand2)) {
    response = "Success!";
  }
  return response;
}

function checkDivision(operand1, operand2, answer) {
  var response = "FAIL!";
  if(answer == (operand1 / operand2)) {
    response = "Success!";
  }
  return response;
}

function setOperands(probType) {
  var op1;
  var op2;
  var operation = '+';

  if(probType == 'Addition') {
    op1 = getRandomSingleDigitNumber();
    op2 = getRandomSingleDigitNumber();
    operation = '+';
  }
  else if(probType == 'Multiplication') {
    op1 = getRandomSingleDigitNumber();
    op2 = getRandomSingleDigitNumber();
    operation = 'X';
  }
  else if(probType == 'Subtraction') {
    op1 = getRandomSingleDigitNumber();
    op2 = getRandomSingleDigitNumber();
    while(op2 > op1) {
      op2 = getRandomSingleDigitNumber();
    }
    operation = '-';
  }
  else if(probType == 'Division') {
    op2 = getRandomSingleDigitNumber();
    opx = getRandomSingleDigitNumber();
    op1 = op2 * opx;
    operation = '/';
  }
  
  return {
    operand1: op1,
    operand2: op2,
    operator: operation,
    answer: '',
    problemType: ''
  };
}

function getRandomSingleDigitNumber() {
  return Math.floor((Math.random() * 10) + 1);
}
