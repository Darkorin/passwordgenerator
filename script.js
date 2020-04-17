// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  
  // Initialize my variables
  var pass = "";
  var characters = 
  [
    "abcdefghijklmnopqrstuvwxyz",
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "1234567890",
    "!@#$%^&*()"
  ];

  var passChars = "";
  var passLength = 0;
  var lowerCase = false;
  var upperCase = false;
  var numeric = false;
  var specialChars = false;
  var alertFlag = false;
  

  // Prompts for user input
  while (passLength < 8 || passLength > 128 || isNaN(passLength)) {
    passLength = prompt("Enter a length for the password(8-128): ");
  }

  while (!lowerCase && !upperCase && !numeric && !specialChars) {
    if(alertFlag){alert("Select at least one character type!")};
    lowerCase = confirm("Do you want lower case characters? ");
    upperCase = confirm("Do you want upper case characters? ");
    numeric = confirm("Do you want numeric characters? ");
    specialChars = confirm("Do you want special characters? ");
    if(!lowerCase && !upperCase && !numeric && !specialChars){alertFlag = true};
  }
  
  // Stores the password conditions into an array
  var conditionArry = [lowerCase, upperCase, numeric, specialChars];

  // Checks the conditions array then adds onto the passChars string with the characters that match the conditions
  for(var i = 0; i < conditionArry.length; i++) {
    if(conditionArry[i]) {
      passChars += characters[i];
    }
  }

  // Sets up some more variables
  var conditionsCount = passChars.length;
  var randomChar;

  // Generates the random number and adds it to the password.
  for(var i = 0; i < passLength; i++) {
    randomChar = Math.floor(Math.random() * conditionsCount);
    pass += passChars[randomChar];
  }

  // Ensures that at least one of each selected type will be in the password 
  var a = Math.floor(Math.random() * passLength);
  var b = Math.floor(Math.random() * passLength);
  var c = Math.floor(Math.random() * passLength);
  var d = Math.floor(Math.random() * passLength);

  while(b === a) {
    b = Math.floor(Math.random() * passLength);
  }
  while(c === a || c === b) {
    c = Math.floor(Math.random() * passLength);
  }
  while(d === a || d === b || d === c) {
    d = Math.floor(Math.random() * passLength);
  }

  var replaceThese = [a, b, c, d];
  pass = pass.split('');
  for(var i = 0; i < conditionArry.length; i ++) {
    randomChar = Math.floor(Math.random() * characters[i].length);
    
    if(conditionArry[i]) {
      pass[replaceThese[i]] = characters[i][randomChar]; 
    }
  }
  pass = pass.join('');
  // returns the password
  return pass;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
