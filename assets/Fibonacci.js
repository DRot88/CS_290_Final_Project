var num1 = 0;
var num2 = 1;
var num3;
 
var limit = prompt("Enter the maximum fibonacci iterations you would like to see");
console.log(num1);
console.log(num2);

for(var i=3; i <= limit; i++)
{
  num3 = num1 + num2;
  num1 = num2;
  num2 = num3;

  console.log(num3);
}