//Question 1
// Write a function that takes an object with two properties as argument
// It should return the value of the property with key country
function myFunction(obj)
{
  return obj.country
}
//Answer
myFunction({ continent: 'Asia', country: 'Japan' })
Expected
'Japan'


//Question 2
// Write a function that takes an object (a) and a string (b) as argument
// Return true if the object has a property with key 'b'
// Return false otherwise
// Tipp: test case 3 is a bit tricky because the value of property 'z' is undefined
// But the property itself exists
function myFunction(a, b)
{
  return a.hasOwnProperty(b)
}
//Another
function myFunction(a, b) 
{
  return b in a;
}
//Answer
myFunction({a:1,b:2,c:3},'b')
Expected
true
myFunction({x:'a',y:'b',z:'c'},'a')
Expected
false

//Question 3
// Write a function that takes an object with two properties as argument
// It should return the value of the property with key 'prop-2'
// Tipp: you might want to use the square brackets property accessor
function myFunction(obj)
{
let a="prop-2"
return obj[a]
}
//Another
function myFunction(obj) {
  return obj['prop-2']
}
//Answer
myFunction({  one: 1,  'prop-2': 2})
Expected
2
myFunction({  'prop-2': 'two',  prop: 'test'})
Expected
'two'

//Question 4
// Write a function that takes an object with two properties and a string as arguments
// It should return the value of the property with key equal to the value of the string
function myFunction(obj, key)
{
for(let i in obj){
  if(obj[i]==key){
    return obj[key]
  }
}
  return obj[key]
}
//Another
function myFunction(obj, key) {
  return obj[key]
}
//Answer
myFunction({  continent: 'Asia',  country: 'Japan'}, 'continent')
Expected
'Asia'

//Question 5
// Write a function that takes an object (a) and a string (b) as argument
// Return true if the object has a property with key 'b', but only if it has a truthy value
// In other words, it should not be null or undefined or false
// Return false otherwise
function myFunction(a, b)
{
  return a[b] ? true : false
}
//Another
function myFunction(a, b) {
  return Boolean(a[b]);
}
//Answer
myFunction({a:1,b:2,c:3},'b')
Expected
true
myFunction({x:'a',y:null,z:'c'},'y')
Expected
false

//Question 6
// Write a function that takes an object (a) as argument
// Return an array with all object keys
function myFunction(a)
{
let keys=[]
for(let k in a)
  keys.push(k)
return keys
}
//Another
function myFunction(a) {
  return Object.keys(a);
}
//Answer
myFunction({a:1,b:2,c:3})
Expected
['a','b','c']

//Question 7
// Write a function that takes an object (a) as argument
// Return the sum of all object values
function myFunction(a)
{
  return Object.values(a).reduce((a, b) => a + b)
}
//Another
function myFunction(a) {
  return Object.values(a).reduce((sum, cur) => sum + cur, 0);
}
//Answer
myFunction({a:1,b:2,c:3})
Expected
6

//Question 8
// Write a function that takes an object as argument
// It should return an object with all original object properties
// except for the property with key 'b'
function myFunction(obj)
{
const clone = (({ b, ...o }) => o)(obj)
return clone
}
//Another
function myFunction(obj) {
  const { b, ...rest } = obj;
  return rest;
}
//Answer
myFunction({ a: 1, b: 7, c: 3 })
Expected
{ a: 1, c: 3 }

//Question 9
// Write a function that takes an object as argument
// Somehow, the properties and keys of the object got mixed up
// Swap the Javascript object's key with its values and return the resulting object
function myFunction(obj)
{
var b= {};
  for(var key in obj){
    b[obj[key]] = key;
  }
return b
}
//Another
function myFunction(obj) {
  return Object.entries(obj).reduce((acc, [key, val]) => {
     return { ...acc, [val]: key };
  }, {});
}
//Answer
myFunction({z:'a',y:'b',x:'c',w:'d'})
Expected
{a:'z',b:'y',c:'x',d:'w'}

//Question 10
// Write a function that takes an object as argument
// Some of the property values contain empty strings
// Replace empty strings and strings that contain only whitespace with null values
// Return the resulting object
function myFunction(obj)
{
let arr={}
for(let i in obj)
  arr[i] = (obj[i]).trim()=='' ? null : obj[i] 
return arr
}
//Another
function myFunction(obj) {
  const newObj = { ...obj };
  for (key in newObj) {
    if (newObj[key].trim() === '') newObj[key] = null;
  }
  return newObj;
}
//Answer
myFunction({ a: 'a', b: 'b', c: '' })
Expected
{ a: 'a', b: 'b', c: null }

//Question 11
// Write a function that takes an array of objects and a string as arguments
// Add a property with key 'continent' and value equal to the string to each of the objects
// Return the new array of objects
// Tipp: try not to mutate the original array
function myFunction(arr, str)
{
  return arr.map(obj => ({...obj, continent: str}))
}
//Answer
myFunction([{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }], 'Asia')
Expected
[{ city: 'Tokyo', country: 'Japan', continent: 'Asia' }, { city: 'Bangkok', country: 'Thailand', continent: 'Asia' }]

//Question 12
// Write a function that takes two strings (a and b) as arguments
// Create an object that has a property with key 'a' and a value of 'b'
// Return the object
function myFunction(a, b)
{
  return {[a]:b}
}
//Answer
myFunction('a','b')
Expected
{a:'b'}

//Question 13
// Write a function that takes a string as argument
// Create an object that has a property with key 'key' and a value equal to the string
// Return the object
function myFunction(a)
{
  return {key:a}
}
//Answer
myFunction('a')
Expected
{key:'a'}

//Question 14
// Write a function that takes two arrays (a and b) as arguments
// Create an object that has properties with keys 'a' and corresponding values 'b'
// Return the object
function myFunction(a, b) {
  let t={}
  let index=0
  for(let i of a){
    t[i]=b[index]
    index++
  }
  return t
}
//Another
function myFunction(a, b) {
  return a.reduce((acc, cur, i) => ({ ...acc, [cur]: b[i] }), {});
}
//Answer
myFunction(['a','b','c'],[1,2,3])
Expected
{a:1,b:2,c:3}

//Question 15
// Write a function that takes two objects as arguments
// Unfortunately, the property 'b' in the second object has the wrong key
// It should be named 'd' instead
// Merge both objects and correct the wrong property name
// Return the resulting object
// It should have the properties 'a', 'b', 'c', 'd', and 'e'
function myFunction(x, y) {
  y['d']=y.b
  delete y['b']
  return {...x,...y}
}
//Another
function myFunction(x, y) {
  const { b, ...rest } = y;
  return { ...x, ...rest, d: b };
}
//Answer
myFunction({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 })
Expected
{ a: 1, b: 2, c: 3, e: 5, d: 4}

//Question 16
// Write a function that takes an object as argument containing properties with personal information
// Extract firstName, lastName, size, and weight if available
// If size or weight is given transform the value to a string
// Attach the unit cm to the size
// Attach the unit kg to the weight
// Return a new object with all available properties that we are interested in
function myFunction(obj) {
  let t={
    [obj.hasOwnProperty('fn')?'fn':'']:obj.fn,
    [obj.hasOwnProperty('ln')?'ln':'']:obj.ln,
    [obj.hasOwnProperty('size')?'size':'']:obj.size+'cm',
    [obj.hasOwnProperty('weight')?'weight':'']:obj.weight+'kg',
  }
  delete t['']
  return t
}
//Another
function myFunction(obj) {
  return {
    fn: obj.fn,
    ln: obj.ln,
    ...(obj.size && { size: `${obj.size}cm` }),
    ...(obj.weight && { weight: `${obj.weight}kg` }),
  };
}
//Answer
myFunction({fn: 'Lisa', ln: 'Müller', age: 17, size: 175, weight: 67})
Expected
{fn: 'Lisa', ln: 'Müller', size: '175cm', weight: '67kg'}

//Question 17
// Write a function that takes an array of numbers as argument
// Convert the array to an object
// It should have a key for each unique value of the array
// The corresponding object value should be the number of times the key occurs within the array
function myFunction(a)
{
const count = {};
a.forEach(element => {
  count[element] = (count[element] || 0) + 1;
});
return count
}
//Another
function myFunction(a) {
  return a.reduce((acc, cur) => {
    return { ...acc, [cur]: (acc[cur] || 0) + 1 };
  }, {});
}
//Answer
myFunction([1,2,2,3])
Expected
{1:1,2:2,3:1}

//Question 18
// Write a function that takes an object (a) and a number (b) as arguments
// Multiply all values of 'a' by 'b'
// Return the resulting object
function myFunction(a, b)
{
const obj= Object.fromEntries(
  Object.entries(a)
  .map(([ key, val ]) => [ key, val * b ])
);
return obj
}
//Another
function myFunction(a, b) {
   return Object.entries(a).reduce((acc, [key, val]) => {
   	return { ...acc, [key]: val * b };
   }, {});
}
//Answer
myFunction({a:1,b:2,c:3},3)
Expected
{a:3,b:6,c:9}