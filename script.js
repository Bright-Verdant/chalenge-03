
const generateBtn = document.getElementById("generate");
const passwordEl = document.getElementById("password");


const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numericChars = "0123456789";
const specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";


function generatePassword() {

  let passwordLength = parseInt(prompt("How many characters would you like your password to contain? (8-128)"));


  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Password length must be a number between 8 and 128.");
    return "";
  }


  let includeLowercase = confirm("Would you like to include lowercase characters?");
  let includeUppercase = confirm("Would you like to include uppercase characters?");
  let includeNumeric = confirm("Would you like to include numeric characters?");
  let includeSpecial = confirm("Would you like to include special characters?");


  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("You must select at least one character type.");
    return "";
  }

 
  let charSet = "";
  if (includeLowercase) {
    charSet += lowercaseChars;
  }
  if (includeUppercase) {
    charSet += uppercaseChars;
  }
  if (includeNumeric) {
    charSet += numericChars;
  }
  if (includeSpecial) {
    charSet += specialChars;
  }

 
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    password += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }

  
  return password;
}


generateBtn.addEventListener("click", () => {
  let password = generatePassword();
  passwordEl.value = password;
});
