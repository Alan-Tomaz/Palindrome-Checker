function palindrome(str) {
  let newStr = "";
  let reverseStr = "";
  let pattern = /[A-Za-z0-9]/;
  for(let i = 0; i < str.length; i++) {
    if(pattern.test(str[i]) == true) {
      newStr += str[i];
    }
  }
  for(let l = newStr.length - 1; l >= 0; l--) {
reverseStr += newStr[l];
  }
  if(reverseStr.toLowerCase() == newStr.toLowerCase()) {
  return true;
  }
  else {
    return false;
  }
}

palindrome("eye");
