/*function showMessage() {
    var a=10;
    var b=20;
    var c=a+b;
    console.log(c);
    alert("The sum of a and b is: " + c);
}
// in javascript we can re declare 
var b=20;
var name="John";
var c=true;
var b=30;
console.log(b);
let a;
a=20;
console.log(a);

const d=30;
c=50;
console.log(c);

//data type in javascript
//1. primitive : number, string, boolean, null, undefined, symbol,bigint
// number
let c=20;
let d=20.00;
// string
let e="Hello";
let str="World";
console.log(typeof c);
console.log(typeof isTrue);
// boolean
let f=true;
// null
let g=null;
console.log(typeof g);
// undefined
let h=undefined;
// symbol
let i=Symbol("key");
console.log(typeof i);
console.log()
// bigint
let j=BigInt(123456789012345678901234567890);

//2. non primitive : object, array, function
//object
const person = {
    name: "John",
    age: 30,
    isStudent: true
    address:{
        street:"123 Main St",
        state:"tamilnadu",
    },
    contactNumbers:[1234567890,9876543210]
};*/
/*const numbers=[1,2,3,4,5];
let age = new Array(5);
for (let i=0;i<age.length;i++){
    console.log(age[i]);
}*/
const num=[1,2,3,4];
PopStateEvent(num);

for(let i=0;i<numbers.length;i++){
    console.log(numbers[i]);
}
const numbersCopy=numbers.slice(2,4);
console.log(numbersCopy);
function add(name){
    console.log("Hello "+name);
}
add("John");
add("joe");

const mutiply=(a,b)=>{
    return a*b;

}
console.log(mutiply(2,3));
function add(a,b){
    return a+b;
    int a =10;
    int b=20;
    let c=add(a,b);
    console.log(c);

  function greet(name,callback){
    console.log("Hello "+name);
    callback();
  }  
  function sayGoodbye(){
    console.log("Goodbye!");

}
greet("John",sayGoodbye);

console.log("Task 1");
console.log("Task 2");
console.log("Task 3");

console.log("task 1");
setTimeout(()=>{
    console.log("task 2");
}2000)