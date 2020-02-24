"use strict";
// Affectation à une propriété globale en lecture seule
var undefined = 5;  // déclenche une exception TypeError
var Infinity = 5;   // déclenche une exception TypeError

function getHello(){
    console.log("hello");
 
}
getHello();

var values = { a: 1 }

function pureFunction(a) {
  var b = 1

  a = a * b + 2

  return a
}

var c = pureFunction(values.a)
console.log(values.a)
var words = ["the", "quick", "brown", "fox"];
var wordLengths = words.map(word=> word.length);
console.log(wordLengths);

const nums = [1, 2, 3, 4, 5];
const summer = (a, b) => a + b;
const sum = nums.reduce(summer,0);
console.log(sum)

function greeter(greeting) {
    return function (greetee) {
      console.log(greeting + ", " + greetee + "!");
    }
  }
  greeter("hello")("oumayma")