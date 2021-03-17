function logicalAndOperator(num) {
  if (num <= 80 && num >= 40) {
    return "Yes";
  }
  {
    return "No";
  }
}
console.log(logicalAndOperator(45));
module.exports = logicalAndOperator;