var nums; // undefined

/*

    Scope:
        - global
        - function
        - block scope: 

    1. Sự khác biệt nhé giữa let, const và var
        * scope (Phạm vị)
            var -> global 
            const, let: function, block

        * assignment
            const: không thể re-assign
            let và var là có thể

        * hoisting
            var có thể sử dụng trước khi khai báo
            let, const 
    
    2. es6
        - map
        - filter
        - reduce
        - some
        - every
        - find
        - findIndex
        - for with index (for(let i = 0; i < nums.lentgh ; i++))
        - for in
        - for of
        - for each
    
    3. Spread operator (...)
    4. String template (literals string)    
    5. Arrow function
        - Có bao nhiêu loại function
        - Sự khác biệt giữa các loại function
        - Tại sao ES6 arrow function  const getSum = (nums) => {} (bind, call, this)

    6. Destructuring
        - Object destructuring
        - Array destructuring

    7. Promise: cách tự tạo 1 cái promise, mỗi cái promise có state, cách handle promise => async/await, event-loop
    8. Class 
*/

const mindxName = "MindX";
const greeting = "Hello " + mindxName;
const greeting_literals = `Hello ${mindxName}`;

let name = "Mindx";
name = "HungTrinh";

console.log("Nums:", nums); // undefined

nums = [1, 2, 3, 4, 5];

console.log("Nums:", nums); //[1, 2, 3, 4, 5];
