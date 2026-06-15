// ==========================================
// 1. VARIABLES, PRIMITIVES & CONSOLE LOGS
// ==========================================

// console.log ("Hello")
// let $ = 7                       // Valid variable name using '$'
// let f = "I am "
// const author = "Farib";          // Constant variable (cannot be reassigned)
// let _ = "my book"               // Valid variable name using '_'
// k = "is The love & Martyr"      // Automatically global variable (Not recommended, use let/const)

// console .log (f, author,_,k)



// --- Primitive Datatypes in JS (NN BB SS U) ---
// N: Null, N: Number, B: Boolean, B: BigInt, S: String, S: Symbol, U: Undefined
// let a = null;                   // Intentional absence of value
// let b = 999;                    // Number
// let c = true;                   // Boolean
// let d = BigInt ("999") + BigInt ("1") // BigInt for arbitrarily large integers
// let e = "farb"                  // String
// let g = Symbol ("Hi  i'm a symbol") // Unique and immutable identifier
// let h                           // Value is undefined by default
// Console.log (a,b,c,d,e,g,h)     // Note: Capital 'C' in Console will cause a syntax error
// Console.log (typeof a,d)        // typeof null returns "object" (a known JS bug)



// ==========================================
// 2. JAVASCRIPT OBJECTS
// ==========================================

// const item = {
//   "Hi i'm ahnaf":true,
//   "farib": false,
//   "faiyaj": 49,
//   "ahnaf": undefined
// } 
// console.log (item["farib"]) // Accessing object properties using bracket notation



// ==========================================
// 3. PRACTICE: STRINGS AND OBJECT MUTATION
// ==========================================

// let a = "Farib"
// let b = 466
// console.log (a + b)          // Coerces number to string. Output: "Farib466"
// console.log (typeof (a+b))   // Output: "string"

// const f = {
//    name: "farib",
//    section: 2,
//    isPrincipal: false
// }
// f = "farib"                  // Error! You cannot reassign a const object to a new primitive value

//  f ['friend'] = "Rakib"     // Valid! You can add properties to a const object
//  f ['name'] = "Ahnaf"       // Valid! You can update values inside a const object
// console.log (f)


// --- Vocabulary Dictionary Practice ---
// const dict = {
//   appreciate: "recognize the full worth of",
//   fioritura: "noun. the ornamentation of a melody, .",
//   mauka:"adverb. toward the mountains",
//   orrery: "noun. an apparatus for representing  of the ",
// }
// console.log (dict.orrery)    // Accessing property using dot notation


// ==========================================
// 4. OPERATORS
// ==========================================

// !true                        // Logical NOT operator (evaluates to false)

// --- Arithmetic Operators ---
// let a = 25
// let b = 45
// console .log ("a + b =", a+b )   // Addition
// console .log ("a - b =", a-b )   // Subtraction
// console .log ("a * b =", a*b )   // Multiplication
// console .log ("a % b =", a%b )   // Modulus (Remainder)
// console .log ("a ** b =", a**b  )  // Exponentiation (a to the power of b)
// console .log ("a++ =", a++ )     // Post-increment (prints 'a' then increments)
// console .log ("a =", a )
// console .log ("a-- =", a-- )     // Post-decrement (prints 'a' then decrements)
// console .log ("a =", a )
// console .log ("--a =", --a )     // Pre-decrement (decrements first, then prints)
// console .log ("++a =", ++a )     // Pre-increment (increments first, then prints)


// --- Assignment Operators ---
// let a = 4
// a += 5    // a = a + 5
// a -= 6    // a = a - 6
// a *= 8    // a = a * 8
// a /= 9    // a = a / 9
// a %= 10   // a = a % 10
// a **= 22  // a = a ** 22
// console.log (a)



// --- Comparison Operators ---
// let com1 = 6;
// let com2 = 7;
// console.log ("com1 == com2", com1 == com2)   // Abstract Equality (checks values only)
// console.log ("com1 != com2", com1 != com2)   // Inequality
// console.log ("com1 === com2", com1 === com2) // Strict Equality (checks values and datatypes)
// console.log ("com1 !== com2", com1 !== com2) // Strict Inequality
// console.log ("com1 > com2", com1 > com2)
// console.log ("com1 < com2", com1 < com2)
// console.log ("com1 >= com2", com1 >= com2)
// console.log ("com1 <= com2", com1 <= com2)
// console.log ("com1 ? com2", com1 ? com2 )   // Ternary structural misuse (should be: condition ? true : false)



// --- Logical Operators ---
/* let x = 5
let y = 6
console.log(x<y && x==5) // Logical AND (true if both are true)
console.log(x<y && x==6)
console.log(x>y && x==8)
console.log(x<y && x==5)
console.log(x<y || x==5) // Logical OR (true if at least one is true)
console.log(!false)      // Returns true
// Precision loss demonstration below with floating point integers:
console.log(5555555555555567 + 23555555555 - 5555555555555 ) */




// ==========================================
// 5. CONDITIONAL STATEMENTS
// ==========================================

// let a = prompt("hey what is you name ")
// let b = prompt("hey what  you age ")
// b = Number.parseInt(b) // Converts string inputs from prompt to integer

// if (b < 0) {
//   alert("This is a valid age") // Bug logic: should say invalid
// }
// else if (b < 9) {
//   alert("you are a kid")
// }
// else if (b < 18 && b >= 9) {
//   alert("I'm not kid  ")
// }
// else {
//   alert("This is a invalid age")
// }



// --- Switch Case Statement ---
// const expr = 'Papayas';
// switch (expr) {
//   case 'Oranges':
//   case 'Mangoes':
//   case 'Papayas': // Fall-through strategy routes execution here
//     console.log('Oranges are $0.50 a pound.');
//     console.log('Mangoes and papayas are $2.89 a pound.');
//     break; // Prevents code execution flowing into subsequent cases
//     console.log(`Sorry, we are out of ${expr}.`); // Unreachable code statement
//   default:
// }

// --- Ternary Operator Syntax ---
// console.log("You can", (a<18? "not drive" :"drive"))

// code is codewhit Harry

// let a = prompt("Hey whats you age?");
// a = Number.parseInt(a); // Converting the string to a number
// if(a<0){
//   alert("This is an invalid age");
// }
// else if(a<9){
//   alert("You are a kid and you cannot even think of driving");
// }
// else if(a<18 && a>=9){
//   alert("You are a kid and you can think of driving after 18");
// }
// else{
//   alert("You can now drive as you are above 18");
// }
// console.log("Done")
// HomeWork - Explore switch statement and write a basic program in the comments
// console.log("You can", (a<18? "not drive" :"drive"))



// ==========================================
// 6. PRACTICE SET SOLUTIONS
// ==========================================

// --- Problem 1: Age range verification ---
/*
let age = prompt("What is your age?")
age = Number.parseInt(age)
if (age > 10 && age < 20) {
  console.log("Your age lies between 10 and 20")
}
else {
  console.log("Your age doesnt lies between 10 and 20")
}
*/


// --- Problem 2: Age evaluation switch statement ---
/*
 let age = prompt("what is you age")
 switch (age){
   case '12':
     console.log("you age is 12 ")
     break
   case '13':
     console.log("you age is 13 ")
     break
   default:
     console.log("your age is not special")
}
*/


// --- Problem 3 & 4: Divisibility logic check ---
/*
let num = prompt("What is your age?")
num = Number.parseInt(num)
if(num%2 ==0 && num%3 ==0) { // Divisible by BOTH 2 and 3
  console.log("your number is divisible by 2 and 3")
}
*/

// 4
/*
let num = prompt("What is your age?")
num = Number.parseInt(num)
if(num%2 ==0) {
  console.log("your number is divisible by 2 ")
   }
if(num%3 ==0) {
  console.log("your number is divisible by 3")
}
else {
   console.log("your number is not divisible by 2 and 3")
}
*/

// 5
/*
let age = prompt("What is your age?")
let a = age > 18 ? "you can drive" : "you can not drive"
  console.log (a)
*/



// ==========================================
// 7. LOOPS
// ==========================================

// --- Standard For Loop ---
/*
let sum = 0
let n = prompt("Enter the value of n")
n = Number.parseInt(n)
for (let i =0; i<n; i++)  { // Standard loop iteration
     sum += (i+1)
}
 console.log("sum of first " +n+ " natural number is " +sum)
*/

// --- For In Loop (Iterates through Object Keys) ---
/*
let obj = { ahnaf: 89, faiyaj: 78, farib: 98 }
for (let a in obj ){
  console.log(" Marks of " + a +" are " + obj [a])
}
*/


// --- For Of Loop (Iterates through Iterable values like Strings/Arrays) ---
/*
for (let b of "ahnaf" ){
  console.log(b) // Prints each single character
}
*/



// --- While Loop ---
/*
let i = 0;
while(i<n){
  console.log(i)
  i++;
}
*/



// --- Do-While Loop (Executes code block minimum once before checking check-condition) ---
/*
let i = 10;
do{
  console.log(i)
  i++;
}while(i<n)
*/


// ==========================================
// 8. FUNCTIONS (REGULAR & ARROW)
// ==========================================

// --- Regular Function Declaration ---
// function sum(x,y){
//  return Math.round (1 + (x + y)/2)
// } 

// --- Modern Arrow Function Expression ---
// const sum = (p, q) => {
//   return p + q
// }


// let a = 1;
// let b = 5;
// let c = 9;

// console.log("sum of a and b", sum(a,b))
// console.log("sum of c and b", sum(c,b))
// console.log("sum of a and c", sum(a,c))

// codewithhuman

// const hello = () => {
//   console.log("Hey how are you. I am toh fine yaar")
//   return "hi"
// }

// function onePlusAvg(x, y) {
//   return 1 + (x + y) / 2
// }

// const sum = (p, q) => {
//   return p + q
// }


// let a = 1;
// let b = 2;
// let c = 3;
// let v = hello();
// console.log(v)
// console.log("One plus Average of a and b is ", onePlusAvg(a, b))
// console.log("One plus Average of b and c is ", onePlusAvg(b, c))
// console.log("One plus Average of a and c is ", onePlusAvg(a, c))
// console.log(sum(9, 7))

// ==========================================
// 6. PRACTICE SET SOLUTIONS
// ==========================================

// let marks ={
//     farib:90,
//     ahnaf:98,
//     ramisha:100,
//       }
// --- Problem 1---
// for (let i=0;i<Object.keys(marks).length;i++) {
//    console.log (" the marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]] )
// }
// --- Problem 2---
// for (let key in marks) {
//     console.log (" the marks of " + key + " are " + marks[key] )
// }

// --- Problem 3---
// let cn = 5
// let i
// while(i != cn){
//  i = prompt ("Enter a number")
// }
// console.log("you have entered a correct number ")

// --- Problem 4---
// const mean = (a, b, c, d) =>{
//   return (a + b + c + d) / 4
// }
// console.log(mean(4, 5, 7, 9))


// ==========================================
// 9. STRINGS & STRINGS METHODS
// ==========================================

// let name = "farib"
// console.log (name.length) // String length property
// let sentence = `${name} is a friend of ahnaf` // Template literal evaluation

// console.log (sentence)
// let friend = 'ahnaf'
// console.log (friend)

// template literals
// let boy1 = "farib"
// let boy2 = "ahnaf"
// let sentence = `${boy1} is a friend of ${boy2}`
// console.log(sentence)

// --- Escape Sequences ---

// let fruit = "Bana\"na" // Backslash prints character literal double quote without breaking wrapper syntax
// console.log(fruit)


// --- Native String Methods (Strings are immutable, methods return values) ---

// console.log(name.toUpperCase())
// console.log(name.slice( 2,4 )) // Extracts section from dynamic index points
// console.log(name.replace("ahn" ,"fhn")) 
// console.log(str.startsWith('Sat')) // Boolean check function

// let name = "ahnaf"
// console.log (name.length)
// console.log(name.toLowerCase())


// let friend = "farib"
// console.log(name.concat(" is a friend of ", friend, " Ok"))
// let friend2 = "      Meena        "
// console.log(friend2)
// console.log(friend2.trim())

// let fr = "faiyaj" + "ramisha"
// for (let i = 0; i<fr.length; i++) 
// console.log(fr[0])
// console.log(fr[1])
// console.log(fr[2])
// console.log(fr[3])
// console.log(fr[4]) 
// console.log(fr[5]) 
// console.log(fr)


// pro 1
// console.log("har\"".length)

// pro 2

// const sentence = 'The quick brown fox jumps over the lazy dog.';

// const word = 'fox';
// console.log(sentence.includes(word))
// console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);

// endsWith

// const str1 = 'Cats are the best!';

// console.log(str1.endsWith('best!'));
// Expected output: true

// console.log(str1.endsWith('best', 17));
// Expected output: true

// const str2 = 'Is this a question?';

// console.log(str2.endsWith('?'));
// Expected output: false

// startsWith
// const str = 'Saturday night plans';

// console.log(str.startsWith('Sat'));
// Expected output: true

// console.log(str.startsWith('Sat', 3));
// Expected output: false

// pro 4
// let str2 = "Please give Rs 1000"
// let amount = Number.parseInt(str2.slice(15))
// console.log(amount)
// console.log(typeof amount)

// Problem 5
// let friend = "Deepika"
// friend [3] = "R"
// console.log(friend) 
// friend is not changed, because string is immutable



// ==========================================
// 10. ARRAYS AND ARRAY METHODS
// ==========================================

// let a = [1, 2, 3, null ,"Not Present"] // Arrays hold diverse data structures
// a[0] = 36 // Arrays are highly mutable values can change in place
// a[8] = 190
// console.log (a [0])
// console.log (a [1])
// console.log (a [1])
// console.log (a [7])
// console.log (a [8])
// console.log("The length of a is", a.length)
// console.log (a)
// a[6] = 89 // Adding a new value to the array
// a[0] = 96 // Changing the value of an array
// console.log(a)
// console.log (typeof a)


// --- Core Array Manipulator Methods ---
// num.toString()      // Converts sequential structure into plain string
// num.join("-")       // Joins string array structure with localized symbol hyphen
// num.pop()           // Trims off closing array item element
// num.push(56)        // appends item to terminal tail array index end
// num.shift()         // Expels starting element index from opening array track
// num.unshift(78)     // Injects new item to first item tracking index position
// num.splice(2, 4, 9) // Deep manipulation: drops indexes, splices inserts items in-line
// num.slice(3, 5)     // Shallow target copy array fragment range


/* Some More JavaScript Array Methods */

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let num_more = [11, 12, 13, 14, 15, 16, 17, 18, 19]
// let num_even_more = [211, 212, 213, 214, 415, 416, 417, 418, 419]
// console.log(num.length)
// delete num[0]
// console.log(num.length)

// let newArray = num.concat(num_more, num_even_more)
// console.log(newArray)
// console.log(num, num_more)


/* { sort method } */

// let compare = (a, b)=>{
//   return b - a }
// let num = [551, 22, 3, 14, 5, 6, 7, 8, 229]
// num.sort(compare)
// num.reverse()
// console.log(num)

/* { Splice and Slice } */

// let num = [551, 22, 3, 14, 5, 6, 7, 8, 229]
// num.splice(2, 4, 1021, 1022, 1023, 1024, 1025)
// let deletedValues = num.splice(2, 4, 1021, 1022, 1023, 1024, 1025)
// console.log(num)
// console.log(deletedValues)

// let newNum = num.slice(3)
// let newNum = num.slice(3, 5)
// console.log(newNum)

/* { Using Loops with Arrays } */

// let num = [3, 5, 1, 2, 4]

// for(let i=0; i<num.length;i++){
//   console.log(num[i])
// }

/* { ForEach Loop } */
// num.forEach((element) => {
//   console.log(element * element)
// })

/* { Array.from } */
// let name = "Harry"
// let arr = Array.from(name)
// console.log(arr)

/* { for...of } */
// for (let item of num){
//   console.log(item)
// }

/* { for...in } */
// for (let i in num){
//   console.log(num[i])
// }



// ==========================================
// 11. ADVANCED ARRAYS: MAP, FILTER & REDUCE
// ==========================================

// let arr = [45, 23, 21]

// --- Map (Generates complete mirrored modified array matching items) ---
// let a = arr.map((value, index, array) => {
// console.log(value, index, array)
// return value + index  })
// console.log(arr)

// --- Filter (Pulls matching element array traces meeting condition) ---
// let arr2 = [45, 23, 21, 0, 3, 5]
// let a2 = arr2.filter((a) => {
// return a < 10
// })
// console.log(a2, arr2)

// --- Reduce (Boils downstream components structural array elements down to singular value) ---
// let arr3 = [1, 2, 3, 5, 2, 1]
// const reduce_func = (h1, h2) => {
// return h1 + h2 }
// let newarr3 = arr3.reduce(reduce_func)
// console.log(newarr3)


// JavaScript Script Tag

// <body>
//   Hello world
//   <!--   <script src="script.js"></script> -->
//   <!--   <script src="script1.js"></script> -->
//   <!--   <script src="script2.js"></script> -->
//   <script>
//   // Advantages of using separate script file using src attribute of script tag
//   // 1. Separation of concerns
//   // 2. Browser Caching

//   </script>
//   <script src="script.js">
//     console.log("I am trying to be smart") // This will be ignored
//   </script>
//   <!--
//   This script places a badge on your repl's full-browser view back to your repl's cover
//   page. Try various colors for the theme: dark, light, red, orange, yellow, lime, green,
//   teal, blue, blurple, magenta, pink!
//   -->
//   <script src="https://replit.com/public/js/replit-badge.js" theme="blue" defer></script>
// </body>


// ==========================================
// 12. DOM, WEB APIS & CONSOLE ENGINE
// ==========================================

// console.log("log")
// console.info("info")
// console.warn("warn")
// console.error("err")
// console.assert("err" != false)
// console.assert("err" == false)




// --- Console Performance Benchmarking Tooling ---
// console.time("forLoop")
// for (let i = 0; i < 500; i++) {
//   console.log(233)
// }

// ... loops engine calculation
// console.timeEnd("forLoop")

// console.time("whileLoop")

// let i = 0;
// while (i < 500) {
//   console.log(233)
//   i++;
// }
// console.timeEnd("whileLoop")


// JavaScript alert, prompt & confirm

// alert("Enter the value of a!")
// let a : prompt("Enter a here")
// document.write(a)
// a = Number.parseInt(a)
// alert ("You entered a of type " + (typeof a))
// let write = confirm("Do you want to write it to the page")
// if(write){
//   document.write(a)
// } 
// else{
//   document.write("")
// }


// JavaScript Window Object  // --- DOM Target Methods ---               


// let x = document.getElementsByTagName('span')[0]
// console.log(x)
// let y = document.getElementsByTagName('span')[0]
// console.dir(y)
// console.log(document.body.firstChild.nodeName) 
//console.log(document.body.firstElementChild.nodeName)


// innerHTML, outerHTML

// first.innerHTML
// first.innerHTML = "<i>hey I am italic</i>"
// first.outerHTML
// first.outerHTML = "<div>hey</div>"
// document.body.firstChild.data
// console.log(document.body.textContent)
// first.hidden = false


// HTML Attributes and their methods


// let first = document.getElementById("first")
// let a = first.getAttributes("class")
// console.log(a)
// console.log(first.hasAttribute("class"))
// console.log(first.hasAttribute("style"))
// first.setAttribute("hidden","true")
// first.setAttribute("class", "true sachin")
// first.removeAttribute("class")
// console.log(first.attributes)
// console.log(first.dataset)
// console.log(first.dataset.game)
// console.log(first.dataset.player)


// HTML Insertion Methods


// let a = document.getElementsByTagName('div')[0]

// a.innerHTML = a.innerHTML + '<h1>Hello World!</h1>';

// let div = document.createElement('div')
// div.innerHTML = '<h1>Hello World!</h1>';
// a.appendChild(div);
// a.append(div);
// a.prepend(div);
// a.before(div);
// a.after(div);
// a.replaceWith(div);


// insertAdjacentHTML, insertAdjacentElement and insertAdjacentText

// first.insertAdjacentHTML('beforeend', '<div class="test">beforeend</div>');
// first.insertAdjacentHTML('beforebegin', '<div class="test">beforebegin</div>');
// first.insertAdjacentHTML('afterend', '<div class="test">afterend</div>');  
// first.insertAdjacentHTML('afterbegin', '<div class="test">afterbegin</div>');
// first.remove


// Changing HTML Classes using JavaScript: className and classList

// first.className = "text-black red"
// first.classList.add("red")
// first.classList.remove("red")
// first.classList.contains("red")
// first.classList.toggle("red")
// first.classList.conatins("red")


// setInterval and setTimeout


// document.write("Hello")


// const sum = (a, b, c) => {
//   console.log("Yes I am running " + (a + b + c))
//   a + b
// }

// setTimeout(sum, 3000, 1, 2, 7)


// Like a loop

// setInterval(function() {
//   alert("setinterval")
// }, 1000)

// let a = setTimeout(function() {
//   alert("I am inside of settimeout")
// }, 5000)


// let b = prompt("Do you want to run the settimeout?")
// if ("n" == b) {
//   clearTimeout(a)
// }

//  console.log(a)

// Introduction to Browser Events

// let a = document.getElementsByClassName("container")[0] 
// a.onclick = () =>{
//   let b = document.getElementsByClassName("container")[0]
//   b.innerHTML = "Hello World!"
// }

// addEventListener and removeEventListener

// let x = function(event) {
//   console.log(event.target)
//   console.log(event.type, event.clientX, event.clientY)
//   // alert("Hello World1!")
// }

// let y = function(e) {
//   console.log(e)
//   alert("Hello World2!")
// }

// btn.addEventListener('click', x)


// btn.addEventListener('click', y)

// let a = prompt("What is your favorite number?");


// if (a == "2") {
//   btn.removeEventListener('click', x)
// }


// ==========================================
// 13. Introduction to Callbacks
// ==========================================

//--- Syncronous Programming ---

// let a = prompt("What is your name?");
// let b = prompt("What is your age?");
// let c = prompt("What is your favorite color")
// console.log(a + " is " + b + " years old and has " + c + " favorite color.");

//--- Asyncronous Programming ---

// console.log("Start")
// setTimeout(function() {
//   console.log("Hey I am good");
// }, 3000 )
// console.log("End")

//--- Callbacks funtion ---

// function loadScript(src,callback){
//   var scrip = document.createElement("script");
//   scrip.src = src;
//   scrip.onload = function(){
//     console.log("Loaded scirp with SRC:" + src);
//     callback(null,src);
//   }

//   script.onerror = function() {
//     console.log("Error loading script with SRC: " + src);
//     callback(new Error("Src got some error"))
//   }
//   document.body.appendChild(scrip);
// }

// function hello(error, src) {
//   if (error) {
//     console.log(error)
//     return
//   }
//   alert('Hello World!' + src);
// }


// function goodmorning(error, src) {

//   if (error) {
//     console.log(error)
//     sendEmergencyMessageToCeo();
//     return
//   }
//   alert('Good morning' + src);
// }

// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js", goodmorning) 


//---- Callback Hell & Pyramid of Doom ----

// function loadScript(src, callback) {
//   var script = document.createElement("script");
//   script.src = src;
//   script.onload = function() {
//           console.log("Loaded script with SRC: " + src)
//           callback(null, src);
//   }
//   script.onerror = function() {
//           console.log("Error loading script with SRC: " + src);
//           callback(new Error("Src got some error"))
//   }
//   document.body.appendChild(script);
// }

// function hello(error, src) {
//   if (error) {
//           console.log(error)
//           return
//   }
//   alert('Hello World!' + src);
// }




// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js", function goodmorning(error, src) {
//   if (error) {
//           console.log(error)
//           sendEmergencyMessageToCeo();
//           return
//   }
//   loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap2.bundle.min.js", function goodmorning(error, src) {
//           if (error) {
//                   console.log(error)
//                   sendEmergencyMessageToCeo();
//                   return
//           }
//           loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap3.bundle.min.js", function goodmorning(error, src) {
//                   if (error) {
//                           console.log(error)
//                           sendEmergencyMessageToCeo();
//                           return
//                   }
//                   loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap4.bundle.min.js", function goodmorning(error, src) {
//                           if (error) {
//                                   console.log(error)
//                                   sendEmergencyMessageToCeo();
//                                   return
//                           }
//                           loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap5.bundle.min.js", function goodmorning(error, src) {
//                                   if (error) {
//                                           console.log(error)
//                                           sendEmergencyMessageToCeo();
//                                           return
//                                   }
//                                   loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap6.bundle.min.js", function goodmorning(error, src) {
//                                           if (error) {
//                                                   console.log(error)
//                                                   sendEmergencyMessageToCeo();
//                                                   return
//                                           }
//                                           loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap7.bundle.min.js", function goodmorning(error, src) {
//                                                   if (error) {
//                                                           console.log(error)
//                                                           sendEmergencyMessageToCeo();
//                                                           return
//                                                   }
//                                                   loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap8.bundle.min.js", function goodmorning(error, src) {
//                                                           if (error) {
//                                                                   console.log(error)
//                                                                   sendEmergencyMessageToCeo();
//                                                                   return
//                                                           }
//                                                           loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap9.bundle.min.js", function goodmorning(error, src) { })
//                                                   })
//                                           })
//                                   })
//                           })
//                   })
//           })
//   })
// })


// This code is called "Pyramid of Doom"
// The code is difficult to manage . This is a callback hell



// ==========================================
// 14. Introduction to Promises
// ==========================================


// let promise = new Promise(function(resolve, reject) {
//         alert("Hello")
//         resolve(56)
// })


// console.log("Hello One")

// setTimeout(function() {
//         console.log("Hello Two in 2 seconds")
// }, 2000)

// console.log( "Hello Three")
// console.log(promise)

// Fetch google.com homepage  ==> console.log("google.com homepage done")
// Fetch data from the data api 
// Fetch pictures from the server 
// Print downloading 
// Rest of the script 


// Promise .then() and .catch() 

// let p1 = new Promise((resolve, reject) => {
//   console.log("Promise is pending")
//   setTimeout(() => {
//     console.log("I am a promise and I am resolved")
//     resolve(true)
//   }, 5000)
// })

// let p2 = new Promise((resolve, reject) => {
//   console.log("Promise is pending")
//   setTimeout(() => {
//     console.log("I am a promise and I am rejected")
//     reject(new Error("I am an error"))
//   }, 5000)
// })


// // To get the value
// p1.then((value) => {
//   console.log(value)
// })
// // To catch the errors
// p2.catch((error) => {
//   console.log("Some error occured in p2")

// })

// p2.then((value) => {
//   console.log(value)
// }, (error) => {
//   console.log(error)
// })


// Promise Chaining .then() calls

// let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Resolved after 2 seconds")
//     resolve(56)
//   }, 2000)
// })

// p1.then((value) => {
//   console.log(value)
//   return new Promise((resolve, reject) => {
//     setTimeout(() => { resolve("Promise 2") }, 2000)
//   })

//   // let p2 = new Promise((resolve, reject) => {
//   //   setTimeout(() => { resolve("Promise 2") }, 2000)
//   // })
//   // return p2
// }).then((value) => {
//   console.log("We are done")
//   return 2
// }).then((value)=>{
//         console.log("Now we are pakka done")
// })



// Attaching Multiple Handlers to a Promise

// let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     alert("Hey I am not resolved")
//     resolve(1);
//   }, 2000)
// })
// p1.then(() => {
//   console.log("Hurray")
//   return new Promise((resolve, reject) =>{
//             setTimeout(()=>{
//                 resolve (4)
//             },6000)
//   })
// }).then((value)=>{console.log(value)})

// p1.then(() => {
//   console.log("Congratulations this promise is now resolved")
// })


// The Promise API

// let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("value 1");
//   }, 4000);

// });
// let p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("value 2");
//     // reject(new Error("Error"));
//   }, 2000);

// });
// let p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("value 3");
//   }, 3000);

// });

// // p1.then((value) => {
// //   console.log(value)
// // })

// // p2.then((value) => {
// //         console.log(value)
// // })

// // p3.then((value) => {
// //         console.log(value)
// // })

// // let promise_all = Promise.all([p1, p2, p3])
// // let promise_all = Promise.allSettled([p1, p2, p3])
// // let promise_all = Promise.race([p1, p2, p3])
// // let promise_all = Promise.any([p1, p2, p3])
// // let promise_all = Promise.resolve([6])
// let promise_all = Promise.reject(new Error("Hey"))
// promise_all.then((value) =>{
//   console.log(value)
// })



// Async/Await in JavaScript


// async function ahnaf() {
//   let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("21 ")
//     }, 2000)
//   })
//   let p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("27 ")
//     }, 5000)
//   })
//   // p1.then(alert)
//   // p2.then(alert)\
//   console.log("Fetching p1 please wait...")
//   let p3 = await p1
//   console.log("Fetched p1 : " + p3)

//   console.log("Fetching p2 please wait...")
//   let p4 = await p2
//   console.log("Fetched p2 : " + p4)
//   return [p3, p4]
// }

// const cherry = async () => {
//         console.log("Hey I am cherry and I am waiting ")
// }

// const main1 = async () =>{

// console.log("Welcome to weather control room")
// let a = await ahnaf()
// let b =await cherry()
// // a.then((value) =>{
// //   console.log(value)
// // })
// }
// main1()
// // console.log(a)


// ==========================================
// 15. Error  Handling
// ==========================================

// setTimeout(() => {
//   console.log("Hacking wifi.... Please wait...")
// }, 1000)

// try {
//   setTimeout(() => {
//     try{
//     console.log(rahul)
//     }
//     catch(error){
//       console.log("Err")
//     }
//   }, 100)
// }
// catch (error) {
//   console.log("Error")
// }

// --- Error is not Handling ---

// // try {
// //   setTimeout(() => {
// //     console.log(rahul)
// //   }, 100)
// // }
// // catch (error) {
// //   console.log("Error")
// // }

// --- Error Handling ---

// // try{
// //                 console.log(rahul)  
// //         // setTimeout(()=>{ 
// //         // }, 100)
// // }
// // catch(error){
// //         console.log("Error")
// // }


// setTimeout(() => {
//   console.log("Fetching username and password.... Please wait...")
// }, 2000)

// setTimeout(() => {
//   console.log("Hacking Rahul's facebook id.... Please wait...")
// }, 3000)

// setTimeout(() => {
//   console.log("Username and password of Rahul (+919356700001) fetched.... Please wait...")
// }, 4000) 

// --- The Error Object & Custom Errors ---

// --- try catch Syntax ---

// try{
//   let age = prompt("Enter your age")
//   age = Number.parseInt(age)
//   if(age>150){
//   throw new ReferenceError("This is probably not true")
//   }
// }
// catch(error){
//   console.log(error.message)
//   console.log(error.name)
//   console.log(error.stack)
// }
// console.log("The script is still running")


// --- The Finally Clause ---


// const f = () => {

//   try {
//     let a = 0;
//     // console.log(program)
//     console.log("Program ran successfully")
//     return
//   }
//   catch (err) {
//     console.log("This is an error")
//     console.log(p)
//     // return
//   }
//   finally {
//     console.log("I am a good boy")
//     // Close the file
//     // Exit the Loop
//     // Write to the log file
//   }
// }
// f()
// console.log("End")


// ==========================================
// 16.  Fetch API 
// ==========================================


// let p = fetch("https://goweather.herokuapp.com/weather/Ny")
// p.then((response) => {
//   console.log(response.status)
//   console.log(response.ok)
//   console.log(response.headers)
//   return response.json()
//   // Or
//   // return response.text()
// }).then((value) => {
//   console.log(value)
// })


// --- Sending POST request with Fetch API ---


// const createTodo = async (todo) => {
//   let options = {
//     method: "POST",
//     headers: {
//       "Content-type": "application/json"
//     },
//     body: JSON.stringify(todo),
//   }
//   let p = await fetch('https://jsonplaceholder.typicode.com/posts', options)
//   let response = await p.json()
//   return response
// }

// const getTodo = async (id) => {
//   let response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
//   let r = await response.json()
//   return r
// }

// const mainFunc = async () => {
//   let todo = {
//     title: 'Ahnaf',
//     body: 'bhai2',
//     userId: 1100,
//   }
//   let todor = await createTodo(todo)
//   console.log(todor)
//   console.log(await getTodo(101))
// }
// mainFunc()

// --- Cookies in JavaScript ---

// console.log(document.cookie)
// document.cookie = "name=Ahnaf33222"
// document.cookie = "name2=Ahnaf2"
// document.cookie = "name=Ahnaf"
// let key = prompt("Enter your key")
// let vlaue = prompt("Enter your vlaue")
// document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(vlaue)}`
// console.log(document.cookie)


// --- localStorage & related methods ---

// let key = prompt("Enter key you want to set")
// let value = prompt("Enter value you want to set")

// localStorage.setItem(key, value)

// console.log(`The value at ${key} is ${localStorage.getItem(key)}`)

// if (key == "red" || key == "blue") {
//   localStorage.removeItem(key)
// }

// if (key == 0){
//   localStorage.clear()
// }

// --- sessionStorage & related methods ---

// sessionStorage.getItem("name")
// sessionStorage.clear()
// sessionStorage.removeItem("name")
// sessionStorage.setItem("name", "harry")
// window.onstorage = (e) => {
//   alert("Changed")
//   console.log(e)
// }


// ==========================================
// 17. OBJECT ORIENTED PROGRAMMING (OOP)
// ==========================================

// --- Prototypes inheritance architecture ---

// let a = {
//   name:"Ahnaf",
//   language:"JavaScript",
//   run:()=>{
//     alert("Self run")
//   }
// }
// console.log(a)

// let p ={

//   run:()=>{
//     alert("run")
//   }
// }
// p.__proto__ = {
//   name2:"Jackie"
// }

// a.__proto__ = p
// a.run()
// console.log(a.name2)

// --- Class Structures Blueprint Template ---

// class RailwayForm {
//   submit() {
//     alert(this.name + " : Your Form is Submitted for train Number " + this.trainon)
//   }
//   cancel() {
//     alert(this.name + " : This form is cancelled for train Number " + this.trainon)
//   }
//   fill(givenname,trainon) {
//     this.name = givenname
//     this.trainon = trainon
//   }

// }


//  Create a form for ahnaf

// let ahnafForm = new RailwayForm()
// // Fill the form with ahnaf's details
// ahnafForm.fill("Ahnaf", 145316)

// // Create a forms for faiyaj
// let faiyajForm1 = new RailwayForm()
// let faiyajForm2 = new RailwayForm()
// // Fill the forms with faiyaj's details
// faiyajForm1.fill("faiyaj", 222420)
// faiyajForm2.fill("faiyaj", 2229211)

// ahnafForm.submit()
// faiyajForm1.submit()
// faiyajForm2.submit()
// faiyajForm1.cancel()



// ==========================================
// 18.  Constructors
// ==========================================

// class RailwayForm {
//   constructor(givenname,trainon) {
//       console.log("CONSTRUCTOR CALLED...."+ givenname + " " + trainon)
//       this.name = givenname
//       this.trainon = trainon
//     }

//   submit() {
//     alert(this.name + " : Your Form is Submitted for train Number " + this.trainon)
//   }
//   cancel() {
//     alert(this.name + " : This form is cancelled for train Number " + this.trainon)
//   }
// }

// // // Create & fill a form for ahnaf
// let ahnafForm = new RailwayForm("Ahnaf", 145316)


// // // Create & fill a forms for faiyaj
// let faiyajForm1 = new RailwayForm("faiyaj", 222420)
// let faiyajForm2 = new RailwayForm("faiyaj", 2229211)


// ahnafForm.submit()
// faiyajForm1.submit()
// faiyajForm2.submit()
// faiyajForm1.cancel()


// class RailwayForm {
//   constructor(givenname, trainon, address) {
//     console.log("CONSTRUCTOR CALLED...." + givenname + " " + trainon)
//     this.name = givenname
//     this.trainon = trainon
//     this.address = address
//   }

//   Preview() {
//     alert(this.name + " : Your Form is Submitted for train Number " + this.trainon + " and your address is " + this.address)
//   }
//   submit() {
//     alert(this.name + " : Your Form is Submitted for train Number " + this.trainon)
//   }
//   cancel() {
//     alert(this.name + " : This form is cancelled for train Number " + this.trainon)
//     this.trainon = 0
//   }
// }

// let ahnafForn = new RailwayForm("Ahnaf", 145316, "ctg")
// ahnafForn.Preview()
// ahnafForn.submit()
// ahnafForn.cancel()
// ahnafForn.Preview()


// Inheritance & extends Keyword in JavaScript
/*
class Animal{
  constructor(name,color){
    this.name = name
    this.color = color
  }
  run(){
    console.log(this.name + " is running!")
  }
  shout(){
    console.log(this.name + " is shouing!")
  }
}

class Monkey extends Animal {
  eatBanana(){
    console.log(this.name + " is eating banana")
  }
  hide(){
    console.log( `${this.name} is hiding`)
  }
}

let ani = new Animal("Bruno","white")
let m = new Monkey("Chimpu","orange")

ani.shout()
m.eatBanana()
m.shout()
ani.run()
m.hide()
// ani.hide() //This will throw an error
*/
// Getters & Setters
// method overriding
/*
class Employee{
  login(){
    console.log(`Employee has logged in`);
  }
  logout(){
    console.log(`Employee has logged out`);
  }
  requestLeaves(leaves){
    console.log(`Employee has requested ${leaves} leaves - Auto approved`)
  }
}

// constructor(...args){ ---> If there is no constructor in the child class, this is created automatically
//   super(...args)
// }

class Programmer extends Employee{
  requestCoffee(x){
    console.log(`Employee has requested ${x} coffees`)
  }
  requestLeaves(leaves){
    super.requestLeaves(4)
    console.log("One extra is granted")
    // console.log(`Employee has requested ${leaves+1} leaves (One extra)`)
  }
}

let e = new Programmer()
e.login()
e.requestLeaves(3)
e.logout()
*/

// Overriding_constructor

/*
class Employee{
  constructor(name){
      console.log(`${name} - Employee's constructor is here`)
      this.name = name
  }
  login(){
    console.log(`Employee has logged in`);
  }
  logout(){
    console.log(`Employee has logged out`);
  }
  requestLeaves(leaves){
    console.log(`Employee has requested ${leaves} leaves - Auto approved`)
  }
}


class Programmer extends Employee{
  constructor(name) {
    super(name)
    console.log(`This is a newly written constructor`)
  }
  requestCoffee(x){
    console.log(`Employee has requested ${x} coffees`)
  }
  requestLeaves(leaves){
    super.requestLeaves(4)
    console.log("One extra is granted")
    // console.log(`Employee has requested ${leaves+1} leaves (One extra)`)
  }
}

let e = new Programmer("Ahnaf")
e.login()
e.requestLeaves(3)
e.logout()*/


// Static Method
/*
class Animal {
  constructor(name) {
    this.name = Animal.capitalize(name)
  }
  walk() {
    console.log("Animal " + this.name + " is walking")
  }
  static capitalize(name) {
    return name.charAt(0).toUpperCase() + name.substr(1, name.length)
  }
}

j = new Animal("jack")
j.walk()
*/

// getters, setters & instanceOf Operator
/*
class Animal{
  constructor(name){
    this._name = name
  }
  fly(){
    console.log("I am is flying ")
  }
  get name(){
    return this._name
  }
  set name(Newname){
    this._name = Newname
  }
}

class Rabbit extends Animal{
  eatCarrot(){
    console.log("Eating carrot")
  }
}

let a = new Animal("Bruno")
a.fly()
console.log(a.name)
a.name = "Jack"
console.log(a.name)

let c = 56

console.log(a instanceof Animal)
console.log(a instanceof Rabbit)
console.log(c instanceof Animal)
*/


// IIFE - Immediately Invoked Function Expressions
/*
let a = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(456)
    }, 4000)
  })
}

(async () => {
  let b = await a()
  console.log(b)
  let c = await a()
  console.log(c)
  let d = await a()
  console.log(d)
})() */

// Destructuring assignment and Spread Operator
// Destructuring assignment is used to unpack values from an array or properties from objects into distinct variables.
/*
let arr = [3, 5, 8, 9, 12, 14]
// No need to do this
// let a = arr[0]
// let b = arr[1]
let [a, b, c, d, ...rest] = arr
console.log(a, b, c, d, rest) 
let [a, , ,  ...rest] = arr
console.log(a, rest) 
let {a,b} = {a:1,b:5}
console.log(a,b) 

// Spread Operator

let arr1 = [3, 5, 8]
let obj1 = { ...arr1 }
console.log(obj1)

function sum(v1, v2, v3){
  return v1 + v2 + v3
}

console.log(sum(...arr1))

obj2 = {
  name: "Ahnaf",
  company:"Company xyz",
  address:"xyz"
}

// console.log({...obj2, name:"John", company:"ABC"})
console.log({ name:"John", company:"ABC", ...obj2}) // this will print the obj2 object without changing any values
*/


// local and global Scope
/* 
let p  = 9
function ax(){
  let a = 8
  console.log(p)
  console.log(a)
}
ax()
  console.log(p)
// console.log(a)
*/

// Hoisting
/* 

// let a; // Following two lines will run successfully due to JavaScript hoisting
console.log(a)
greet()
var greet =  function (){
  console.log("Good Morning")
}
var a = 9; // Declaration hoisted to the top but initialization is not
console.log(a)
*/

// Closures
/* 

function init() {
  var name = 'Mozilla'; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, a closure
    console.log(name); // use variable declared in the parent function
  }
  name = "Ahnaf"  
  return displayName;
}
let c = init();
c()


// message = "Good Global"
// function hello1() {
//   message = "Good Morning"
//   {
//     let message = "Good Afternoon"
//     console.log("hello1" + message)
//   }
//   let c = function hello2() {
//     console.log("I am c" + message )
//   }
//   return c
// }
// c = hello1()
// c()

function returnFunc() {

  const x = () => {
    let a = 1
    console.log(a)
    const y = () => {
      // let a = 2
      console.log(a)
      const z = () => {
        // let a = 3
        console.log(a)
      }
      z()
    }
    a = 999
    y()
  }
  return x
}
let a =returnFunc()
a()
  */

// Arrow Function
/* 

// const sayHello = () => console.log("Hello"); console.log("Hi")
// sayHello()


const sayHello = name => {
  console.log("greeting" + " " + name)
  console.log("hi")
}

const x = {
  name: "Ahnaf",
  role: "Js Developer",
  exp: 30,
  show: function() {
    // let that = this
    // console.log(this)
    setTimeout(() => {
      console.log(`The name is ${this.name}\nThe role is ${this.role}`)
    }, 2000)
  }
}

sayHello("Ahnaf", "Good Afternoon")
// console.log(x.name, x.exp)
// x.show()

*/