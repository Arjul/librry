function validation(){

    let username = document.getElementById("username");
    let userid = document.getElementById("userid");
    let mobile = document.getElementById("mob");
    let email = document.getElementById("email");
    let password = document.getElementById("passid")
    let password2 = document.getElementById("passid2")

   

    

   
    let usernameError = false;
    let useridError = false;
    let mobileError = false;
    let emailError = false;
    let passwordError= false;
    let password2Error = false;

    
    let regusername = /^([a-z][A-z]{2,20})$/
    let reguserid = /[a-zA-Z0-9][a-zA-Z0-9_\-]{0,4}[a-zA-Z0-9]/
    let regphone =  /^(\d{10})|(\d{4}-\d{3}-\d{3})|(\d{3}-\d{3}-\d{4})|(\d{3}.\d{3}.\d{4})$/
    let regemail = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/
    let regpass = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/




    if(!regusername.test(username.value.trim())){

        fName.innerHTML = "Invalid";

        fName.style.color = "red";

        username.style.border = "2px solid red";

        usernameError = true;

    }

    else{

        fName.innerHTML = "Valid";

        fName.style.color = "green";

        username.style.border = "2px solid green";
    }

        if(!reguserid.test(userid.value.trim())){

            useriD.innerHTML = "Invalid";
    
            useriD.style.color = "red";
    
            userid.style.border = "2px solid red";
    
            useridError = true;
    
        }
    
        else{
    
            useriD.innerHTML = "Valid";
    
            useriD.style.color = "green";
    
            userid.style.border = "2px solid green";
    
        

    }
    if(!regphone.test(mobile.value)){

        moB.innerHTML = "Invalid";

        moB.style.color = "red";

        mob.style.border = "2px solid red";

        mobileError= true;

    }

    else{

        moB.innerHTML = "Valid";

        moB.style.color = "green";

        mob.style.border = "2px solid green";

    }
    
    if(!regemail.test(email.value.trim())){

        emaiL.innerHTML = "Invalid";

        emaiL.style.color = "red";

        email.style.border = "2px solid red";

        emailError = true;

    }

    else{

        emaiL.innerHTML = "Valid";

        emaiL.style.color = "green";

        email.style.border = "2px solid green";

    

}
if(regpass.test(password.value)){

    if(password.value.length<9){

        check.innerHTML = "Week Password";

        check.style.color = "orange";

        passid.style.border = "2px solid orange";

        pwdError = true;

    }

    else if(password.value.length<15){

        check.innerHTML = "Medium Strength";

        check.style.color = "orange";

        passid.style.border = "2px solid orange";

    }

    else{

        check.innerHTML = "Strong Password";

        check.style.color = "green";

        passid.style.border = "2px solid green";

    }

}

else{

    check.innerHTML = "Invalid";

    check.style.color = "red";

    passid.style.border = "2px solid red";

    passwordError = true;

}
// if(regpass.test(password2.value)){

    if(password2.value==="" ) {


        check2.innerHTML = "invalid";

        check2.style.color = "red";

        passid2.style.border = "2px solid red";

        password2Error = true;

    }
// }
else if(password2.value!== password.value) {
    

    check2.innerHTML = "invalid";

    check2.style.color = "red";

    passid2.style.border = "2px solid red";

    password2Error = true;
}
else{
    check2.innerHTML="valid";

    check2.style.color = "green";

    passid2.style.border = "2px solid green";
    
    password2Error = true;
}






    if(usernameError===true||userid===true||mobileError===true||emailError===true|| passwordError === true|| password2Error === true){

        return false;

    }

    else{

        

        return true;

    }

}