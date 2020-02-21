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
  var passwordLength = window.prompt("Please enter the length of the password - must be between 8 to 128");
  var counter = 4;
  while (passwordLength < 8 || passwordLength > 128 && counter > 0) {
    if (counter === 0) {
      return "You are an idiot!";
    }
    else {
      counter--;
      var passwordLength = window.prompt("Your password length must be less than 128 and more than 8!");      
    }
  } 
  // user inputs   
  var hasUpperCase = window.confirm("Do you want to include uppercase letters?");
  var hasLowerCase = window.confirm("Do you want to include lowercase letters?");
  var hasNumeric = window.confirm("Do you want to include numerics?");
  var hasSpecialChar = window.confirm("Do you want to include special characters?");    
  
  return randomGenerator(passwordLength, hasUpperCase, hasLowerCase, hasNumeric, hasSpecialChar);
}

// Generates an array of password based on user's inputs
function randomGenerator(passwordLength, hasUpperCase, hasLowerCase, hasNumeric, hasSpecialChar) {
  var charArray = new Array();
  var initialLength = hasLowerCase + hasNumeric + hasSpecialChar + hasUpperCase;
  var remainingLength = passwordLength - initialLength;
  
  // adds extra numbers to fill the remaining 
  for (var i = 0; i < remainingLength; i++) {
    charArray.push(generateRandomLetter(97, 122));
  }

  // adds user's chosen letters to the array
  if (hasUpperCase) {
    // push a random uppercase letter
    charArray.push(generateRandomLetter(56, 90));    
  }
  if (hasLowerCase) {
    // push a random lowercase letter
    charArray.push(generateRandomLetter(97, 122));
  }
  if (hasNumeric) {
    // push a random integer
    charArray.push(generateRandomLetter(48, 57));    
  }
  if (hasSpecialChar) {
    // push a random special character
    charArray.push(generateRandomLetter(33, 47));
  }
  
  return charArray.join('');
}

// Generates random uppercase or lower case letters based on the input. 65-90 for uppercase, 97-122 for lowercase, 48-57 for number, 33-47 for special characters
function generateRandomLetter(asciiLow, asciiHigh) {

  return String.fromCharCode(Math.floor((Math.random() * (asciiHigh - asciiLow)) + asciiLow));
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
