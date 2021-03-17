function compareStrictValues(m) {
  if (m != 55) {
    return "Not equal";
  } else {
    return "Equal";
  }
}
console.log(compareStrictValues(55));
module.exports = compareStrictValues;