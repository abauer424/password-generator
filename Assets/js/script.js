//create a function called generate password
function generatePassword() {
  //create an alert "how many characters would you like your password to contain?"
  var charLength = window.prompt("How many characters would you like your password to contain?(minimum 8, maximum 128)");
  console.log(charLength); 
  //if the user input is less than or equal to 7 OR more than or equal to 129 then alert "Please enter a number between 8-128"
  if(charLength <= 7 || charLength >= 129) {
    window.alert("Please enter a number between 8-128");
    return undefined;
  }
  // //if the user input is a letter then alert "Please enter a number between 8-128"
  // else if(Number.isNaN) {
  //   window.alert("Please enter a number between 8-128");
  //   return undefined;
  // }
   //if value is between 8-128, then prompt "click ok to confirm including special characters"
   if(charLength >= 8 && charLength <=128) {
    var specialChar = window.confirm("Click 'ok' to confirm including special characters");
    var numericChar = window.confirm("Click 'ok' to confirm including numerical characters")
    var lowercaseChar = window.confirm("Click 'ok' to confirm including lowercase characters");
    var uppercaseChar = window.confirm("Click 'ok' to confirm including uppercase characters");
   }

   
   //generate password length based on charLength value
   
   //if specialChar is true, then include in password

   //if specialChar is false, do not include in password
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

generatePassword();