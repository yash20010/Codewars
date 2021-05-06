// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided 2 dimensional array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

// The sub arrays may not be the same length.

// The solution should be case insensitive (ie good, GOOD and gOOd all count as a good idea). All inputs may not be strings.

function count(x) {
  let gk = 0;
  for (let i = 0; i < x.length; i++) {
    if (Array.isArray(x[i])) {
      gk += count(x[i]);
    } else {
      if (x[i].toString().toLowerCase() === "good") {
        gk++;
      }
    }
  }
  return gk;
}

function well(x) {
  let c = count(x);
  return c < 1 ? "Fail!" : c < 3 ? "Publish!" : "I smell a series!";
}
