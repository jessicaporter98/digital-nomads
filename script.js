
function myFunction() {
  var txt;
  if (confirm("You've successfully logged in!")) {
    txt = "You've successfully logged in";
  } else {
    txt = "You pressed Cancel!";
  }
  document.getElementById("demo").innerHTML = txt;
}

