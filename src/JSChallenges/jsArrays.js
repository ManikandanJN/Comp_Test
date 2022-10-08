// JavaScript Arrays

//Question 1
// Write a function that takes an array (a) and a value (n) as argument
// Return the nth element of 'a'
function myFunction(a, n)
{
  return a[n-1]
}
//Answer
myFunction([1,2,3,4,5],3)
Expected
3

//Question 2
// Write a function that takes an array (a) as argument
// Remove the first 3 elements of 'a'
// Return the result
function myFunction(a)
{
  return a.slice(3)
}
//Answer
myFunction([5,4,3,2,1,0])
Expected
[2,1,0]

//Question 3
// Write a function that takes an array (a) as argument
// Extract the last 3 elements of 'a'
// Return the resulting array
function myFunction(a)
{
  return a.slice(-3)
}
//Answer
myFunction([1,2,3,4])
Expected
[2,3,4]

//Question 4
// Write a function that takes an array (a) as argument
// Extract the first 3 elements of a
// Return the resulting array
function myFunction(a)
{
  return a.slice(0,3)
}
//Answer
myFunction([5,4,3,2,1,0])
Expected
[5,4,3]

//Question 5
// Write a function that takes an array (a) and a number (n) as arguments
// It should return the last n elements of a
function myFunction(a, n)
{
  return a.slice(-n)
}
//Answer
myFunction([1, 2, 3, 4, 5], 2)
Expected
[ 4, 5 ]

//Question 6
// Write a function that takes an array (a) as argument
// Return the number of elements in a
function myFunction(a)
{
  return a.length
}
//Answer
myFunction([1,2,2,4])
Expected
4

//Question 7
// Write a function that takes an array of strings as argument
// Sort the array elements alphabetically
// Return the result
function myFunction(arr)
{
  return arr.sort()
}
//Answer
myFunction(['b', 'c', 'd', 'a'])
Expected
['a', 'b', 'c', 'd']

//Question 8
// Write a function that takes an array of numbers as argument
// It should return the sum of the numbers
function myFunction(a)
{
let sum=0;
for(let i=0;i<a.length;i++)
  sum=sum+a[i]
return sum
}
//Another
function myFunction(a) {
  return a.reduce((acc, cur) => acc + cur, 0);
}
//Answer
myFunction([10,100,40])
Expected
150

//Question 9
// Write a function that takes an array (a) and a value (b) as argument
// The function should remove all elements equal to 'b' from the array
// Return the filtered array
function myFunction(a, b)
{
const result = a.filter(function(x) {
    return x !== b;
});
return result
}
//Another
function myFunction( a, b ) {
  return a.filter(cur => cur !== b)
}
//Answer
myFunction([1,2,3], 2)
Expected
[1, 3]
myFunction([1,2,'2'], '2')
Expected
[1, 2]

//Question 10
// Write a function that takes an array of numbers as argument
// It should return an array with the numbers sorted in descending order
function myFunction(arr)
{
let b= arr.sort()
return b.reverse()
}
//Another
function myFunction( arr ) {
  return arr.sort((a, b) => b - a)
}
//Answer
myFunction([1,3,2])
Expected
[3,2,1]

//Question 11
// Write a function that takes an array of numbers as argument
// It should return the average of the numbers
function myFunction(arr)
{
let b=arr.length
let a = arr.reduce((acc, cur) => acc + cur, 0);
return a/b
}
//Another
function myFunction( arr ) {
  return arr.reduce((acc, cur) => acc + cur, 0) / arr.length
}
//Answer
myFunction([10,100,40])
Expected
50

//Question 12
// Write a function that takes an array of strings as argument
// Return the longest string
function myFunction(arr)
{
let longest = arr.reduce(
    function (a, b) {
        return a.length > b.length ? a : b;
    }
);
return longest
}
//Another
function myFunction( arr ) {
  return arr.reduce((a, b) => a.length <= b.length ? b : a)
}
//Answer
myFunction(['I', 'need', 'candy'])
Expected
'candy'

//Question 13
// Write a function that takes an array as argument
// It should return true if all elements in the array are equal
// It should return false otherwise
function myFunction(arr)
{
  return arr.every( (val, i, arr) => val === arr[0] )
}
//Another
function myFunction( arr ) {
  return new Set(arr).size === 1
}
//Answer
myFunction(['test', 'test', 'test'])
Expected
true 
myFunction([1,1,1,2])
Expected
false 

//Question 14
// Write a function that takes arguments an arbitrary number of arrays
// It should return an array containing the values of all arrays
function myFunction(...arrays)
{
  return arrays.flat()
}
//Answer
myFunction([1, 2, 3], [4, 5, 6])
Expected
[1, 2, 3, 4, 5, 6]

//Question 15
// Write a function that takes an array of numbers as argument
// Return the number of negative values in the array
function myFunction(a)
{
let result=[]
for(let i=0;i<a.length;i++){
if(a[i]<0){
  result.push(i)
}
}
c=result.length
return c
}
//Another
function myFunction(a) {
  return a.filter((el) => el < 0).length;
}
//Answer
myFunction([1,-2,2,-4])
Expected
2

//Question 16
// Write a function that takes two numbers (min and max) as arguments
// Return an array of numbers in the range min to max
function myFunction(min, max)
{
  return range = [...Array(max- min+ 1).keys()].map(x => x + min);
}
//Another
function myFunction(min, max) {
  let arr = [];
  for (let i = min; i <= max; i++) {
    arr.push(i);
  }
return arr;
}
//Answer
myFunction(2, 10)
Expected
[2, 3, 4, 5, 6, 7, 8, 9, 10]

//Question 17
// Write a function that takes an array of strings as argument
// Group those strings by their first letter
// Return an object that contains properties with keys representing first letters
// The values should be arrays of strings containing only the corresponding strings
// For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
// { a: ['Alf', 'Alice'], b: ['Ben']}
function myFunction(arr)
{
let resultObj = {};
  for (let i =0; i < arr.length; i++) {
    let currentWord = arr[i];
    let firstChar = currentWord[0].toLowerCase();
    let innerArr = [];
    if (resultObj[firstChar] === undefined) {
       innerArr.push(currentWord);
      resultObj[firstChar] = innerArr
    }else {
      resultObj[firstChar].push(currentWord)
    }
  }
  return resultObj
}
//Another
function myFunction(arr) {
  return arr.reduce((acc, cur) => {
    const firstLetter = cur.toLowerCase().charAt(0);
    return { ...acc, [firstLetter]: [...(acc[firstLetter] || []), cur] };
  }, {});
 }
//Answer
myFunction(['Alf', 'Alice', 'Ben'])
Expected
{ a: ['Alf', 'Alice'], b: ['Ben']}

//Question 18
// Write a function that takes two arrays as arguments
// Merge both arrays and remove duplicate values
// Sort the merge result in ascending order
// Return the resulting array
function myFunction(a, b)
{
let c=a.concat(b)
 var removeDuplicate= [];
 for(i=0; i < c.length; i++){
            if(removeDuplicate.indexOf(c[i]) === -1) {
                removeDuplicate.push(c[i]);
            }
 }
removeDuplicate.sort(function(a, b){return a-b});
return removeDuplicate
}
//Another
function myFunction(a, b) {
  return [...new Set([...a, ...b])].sort((x, y) => x - y);
}
//Answer
myFunction([-10, 22, 333, 42], [-11, 5, 22, 41, 42])
Expected
[ -11, -10, 5, 22, 41,  42, 333]

//Question 19
// Write a function that takes an array (a) and a number (b) as arguments
// Sum up all array elements with a value greater than b
// Return the sum
function myFunction(a, b) {
  return a.reduce((sum, cur) => {
    if (cur > b) return sum + cur;
    return sum;
  }, 0);
}
//Answer
myFunction([1, 2, 3, 4, 5, 6, 7], 2)
Expected
25

//Question 20
// Write a function that takes an array (a) and a value (n) as arguments
// Save every nth element in a new array
// Return the new array
function myFunction(a, n)
{
  return  a.filter((e, i) => i % n === n- 1);
}
//Another
function myFunction(a, n) {
  let rest = [...a];
  let result = [];
  for (let i = 0; i < a.length; i++) {
     if (rest.length < n) break;
     result.push(rest[n - 1]);
     rest = rest.slice(n);
  }
  return result;
}
//Answer
myFunction([1,2,3,4,5,6,7,8,9,10],3)
Expected
[3,6,9]

//Question 21
// Write a function that takes an array with arbitrary elements and a number as arguments
// Return a new array, the first element should be either the given number itself
// or zero if the number is smaller than 6
// The other elements should be the elements of the original array
// Try not to mutate the original array
function myFunction(arr, num)
{
if(num<6){
    num=0
    arr.unshift(num)
 }
else
    arr.unshift(num)
return arr
}
//Another
function myFunction(arr, num) {
  return [...(num > 5 ? [num] : [0]), ...arr];
 }
//Answer 1
myFunction([1,2,3], 6)
Expected
[6,1,2,3]
//Answer 2
myFunction(['a','b'], 2)
Expected
[0,'a','b']

//Question 22
// Write a function that takes an array of objects as argument
// Sort the array by property b in ascending order
// Return the sorted array
function myFunction(arr)
{
  let c=arr.concat()
  var sortedArray = c.sort(function(a, b) {
    return a.b - b.b 
});
  return sortedArray
}
//Another
function myFunction(arr) {
  const sort = (x, y) => x.b - y.b;
  return arr.sort(sort);
}
//Answer 1
myFunction([{a:1,b:2},{a:5,b:4}])
Expected
[{a:1,b:2},{a:5,b:4}]
//Answer 2
myFunction([{a:2,b:10},{a:5,b:4}])
Expected
[{a:5,b:4},{a:2,b:10}]

