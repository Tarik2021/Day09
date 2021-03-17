function myForLoop1() {
  var evenNumbers = "";
  for (var i = 0; i <= 8; i += 2) {
    if (i != 8) {
      evenNumbers += i + ", ";
    } else {
      evenNumbers += i;
    }
  }
  return evenNumbers;
}
function myForLoop2() {
  var evenInverseNumbers = "";
  for (var i = 0; i <= 8; i += 2) {
    if (i != 8) {
      evenInverseNumbers += i + ", ";
    } else {
      evenInverseNumbers += i;
    }
  }
  return evenNumbers;
}
console.log(myForLoop1());
console.log(myForLoop2());
module.exports = { myForLoop1, myForLoop2 };
