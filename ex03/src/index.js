function myEqualFunction(num) {
  if (num === 23) {
    return "Equal";
  } else {
    return "Not equal";
  }
}
console.log(myEqualFunction("23"));
module.exports = myEqualFunction;