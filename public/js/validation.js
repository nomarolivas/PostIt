var usernameLengthReq = false;
var usernameFirstChar = false;

document.getElementById('enteredUsername').addEventListener('input',
function(usernameInput){

    let usernameElement = usernameInput.target;
    let username = usernameElement.value;
    let letters= /^[A-Za-z]+$/;
    var invalidUsernameText = document.getElementById("not-letter-text");
    
    if(username.length >= 3){ //for length 
        usernameElement.classList.add('valid-text')
        usernameElement.classList.remove('invalid-text')
        usernameLengthReq = true;

    }else{
        usernameElement.classList.add('invalid-text')
        usernameElement.classList.remove('valid-text')
        usernameLengthReq = false;
        
    }


    if(username.length>0 && !username[0].match(letters) ){ //for first char

        invalidUsernameText.style.display = "block";
        document.getElementsByClassName("invalid-letter")[0].style.display="block";
        usernameElement.classList.add('invalid-text')
        usernameElement.classList.remove('valid-text')
        usernameFirstChar = false;
        
    }else{

        invalidUsernameText.style.display = "none";
        document.getElementsByClassName("invalid-letter")[0].style.display="none";
        usernameFirstChar = true;
    }

});

var passwordCapital= false;
var passwordNum= false;
var passwordSpecChar= false;
var passwordLength= false;

document.getElementById('enteredPassword').addEventListener('input', 
function(passwordInput){

    let passElement = passwordInput.target;
    let password = passElement.value;

    if(password.length>=0){

        // Validate capital letters
        var addedTextCapital = document.getElementById("capital");
        var upperCaseLetters = /[A-Z]/g;
        if(!password.match(upperCaseLetters)) {

            passElement.classList.add('invalid-text')
            passElement.classList.remove('valid-text')
            document.getElementsByClassName('message')[0].style.display="block"
            addedTextCapital.style.display= "block";
           
            passwordCapital= false;
        } else {
            
            passElement.classList.remove('invalid-text')
            passElement.classList.add('valid-text')
            document.getElementsByClassName('message')[0].style.display="none"
            addedTextCapital.style.display= "none";
            
            passwordCapital= true;
        }
      
        // // Validate numbers
        var addedTextNumbers =document.getElementById("number");
        var numbers = /[0-9]/g;
        if(!password.match(numbers)) {
            passElement.classList.add('invalid-text')
            passElement.classList.remove('valid-text');
            document.getElementsByClassName('message')[0].style.display="block"
            addedTextNumbers.style.display= "block";
            
            passwordNum= false;

        } else {

            passElement.classList.remove('invalid-text')
            passElement.classList.add('valid-text')
            addedTextNumbers.style.display= "none";
            
            passwordNum= true;
        }

        var addedTextSpecChar =document.getElementById("specChar");
        var specialChar = /[[~!@#$%^&*()_+<>•`{}\]]/g;
        if(!password.match(specialChar)) {
            passElement.classList.add('invalid-text')
            passElement.classList.remove('valid-text');

            document.getElementsByClassName('message')[0].style.display="block"
            addedTextSpecChar.style.display= "block";
           
            passwordSpecChar= false;
        } else {

            passElement.classList.remove('invalid-text')
            passElement.classList.add('valid-text')
            addedTextSpecChar.style.display= "none";
            
            passwordSpecChar= true;
        }
      
        // // Validate length
        var addedTextLength = document.getElementById("length");
        if(password.length < 8) {
            passElement.classList.add('invalid-text')
            passElement.classList.remove('valid-text');
            addedTextLength.style.display= "block";
            
            passwordLength= false;

        } else {

            passElement.classList.remove('invalid-text')
            passElement.classList.add('valid-text')
            addedTextLength.style.display= "none";
            
            passwordLength= true;
        }
      
    }
});


var passwordsMatch =false;

document.getElementById('enteredConfirmedPassword').addEventListener('input', 
function(confirmPassword){

    let conPassElement = confirmPassword.target;
    let confirmedPassword = conPassElement.value;
    let originalPass = document.getElementById('enteredPassword').value; 
    var addedTextConPass =document.getElementById("passwordConfirmText");

    if(confirmedPassword != originalPass){
        conPassElement.classList.add('invalid-text')
        conPassElement.classList.remove('valid-text');
        document.getElementsByClassName('confirmedPass')[0].style.display="block"
        addedTextConPass.style.display= "block";
        passwordsMatch =false;

    }else if(confirmedPassword == originalPass){

        conPassElement.classList.remove('invalid-text')
        conPassElement.classList.add('valid-text')
        document.getElementsByClassName('confirmedPass')[0].style.display="none"
        addedTextConPass.style.display= "none";
        passwordsMatch =true;
    }

});

var age= false;

function checkAge(){
    if(document.getElementById('ageCheck').checked){
        age= true;
    }else{
        age =false;
    }
}

var terms = false;

function checkTerms (){
    if(document.getElementById('termsCheck').checked){
        terms = true;
    }else{
        terms= false;
    }


}

function stopSubmission(e){

    if( age =true && terms ==true
    && emailValid ==true
    && usernameLengthReq==true 
    && usernameFirstChar ==true
    && passwordCapital== true
    && passwordNum==true 
    && passwordSpecChar==true
    && passwordLength==true
    &&passwordsMatch== true){
        return true;

    }else{
        e.preventDefault();
        return false;
    }

 }






   