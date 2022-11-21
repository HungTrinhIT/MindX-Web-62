// Es6 module
// export const sum = (a, b) => a + b;
// export const sub = (a, b) => a - b;

// CommonJS
const sum = (a, b) => a + b;
const sub = (a, b) => a - b;

const mathModules = {
  sum,
  sub,
};

//  Correct
module.exports = {
  sum,
  sub,
};
// module.exports = mathModules;

// module.exports.sum = sum;
// module.exports.sub = sub;

// exports.sum = sum;
// exports.sub = sub;

// Wrong
// exports = { sub, sub };
