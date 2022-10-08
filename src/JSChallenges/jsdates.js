// JavaScript Dates problems

//Question 1
// Sounds easy, but you need to know the trick
// Write a function that takes two date instances as arguments
// It should return true if the dates are equal
// It should return false otherwise
function myFunction(a, b)
{
return a.getTime() === b.getTime() 
}
//Answer
myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00'))
Expected
false

//Question 2
// Write a function that takes two date instances as argument
// It should return true if they fall on the exact same day
// It should return false otherwise
function myFunction(a, b)
{
  return a.getTime()===b.getTime()
}
//Another
function myFunction(a, b) {
  return a.getFullYear() === b.getFullYear() &&
         a.getMonth() === b.getMonth() &&
         a.getDate()=== b.getDate()
}
//Answer
myFunction(new Date('2000/01/01'), new Date('2000/01/01'))
Expected
true

//Question 3
// Write a function that takes two date instances as argument
// It should return the number of days that lies between those dates
function myFunction(a, b)
{
if(a<b){
    var Difference_In_Time = b.getTime() - a.getTime();
    var arr = Difference_In_Time / (1000 * 3600 * 24);
  }
  else{
    var Difference_In_Time = a.getTime() - b.getTime();
    var arr = Difference_In_Time / (1000 * 3600 * 24);
  }
return arr
}
//Another
function myFunction(a, b) {
  const dif = Math.abs(a - b);
  return dif / 1000 / 60 / 60 / 24
}
//Answer
myFunction(new Date('2020-06-11'), new Date('2020-06-01'))
Expected
10

//Question 4