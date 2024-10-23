function signin() {
let first_name = document.getElementById("first").value;
let last_name = document.getElementById("last").value;
let email = document.getElementById("email").value;
let password = document.getElementById("pass").value;
let numPattern = /\d/;
if (email === ""|| password ===""|| first_name ===""||last_name ===""){
    alert("Please fill out the form it cannot be emmpty");
    // found = true;
}else if ( numPattern.test(first_name) || numPattern.test(last_name)) {
 alert("Your name cannot contain number")
}else if(password.length <8){
    alert("Passord lengh must be 8");
    // found =true;
} else {
    alert("The form is submited")
}
}


