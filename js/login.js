let mail = document.getElementById("user");
let password = document.getElementById("pass");

function valid(){
    if(inputEmail4.value=="" || inputPassword4.value==""){
        alert("Fields cannot be empty")
        return false;
    }
    else{
        let regmail = /^([A-Za-z0-9\.-_]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
        let errormail = document.getElementById("error-mail");
        if(regmail.test(mail.value)===false){
            errormail.innerHTML = "Invalid Email";
            return false;
        }
        else{
            errormail.innerHTML = "";
            return true;
        }
    }
}