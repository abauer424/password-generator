// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var lowerString = "abcdefghiqklmnopqrstuvwxyz"
var lowerArray = lowerString.split("")
var upperArray = lowerString.toUpperCase().split("")
console.log(upperArray)
var numArray = ["1" , "2","3" ,"4", "5", "6",]
var specialArray = ["#" , "$","!" , "@" , "%", "^", "*", "(", ")"]

//create a function called generate password
function generatePassword() {
  var totalArray = []
  //create an alert "how many characters would you like your password to contain?"
  var charLength = window.prompt("How many characters would you like your password to contain?(minimum 8, maximum 128)");
  console.log(charLength);
  //if the user input is less than or equal to 7 OR more than or equal to 129 then alert "Please enter a number between 8-128"
  if (charLength <= 7 || charLength >= 129 || isNaN(charLength)) {
    window.alert("Please enter a number between 8-128");
    return undefined;
  }
  //if value is between 8-128, then prompt "click ok to confirm including special characters"
  if (charLength >= 8 && charLength <= 128) {
    var specialChar = window.confirm("Click 'ok' to confirm including special characters");
    if(specialChar === true) {
      totalArray = totalArray.concat(specialArray)
    }
    var numericChar = window.confirm("Click 'ok' to confirm including numerical characters")
    if(numericChar){
      totalArray = totalArray.concat(numArray)
    }
    var lowercaseChar = window.confirm("Click 'ok' to confirm including lowercase characters");
    if(lowercaseChar) {
      totalArray = totalArray.concat(lowerArray)
    }
    var uppercaseChar = window.confirm("Click 'ok' to confirm including uppercase characters");
    if(uppercaseChar) {
      totalArray = totalArray.concat(upperArray)
    }
    if(totalArray.length === 0) {
      window.alert("Please select one character type")
      return "Please try again";
    }
  }
  console.log(totalArray)
var results = []
  for(var i=0; i < charLength; i++){
   var index = Math.floor(Math.random()*totalArray.length) 
   console.log(index) 
   var passDigit = totalArray[index]
   results.push(passDigit)
  }

return results.join("")
//if specialChar is false, do not include in password
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

