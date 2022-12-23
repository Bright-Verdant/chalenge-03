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

  //document.getElementById("password").value = password;

}

// Add event listener to generate button
/* generateBtn.addEventListener("click", function() {
  for (var i = 0; i <= passwordLength; i++) {
    var generatePassword = Math.floor(Math.random() * chars.length);
    password += chars.substring(generatePassword, generatePassword +1);

    document.getElementById("password").value = password;
}
});
*/
//writePassword);

/* if (generateBtn === "#generate") {
  document.getElementById("password").value = password;
}


//added (redundant)
 for (var i = 0; i <= passwordLength; i++) {
  var generatePassword = Math.floor(Math.random() * chars.length);
  password += chars.substring(generatePassword, generatePassword +1);

  
 }


 //for (var i = 0; i <= passwordLength; i++) {
  var generatePassword = Math.floor(Math.random() * chars.length);
  password += chars.substring(generatePassword, generatePassword +1);
*/
generateBtn.addEventListener("click", writePassword); {

}
 
for (var i = 0; i <= passwordLength; i++) {
  var generatePassword = Math.floor(Math.random() * chars.length);
  password += chars.substring(generatePassword, generatePassword +1);
}





  document.getElementById("password").value = password;


  //ALL CODE IN GREEN IS EITHER REDUNDANT FOR EXPERERIMENTATION OR INSTRUCTIONS!!!!
  //END PRODUCT COULD NOT FIGURE OUT HOW TO ATTACH OUTPUT TO THE PRESS OF THE BUTTON, NOR REMOVE THE HTML OBJECT ARTIFACTS