const btn0 = document.querySelector('#btn0');
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const btn4 = document.querySelector('#btn4');
const btn5 = document.querySelector('#btn5');
const btn6 = document.querySelector('#btn6');
const btn7 = document.querySelector('#btn7');
const btn8 = document.querySelector('#btn8');
const btn9 = document.querySelector('#btn9');
const plusBtn = document.querySelector('#plusBtn');
const minusBtn = document.querySelector('#minusBtn');
const multiplyBtn = document.querySelector('#multiplyBtn');
const divideBtn = document.querySelector('#divideBtn');
const equalsBtn = document.querySelector('#equalsBtn');
const clearBtn = document.querySelector('#clearBtn');
const decimalBtn = document.querySelector('#decimalBtn');
const backspaceBtn = document.querySelector('#backspaceBtn');
const display = document.querySelector('#display');

var num = '';
var oldNum = '';
var addCall = false;
var subtractCall = false;
var multiplyCall = false;
var divideCall = false;
var calcResult;
var expoResult;
var keypressCode;

btn0.addEventListener('click', () => {
	if (num.length >= 9) {
		return;
	} else {
		num += '0';
		display.textContent = num;
	}
});

btn1.addEventListener('click', () => {
	if (num.length >= 9) {
		return;
	} else {
		num += '1';
		display.textContent = num;
	}
});

btn2.addEventListener('click', () => {
	if (num.length >= 9) {
		return;
	} else {
		num += '2';
		display.textContent = num;
	}
});

btn3.addEventListener('click', () => {
	if (num.length >= 9) {
		return;
	} else {
		num += '3';
		display.textContent = num;
	}
});

btn4.addEventListener('click', () => {
	if (num.length >= 9) {
		return;
	} else {
		num += '4';
		display.textContent = num;
	}
});

btn5.addEventListener('click', () => {
	if (num.length >= 9) {
		return;
	} else {
		num += '5';
		display.textContent = num;
	}
});

btn6.addEventListener('click', () => {
	if (num.length >= 9) {
		return;
	} else {
		num += '6';
		display.textContent = num;
	}
});

btn7.addEventListener('click', () => {
	if (num.length >= 9) {
		return;
	} else {
		num += '7';
		display.textContent = num;
	}
});

btn8.addEventListener('click', () => {
	if (num.length >= 9) {
		return;
	} else {
		num += '8';
		display.textContent = num;
	}
});

btn9.addEventListener('click', () => {
	if (num.length >= 9) {
		return;
	} else {
		num += '9';
		display.textContent = num;
	}
});

plusBtn.addEventListener('click', () => {
	add();
});

multiplyBtn.addEventListener('click', () => {
	multiply();
});

minusBtn.addEventListener('click', () => {
	subtract();
});

divideBtn.addEventListener('click', () => {
	divide();
});

plusBtn.addEventListener('click', () => {
	add();
});

equalsBtn.addEventListener('click', () => {
	operate();
});

clearBtn.addEventListener('click', () => {
	num = '';
	oldNum = '';
	addCall = false;
	subtractCall = false;
	multiplyCall = false;
	divideCall = false;
	calcResult = '';
	display.textContent = 0;
});

decimalBtn.addEventListener('click', () => {
	if (num.includes('.') == false) {
		if (!num) {
			num += '0.';
			display.textContent = num;
		} else {
			num += '.';
			display.textContent = num;
		}
	}
});

backspaceBtn.addEventListener('click', () => {
	if (num != 0 || num != '') {
		let backNum = num.substring(0, num.length - 1);
		num = backNum;
		if (num != '') {
			display.textContent = num;
		} else {
			display.textContent = 0;
		}
	}
});

addEventListener('keydown', () => {
	keypressCode = event.keyCode;
	if (keypressCode == 96 || keypressCode == 48) {
		if (num.length <= 9) {
			num += '0';
			display.textContent = num;
		}
	} else if (keypressCode == 97 || keypressCode == 49) {
		if (num.length <= 9) {
			num += '1';
			display.textContent = num;
		}
	} else if (keypressCode == 98 || keypressCode == 50) {
		if (num.length <= 9) {
			num += '2';
			display.textContent = num;
		}
	} else if (keypressCode == 99 || keypressCode == 51) {
		if (num.length <= 9) {
			num += '3';
			display.textContent = num;
		}
	} else if (keypressCode == 100 || keypressCode == 52) {
		if (num.length <= 9) {
			num += '4';
			display.textContent = num;
		}
	} else if (keypressCode == 101 || keypressCode == 53) {
		if (num.length <= 9) {
			num += '5';
			display.textContent = num;
		}
	} else if (keypressCode == 102 || keypressCode == 54) {
		if (num.length <= 9) {
			num += '6';
			display.textContent = num;
		}
	} else if (keypressCode == 103 || keypressCode == 55) {
		if (num.length <= 9) {
			num += '7';
			display.textContent = num;
		}
	} else if (keypressCode == 104 || keypressCode == 56) {
		if (num.length <= 9) {
			num += '8';
			display.textContent = num;
		}
	} else if (keypressCode == 105 || keypressCode == 57) {
		if (num.length <= 9) {
			num += '9';
			display.textContent = num;
		}
	} else if (keypressCode == 107) {
		add();
	} else if (keypressCode == 106) {
		multiply();
	} else if (keypressCode == 109) {
		subtract();
	} else if (keypressCode == 111) {
		divide();
	} else if (keypressCode == 13) {
		operate();
	} else if (keypressCode == 27) {
		num = '';
		oldNum = '';
		addCall = false;
		subtractCall = false;
		multiplyCall = false;
		divideCall = false;
		calcResult = '';
		display.textContent = 0;
	} else if (keypressCode == 110) {
		if (num.includes('.') == false) {
			num += '.';
			display.textContent = num;
		}
	} else if (keypressCode == 8) {
		if (num != 0 || num != '') {
			let backNum = num.substring(0, num.length - 1);
			num = backNum;
			if (num != '') {
				display.textContent = num;
			} else {
				display.textContent = 0;
			}
		}
	}
});

function add() {
	if (addCall || subtractCall || multiplyCall || divideCall) {
		operate();
	}
	if (addCall == false) {
		oldNum = '';
		oldNum += num;
		num = '';
		addCall = true;
	}
}

function subtract() {
	if (subtractCall || addCall || multiplyCall || divideCall) {
		operate();
	}
	if (subtractCall == false) {
		oldNum = '';
		oldNum += num;
		num = '';
		subtractCall = true;
	}
}

function multiply() {
	if (multiplyCall || subtractCall || addCall || divideCall) {
		operate();
	}
	if (multiplyCall == false) {
		oldNum = '';
		oldNum += num;
		num = '';
		multiplyCall = true;
	}
}

function divide() {
	if (divideCall || subtractCall || multiplyCall || addCall) {
		operate();
	}
	if (divideCall == false) {
		oldNum = '';
		oldNum += num;
		num = '';
		divideCall = true;
	}
}

function operate() {
	if (addCall == true) {
		calcResult = Number(oldNum) + Number(num);
		if (calcResult.toString().length >= 9) {
			expoResult = calcResult.toExponential(3);
			display.textContent = expoResult;
			num = expoResult;
			expoResult = '';
		} else {
			display.textContent = calcResult;
			num = calcResult;
		}
		oldNum = '';
		addCall = false;
	} else if (subtractCall == true) {
		calcResult = Number(oldNum) - Number(num);
		if (calcResult.toString().length >= 9) {
			expoResult = calcResult.toExponential(3);
			display.textContent = expoResult;
			num = expoResult;
			expoResult = '';
		} else {
			display.textContent = calcResult;
			num = calcResult;
		}
		oldNum = '';
		subtractCall = false;
	} else if (multiplyCall == true) {
		calcResult = Number(oldNum) * Number(num);
		if (calcResult.toString().length >= 9) {
			expoResult = calcResult.toExponential(3);
			display.textContent = expoResult;
			num = expoResult;
			expoResult = '';
		} else {
			display.textContent = calcResult;
			num = calcResult;
		}
		oldNum = '';
		multiplyCall = false;
	} else if (divideCall == true && num != 0) {
		calcResult = Number(oldNum) / Number(num);
		if (calcResult.toString().length >= 9) {
			expoResult = calcResult.toExponential(3);
			display.textContent = expoResult;
			num = expoResult;
			expoResult = '';
		} else {
			display.textContent = calcResult;
			num = calcResult;
		}
		oldNum = '';
		divideCall = false;
	} else if (divideCall == true && num == 0) {
		display.textContent = 'But...how?';
	}
}
