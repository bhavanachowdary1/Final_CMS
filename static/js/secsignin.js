//password showing and hiding
const eye = document.querySelector("#eye");
var pw = document.querySelector("#password");

eye.addEventListener("click", function () {
    if (!eye.classList.contains("fa-eye-slash")) {
        eye.classList.add("fa-eye-slash");        
        pw.setAttribute("type", "text");
    } else {
        eye.classList.remove("fa-eye-slash");
        pw.setAttribute("type","password");
    }
 });

// validating email address

var emailid= document.querySelector("#emailid");
const signinbtn = document.querySelector("#signin");
const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

signinbtn.addEventListener("click", function(e) {
    if(reg.test(emailid.value) === false){
        alert("Invalid Email Address"); 
    }else if(pw.value.length<8){
        alert("Password length should greater than 8 characters");
    }
    //not to submit form
    // e.preventDefault();
});



