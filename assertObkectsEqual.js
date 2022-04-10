const assertObjectsEqual = function(actual, expected) {
    const inspect = require('util').inspect;
  
    if (eqObjects(actual, expected)) {
      console.log("Object are similar");
      console.log('✅✅✅ Assertion Passed: $(inspect(actual)}');
      else {
          console.log('🛑🛑🛑 Assertion Failed: $(inspect(expected')'

  