//the functions that was be linked the html from the buttons-->
function myFunction() {
  document.getElementById("sample").innerHTML = "you win";
}
//will be read on screen once the player had got the correct answer-->
 <script language = "javascript" type="text/javascript">
   //using the logical operaction to solve the equation that will be linked to the html-->
    var x = 2
    var y = 4
    
    var sum = x+y
//the sum of the logical operaction adding the given numbers togther-->

    if (sum = 6){
      document.write("you win")
    }
      //the conditional that varifies the correct answer and will be read the following above-->
    else if(sum >6){
      document.write("you lose")
    } 
      //another conditional but any less number that is less than the correct answer is automatically fail as written above-->
    else{
      document.write("you lose")
    }
</script>
