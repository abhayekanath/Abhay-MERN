// 🔹 1. Find the Sum and Average of Array Elements
// Description: Input n numbers into an array and calculate their sum and average.

function sumavg(arr) {
	let sum = 0;
	let avg = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	avg = sum / arr.length;
	return { sum, avg };
}

const answ = sumavg([1, 2, 3, 4, 5]);
console.log("Sum:", answ.sum);
console.log("Avg:", answ.avg);
console.log("--------------------------------");

// 🔹 2. Find the Maximum and Minimum Elements in an Array
// Description: Input n numbers and find the largest and smallest numbers.

function maxmin(arr) {
	let min = arr[0];
	let max = arr[0];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > max){
			max = arr[i];
		} 
		if (arr[i] < min){
			min = arr[i];
		}
	}
	return { max, min };
}

const value = maxmin([1, 2, 3, 4, 5]);

console.log("Max:", value.max);
console.log("Min:", value.min);
console.log("--------------------------------");

// 🔹 3. Reverse the Elements of an Array
// Description: Input elements into an array and print them in reverse order.

// 🔹 4. Count Even and Odd Numbers in an Array
// Description: Count how many numbers are even and how many are odd.


function oddeven(arr) {
	let odd = 0;
	let even = 0;
	for (let i = 0; i < arr.length; i++ ){
		if (arr[i] % 2 === 1) {
			odd = odd+1;
		}
		if (arr[i] % 2 === 0) {
			even = even+1;
		}
	}
	return {odd, even}
}

const out = oddeven([1, 2, 3, 4, 5]);
console.log("Odd:", out.odd);
console.log("Even:", out.even);
console.log("--------------------------------");

// 🔹 5. Search an Element in an Array
// Description: Input n numbers and a target number. Search if the target exists in the array.

function target(arr){
	let t = 6;
	for (let i = 0; i < arr.length; i++ ){
		if (arr[i]=t){
			t = true;
		}
		else {
			t = false;
		}
	}
	return {t}
}

const element = target([5,6,7,8,9]);
console.log("Status:", element.t)
console.log("--------------------------------");

// 🔹 6. Copy Elements from One Array to Another
// Description: Copy elements of one array to another array using a loop.

// 🔹 7. Merge Two Arrays
// Description: Take two arrays from the user and merge them into a third array.

function merge(arr1, arr2){
	return arr1+arr2;
}
const arr1 = [5,6,7,8,9];
const arr2 = [10,11,12,13,14];
const merged = merge(arr1, arr2);
console.log(merged);

// 🔹 8. Sort an Array in Ascending Order
// Description: Use bubble sort or any other algorithm to sort the array in increasing order.

// 🔹 9. Find the Frequency of Each Element
// Description: Count how many times each element occurs in the array.

// 🔹 10. Remove Duplicate Elements from the Array
// Description: Identify and remove duplicates, keeping only unique values.