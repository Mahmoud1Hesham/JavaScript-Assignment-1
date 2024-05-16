// Task 1

// var input = +window.prompt('Enter The number you want to show as Output : ');
// document.getElementById('output').innerHTML=input;

// Task 2
// var input = +window.prompt("Enter The number you want to check : ");
// if (!isNaN(input)) {
//   if (input % 3 === 0 && input % 4 === 0) {
//     document.getElementById("output").innerHTML = "Yes it does !";
//   } else {
//     document.getElementById("output").innerHTML = "No it doesn't";
//   }
// } else {
//   document.getElementById("output").innerHTML = "Please, enter a valid number";
// }

// Task 3
// var x = +window.prompt("Enter The first number : ");
// var y = +window.prompt("Enter The second number : ");

// if (!isNaN(x) && !isNaN(y)) {
//   if (x > y) {
//     document.getElementById("output").innerHTML = "The max number is : " + x;
//   } else if (x < y) {
//     document.getElementById("output").innerHTML = "The max number is : " + y;
//   } else {
//     document.getElementById("output").innerHTML = x + " = " + y;
//   }
// } else {
//   document.getElementById("output").innerHTML = "Please enter valid numbers";
// }

// Task 4
// var x = +window.prompt("Enter The number you want to check : ");
// if(!isNaN(x)){
//   if (x > 0) {
//     document.getElementById("output").innerHTML = x + " is a positive number";
//   }
//   else if (x < 0) {
//     document.getElementById("output").innerHTML = x + " is a negative number";
//   }
//   else {
//     document.getElementById("output").innerHTML =" 0 and it considered positive";
//   }
// } else {
//   document.getElementById("output").innerHTML = "Please enter valid number";
// }

// Task 5

// var x = +window.prompt("Enter The first number : ");
// var y = +window.prompt("Enter The secound number : ");
// var z = +window.prompt("Enter The third number : ");
// var max;
// var min;
// if (!isNaN(x) && !isNaN(y) && !isNaN(z)) {
//   max = x;
//   min = x;
//   if (y > max) {
//     max = y;
//   } else if (y < min) {
//     min = y;
//   }
//   if (z > max) {
//     max = z;
//   } else if (z < min) {
//     min = z;
//   }
//   document.getElementById("output").innerHTML =
//   "Max number : " + max + " and min number : " + min;
// }else{
//   document.getElementById("output").innerHTML = "Please, enter a valid number / numbers !";
// }

// Task 6
// var x = +window.prompt("Enter The number you want to check : ");
// if (!isNaN(x)) {
//   if (x % 2 == 0) {
//     document.getElementById("output").innerHTML = "The number is even !";
//   } else {
//     document.getElementById("output").innerHTML = "The number is odd !";
//   }
// }else{
//   document.getElementById("output").innerHTML = "Please, enter a valid number !"
// }

// Task 7
// var x = window.prompt("Enter The litter you want to check : ");
// if (isNaN(x)){
//   if(x == 'a'||x == 'e'||x == 'i'||x == 'o'||x == 'u'){
//     document.getElementById("output").innerHTML = "This litter is a vowel !";
//   }else{
//     document.getElementById("output").innerHTML = "This litter is a consonant !"
//   }
// }else{
//   document.getElementById("output").innerHTML = "Please, enter a valid litter !"
// }

// Task 8
// var x = +window.prompt("Enter The number you want to iterate : ");
// if(!isNaN(x)){
//   for(var i =0; i <= x ;i++){
//     if (i === x) {
//       document.getElementById("output").innerHTML += i;
//     } else {
//       document.getElementById("output").innerHTML += i + ", ";
//     }
//   }
// }else{
//   document.getElementById("output").innerHTML = "Please, enter a valid number !"
// }

// Task 9
// var x = +window.prompt("Enter The number you want to get it's multiplication : ");
// var result;
// if(!isNaN(x)){
//   for(var i = 1; i <= 12; i++){
//     result = i * x;
//     if(i == 12){
//       document.getElementById("output").innerHTML += result;
//     }else{
//       document.getElementById("output").innerHTML += result + ", ";
//     }
//   }
// }else{
//     document.getElementById("output").innerHTML = "Please, enter a valid number !"
// }

// Task 10
// var x = +window.prompt("Enter The number you want to check : ");
// if (!isNaN(x)) {
//   var output = "";
//   for (var i = 1; i <= x; i++) {
//     if (i % 2 == 0) {
//         if (i < x && i< x-1) {
//             output += i + ", ";
//           } else {
//             output += i;
//           }
//         }
//   }
//   if (output === "") {
//     output = "There are no even numbers between 1 and " + x + "!";
//   }
//   document.getElementById("output").innerHTML = output;
// } else {
//   document.getElementById("output").innerHTML =
//     "Please, enter a valid number !";
// }

// Task 11
// var x = +window.prompt("Enter The base number : ");
// var y = +window.prompt("Enter The exponent : ");
// var result = 1;

// if (!isNaN(x) && !isNaN(y)) {
//   for (var i = 0; i < y; i++) {
//     result *= x;
//   }
//   document.getElementById("output").innerHTML = result;
// } else {
//   document.getElementById("output").innerHTML = "Please, enter valid numbers !";
// }

// Task 12
// var sub1 = +window.prompt("Enter The 1st number : ");
// var sub2 = +window.prompt("Enter The 2st number : ");
// var sub3 = +window.prompt("Enter The 3st number : ");
// var sub4 = +window.prompt("Enter The 4st number : ");
// var sub5 = +window.prompt("Enter The 5st number : ");
// if (!isNaN(sub1) && !isNaN(sub2) && !isNaN(sub3) && !isNaN(sub4) && !isNaN(sub5)) {
// var total = sub1 + sub2 + sub3 + sub4 + sub5;
// var average = total / 5;
// var per = average + "%";
// document.getElementById("output").innerHTML =
//   "The Total is : " +
//   total +
//   ", and The avarage is : " +
//   average +
//   ", and The per is : " +
//   per;
// } else {
//   document.getElementById("output").innerHTML = "Please, enter valid numbers !";
// }

//Task 13
// var monthNumber = +window.prompt("Enter the number of the month (1-12): ");
// if (!isNaN(monthNumber) && monthNumber >= 1 && monthNumber <= 12) {
//   if (monthNumber == 1 || monthNumber == 3 || monthNumber == 5 || monthNumber == 7 ||
//       monthNumber == 8 || monthNumber == 10 || monthNumber == 12) {
//         document.getElementById("output").innerHTML = "Number of days in month " + monthNumber + " : 31";
//   } else if (monthNumber == 4 || monthNumber == 6 || monthNumber == 9 || monthNumber == 11) {
//     document.getElementById("output").innerHTML = "Number of days in month " + monthNumber + " : 30";
//   } else if (monthNumber == 2) {
//     document.getElementById("output").innerHTML = "Number of days in month " + monthNumber + " : 28 or 29";
//   }
// } else {
//   document.getElementById("output").innerHTML = "Please enter a valid month number (1-12)!";
// }

//Task 14
// var physics = +window.prompt("Enter marks for Physics: ");
// var chemistry = +window.prompt("Enter marks for Chemistry: ");
// var biology = +window.prompt("Enter marks for Biology: ");
// var mathematics = +window.prompt("Enter marks for Mathematics: ");
// var computer = +window.prompt("Enter marks for Computer: ");
// if (
//   !isNaN(physics) &&
//   !isNaN(chemistry) &&
//   !isNaN(biology) &&
//   !isNaN(mathematics) &&
//   !isNaN(computer)
// ) {
//   var totalMarks = physics + chemistry + biology + mathematics + computer;
//   var percentage = (totalMarks / 500) * 100;
//   var grade;
//   if (percentage >= 90) {
//     grade = "A";
//   } else if (percentage >= 80) {
//     grade = "B";
//   } else if (percentage >= 70) {
//     grade = "C";
//   } else if (percentage >= 60) {
//     grade = "D";
//   } else if (percentage >= 40) {
//     grade = "E";
//   } else {
//     grade = "F";
//   }
//   document.getElementById("output").innerHTML =
//     "Percentage: " + percentage + "%<br>Grade: " + grade;
// } else {
//   document.getElementById("output").innerHTML =
//     "Please, enter valid numbers !";
// }

// Task 15
// var x = +prompt("Enter the number of the month : ");
// if (!isNaN(x)) {
//   switch (x) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//       document.getElementById("output").innerHTML =
//         "The days in month number " + x + " is 31 days";
//       break;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//       document.getElementById("output").innerHTML =
//         "The days in month number " + x + " is 30 days";
//       break;
//     case 2:
//       document.getElementById("output").innerHTML =
//         "The days in month number " + x + " is 28 or 29 days depending on the year";
//       break;
//     default:
//       document.getElementById("output").innerHTML =
//         "There is no month with number " + x;
//       break;
//   }
// } else {
//   document.getElementById("output").innerHTML =
//     "Please, enter a valid number!";
// }

// Task 16
// var x = window.prompt("Enter The litter you want to check : ");
// if (isNaN(x)) {
//   switch (x) {
//     case "a":
//     case "e":
//     case "i":
//     case "o":
//     case "u":
//       document.getElementById("output").innerHTML = "This litter is a vowel !";
//       break;
//     default:
//       document.getElementById("output").innerHTML =
//         "This litter is a consonant !";
//   }
// } else {
//   document.getElementById("output").innerHTML =
//     "Please, enter a valid litter !";
// }

// Task 17
// var x = +window.prompt("Enter The first number : ");
// var y = +window.prompt("Enter The second number : ");
// if (!isNaN(x) && !isNaN(y)) {
// switch(true){
//     case x > y:
//         document.getElementById("output").innerHTML = "The max number is : "+x;
//         break;
//         case x < y:
//             document.getElementById("output").innerHTML = "The max number is : "+y;
//             break;
// default:
//     document.getElementById("output").innerHTML = x + " = " + y;
//         }
//     } else {
//         document.getElementById("output").innerHTML = "Please enter valid numbers";
//       }

// Task 18
// var x = +window.prompt("Enter The number you want to check : ");

// if (!isNaN(x)) {
//   switch (true) {
//     case x % 2 == 0:
//       document.getElementById("output").innerHTML = "The number is even !";
//       break;
//     default:
//       document.getElementById("output").innerHTML = "The number is odd !";
//   }
// } else {
//   document.getElementById("output").innerHTML = "Please enter valid number";
// }

//Task 19
// var x = +window.prompt("Enter The number you want to check : ");
// if (!isNaN(x)) {
//   switch (true) {
//     case x > 0:
//       document.getElementById("output").innerHTML = x + " is a positive number";
//       break;
//     case x < 0:
//       document.getElementById("output").innerHTML = x + " is a negative number";
//       break;
//     default:
//       document.getElementById("output").innerHTML =
//         " 0 and it considered positive";
//   }
// } else {
//   document.getElementById("output").innerHTML = "Please enter valid number";
// }

// Task 20
// var num1, num2, operator, result;

// operator = prompt("Enter the operator (+, -, *, /):");

// if (operator === "+" || operator === "-" || operator === "*" || operator === "/") {
//     num1 = +(prompt("Enter the first number:"));
//     num2 = +(prompt("Enter the second number:"));
//     if( !isNaN(num1) &&!isNaN(num2)){
//     switch (operator) {
//         case "+":
//             result = num1 + num2;
//             break;
//         case "-":
//             result = num1 - num2;
//             break;
//         case "*":
//             result = num1 * num2;
//             break;
//         case "/":
//             if (num2 !== 0) {
//                 result = num1 / num2;
//             } else {
//                 result = "Error: Division by zero!";
//             }
//             break;
//     }
//     document.getElementById("output").innerHTML ="Result : " + result;
//     }else{
//         document.getElementById("output").innerHTML = "Please enter valid numbers   ";
//     }
// } else {
//     document.getElementById("output").innerHTML ="Invalid operator!";
// }
