functon validateForm(){
  const palindromes = document.getElementById('palindromes').value;

  if(palindromes != Palindromes){
    alert("this is not a Palindromes try again");
    return;
  }

  alert("This is a Palindromes");
  document.getElementById('registrationForm').submit();
}
