// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Generates password based on user input
function generatePassword() {
  return userInput();
}

function userInput() {
  var passwordLength = window.prompt("Please enter the length of the password - must be between 8 to 128");
  
  if (passwordLength >= 0 && passwordLength <= 128) {    
    var hasUpperCase = window.confirm("Do you want to include uppercase letters?");
    var hasLowerCase = window.confirm("Do you want to include lowercase letters?");
    var hasNumeric = window.confirm("Do you want to include numerics?");
    var hasSpecialChar = window.confirm("Do you want to include special characters?");
    
    return passwordLength;
  }
  else {
    return window.prompt("Your password length must be less than128 and more than 0!");
  }
}

// Generates an array of password based on user's inputs
function randomGenerator(length, hasUpperCase, hasLowerCase, hasNumeric, hasSpecialChar) {
  var charArray = new Array(length);
  var initialLength = hasLowerCase + hasNumeric + hasSpecialChar + hasUpperCase;
  var remainingLength = charArray.length - initialLength;
  // generates a number for the remaining empty characters of the array
  var numberFiller = Math.floor((Math.random() * Math.pow(10, remainingLength) + remainingLength));
  
  // if (hasUpperCase) {
  //   // push a random uppercase letter
  // }
  // if (hasLowerCase) {
  //   // push a random lowercase letter
  // }
  // if (hasNumeric) {
  //   // push a random integer
  // }
  // if (hasSpecialChar) {
  //   // push a random special character
  // }  

}
// Generates random uppercase or lower case letters based on the input. 65-90 for uppercase, 97-122 for lowercase
function generateRandomLetter(asciiLow, asciiHigh) {

  return String.fromCharCode(Math.floor((Math.random() * (asciiHigh - asciiLow)) + asciiLow));
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
