// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(
    var specialChracters = ! "#$%&'()*+,-./:;<=>?@[\]^_`{|}~",
    var alphabetNumericCharacters = "abcdefghijklmnopqrstuvwxyz0123456789".split(""),
    if (alphabetNumericCharacters.includes(passwordText)) {
      var letterGuessed = event.writePassword;
      checkLetters(letterGuessed)
      checkWin();
  );
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
