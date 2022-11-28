// import { sum, sub } from "./math";
const { sub, sum } = require("./math");

const name = "mindx";
console.log(`Hello ${name}, happy coding`);

const num_1 = 10;
const num_2 = 20;
console.log(`Sum ${num_1} + ${num_2} = `, sum(num_1, num_2));
console.log(`Sub ${num_1} - ${num_2} = `, sub(num_1, num_2));

// 3 kinds of modules:
//  1. Build-in modules: fs (Filesystem), path, http ()
//  2. External modules: react, react-dom, axios => npm , yarn
//       npm install axios

//  3. CommonJS module
