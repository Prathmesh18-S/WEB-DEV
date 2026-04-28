function validateSignup()
{

var name=document.getElementById("name").value;
var email=document.getElementById("email").value;
var pass=document.getElementById("pass").value;
var cpass=document.getElementById("cpass").value;

if(name=="")
{
alert("Enter Name");
return false;
}

if(email.indexOf("@")==-1)
{
alert("Invalid Email");
return false;
}

if(pass!=cpass)
{
alert("Password Not Match");
return false;
}

alert("Signup Successful");

return false;

}