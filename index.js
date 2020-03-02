
//The function creates a new array called numberedDwarves and nondestructively takes the elements from dwarves and pushes a string to the new array containing a number before each element, which are the dwarves names. Then it returns the new array, but does so while joining the elements together by looking for the quotation separator, so as not to separate the names with commas. The for loop starts at the 0 index and incrimentally goes through the index of the array, but does not exceed the length. 
//Interesting note: When putting a space in between the '' separator, instead of after the element being called into the pushed string, the result made more sense to me, however the result called for it to be done the other way. This is the case as it only separates the elements with a space, without including a false space at the end, however the required result needed a space to come after each element.

function dwarfRollCall(dwarves) {
  
  const numberedDwarves = [];
  
  for (var place = 0; place < dwarves.length; place++) {
        
          numberedDwarves.push(`${place + 1}. ${dwarves[place]} `);
  }
  
  return numberedDwarves.join('');
}

//This funnction creates a new, hilariously named array called capitalPlanet and uses a for loop to incrementally go through the index of the array, not exceeding the length, and push a string containing the element and an exclamation mark to the array capitalPlanet and make each element within capialized as well by using the string function toUpperCase.

function summonCaptainPlanet(planeteerCalls){
  
  const capitalPlanet = [];
  
  for (var ele = 0; ele < planeteerCalls.length; ele++) {

    capitalPlanet.push(`${planeteerCalls[ele].toUpperCase()}!`);
  }
  
  return capitalPlanet;
}

//This function uses a for loop to run through the elements of the array "words", referring to the elements as "call"(s), starting at index 0 and not exceeding the length of the array. Then, within that loop it uses a conditional to return true if the length of the calls within the array "words" are greater than 4. Otherwise, it returns false.

function longPlaneteerCalls(words) {
  
  for (var call = 0; call < words.length; call++) {
    
    if (words[call].length > 4) {
      
      return true;
      
    } else {
      
      return false;
      
    }
  }
}

function findTheCheese (foods) {
}
