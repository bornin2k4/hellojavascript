// this is commment

/*
this is
a multiline comment
*/


/*
here we are logging our data to the console
It's like a print() function in python 
*/
console.log("hello js");


/*
To create a variable that can be changed, "let" should be used as a keyword to create a variable
syntax:
let variable_name;
name = "name";

There are also data types available in JavaScript.
    Primitive:
        Numbers
        Strings
        Null
        Boolean
        Undefined
*/
let name="Khan";
name="thalha";
name="Sahal";
console.log(name);

 

/*
To create a variable that cannot be changed, "const" should be used as a keyword to create a variable
syntax:
const variable_name=3.14;

Here after declaring a constant variable you can't change it.
if you do something like that, it shows error
*/
const pi=3.14;
console.log(pi)

const plank=6.621*10**(-43);
console.log(plank,pi)

// array

let array=["paint brush","tooth brush",1,2,5];
console.log(array);

array.push(7);

console.log(array[2]+array[5])
console.log(array);

// objects

let pen={
type: "BallPoint",
colors: ["blue",'black'],
cost: 10
};
console.log(pen.colors[0])

// functions

function hello() {
console.log(1+2)
};

hello()

function product(a,b) {
    return a*b
};

console.log(product(2,3));

// if...else

let num = [1,2,3,4,5,1,2];
if (num[0]==num[5]) {
    console.log("correct")
}
else {
    console.log("wrong")
}

let numb = 6;
if (numb>=0) {
    console.log("positive")
}
else {
    console.log("Negative")
}


let num1 = 6;
let num2 = 7
if (num1>=0 && num2>=0) {
    console.log("positive")
}
else {
    console.log("Negative")
}
