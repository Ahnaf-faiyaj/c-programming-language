// Practice Set on Arrays

const { rejects } = require("assert")

// Practice Problem 1
// let arr = [1, 2, 3, 4, 5, 6, 7, 83]
// let a = prompt("Enter a number")
// a = Number.parseInt(a)
// arr.push(a)
// console.log(arr)

// Practice Problem 2
// let arr = [1, 2, 3, 4, 5, 6, 7, 83]
// let a;
// do {
//   a = prompt("Enter a number")
//   a = Number.parseInt(a)
//   arr.push(a)
// } while (a != 0);
// console.log(arr)

// Practice Problem 3
// let arr = [1, 2, 30, 4, 50, 6, 7, 83, 670]
// let n = arr.filter((x)=>{
//   return x%10 == 0
// })
// console.log(n)

// Practice Problem 4
// let arr = [1, 2, 30, 4, 50, 6, 7, 83, 670]
// let n = arr.map((x)=>{
//   return x*x
// })
// console.log(n)

// Practice Problem 5
// let arr = [1, 2, 3, 4, 5]
// let n = arr.reduce((x1, x2) => {
//   return x1 * x2
// })
// console.log(n)


// video 29
// Practice Problem 1

// const canDrive = (age) => {
//   age > 18 ? true : false
// }
// let runAgain = true

// while (runAgain) {
//   let age = prompt("Enter your age")
//   age = Number.parseInt(age)
//   if (age<0){
//     console.error("please enter a valid age"):
//     break;
//   }


//   if (canDrive(age)) {
//     alert("You can drive")
//   }
//   else {
//     alert("You can not drive")
//   }
//   runAgain = confirm("Do you want to play again?")
// }


// Practice Problem 2

// let number = prompt("Enter your number")
// number = Number.parseInt(number)

// if (number>4) {
//   location.href = "https://google.com"
// }

// let color = prompt("Enter the page background color")
// document.body.style.background = color

// document.getElementsByTagName("nav")[0].firstElementChild.style.color = "red"
// document.getElementsByTagName("nav")[0].firstElementChild.style.color = "green"
// document.getElementsByTagName("nav")[0].lastElementChild.style.color = "green"

// Array.from(document.getElementsByTagName("li")).forEach((element)=>{
//  element.style.background = "cyan";
// })

// JavaScript Exercise 2 Snake, Water, Gun

// let user = prompt(" Enter S,W or G ")
// let cpuI = Math.floor(Math.random() * 3);
// let cpu = ["S", "W", "G"][cpuI]

// const match = (cpu, user) => {
//   if (cpu === user) {
//     return "Nobody"
//   }
//   else if (cpu === "S" && user === "W") {
//     return "cpu"
//   }
//   else if (cpu === "S" && user === "G") {
//     return "user"
//   }
//   else if (cpu === "G" && user === "W") {
//     return "user"
//   }
//   else if (cpu === "G" && user === "S") {
//     return "cpu"
//   }
//   else if (cpu === "W" && user === "S") {
//     return "user"
//   }
//   else if (cpu === "W" && user === "G") {
//     return "cpu"
//   }
// }
// let result = match(cpu, user)
// console.log('The winner is: ' + result)
// document.write(`CPU:${cpu} <br> User:${user} <br>The winner is: ${result.toUpperCase()}` ) 
// [ document.write is used to print the result on the webpage  ]


// console.log(`CPU:${cpu} \nUser:${user} \nThe winner is: ${result.toUpperCase()}`)

// Practice Problem 3

// document.getElementById("google").addEventListener("click",function() {
//   window.location = "https://www.google.com";
//   win.focus();
// })

// Practice Problem 4


// const fetchContent = async (url) => {
//   con = await fetch(url);
//   let a = await con.json()
//   return a;
// }

// setInterval(async function() {
//   let url = "https://jsonplaceholder.typicode.com/todos/1"
//   console.log(await fetchContent(url))
// }, 3000)


// Practice Problem 5

// setInterval(async function() {
//   document.querySelector("#bulb").classList.toggle("bulb")
// }, 300)


// Exercise 3 

// let myjokes = [
//   {
//     "category": "Programming",
//     "type": "single",
//     "joke": "// This line doesn't actually do anything, but the code stops working when I delete it.",
//     "flags": {
//       "nsfw": false,
//       "religious": false,
//       "political": false,
//       "racist": false,
//       "sexist": false,
//       "explicit": false
//     },
//     "id": 12,
//     "safe": true,
//     "lang": "en"
//   },
//   {
//     "category": "Programming",
//     "type": "single",
//     "joke": "\"Honey, go to the store and buy some eggs.\"\n\"OK.\"\n\"Oh and while you're there, get some milk.\"\nHe never returned.",
//     "flags": {
//       "nsfw": false,
//       "religious": false,
//       "political": false,
//       "racist": false,
//       "sexist": false,
//       "explicit": false
//     },
//     "id": 18,
//     "safe": true,
//     "lang": "en"
//   },
//   {
//     "category": "Programming",
//     "type": "single",
//     "joke": "Saying that Java is nice because it works on every OS is like saying that anal sex is nice because it works on every gender.",
//     "flags": {
//       "nsfw": true,
//       "religious": false,
//       "political": false,
//       "racist": false,
//       "sexist": false,
//       "explicit": true
//     },
//     "id": 30,
//     "safe": false,
//     "lang": "en"
//   },
//   {
//     "category": "Programming",
//     "type": "single",
//     "joke": "Hey Girl,\nRoses are #ff0000,\nViolets are #0000ff,\nI use hex codes,\nBut I'd use RGB for you.",
//     "flags": {
//       "nsfw": false,
//       "religious": false,
//       "political": false,
//       "racist": false,
//       "sexist": false,
//       "explicit": false
//     },
//     "id": 41,
//     "safe": true,
//     "lang": "en"
//   },
//   {
//     "category": "Programming",
//     "type": "single",
//     "joke": "\"We messed up the keming again guys.\"",
//     "flags": {
//       "nsfw": false,
//       "religious": false,
//       "political": false,
//       "racist": false,
//       "sexist": false,
//       "explicit": false
//     },
//     "id": 20,
//     "safe": true,
//     "lang": "en"
//   },
//   {
//     "category": "Programming",
//     "type": "single",
//     "joke": "A SQL statement walks into a bar and sees two tables.\nIt approaches, and asks \"may I join you?\"",
//     "flags": {
//       "nsfw": false,
//       "religious": false,
//       "political": false,
//       "racist": false,
//       "sexist": false,
//       "explicit": false
//     },
//     "id": 5,
//     "safe": true,
//     "lang": "en"
//   },
//   {
//     "category": "Programming",
//     "type": "single",
//     "joke": "Two SQL tables sit at the bar. A query approaches and asks \"Can I join you?\"",
//     "flags": {
//       "nsfw": false,
//       "religious": false,
//       "political": false,
//       "racist": false,
//       "sexist": false,
//       "explicit": false
//     },
//     "id": 221,
//     "safe": true,
//     "lang": "en"
//   },
//   {
//     "category": "Programming",
//     "type": "single",
//     "joke": "Documentation is like sex:\nWhen it's good, it's very good.\nWhen it's bad, it's better than nothing...",
//     "flags": {
//       "nsfw": true,
//       "religious": false,
//       "political": false,
//       "racist": false,
//       "sexist": false,
//       "explicit": false
//     },
//     "safe": false,
//     "id": 305,
//     "lang": "en"
//   },
//   {
//     "category": "Programming",
//     "type": "single",
//     "joke": "\"Can I tell you a TCP joke?\"\n\"Please tell me a TCP joke.\"\n\"OK, I'll tell you a TCP joke.\"",
//     "flags": {
//       "nsfw": false,
//       "religious": false,
//       "political": false,
//       "racist": false,
//       "sexist": false,
//       "explicit": false
//     },
//     "id": 57,
//     "safe": true,
//     "lang": "en"
//   },
//   {
//     "category": "Programming",
//     "type": "single",
//     "joke": "A byte walks into a bar looking miserable.\nThe bartender asks it: \"What's wrong buddy?\"\n\"Parity error.\" it replies. \n\"Ah that makes sense, I thought you looked a bit off.\"",
//     "flags": {
//       "nsfw": false,
//       "religious": false,
//       "political": false,
//       "racist": false,
//       "sexist": false,
//       "explicit": false
//     },
//     "id": 24,
//     "safe": true,
//     "lang": "en"
//   },
//   {
//     "category": "Programming",
//     "type": "single",
//     "joke": "UDP is better in the COVID era since it avoids unnecessary handshakes.",
//     "flags": {
//       "nsfw": false,
//       "religious": false,
//       "political": false,
//       "racist": false,
//       "sexist": false,
//       "explicit": false
//     },
//     "id": 259,
//     "safe": true,
//     "lang": "en"
//   },
//   {
//     "category": "Dark",
//     "type": "single",
//     "joke": "I'll never forget my Granddad's last words to me just before he died. \"Are you still holding the ladder?\"",
//     "flags": {
//       "nsfw": false,
//       "religious": false,
//       "political": false,
//       "racist": false,
//       "sexist": false,
//       "explicit": false
//     },
//     "id": 208,
//     "safe": false,
//     "lang": "en"
//   },
//   {
//     "category": "Misc",
//     "type": "single",
//     "joke": "My wife is really mad at the fact that I have no sense of direction.\nSo I packed up my stuff and right.",
//     "flags": {
//       "nsfw": false,
//       "religious": false,
//       "political": false,
//       "racist": false,
//       "sexist": false,
//       "explicit": false
//     },
//     "id": 201,
//     "safe": true,
//     "lang": "en"
//   },
//   {
//     "category": "Programming",
//     "type": "single",
//     "joke": "Debugging is like being the detective in a crime movie where you're also the murderer at the same time.",
//     "flags": {
//       "nsfw": false,
//       "religious": false,
//       "political": false,
//       "racist": false,
//       "sexist": false,
//       "explicit": false
//     },
//     "id": 42,
//     "safe": true,
//     "lang": "en"
//   },
//   {
//     "category": "Programming",
//     "type": "single",
//     "joke": "The glass is neither half-full nor half-empty, the glass is twice as big as it needs to be.",
//     "flags": {
//       "nsfw": false,
//       "religious": false,
//       "political": false,
//       "racist": false,
//       "sexist": false,
//       "explicit": false
//     },
//     "id": 23,
//     "safe": true,
//     "lang": "en"
//   },
//   {
//     "category": "Programming",
//     "type": "single",
//     "joke": "Eight bytes walk into a bar.\nThe bartender asks, \"Can I get you anything?\"\n\"Yeah,\" reply the bytes.\n\"Make us a double.\"",
//     "flags": {
//       "nsfw": false,
//       "religious": false,
//       "political": false,
//       "racist": false,
//       "sexist": false,
//       "explicit": false
//     },
//     "id": 34,
//     "safe": true,
//     "lang": "en"
//   },
//   {
//     "category": "Pun",
//     "type": "single",
//     "joke": "How do you make holy water? You boil the hell out of it.",
//     "flags": {
//       "nsfw": false,
//       "religious": true,
//       "political": false,
//       "racist": false,
//       "sexist": false,
//       "explicit": false
//     },
//     "id": 202,
//     "safe": false,
//     "lang": "en"
//   },
//   {
//     "category": "Programming",
//     "type": "single",
//     "joke": "I've got a really good UDP joke to tell you but I don’t know if you'll get it.",
//     "flags": {
//       "nsfw": false,
//       "religious": false,
//       "political": false,
//       "racist": false,
//       "sexist": false,
//       "explicit": false
//     },
//     "id": 0,
//     "safe": true,
//     "lang": "en"
//   },
//   {
//     "category": "Dark",
//     "type": "single",
//     "joke": "I hate double standards. Burn a body at a crematorium, you're \"being a respectful friend.\" Do it at home and you're \"destroying evidence.\"",
//     "flags": {
//       "nsfw": false,
//       "religious": false,
//       "political": false,
//       "racist": false,
//       "sexist": false,
//       "explicit": true
//     },
//     "safe": false,
//     "id": 274,
//     "lang": "en"
//   },
//   {
//     "category": "Misc",
//     "type": "single",
//     "joke": "What does the MacBook have in common with Donald Trump?\n\nI would tell you....\nBut I don't compare apples to oranges.",
//     "flags": {
//       "nsfw": false,
//       "religious": false,
//       "political": true,
//       "racist": false,
//       "sexist": false,
//       "explicit": false
//     },
//     "id": 233,
//     "safe": false,
//     "lang": "en"
//   }

// let index = Math.floor(Math.random() * (myjokes.length - 1))
// joke.innerHTML = myjokes[index].joke


// Chapter 9 - Practice Set

// Practice 1

// const loadScript = async (src) => {
//   return new Promise((resolve, reject) => {
//     let script = document.createElement("script")
//     script.src = src
//     script.onload = () => {
//       resolve(src + " Done success")

//     }
//     document.head.append(script)
//   })
// }

//   let a =  loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js")
// a.then((value) => {
//   console.log(value)
// })

// Practice 2

//  const main2 = async () => {
//   console.log(new Date().getMilliseconds())

//   let a = await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js")
//   console.log(a)
// }

// main2()

// Practice 3

// let p = () => {
//    return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(new Error("Please this is not acceptable"))
//     },3000)
//   })
// }
// let a = async () => {
//   try{
//     let c = await p()
//     console.log(c)
//   }
//   catch(err){
//     console.log("This error has been handled")
//   }

// }
// a()


// Practice 4

// let p1 = async () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(10)
//     }, 2000)
//   })
// }
// let p2 = async () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(10)
//     }, 1000)
//   })
// }
// let p3 = async () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(10)
//     }, 3000)
//   })
// }

// const run = async () => {
//   console.time("run")
//   // let a1 = await p1() // Fetch first 10 products from the database
//   // let a2 = await p2() // Fetch another 10 products from the database
//   // let a3 = await p3() // Fetch yet another 10 products from the database


//   let a1 = p1() // Fetch first 10 products from the database
//   let a2 = p2() // Fetch another 10 products from the database
//   let a3 = p3() // Fetch yet another 10 products from the database
//   let a1a2a3 = await Promise.all([a1, a2, a3])
//   console.log(a1a2a3)
//   // console.log(a1, a2, a3)
//   console.timeEnd("run")
// }
// run()


// Chapter 10 - Practice Set

// Practice 1

// let url = "https://kontests.net/api/v1/all"
// let response = fetch(url)
// response.then((v) => {
//   return v.json()
// }).then((contests) => {
//   console.log(contests)
//   ihtml = ""
//   for (item in contests) {
//     console.log(contests[item])
//     ihtml += `
//           <div class="card mx-2 my-2" style="width: 22rem;">
//                           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOpMBTgrPtQuNSYqIzPVAEJgJbF7tWmT1LhnCrtAkFbe-_qgRXBj-25gZ0yuR_3sL6iNE&usqp=CAU" class="card-img-top" alt="...">
//                           <div class="card-body">
//                                   <h5 class="card-title">${contests[item].name}</h5>
//                                   <p class="card-text"> Status is ${contests[item].status} and site is ${contests[item].site}</p>
//                                   <p class="card-text"> In 24 Hours? ${contests[item].in_24_hours} </p>
//                                   <p>Starts at: ${contests[item].start_time}
//                                   <p>Starts at: ${contests[item].end_time}
//                                   <a href="${contests[item].url}" class="btn btn-primary my-4">Visit Contest</a>
//                           </div>
//                   </div>
//           `
//   }
//     cardContainer.innerHTML = "ihtml"
// })


// Practice 2

// let n = loca/* ******************* NOTES APP (REMAINING QUESTIONS OF PRACTICE SET) *********** */
// let n = localStorage.getItem("note")
// alert("Your note is " + n)

// let a = prompt("Enter your note")
// if (a) {
//         localStorage.setItem("note", a)
// }

// let c = confirm("Do you want to delete your note?")
// if (c) {
//         localStorage.removeItem("note")
//         alert("Note deleted successfully!")
//}


// Chapter 11 Practice Set
// Practice 1,6
class complex{
  constructor(real,imaginary){
    this.real = real
    this.imaginary = imaginary
  }
  add(num){
    this.real = this.real + num.real
    this.imaginary = this.imaginary + num.imaginary
      // return new complex(r,i)
  }
  get real(){
    return this._real
  }
  get imaginary(){
    return this._imaginary
  }
  set imaginary(NewImaginary){
    this._imaginary = NewImaginary
  }
  set real(NewReal){
    this._real = NewReal
  }
}

let a =  new complex(2,4)
a.real = 10
a.imaginary = 10
let b =  new complex(5,3)

a.add(b)
console.log(`${a.real} + ${a.imaginary}i`)





// Practice 2,3,4
// class human{
//   constructor(name , favfood){
//     this.name = name
//     this.favfood = favfood
//   }
//   walk(){
//     console.log(this.name + " Human is walking")
//   }
// }

// class Singer extends human{
//   walk(){
//     console.log(this.name + ": Singer is walking")
//   }

// }

// let o = new Singer("Ahnaf" , "Biryani")
// o.walk()

// console.log(o instanceof human)
