let name = document.getElementById("fname");
let gender = document.getElementById("gender");
let email = document.getElementById("email");
let address = document.getElementById("address");
let box = document.getElementById("terms");


function validate(){
    if(fname.value.length < 4){
        alert("Your name is too short")
    }
    if(email.value.endsWith("@gmail.com") == false){
        alert("Invalid email address")
    }
    if(address.value.length < 6){
        alert("Invalid address")
    }
    if(box.checked == false){
        alert("Please agree to our terms and conditions")
    }
}
