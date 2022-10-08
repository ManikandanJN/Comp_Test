//JS Challengers Basics

// Question 1
// Write a function that takes two numbers (a and b) as argument
// Sum a and b
// Return the result
function myFunction(a, b)
{
return sum=a+b;
}
//Answer
myFunction(1,2)
Expected
3

//Question 2
// Write a function that takes two values, say a and b, as arguments
// Return true if the two values are equal and of the same type
function myFunction(a, b)
{
return a===b;
}
//Answer
myFunction(2, 3)
Expected
false 

//Question 3
// Write a function that takes a value as argument
// Return the type of the value
function myFunction(a)
{
return typeof a;
}
//Answer
myFunction(1)
Expected
'number'

//Question 4
// Write a function that takes a string (a) and a number (n) as argument
// Return the nth character of 'a'
function myFunction(a, n)
{
return a.charAt(n-1)
}
//Answer
myFunction('abcd',1)
Expected
'a'

//Question 5
// Write a function that takes a string (a) as argument
// Extract the first half a
// Return the result
function myFunction(a)
{
return a.slice(0,a.length/2)
}
//Answer
myFunction('abcdefgh')
Expected
'abcd'

//Question 6
// Write a function that takes a string (a) as argument
// Remove the last 3 characters of a
// Return the result
function myFunction(a)
{
return a.slice(0,-3)
}
//Answer
myFunction('abcdefg')
Expected
'abcd'

//Question 7
// Write a function that takes a string (a) as argument
// Remove the first 3 characters of a
// Return the result
function myFunction(a)
{
return a.substring(3)
}
//Answer
myFunction('abcdefg')
Expected
'defg'

//Question 8
// Write a function that takes a string as argument
// Extract the last 3 characters from the string
// Return the result
function myFunction(str)
{
return str.slice(str.length-3)
}
//Answer
myFunction('abcdefg')
Expected
'efg'

//Question 9
// Write a function that takes a string (a) as argument
// Extract the first half a
// Return the result
function myFunction(a)
{
return a.slice(0,a.length/2)
}
//Answer
myFunction('abcdefgh')
Expected
'abcd'

//Question 10
// Write a function that takes two numbers (a and b) as argument
// Return b percent of a
function myFunction(a, b)
{
return (a/100)*b
}
//Answer
myFunction(100,50)
Expected
50

//Question 11
// Write a function that takes two strings (a and b) as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation
function myFunction(a, b)
{
return a.includes(b) ? b + a : a + b;
}
//Answer
myFunction('cheese', 'cake')
Expected
'cheesecake'
myFunction('lips', 's')
Expected
'slips'

//Question 12
// Write a function that takes a number as argument
// If the number is even, return true
// Otherwise, return false
function myFunction(a)
{
let n=a % 2 == 0
return Boolean(n)
}
//Answer
myFunction(10)
Expected
true

//Question 13
// Write a function that takes two strings (a and b) as arguments
// Return the number of times a occurs in b
function myFunction(a, b)
{
return b.split(a).length - 1;
}
//Answer
myFunction('m', 'how many times does the character occur in this sentence?')
Expected
2

//Question 14
// Write a function that takes a number (a) as argument
// If a is a whole number (has no decimal place), return true
// Otherwise, return false
function myFunction(a)
{
return Math.floor(a) === a;
}
//Answer
myFunction(4)
Expected
true 
myFunction(1.123)
Expected
false 

//Question 15
// Write a function that takes two numbers (a and b) as arguments
// If a is smaller than b, divide a by b
// Otherwise, multiply both numbers
// Return the resulting value
function myFunction(a, b)
{
return b>a ? a/b : a*b
}
//Answer
myFunction(10, 100)
Expected
0.1
myFunction(90, 45)
Expected
4050

//Question 16
// Write a function that takes a number (a) as argument
// Split a into its individual digits and return them in an array
// Tipp: you might want to change the type of the number for the splitting
function myFunction(a) {
  return Array.from(String(a), Number);
}
//Another 
function myFunction( a ) {
  const string = a + '';
  const strings = string.split('');
  return strings.map(digit => Number(digit))
}
//Answer
myFunction(10)
Expected
[1,0]

//Question 17
// Write a function that takes two strings (a and b) as arguments
// Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
// Return the resulting string
function myFunction(a, b)
{
return a.replace(/(?=(...)+$)/g, b);
}
//Another
function myFunction(a, b) {
  let result = [];
  let rest = a;
  while (rest.length) {
    result.push(rest.slice(-3));
    rest = rest.slice(0, -3);
  }
  return result.reverse().join(b);
}
//Answer
myFunction('1234567','.')
Expected
'1.234.567'

//Question 18
// Write a function that takes 6 values (a,b,c,d,e,f) as arguments
// Sum a and b
// Then substract by c
// Then multiply by d and divide by e
// Finally raise to the power of f and return the result
// Tipp: mind the order
function myFunction(a, b, c, d, e, f)
{
let h= ((((a+b)-c)*d)/e)
return Math.pow(h,f)
}
//Another
function myFunction(a, b, c, d, e, f) {
  return (((a + b - c) * d) / e) ** f;
}
//Answer
myFunction(6,5,4,3,2,1)
Expected
10.5

//Question 19
// Write a function that takes a number (a) as argument
// Round a to the 2nd digit after the comma
// Return the rounded number
function myFunction(a)
{
return Math.round(a* 100) / 100
}
//Another
function myFunction(a) {
  return Number(a.toFixed(2));
}
//Answer
myFunction(3.136)
Expected
3.14

//Question 20
// Find the correct word by incrementing letters in alphabet
// Write a function that takes a string as argument
// As it is, the string has no meaning
// Increment each letter to the next letter in the alphabet
// Return the correct word
function myFunction(str)
{
let word = '';
    for(let i =0; i < str.length ; i++) {
        word += String.fromCharCode(str[i].charCodeAt(0) + 1);
    }
return word
}
//Another
function myFunction(str) {
  const arr = [...str];
  const correctedArray = arr.map(e => String.fromCharCode(e.charCodeAt()+1));
  return correctedArray.join('');
}
//Answer
myFunction('bnchmf')
Expected
'coding'

//Question 21
// Return the next higher prime number
// This challenge is a little bit more complex
// Write a function that takes a number (a) as argument
// If a is prime, return a
// If not, return the next higher prime number
function myFunction(a)
{
for (let i=2;i<a;i++){
  if(a%i===0){
    return myFunction(a+1)
  }
}
return a
}
//Another
function myFunction( a ) {
  function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return num > 1;
  }
 let n = a;
 while (!isPrime(n)) n++;
return n
}
//Answer 1
myFunction(38)
Expected
41
//Answer 
myFunction(115)
Expected
127

//Question 22
// Find next higher natural number that is divisble by y
// Write a function that takes two numbers, say x and y, as arguments
// Check if x is divisible by y
// If yes, return x
// If not, return the next higher natural number that is divisible by y
function myFunction(x, y)
{
  return Math.floor((x + y - 1) / y) * y;
}
//Another
function myFunction(x, y) {
  while (x % y !== 0) x++;
  return x;
}
//Answer 1
myFunction(7, 3)
Expected
9
//Answer 2
myFunction(1, 23)
Expected
23

//Question 23
// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
// Write a function that joins these strings together such that they form the following words:
// 'Javascript', 'Countryside', and 'Downtown'
// You might want to apply basic JS string methods such as replace(), split(), slice() etc
function myFunction(a, b)
{
  b = b.split('').reverse().join('')
  c= a[0].toUpperCase() + a.slice(1).concat(b).replace(/[^a-zA-Z ]/g,'')
return c
}
//Another
function myFunction(a, b) {
  const func = x => x.replace('%','');
  const first = func(a);
  const second = func(b).split('').reverse().join('');
  return first.charAt(0).toUpperCase() + first.slice(1) + second;
}
//Answer
myFunction('java', 'tpi%rcs')
Expected
'Javascript'
