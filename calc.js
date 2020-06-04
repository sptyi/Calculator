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
const negativePositiveBtn = document.querySelector('#negativePositiveBtn');
const percentageBtn = document.querySelector('#percentageBtn');
const backspaceBtn = document.querySelector('#backspaceBtn');
const display = document.querySelector('#display');

var num = '';
var oldNum = '';
var addCall = false;
var subtractCall = false;
var multiplyCall = false;
var divideCall = false;
var percentageCall = false;
var nextNumNegative = false;
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
	} else if (nextNumNegative) {
		num = 1 * -1
		display.textContent = num;
		nextNumNegative = false;
	} else {
		num += '1';
		display.textContent = num;
	}
});

btn2.addEventListener('click', () => {
	if (num.length >= 9) {
		return;
	} else if (nextNumNegative) {
		num = 2 * -1
		display.textContent = num;
		nextNumNegative = false;
	} else {
		num += '2';
		display.textContent = num;
	}
});

btn3.addEventListener('click', () => {
	if (num.length >= 9) {
		return;
	} else if (nextNumNegative) {
		num = 3 * -1
		display.textContent = num;
		nextNumNegative = false;
	} else {
		num += '3';
		display.textContent = num;
	}
});

btn4.addEventListener('click', () => {
	if (num.length >= 9) {
		return;
	} else if (nextNumNegative) {
		num = 4 * -1
		display.textContent = num;
		nextNumNegative = false;
	} else {
		num += '4';
		display.textContent = num;
	}
});

btn5.addEventListener('click', () => {
	if (num.length >= 9) {
		return;
	} else if (nextNumNegative) {
		num = 5 * -1
		display.textContent = num;
		nextNumNegative = false;
	} else {
		num += '5';
		display.textContent = num;
	}
});

btn6.addEventListener('click', () => {
	if (num.length >= 9) {
		return;
	} else if (nextNumNegative) {
		num = 6 * -1
		display.textContent = num;
		nextNumNegative = false;
	} else {
		num += '6';
		display.textContent = num;
	}
});

btn7.addEventListener('click', () => {
	if (num.length >= 9) {
		return;
	} else if (nextNumNegative) {
		num = 7 * -1
		display.textContent = num;
		nextNumNegative = false;
	} else {
		num += '7';
		display.textContent = num;
	}
});

btn8.addEventListener('click', () => {
	if (num.length >= 9) {
		return;
	} else if (nextNumNegative) {
		num = 8 * -1
		display.textContent = num;
		nextNumNegative = false;
	} else {
		num += '8';
		display.textContent = num;
	}
});

btn9.addEventListener('click', () => {
	if (num.length >= 9) {
		return;
	} else if (nextNumNegative) {
		num = 9 * -1
		display.textContent = num;
		nextNumNegative = false;
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
	percentageCall = false;
	nextNumNegative = false;
	calcResult = '';
	display.textContent = 0;
});

decimalBtn.addEventListener('click', () => {
	if (!num.includes('.')) {
		if (!num) {
			num += '0.';
			display.textContent = num;
		} else {
			num += '.';
			display.textContent = num;
		}
	}
});

negativePositiveBtn.addEventListener('click', () => {
	if (num == 0 || subtractCall || addCall || multiplyCall || divideCall) {
		nextNumNegative = true;
	} else {
		num = num * -1;
		display.textContent = num;
	}
});

percentageBtn.addEventListener('click', () => {
	computePercentage();
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
			btn0.style.cssText =
				'border: none; box-shadow: none; transform: translate(3px, 3px) scale(0.999, 0.999)';
			setTimeout(() => {
				btn0.style.cssText =
					'border: 2px solid #ccc; box-shadow: 2px 2px 5px black;';
			}, 100);
		}
	} else if (keypressCode == 97 || keypressCode == 49) {
		if (num.length <= 9) {
			if (nextNumNegative) {
				num = 1 * -1
				display.textContent = num;
				nextNumNegative = false;
			} else {
				num += '1';
				display.textContent = num;
				btn1.style.cssText =
					'border: none; box-shadow: none; transform: translate(3px, 3px) scale(0.999, 0.999)';
				setTimeout(() => {
					btn1.style.cssText =
						'border: 2px solid #ccc; box-shadow: 2px 2px 5px black;';
				}, 100);
			}
		}
	} else if (keypressCode == 98 || keypressCode == 50) {
		if (num.length <= 9) {
			if (nextNumNegative) {
				num = 2 * -1
				display.textContent = num;
				nextNumNegative = false;
			} else {
				num += '2';
				display.textContent = num;
				btn2.style.cssText =
					'border: none; box-shadow: none; transform: translate(3px, 3px) scale(0.999, 0.999)';
				setTimeout(() => {
					btn2.style.cssText =
						'border: 2px solid #ccc; box-shadow: 2px 2px 5px black;';
				}, 100);
			}
		}
	} else if (keypressCode == 99 || keypressCode == 51) {
		if (num.length <= 9) {
			if (nextNumNegative) {
				num = 3 * -1
				display.textContent = num;
				nextNumNegative = false;
			} else {
				num += '3';
				display.textContent = num;
				btn3.style.cssText =
					'border: none; box-shadow: none; transform: translate(3px, 3px) scale(0.999, 0.999)';
				setTimeout(() => {
					btn3.style.cssText =
						'border: 2px solid #ccc; box-shadow: 2px 2px 5px black;';
				}, 100);
			}
		}
	} else if (keypressCode == 100 || keypressCode == 52) {
		if (num.length <= 9) {
			if (nextNumNegative) {
				num = 4 * -1
				display.textContent = num;
				nextNumNegative = false;
			} else {
				num += '4';
				display.textContent = num;
				btn4.style.cssText =
					'border: none; box-shadow: none; transform: translate(3px, 3px) scale(0.999, 0.999)';
				setTimeout(() => {
					btn4.style.cssText =
						'border: 2px solid #ccc; box-shadow: 2px 2px 5px black;';
				}, 100);
			}
		}
	} else if (keypressCode == 101 || keypressCode == 53 && !event.shiftKey) {
		if (num.length <= 9) {
			if (nextNumNegative) {
				num = 5 * -1
				display.textContent = num;
				nextNumNegative = false;
			} else {
				num += '5';
				display.textContent = num;
				btn5.style.cssText =
					'border: none; box-shadow: none; transform: translate(3px, 3px) scale(0.999, 0.999)';
				setTimeout(() => {
					btn5.style.cssText =
						'border: 2px solid #ccc; box-shadow: 2px 2px 5px black;';
				}, 100);
			}
		}
	} else if (keypressCode == 102 || keypressCode == 54) {
		if (num.length <= 9) {
			if (nextNumNegative) {
				num = 6 * -1
				display.textContent = num;
				nextNumNegative = false;
			} else {
				num += '6';
				display.textContent = num;
				btn6.style.cssText =
					'border: none; box-shadow: none; transform: translate(3px, 3px) scale(0.999, 0.999)';
				setTimeout(() => {
					btn6.style.cssText =
						'border: 2px solid #ccc; box-shadow: 2px 2px 5px black;';
				}, 100);
			}
		}
	} else if (keypressCode == 103 || keypressCode == 55) {
		if (num.length <= 9) {
			if (nextNumNegative) {
				num = 7 * -1
				display.textContent = num;
				nextNumNegative = false;
			} else {
				num += '7';
				display.textContent = num;
				btn7.style.cssText =
					'border: none; box-shadow: none; transform: translate(3px, 3px) scale(0.999, 0.999)';
				setTimeout(() => {
					btn7.style.cssText =
						'border: 2px solid #ccc; box-shadow: 2px 2px 5px black;';
				}, 100);
			}
		}
	} else if (keypressCode == 104 || keypressCode == 56 && !event.shiftKey) {
		if (num.length <= 9) {
			if (nextNumNegative) {
				num = 8 * -1
				display.textContent = num;
				nextNumNegative = false;
			} else {
				num += '8';
				display.textContent = num;
				btn8.style.cssText =
					'border: none; box-shadow: none; transform: translate(3px, 3px) scale(0.999, 0.999)';
				setTimeout(() => {
					btn8.style.cssText =
						'border: 2px solid #ccc; box-shadow: 2px 2px 5px black;';
				}, 100);
			}
		}
	} else if (keypressCode == 105 || keypressCode == 57) {
		if (num.length <= 9) {
			if (nextNumNegative) {
				num = 9 * -1
				display.textContent = num;
				nextNumNegative = false;
			} else {
				num += '9';
				display.textContent = num;
				btn9.style.cssText =
					'border: none; box-shadow: none; transform: translate(3px, 3px) scale(0.999, 0.999)';
				setTimeout(() => {
					btn9.style.cssText =
						'border: 2px solid #ccc; box-shadow: 2px 2px 5px black;';
				}, 100);
			}
		}
	} else if (keypressCode == 107 || keypressCode == 187 && event.shiftKey) {
		add();
		plusBtn.style.cssText =
			'border: none; box-shadow: none; transform: translate(3px, 3px) scale(0.999, 0.999)';
		setTimeout(() => {
			plusBtn.style.cssText = 'box-shadow: 2px 2px 5px black;';
		}, 100);
	} else if (keypressCode == 106 || keypressCode == 56 && event.shiftKey) {
		multiply();
		multiplyBtn.style.cssText =
			'border: none; box-shadow: none; transform: translate(3px, 3px) scale(0.999, 0.999)';
		setTimeout(() => {
			multiplyBtn.style.cssText = 'box-shadow: 2px 2px 5px black;';
		}, 100);
	} else if (keypressCode == 109 || keypressCode == 189) {
		subtract();
		minusBtn.style.cssText =
			'border: none; box-shadow: none; transform: translate(3px, 3px) scale(0.999, 0.999)';
		setTimeout(() => {
			minusBtn.style.cssText = 'box-shadow: 2px 2px 5px black;';
		}, 100);
	} else if (keypressCode == 111 || keypressCode == 191) {
		divide();
		divideBtn.style.cssText =
			'border: none; box-shadow: none; transform: translate(3px, 3px) scale(0.999, 0.999)';
		setTimeout(() => {
			divideBtn.style.cssText = 'box-shadow: 2px 2px 5px black;';
		}, 100);
	} else if (keypressCode == 13 || keypressCode == 187 && !event.shiftKey) {
		operate();
		equalsBtn.style.cssText =
			'border: none; box-shadow: none; transform: translate(3px, 3px) scale(0.999, 0.999)';
		setTimeout(() => {
			equalsBtn.style.cssText = 'box-shadow: 2px 2px 5px black;';
		}, 100);
	} else if (keypressCode == 53 && event.shiftKey ) {
		computePercentage();
		percentageBtn.style.cssText =
			'border: none; box-shadow: none; transform: translate(3px, 3px) scale(0.999, 0.999)';
		setTimeout(() => {
			percentageBtn.style.cssText = 'box-shadow: 2px 2px 5px black;';
		}, 100);
	} else if (keypressCode == 27) {
		num = '';
		oldNum = '';
		addCall = false;
		subtractCall = false;
		multiplyCall = false;
		divideCall = false;
		percentageCall = false;
		nextNumNegative = false;
		calcResult = '';
		display.textContent = 0;
		clearBtn.style.cssText =
			'border: none; box-shadow: none; transform: translate(3px, 3px) scale(0.999, 0.999)';
		setTimeout(() => {
			clearBtn.style.cssText = 'box-shadow: 2px 2px 5px black;';
		}, 100);
	} else if (keypressCode == 110) {
		if (!num.includes('.')) {
			if (!num) {
				num += '0.';
				display.textContent = num;
			} else {
				num += '.';
				display.textContent = num;
			}
			decimalBtn.style.cssText =
				'border: none; box-shadow: none; transform: translate(3px, 3px) scale(0.999, 0.999)';
			setTimeout(() => {
				decimalBtn.style.cssText = 'box-shadow: 2px 2px 5px black;';
			}, 100);
		}
	} else if (keypressCode == 8) {
		if (num != 0 || num != '') {
			let backNum = num.substring(0, num.length - 1);
			num = backNum;
			backspaceBtn.style.cssText =
				'border: none; box-shadow: none; transform: translate(3px, 3px) scale(0.999, 0.999)';
			setTimeout(() => {
				backspaceBtn.style.cssText = 'box-shadow: 2px 2px 5px black;';
			}, 100);

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
	if (!addCall) {
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
	if (!subtractCall) {
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
	if (!multiplyCall) {
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
	if (!divideCall) {
		oldNum = '';
		oldNum += num;
		num = '';
		divideCall = true;
	}
}

function computePercentage() {
	if (divideCall || subtractCall || multiplyCall || addCall) {
		operate();
	}
	if (!percentageCall) {
		oldNum = '';
		oldNum += num;
		num = '';
		percentageCall = true;
	}
}

function operate() {
	if (addCall ) {
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
	} else if (subtractCall ) {
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
	} else if (multiplyCall ) {
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
	} else if (divideCall  && num != 0) {
		calcResult = Number(oldNum) / Number(num);
		if (calcResult.toString().length >= 9) {
			expoResult = calcResult.toExponential(3);
			display.textContent = expoResult;
			num = expoResult;
			expoResult = '';
		}
	} else if (percentageCall) {
		calcResult = Number(oldNum) / Number(num) * 100;
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
	} else if (divideCall  && num == 0) {
		display.textContent = 'But...how?';
	}
}
