//1. Write a JavaScript function to find the sum of two numbers. (receive numbers as parameters and return the sum).

num1 = 5;
num2 = 10;
function sum(num1, num2) {
  return num1 + num2;
}
// console.log(sum(num1,num2));

//2. Write a javascript function to find the difference, product and division of two numbers.

function diff(n1, n2) {
  return n1 - n2;
}
function prod(n1, n2) {
  return n1 * n2;
}
function div(n1, n2) {
  return n1 / n2;
}

// console.log(diff(10,5));
// console.log(prod(2,5));
// console.log(div(4,2));

//3. Write a javascript function to call the above four functions using ‘if else-if’ and ‘switch’.

var calculator = (n1, n2, op) => {
  if (op == "+") {
    console.log(sum(n1, n2));
  } else if (op == "-") {
    console.log(diff(n1, n2));
  } else if (op == "*") {
    console.log(prod(n1, n2));
  } else if (op == "/") {
    console.log(div(n1, n2));
  } else {
    console.log("Invalid");
  }
};

// calculator(1, 2, "*");

var calculator = (n1, n2, op) => {
  if (op == "+") {
    return n1 - n2;
  } else if (op == "-") {
    return diff(n1, n2);
  } else if (op == "*") {
    return prod(n1, n2);
  } else if (op == "/") {
    return div(n1, n2);
  } else {
    return "Invalid";
  }
};

var calco = (n1, n2, op) => {
	let result;
  switch (op) {
    case '+':
      result = sum(n1, n2);
			break;
    case '-':
			return diff(n1, n2);
    case '*':
      return prod(n1, n2);
    case '/':
      return div(n1, n2);
    default:
      return "Invalid";
  }
	return result;
};

// console.log(calco(1, 2, "/"));

//4. Write a javascript function to find if a number is even or odd (return true or false).

var eveod = (number) => {
	//console.log(number);
	
	if (number % 2 === 0){
		return 'Even';
	} else if (number % 2 === 1){
		return 'Odd';
	} else {
		return 'Invalid';
	}
}

//console.log(eveod(false));

// 5. Write a javascript function to find the sum of numbers in an array using for loop,while loop and do-while loop (receive array as parameter and return the sum).

var sumar= (arr) => {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
			sum = sum + arr[i];
	}
	return sum;
}

var sumar = (arr) => {
	let sum = 0;
	let i = 0;
	while (i < arr.length) {
		sum = sum + arr[i];
		i++;
	}
	return sum;
}

var sumar = (arr) => {
	let sum = 0;
	let i = 0;
	do {
		sum = sum + arr[i];
		i++;
	} while (i < arr.length);
	return sum;
}

// console.log("For loop sum:", sumar([1, 2, 3, 4, 5]));
// console.log("While loop sum:", sumar([1, 2, 3]));
// console.log("Do-while loop sum:", sumar([1, 1, 1]));

// 6. Write a javascript function to find the factorial of a number.

// var fact = (n) => {
// 	if (n === 0 || n === 1) return 1;
// 	return n * fact(n - 1);
// }

var fact = (val) => {
	let result = 1;
	for (let i = 2; i <= val; i++) {
		result = result * i;
	}
	return result;
}

// console.log(fact(3));

// 7. Write a JavaScript function to find the largest of two numbers.

var largest = (x, y) => {
	if (x > y){
		return x;
	}else if (x < y) {
		return y
	}else {
		return 'Equal Number'
	}
}

// console.log(largest(3, 2));

// 8. Write a JavaScript function to find the largest of three numbers.

var largest = (l, m, n) => {
	if (l > m && l > n){
		return l;
	}else if (m > l && m > n) {
		return m
	}else {
		return n
	}
}

// console.log(largest(3, 2, 4));

// 9. Write a JavaScript function to find the area of square, rectangle, circle and triangle.

var squareArea = (width) => {
	return width * width
}
// console.log('Area of Square', squareArea(10));

var rectArea = (w,h) => {
	return w * h
}
// console.log('Area of Rectangle', rectArea(5,5));

var circleArea = (r) => {
	return 3.14 * (r*r)
}
// console.log('Area of Circle', circleArea(5));

var trianArea = (base,h) => {
	return (base*h)/2
}
// console.log('Area of Circle', trianArea(6, 2));

// 10. Write a JavaScript function to call above area functions using ‘if else-if’ and ‘switch’.

var area = (shape, w, h) => {	
  if (shape == 'Square') {
		return squareArea(w);
	} else if (shape == 'Rectangle') {
		return rectArea(w, h);
	} else if (shape == 'Circle') {
		return circleArea(w);
	} else if (shape == 'Circle') {
		return trianArea(w, h);
	} else {
		return 'Invalid'
	}
}

var area = (shape, w, h) => {
	switch (shape) {
		return squareArea(w);
	}
}


console.log(area('Circle', 3));

// 11. Write a program to find the length of a string.
var stringLength = (len) => {
    return len.length;
}
// console.log(stringLength("Abhay"));

// 12. Write a javascript function to find the number of characters in a string.