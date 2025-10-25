// //Common Js 
// const {generateRandomNumber,celciusToFahrenheit} = require('./utils')


import getPosts,{ getPostsCount } from "./postController.js"; 
import {generateRandomNumber,celciusToFahrenheit} from "./utils.js";

console.log(getPosts());
console.log(`No. of Posts : ${ getPostsCount() }`)

console.log(`Random Number: ${ generateRandomNumber()}`)
console.log(`Celcius to Fahrenheit: ${ celciusToFahrenheit(0)}`)