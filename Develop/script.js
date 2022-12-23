// Assignment Code
var generateBtn = document.querySelector("#generate");
//added
var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var passwordLength = 12;
//ended
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//added
for (var i = 0; i <= passwordLength; i++) {
  var generatePassword = Math.floor(Math.random() * chars.length);
  password += chars.substring(generatePassword, generatePassword +1);

  
 }


 document.getElementById("password").value = password;