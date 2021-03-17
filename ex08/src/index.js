function logicalOrOperator(num) {
  if (num > 30 || num < 20) {
    return "Out";
  }
  {
    return "In";
  }
}
console.log(logicalOrOperator(20));
module.exports = logicalOrOperator;