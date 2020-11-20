function validation(){
    var flag = 0;
    if(inputname1.value=="" ||inputname2.value=="" ||inputEmail4.value=="" ||inputphone.value=="" ||inputAddress.value=="" ||inputCity.value=="" ||inputState.value=="" ||inputZip.value=="" ||inputPassword4.value=="" ||inputrePassword4.value==""){
        alert("Fields cannot be empty");
        return false;
    }
    else{
        let regmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        let regphone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        let strong = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
        let medium= new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
        let min = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        let mailerror = document.getElementById("error-email");

        if((regmail.test(inputEmail4.value))==false){
            mailerror.innerHTML = "Invalid email id!";
            mailerror.style.color = "#fff000";
            return false;
        }
        else{
            mailerror.innerHTML = "";
            let phoneerror = document.getElementById("error-phone");
            if((regphone.test(inputphone.value))==false){
                phoneerror.innerHTML = "Invalid phone number!";
                phoneerror.style.color = "#fff000";
                return false;
            }
            else{
                phoneerror.innerHTML = "";
                let passerror = document.getElementById("error-pass");
                if (min.test(inputPassword4.value)==false) {
                    passerror.innerHTML = "Password must contain minimum of 8 characters including atleast one uppercase, one lowercase and one number";
                    passerror.style.color = "#fff000";
                    return false;
                }
                if (strong.test(inputPassword4.value)) {
                    passerror.innerHTML = "Strong";
                    passerror.style.color = "green"; 
                }
                else if (medium.test(inputPassword4.value)) {
                    passerror.innerHTML = "Medium";
                    passerror.style.color = "orange";
                }
                else {
                    strength.innerHTML = "Weak";
                    passerror.style.color = "red";
                }
                let repasserror = document.getElementById("error-repass");
                if(inputPassword4.value!= inputrePassword4.value){
                    repasserror.innerHTML = "Passwords do not match";
                    repasserror.style.color = "#fff000"
                    return false;
                }
                else{
                    repasserror.innerHTML = "Passwords match";
                    repasserror.style.color = "green";
                }
                if(confirm('Do you want to Submit?')){
                    return true;
                }
            }   
        }
    } 
}

