const assertArraysEquals = function(actual, expected) {
  if (eqArrays(actual,expected)) {
    console.log("Assertion Passed");
  } else {
    console.log("Assertion Failed");
  }
  return assertArraysEquals;
};

module.exports = assertArraysEquals;