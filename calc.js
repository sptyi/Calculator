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

var nums = [];
var values = 0;
var calcResult;
var keypressCode;

btn0.addEventListener('click', () => {
	nums.push(0);
	display.textContent = nums.join('');
});

addEventListener('keydown', () => {
	keypressCode = event.keyCode;
	if (keypressCode == 96 || keypressCode == 48) {
		nums.push(0);
		display.textContent = nums.join('');
	}
});

btn1.addEventListener('click', () => {
	nums.push(1);
	display.textContent = nums.join('');
});

addEventListener('keydown', () => {
	keypressCode = event.keyCode;
	if (keypressCode == 97 || keypressCode == 49) {
		nums.push(1);
		display.textContent = nums.join('');
	}
});

btn2.addEventListener('click', () => {
	nums.push(2);
	display.textContent = nums.join('');
});

addEventListener('keydown', () => {
	keypressCode = event.keyCode;
	if (keypressCode == 98 || keypressCode == 50) {
		nums.push(2);
		display.textContent = nums.join('');
	}
});

btn3.addEventListener('click', () => {
	nums.push(3);
	display.textContent = nums.join('');
});

addEventListener('keydown', () => {
	keypressCode = event.keyCode;
	if (keypressCode == 99 || keypressCode == 51) {
		nums.push(3);
		display.textContent = nums.join('');
	}
});

btn4.addEventListener('click', () => {
	nums.push(4);
	display.textContent = nums.join('');
});

addEventListener('keydown', () => {
	keypressCode = event.keyCode;
	if (keypressCode == 100 || keypressCode == 52) {
		nums.push(4);
		display.textContent = nums.join('');
	}
});

btn5.addEventListener('click', () => {
	nums.push(5);
	display.textContent = nums.join('');
});

addEventListener('keydown', () => {
	keypressCode = event.keyCode;
	if (keypressCode == 101 || keypressCode == 53) {
		nums.push(5);
		display.textContent = nums.join('');
	}
});

btn6.addEventListener('click', () => {
	nums.push(6);
	display.textContent = nums.join('');
});

addEventListener('keydown', () => {
	keypressCode = event.keyCode;
	if (keypressCode == 102 || keypressCode == 54) {
		nums.push(6);
		display.textContent = nums.join('');
	}
});

btn7.addEventListener('click', () => {
	nums.push(7);
	display.textContent = nums.join('');
});

addEventListener('keydown', () => {
	keypressCode = event.keyCode;
	if (keypressCode == 103 || keypressCode == 55) {
		nums.push(7);
		display.textContent = nums.join('');
	}
});

btn8.addEventListener('click', () => {
	nums.push(8);
	display.textContent = nums.join('');
});

addEventListener('keydown', () => {
	keypressCode = event.keyCode;
	if (keypressCode == 104 || keypressCode == 56) {
		nums.push(8);
		display.textContent = nums.join('');
	}
});

btn9.addEventListener('click', () => {
	nums.push(9);
	display.textContent = nums.join('');
});

addEventListener('keydown', () => {
	keypressCode = event.keyCode;
	if (keypressCode == 105 || keypressCode == 57) {
		nums.push(9);
		display.textContent = nums.join('');
	}
});

plusBtn.addEventListener('click', () => {
	values++;
});

addEventListener('keydown', () => {
	keypressCode = event.keyCode;
	if (keypressCode == 107) {
		values++;
	}
});

multiplyBtn.addEventListener('click', () => {
	values++;
});

addEventListener('keydown', () => {
	keypressCode = event.keyCode;
	if (keypressCode == 56 || keypressCode == 106) {
		values++;
	}
});

minusBtn.addEventListener('click', () => {
	values++;
});

addEventListener('keydown', () => {
	keypressCode = event.keyCode;
	if (keypressCode == 109 || keypressCode == 189) {
		values++;
	}
});

divideBtn.addEventListener('click', () => {
	values++;
});

addEventListener('keydown', () => {
	keypressCode = event.keyCode;
	if (keypressCode == 111 || keypressCode == 191) {
		values++;
	}
});

plusBtn.addEventListener('click', () => {
	values++;
});

addEventListener('keydown', () => {
	keypressCode = event.keyCode;
	if (keypressCode == 13) {
		values++;
	}
});

equalsBtn.addEventListener('click', () => {
	operate();
});

addEventListener('keydown', () => {
	keypressCode = event.keyCode;
	if (keypressCode == 13) {
		operate();
	}
});

clearBtn.addEventListener('click', () => {
	nums.splice(0, nums.length);
	display.textContent = 0;
	values = 0;
});

addEventListener('keydown', () => {
	keypressCode = event.keyCode;
	if (keypressCode == 27) {
		nums.splice(0, nums.length);
		display.textContent = 0;
		values = 0;
	}
});

decimalBtn.addEventListener('click', () => {});

addEventListener('keydown', () => {
	keypressCode = event.keyCode;
	if (keypressCode == 110 || keypressCode == 190) {
	}
});

backspaceBtn.addEventListener('click', () => {
	nums.pop();
	display.textContent = nums.join('');
});

addEventListener('keydown', () => {
	keypressCode = event.keyCode;
	if (keypressCode == 8) {
		nums.pop();
		display.textContent = nums.join('');
	}
});

function add() {}

function subtract(nums) {}

function multiply(nums) {}

function divide(nums) {}

function operate() {
	display.textContent = calcResult;
	nums.splice(0, nums.length);
	values = 0;
}
/*
function operationCount() {
	var values +
}
*/
