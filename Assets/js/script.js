//create a function called generate password
function generatePassword(){
  //create alert “how many characters would you like your password to contain?(minimum 8, maximum 128)”
  let rawCharLength = window.prompt("How many characters would you like your password to contain? (Minimum characters is 8, maximum characters is 128)"); //[1]
  let charLength = parseInt(rawCharLength); //[2]

  //if the value is less than 8 characters alert 
  if (charLength < 8) { //[3]
   window.alert("Please provide more than 8 characters");
   return undefined;
  }
 //if the value is more than 128 characters alert 
  else if (charLength > 128) {//[4]
  window.alert("Please provide less than 128 characters")
  return undefined;
  }
  //if the value is a letter then alert "please enter a number between 8-128"
  else (charLength === "a-z")
  window.alert ("Please enter a number between 8-128")
  return undefined;
}







// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
