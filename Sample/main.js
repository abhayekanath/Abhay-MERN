//if

let age = 18;
if (age >= 18) {
  console.log("Legal age");
} else {
  console.log("Under aged");
}

//if else

let score = 85;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}

//switch

let day = "Tuesday";
switch (day) {
	case "Monday":
		console.log("First day");
		break;
	case "Tuesday":
		console.log("Second day");
		break;
	case "Wednesday":
		console.log("Third day");
		break;
	case "Thursday":
		console.log("fourth day");
		break;
	case "Friday":
		console.log("Fifth day");
		break;
	default:
		console.log("Weekend");
}

//for

for (let i = 0; i < 5; i++) {
	console.log(i);
}