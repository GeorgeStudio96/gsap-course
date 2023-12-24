'use strict'




function counter() {
    let a = 0;

    return function() {
        return a++
    }
}

const resCounter = counter()

console.log(resCounter());
console.log(resCounter());
console.log(resCounter());
console.log(resCounter());
console.log(resCounter());
console.log(resCounter());
console.log(resCounter());
console.log(resCounter());
console.log(resCounter());
console.log(resCounter());
console.log(resCounter());
console.log(resCounter());


let firstName = 'George'

function foo1() {
    console.log('hello', firstName)
}

foo1()

function foo2() {
    let secondName = 'Valentin'
    console.log(secondName)
}
foo2()

console.log(firstName)





let a = 7

function changeNum() {
    a = 3
    console.log(a)
}

changeNum()