function compareDifferentValues(m, n) {
  if (m === n) {
    return "Equal";
  } else {
    return "Not equal";
  }
}
console.log(compareDifferentValues(5,"5"));
module.exports = compareDifferentValues;