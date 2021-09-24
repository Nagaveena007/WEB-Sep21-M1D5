/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/
const area = function(length, breadth) {

    if ((length === undefined)||(breadth === undefined)) {
       
     return "ERROR: please provide length and breadth of the rectangle"
    
    }

    let result = 2*(length + breadth)
    return result
 }
let areaOfRectangle=area(10,12)
console.log(areaOfRectangle)

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

const crazySum=function(p1,p2)
{
if(p1===p2){
    let sum1=3*(p1+p2)
    return sum1
 }
 else{
    let sum2=(p1+p2)
    return sum2
 }

}
 let sum=crazySum(2,5)
console.log(sum)


/* WRITE YOUR ANSWER HERE */

/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/
let b=19
const crazyDiff=function(a){
if(a>19){
    let tripleResult= (3*(a-19))
    return tripleResult
}
else{
    let res=(a-19)
    return res
}

}
let diff=crazyDiff(22)
console.log(diff)

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/

const boundary=function(n1){
if((n1>=20 && n1<=100)|| (n1===400)){
return true
}
return false
}

let answer=boundary(300)
console.log(answer)

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/
const strivify=function(fStr){
if(fStr==="strive"){

return
}
else{
  let re=fStr+"strive"
}
return re

}
let strive=strivify("strive")
console.log(strive)
/* WRITE YOUR ANSWER HERE */

/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/

const check3and7=function(positiveNumber){
if((positiveNumber%3===0)&&(positiveNumber%7===0)){
    console.log(positiveNumber,"is a multiple of 3 or 7")
    return
}
else{
    console.log(positiveNumber,"is not a multiple of 3 or 7")
}
return
}
let givenPositiveNumber=check3and7(21)


/* WRITE YOUR ANSWER HERE */

/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/
const reverseString= function (str) {
    let  nString
    for (let i = str.length - 1; i >= 0; i--) { 
       
        nString = nString + str[i]
    }
    return nString;
}
let r=reverseString("hello");
console.log(r)
/* WRITE YOUR ANSWER HERE */

/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/


/*const upperFirst= function (_dem) {
    let toCamelCase
    for (let i = 0; i <=_dem.length; i++) { 
    
    }
    }
*/

    console.log("--------- >Got this from web <------------")
camelize = function camelize(str) {
    return str.replace(/\W+(.)/g, function(match, chr)
     {
          return chr.toUpperCase();
      });
  }

console.log(camelize("javaScript exercises"));

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/
/*
const cutString=function(givenString){

let removedItem = givenString.pop()
removedItem+=removedItem.splice(0,1)
return
}
let newString=cutString("My Name is Veena")
console.log(newString)
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

const giveMeRandom = function(n) {
    let arrWithNums = [];
    for(i = 0; i < n; i++) {
         arrWithNums.push(Math.floor(Math.random() * 10)); 
    }
    return arrWithNums;
}
let ran=giveMeRandom(4)
console.log(ran);
/* WRITE YOUR ANSWER HERE */

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/