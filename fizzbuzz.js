/* fizzbuzz challenge */

/* pseudocode
ask user for numerical input
create a loop printing 1 to user number
if number is divisible by 3 print fizz
if number is divisible by 5 print buzz
if number is divisible by 3 and 5 print fizzbuzz
*/

userNumber = parseInt(prompt("Please choose a number"));
console.log(userNumber);

var result = "";

for (let i = 1; i <= userNumber; i++) {
    result = result + i;
    if (i % 3 === 0) {
        console.log("fizz");
    } else if (i % 5 === 0) {
        console.log("buzz")
    } else {
        console.log(i);
    }
}

