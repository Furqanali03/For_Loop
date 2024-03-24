// Ques : 01 . write a program to display the message hello world 5 times in your browser using for loop.
/*
const h2 = document.querySelector("h2");

const helloWorld = "Hello World";

for (let i = 0; i <= 5; i++) {
    h2.innerHTML += helloWorld + "<br />";
    
}
*/

// Ques : 02 . Write a program to print numeric counting from 1 to 10.
/*
const h2 = document.querySelector("h2");

let i = 1;
while (i<=10) {
    h2.innerHTML += [i] + "<br />"
    i++   
}
*/

// Ques : 03 . write a program to print multiplication table of any number using for loop. table number and length should be taken as input.

/*
const h2 = document.querySelector("h2");
var inputUser = +prompt("Which number of table do you want?");
var times = +prompt("How many times do you want?");

for (let i = 1; i <= times; i++) {
    console.log(`${inputUser} * ${i} = ${inputUser * i}`);
    h2.innerHTML += (`${inputUser} * ${i}= ${inputUser * i}` + "<br/>");
}
*/

// Ques : 04 . You have an ararys write each element on new line with help of for loop.
/*
const h2 = document.querySelector("h2");
const array = ["Nokia", "Samsung", "Apple", "Sony", "Huawei"];

for (let i = 0; i < array.length; i++) {
    h2.innerHTML += array[i] + "<br / >";
    
}
*/

// Ques : 05 . Write a program to print following itemes using for loop. fruits = ["Banana", "Orange", "Apple", "Mango"];
/*
const h2 = document.querySelector("h2");
const fruits = ["Banana", "Orange", "Apple", "Mango"];

for (let i = 0; i < fruits.length; i++) {
    h2.innerHTML += `Element at index ${i} is ${fruits[i]} `+ "<br / >";
    
}
*/

// Ques : 06 . Write a program to initialize an array of N items by using prompt. where N is a number of entered by the user.
/*
const h2 = document.querySelector("h2");
const input = prompt("Enter your value");
const array = [];
const N = parseInt(input);

// Initialize the array with N items
for (let i = 0; i < N; i++) {
    array.push(input);
    h2.innerHTML = array.join(", ");
}
*/
