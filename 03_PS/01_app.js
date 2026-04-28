function validateForm()
{
var name=document.getElementById("name").value;
var email=document.getElementById("email").value;
var age=document.getElementById("age").value;
var roll=document.getElementById("roll").value;
var photo=document.getElementById("photo").value;

if(name=="")
{
alert("Enter Name");
return false;
}

if(email=="")
{
alert("Enter Email");
return false;
}

if(email.indexOf("@")==-1)
{
alert("Invalid Email");
return false;
}

if(age<18 || age>25)
{
alert("Invalid Age");
return false;
}

if(roll=="")
{
alert("Enter Roll Number");
return false;
}

if(photo=="")
{
alert("Select Photo");
return false;
}

document.getElementById("btn").innerHTML=
"Submitted Successfully";

document.getElementById("btn").style.background=
"blue";

return false;
}