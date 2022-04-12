const letterPositions = function (sentence) {
    const results = {};
    for (let i = 0; i < sentence.length; i++) {
        if (results[sentence[i]]) {
          results[sentense[i]].push(i);
        } else {
          results[sentense[i]] = [i];
        }
      }
      return results;
    };
    
    
