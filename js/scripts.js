
//JAVASCRIPT Temporary button to change nav bar color. Will be removed for final version
function changeNavBarColor() {

var navBarColor = document.getElementById("navbar").style.backgroundColor;
console.log(navBarColor);
    
    if (navBarColor == "darkblue") {
        document.getElementById("navbar").style.backgroundColor = "green"; 
        document.getElementById("header").style.backgroundColor = "green";
    }else {
    document.getElementById("navbar").style.backgroundColor = "darkblue"; 
    document.getElementById("header").style.backgroundColor = "darkblue";
    }
} 


//JQUERY Slide function for descriptions in portfolio gallery
$("#hideButton").click(function() {
  $("#buttonPanel").hide("slow")
  $("#header").css("background-color","#005555");
  $("#navbar").css("background-color","#005555");
});