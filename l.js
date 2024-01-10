
function validate(){
var modal = document.getElementById('id01');
var Email=document.getElementById("Email").value;
    var Password=document.getElementById("Password").value;
    var Repeat Password=document.getElementById("Repeat Password").value;
    if(Email=="admin@gmail.com" &&  Repeat Password=="admin")
    {
        alert("sign up succesfully");
        return true;
    }
    else
    {
        alert("sign up failed");
    }
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "admin@gmail.com";
  }

    
