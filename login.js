// let attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
let username = document.getElementById("username").value;
let password = document.getElementById("password").value;
if ( username == "ahmad2017" && password == "integrity"){
alert ("Login successfully");
window.location = "success.html"; // Redirecting to other page.
return false;
}
else{
	alert("username/kata sandi salah")
return false;
}
}
