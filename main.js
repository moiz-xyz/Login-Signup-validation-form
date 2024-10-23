function data() {
let email = document.getElementById("email").value;
let password = document.getElementById("pass").value;
// let found = false;
if (email === ""|| password ===""){
    alert("Please fill out the form it cannot be emmpty");
    // found = true;
}else if(password.length <8){
    alert("Passord lengh must be 8");
    // found =true;
} else {
    alert("The form is submited")
}
}