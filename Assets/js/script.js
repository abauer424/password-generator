//create a function called generate password
function generatePassword(){
  //create alert “how many characters would you like your password to contain?(minimum 8, maximum 128)”
  window.prompt("How many characters would you like your password to contain? (Minimum characters is 8, maximum characters is 128)");
  
  //if the value is less than 8 characters alert “password length must be at least 8 characters”
  if (i < 8) {
   window.alert("Please provide more than 8 characters");
   return "Please provide more than 8 characters";
  }
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
