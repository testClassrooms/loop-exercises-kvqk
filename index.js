/*Exercise 1 

Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check 
if the current number is odd or even, and display a message to the screen.

Sample Output : 
"0 is even" 
"1 is odd" 
"2 is even" 
---------- 
---------- 
*/
for (let a = 0; a <= 15; a++) {
  if (a % 2 === 0) {
    console.log(`${a} is even`);
  } else {
    console.log(`${a} is odd`);
  }
}
/*Exercise 2

7. Write a JavaScript program which iterates the integers from 1 to 100. 
But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". 
For numbers which are multiples of both three and five print "FizzBuzz". Go to the editor 
0 1 2 "Fizz" 4 "Buzz" "Fizz" 7 8 "Fizz" "Buzz" etc */
for (let number = 1; number <= 100; number++) {
  if (number % 4 === 0 && number % 8 === 0) {
    console.log("FizzBuzz");
  } else if (number % 4 === 0) {
    console.log("Fizz");
  } else if (number % 8 === 0) {
    console.log("Buzz");
  } else {
    console.log(number);
  }
}
/*Exercise 4 

Using a for loop print all even numbers up to and including n. Don’t include 0.

let n1 = 22; 
Example output: 
2 4 6 8 10 12 14 16 18 20 22 OR each item on a new line
*/
let n1 = 22;
for (n1 = 1; n1 <= 22; n1++) {
  if (n1 % 2 === 0) {
    console.log(n1);
  }
}
/*let number is declaring variable "<= is less than and equal to the last number. for ex 1 to 500 "++ is plus 1's" */
/* % is dividing, 3 === 0 then console log, that is checking if the number can be divisible by that number */
/* else is if its something else then the console log will say what ever */
/*Exercise 8

  Multiplication Tables
  Write a for loop that will iterate from 0 to 10. For each iteration of the
  for loop, it will multiply the number by 9 and log the result
  (e.g. "2 * 9 = 18").
  Bonus: Use a nested for loop to show the tables for every multiplier from
  1 to 10 (100 results total).*/
let n2;
for (n2 = 0; n2 <= 10; n2++) {
  console.log(n2 * 9);
}

for (let grade = 60; grade <= 100; grade++) {
  //   if ((grade = 60 <= 69)) {
  //     console.log("You got a D");
  //   } else if ((grade = 70 <= 79)) {
  //     console.log("you got a C");
  //   }
}
/*let grade = 59;
if (grade <= 59) {
  console.log("Your grade is F ");
} else if (60 <= grade && grade <= 69) {
  console.log("your grade is D");
} else if (70 <= grade && grade <= 79) {
  console.log("your grade is C");
} else if (80 <= grade && grade <= 89) {
  console.log("your grade is B");
} else if (90 <= grade && grade <= 100) {
  console.log("your grade is A");}
  



/*
Exercise 9 

The Grade Assigner
Check the results of your assignGrade function from the conditionals exercise
by logging every value from 60 to 100: your log should show "For 88, you got a
B. For 89, you got a B. For 90, you got an A. For 91, you got an A.", etc.,
logging each grade point in the range.
Exercise 5 

Given a string change the every second letter to an uppercase ‘Z’. Assume
there are no space.

let str1 = "javascript";  
Example output: 
jZvZsZrZpZ OR each letter on a new line
HINT: You can use  if((i+1) % 2 == 0) to check for even indexes */

/*Exercise 3

Get the sum of two arrays…actually the sum of all their elements.
P.S. Each array includes only integer numbers. Output is a number too.

let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; // --> 276
let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26]; // --> 351
Example output: 
276 + 351 = 627





Exercise 6

Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not.

let str2 = "don’t know why";
Example output: 
“yes”

Exercise 7

Given a number n Calculate the factorial of the number

let n2 = 4; //  4 * 3 * 2 * 1 = 24
Example output:
24

 



*/
