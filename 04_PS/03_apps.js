function validateLogin()
{

var user=document.getElementById("user").value;
var pass=document.getElementById("pass").value;

if(user=="")
{
alert("Enter Username");
return false;
}

if(pass=="")
{
alert("Enter Password");
return false;
}

alert("Login Successful");

return false;

}