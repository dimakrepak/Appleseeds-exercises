// Question 1:
// In your own words what will this point to and why?(Note
// this is the global scope)

console.log(this);

//Means that this refer to a global object. We will receive the the Window object.

// Question 2:
// a. In your own words what will this point to and why.
// b. How can you fix this code.
const myObj = {
    name: "Timmy",
    greet: function () {
        console.log(this)
        console.log(`Hello ${this.name}`);
    },
};
myObj.greet();
//When arrow function is used it doesnt create a new value for this.
//This keeps on referring to the same object its referring to outside of the function.

// Question 3:
// In your own words what will this point to and why?
const myFuncDec = function () {
    console.log(this);
};
// By default, the execution context for an execution is global — 
// which means if a code is being executed as part of a simple function call,
//  then this refers to a global object.
myFuncDec()

// Question 4:
// In your own words what will this point to and why?
const myFuncArrow = () => {
    console.log(this);
    // Arrows functions, as I said before, do not have their own this but they inherit it 
    // from the parent scope, in this case the global one.
};
myFuncArrow();

// Question 5:
// a. In your own words what will this point to and why.
// b. How can you fix this code.
const element = document.querySelector('div')

element.addEventListener('click', () => {
    console.log(this);
});
// Arrows functions, as I said before, do not have their own this but they inherit it
    // from the parent scope, in this case the global one.