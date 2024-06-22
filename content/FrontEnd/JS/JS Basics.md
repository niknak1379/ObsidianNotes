# JS variable scoping
1. `var` just puts it to global of the immediate function its defined in 
2. `let` is just in the bracket that it is defined in 
3. `const` doesn't change and just acts
# Scoping rules

The main difference is scoping rules. Variables declared by `var` keyword are scoped to the immediate function body (hence the function scope) while `let` variables are scoped to the immediate _enclosing_ block denoted by `{ }` (hence the block scope).


The reason why `let` keyword was introduced to the language was function scope is confusing and was one of the main sources of bugs in JavaScript.

Take a look at this example from [another Stack Overflow question](https://stackoverflow.com/questions/750486/javascript-closure-inside-loops-simple-practical-example):

```javascript
var funcs = [];
// let's create 3 functions
for (var i = 0; i < 3; i++) {
  // and store them in funcs
  funcs[i] = function() {
    // each should log its value.
    console.log("My value: " + i);
  };
}
for (var j = 0; j < 3; j++) {
  // and now let's run each one to see
  funcs[j]();
}
```

`My value: 3` was output to console each time `funcs[j]();` was invoked since anonymous functions were bound to the same variable.

People had to create immediately invoked functions to capture correct values from the loops but that was also hairy.

# Hoisting

Variables declared with `var` keyword are [hoisted and _initialized_](https://dev.to/godcrampy/the-secret-of-hoisting-in-javascript-egi) which means they are accessible in their enclosing scope even before they are declared, however their value is `undefined` before the declaration statement is reached:

`let` variables are [hoisted but _not initialized_](https://stackoverflow.com/questions/31219420/are-variables-declared-with-let-or-const-hoisted) until their definition is evaluated. Accessing them before the initialization results in a `ReferenceError`. The variable is said to be in [the temporal dead zone](https://stackoverflow.com/questions/33198849/what-is-the-temporal-dead-zone) from the start of the block until the declaration statement is processed.
