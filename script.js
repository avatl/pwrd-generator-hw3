
// Start with arrays
// Array of all lowercased letters
var lowerCasedCharacters = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];
// Array of all uppercase letters
var upperCasedCharacters = [
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
];
// Array of all special characters
var specialCharacters = [
  '@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'
];
// Array of all numbers
var numericCharacters = [
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
];

// Function for password options
function getPasswordOptions() {

  // Ask how many characters they would like their password to be - prompt
  var length = parseInt(
    prompt('How many characters would you like your password to contain?')
  );

  // If it’s under 8, ask them to pick a new length over 8 - alert
  if (length < 8) {
    alert('Most passwords need to be 8 characters or above!');
    return;
  }

  // If answer is not a number - alert
  if (isNaN(length) === true) {
    alert('Please provide password length as a number');
    return;
  }

  // Too many characters? - alert
  if (length > 128) {
    alert('Thats a very long password! My max is 129 characters');
    return;
  }

  // Ask them if they want lowercase letters - boolean
  var hasLowerCasedCharacters = confirm(
    'Would you like to include lower cased characters?'
  );

  // Ask them if they want uppercase letters - boolean
  var hasUpperCasedCharacters = conrifm(
    'Would you like to include upper cased characters?'
  );

  // Ask them if they want special characters - boolean
  var hasSpecialCharacters = confirm(
    'Would you like to include special characters?'
  );

  // Ask them if they want numbers - boolean
  var hasNumericCharacters = confirm(
    'Would you like to include numbers?'
  );

  // No characters chosen - false - alert
  if (
    hasSpecialCharacters === false &&
    hasNumericCharacters === false &&
    hasLowerCasedCharacters === false &&
    hasUpperCasedCharacters === false
  ) {
    alert('Must select at least one character type');
    return;
  }

  // Users selected options for password input
  var passwordOptions = {
    length: length,
    hasSpecialCharacters: hasSpecialCharacters,
    hasNumericCharacters: hasNumericCharacters,
    hasLowerCasedCharacters: hasLowerCasedCharacters,
    hasUpperCasedCharacters: hasUpperCasedCharacters
  };

  return passwordOptions;

}

//Generate random array index every time
function generatePassword() {
  var options = getPasswordOptions();
  var result = [];
  var possibleCharacters = [];
  var gauranteedCharacters = [];

  // If they do want lowercase letters, we concatenate that option array into the empty bowl array. If not, we move on.
  if (options.hasLowerCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
    gauranteedCharacters.push(getRandom(lowerCasedCharacters))
  };

  // If they do want uppercase letters, we concatenate that option array into the empty bowl array. If not, we move on.
  if (options.hasUpperCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
    gauranteedCharacters.push(getRandom(upperCasedCharacters))
  };

  // If they do want special characters, we concatenate that option array into the empty bowl array. If not, we move on.
  if (options.hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    gauranteedCharacters.push(getRandom(specialCharacters))
  };

  // If they do want numbers, we concatenate that option array into the empty bowl array. If not, we move on.
  if (options.hasNumericCharacters) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    gauranteedCharacters.push(getRandom(specialCharacters))
  };

  // For loop through array * character count
  for (var i = 0; i < options.length; i++) {
    var possibleCharacter = getRandom(possibleCharacters);
    result.push(possibleCharacter);
  }

  // Apply arrays into 'result' array - second empty bowl
  for (var i = 0; i < gauranteedCharacters.length; i++) {
    result[i] = gauranteedCharacters[i];
  }

  // String results
  return result.join('');
}

// GIVEN CODE
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  console.log("Inside writePassword")

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
