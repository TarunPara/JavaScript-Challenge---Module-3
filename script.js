// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Function to generate a password based on user criteria
function generatePassword() {
  // Define character sets for different character types
  var lowercaseChars = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";
  var uppercaseChars = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z";
  var numericChars = "0,1,2,3,4,5,6,7,8,9";
  var specialChars = "!,@,#,$,%,^,&,*,(),-,_,+,=";

  // Prompt the user for password length
  var passwordLength = parseInt(
    prompt("Enter password length (8-128 characters):")
  );

  // Validate the password length
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Please enter a valid password length between 8 and 128 characters.");
    return; 
  }

  // Prompt the user for character types
  var useLowercase = confirm("Include lowercase characters?");
  var useUppercase = confirm("Include uppercase characters?");
  var useNumeric = confirm("Include numeric characters?");
  var useSpecial = confirm("Include special characters?");

  // To check if at least one character type is selected
  if (!useLowercase && !useUppercase && !useNumeric && !useSpecial) {
    alert("Please select at least one character type.");
    return; 
  }

  // Create a string of characters to choose from based on user 
  var characters = "";
  if (useLowercase) characters += lowercaseChars;
  if (useUppercase) characters += uppercaseChars;
  if (useNumeric) characters += numericChars;
  if (useSpecial) characters += specialChars;

  // Generate the password
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (password) {
    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
