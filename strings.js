functon validateForm(){
  const palindromes = document.getElementById('palindromes').value;
///using the form that is linked to sting.html-->
  if(palindromes != Palindromes){
    alert("this is not a Palindromes try again");
    return;
    ///will alert when the incorrect word is submitted-->
  }

  alert("This is a Palindromes");
  document.getElementById('registrationForm').submit();
  ///wil alert when the correct word is submitted-->
}
