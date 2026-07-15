//Artimetic Operators
// let a = 5;
// let b = 2;

// console.log("a = ",a , " & b= ",b);
// console.log("a + b",a + b);
// console.log("a - b",a - b);
// console.log("a * b",a * b);
// console.log("a / b",a / b);

// console.log("a % b",a % b);
// console.log("a ** b",a ** b);

//Unary Operator

// let a = 5;
// let b = 2;

// console.log("a = ",a , " & b= ",b);
// a = a + 1; //6

//short way to write

// console.log("a++ =",a++);
// console.log("a =",a);

// console.log("b-- =",b--);
// console.log("b =",b);

// console.log("++b =",++b);
// console.log("b =",b);

//Asignment Operator
// let a = 5;
// let b = 2; 

// a *= 4; // a= a* 4
// console.log("a =",a);

// comparison Operator
// let a = 5;
// let b = 2; 

// console.log("5 == 2",a==b)
// console.log("5 != 2",a!=b)

// Logical Operator
// let a = 7;
// let b = 2; 

// let cond1 = a > b;
// let cond2 = a === 7;
// console.log("cond1 && cond2 =", cond1 && cond2);

//Conditional Statements

//1

// let age =18;

// if (age = 18){
//     console.log("you can vote from next Year")
// }

// if (age > 18) {
//     console.log("you can vote")
// }
 
// if (age < 18) {
//     console.log("you cannot vote");
// }

//2 

// let mode = "light";
// let color;

// if (mode === "dark"){
//     color = "black";
// } else  {
//     color = "white"
// }

// console.log(color);

// //3

// let num = 10;

// if(num % 2 === 0) {
//     console.log("Even number");
// } else{
//     console.log("Odd number")
// }

// //4 else-if - statement 
// let age = 15;

// if (age < 18){
//     console.log("junior");
// } else if (age > 60){
//     console.log("Senior");
// } else {
//     console.log("middle");
// }
// let age = 16;

// age >= 18 ? "adult" : "not adult";

// console.log(age);

//practice of alert

// alert("hello!")


//  let name = prompt("Enter your name "); 

//  console.log(name);

// pratice of prompt

// let number = prompt("Enter a number");

// if(number % 5 === 0 ){
//     console.log(number,"is a multiple of 5")
// } else {
//     console.log(number,"is NOT a multiple of 5");
// }

// // practice of grades of students on behave of there number

// let score = 75;
// let grade;

// if (score >= 90 && score <= 100){
//     grade = "A";
// } else if (score >=70 && score <= 89){
//     grade = "B";
// }else if (score >= 60 && score <= 69){
//     grade = "C";
// }else if (score >= 50 && score <= 59){
//     grade ="D";
// }else if (score >=0 && score <= 49){
//     grade = "F";
// }

// console.log("accoding to your score, your grade was ;",grade)


// second part of javascript

// let btn1 = document.querySelector("#btn1");

// btn1.onclick = () => {
//     console.log("Button clicked");
//     let a = 25;
//     a++;
//     console.log(a);
// }

// let div = document.querySelector("div");

// div.onmouseover = () => {
//     console.log("your inside the div");
// }


// let btn1 = document.querySelector("#btn1");

// btn1.onclick = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);
// }

// let div = document.querySelector("div");

// div.onmouseover = () => {
//    console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);
// }

// btn1.addEventListener("click",(evt) => {
//       console.log("Button1 was clicked");
//       console.log(evt);
//       console.log(evt.type);
// })

// btn1.addEventListener("click",() => {
//       console.log("Button1 was clicked - handler2");
// })

// let div = document.querySelector("div");



// let modebtn = document.querySelector("#mode");
// let body = document.querySelector("body");
// let currMode = "light";

// modebtn.addEventListener("click",() => {
//     if(currMode === "light" ){
//         currMode = "dark";
//         body.classList.add("dark");
//         body.classList.remove("light");
//     }else{
//         currmode = "light";
//         body.classList.add("light");
//         body.classList.remove("dark");
//     }

//     console.log(currmode);
// });
