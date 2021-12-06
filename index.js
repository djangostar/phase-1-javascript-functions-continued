// code your solution here
function saturdayFun(fun='roller-skate') {
    //return `This Saturday, I want to ` + fun + "!";
   return `This Saturday, I want to ${fun}!` 
}


const mondayWork = function (activity = 'go to the office') {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair="*") {
    return function(adjetive = "special") {
        return `You are ${flair}${adjetive}${flair}!`
    }
}
    // should return a function
        // inner function should take a single parameter that should default to special
        // return a string of the form "You are..."
        // where ... should be the adjective this function recived wrapped in visual flair(?)
    // should take as parameter a string that will be used to create visual flair
    // call parameter "flair" default value to "*"
    
    //total call should be:
    // wrapAdjective("%")("a dedicated programmer"); //=> "You are %a dedicated programmer%!"

