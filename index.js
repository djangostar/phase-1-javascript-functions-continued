// code your solution here

const saturdayFun = (activity = 'roller-skate') => {
  // should return a function
  // inner function should take a single parameter that should default to 'roller-skate' when no arguments are passed
  // permits the default activity to be overriden
  return 'This Saturday, I want to ' + activity + '!';
};

const mondayWork = (activity = 'go to the office') => {
  // should return a function
  // inner function should take a single parameter that should default to 'go to the office' when no arguments are passed
  // permits the default activity to be overriden
  return 'This Monday, I will ' + activity + '.';
};

const wrapAdjective = function (flair = '*') {
  // inner function should take a single parameter that should default to special
  return function (adjective = 'special') {
    // return a string of the form "You are..."
    return `You are ${flair}${adjective}${flair}`;
  };
};

// where ... should be the adjective this function recived wrapped in visual flair(?)
// should take as parameter a string that will be used to create visual flair
// call parameter "flair" default value to "*"

// total call should be:
// wrapAdjective("%")("a dedicated programmer"); //=> "You are %a dedicated programmer%!"
