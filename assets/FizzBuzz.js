var user_input = prompt("How many items would you like to see for the FizzBuzz game?");
var FizzBuzz = [];
var x = 1;
while (x <= user_input) {
  if ((x % 3 == 0) && (x % 5 == 0)) {
    FizzBuzz.push("FizzBuzz");
  } else if (x % 3 == 0) {
    FizzBuzz.push("Fizz");
  } else if (x % 5 == 0) {
    FizzBuzz.push("Buzz");
  } else {
    FizzBuzz.push(x);
  }
  x += 1;
}

alert(FizzBuzz);