 function checkAll() {
    firstnamevalidation();
    lastnamevalidation();
    numbervalidation();
    emailvalidation();
    passwordvalidation();
    cpasswordvalidation();
    officevalidation();
 //   agevalidation();
    radiobutton() ;
    checkbox();
    aboutvalidation();
    confirmPassword();
    
}

const firstNameInput = document.getElementById("firstname");
function firstnamevalidation() {

    var syntax = /^[0-9]+$/;
    var inputValue = firstNameInput.value;

    var error = ''
    if (firstNameInput.value.length == '') {

        error = "FirstName Required";

    }
    else if (syntax.test(inputValue)) {
        error = "Not Accept Numbers"

    }
    else if (firstNameInput.value.length < 2) {
        error = "Lenght Should Be < 2";
    }
    else {
        error = ""
    }

    document.getElementById('firstnameError').innerHTML = error;

}
const lastname = document.getElementById("lastname");
function lastnamevalidation() {


    var syntax = /^[0-9]+$/;
    var inputValue = lastname.value;

    var error = ''
    if (lastname.value.length == '') {

        error = "Lastname Required";

    }
    else if (syntax.test(inputValue)) {
        error = "Not Accept Numbers"

    }
    else if (lastname.value.length < 2) {
        error = "Lenght Should Be < 2";
    }
    else {
        error = ""
    }

    document.getElementById('error_lastname').innerHTML = error;

}



const number = document.getElementById("number");
function numbervalidation() {


    var syntax = /^[a-zA-Z]+$/;
    var inputValue = number.value;

    var error = ''
    if (number.value.length == '') {

        error = "Required Field";

    }
    else if (syntax.test(inputValue)) {
        error = "Not Accept letter"

    }
    else if (!number.value.length == 10) {
        error = "Lenght Should Be 10";
    }
    else {
        error = ""
    }

    document.getElementById('error_number').innerHTML = error;

}

const office = document.getElementById("office");
function officevalidation() {


    var syntax = /^[a-zA-Z]+$/;
    var inputValue = office.value;

    var error = ''
    if (office.value.length == '') {

        error = "Required Field";

    }
    else if (syntax.test(inputValue)) {
        error = "Not Accept letter"

    }
    else if (office.value.length == 10) {
        error = "Lenght Should Be 10";
    }
    else {
        error = ""
    }

    document.getElementById('error_office').innerHTML = error;

}


const email = document.getElementById("email");
function emailvalidation() {


    var syntax = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var inputValue = email.value;

    var error = ''
    if (email.value.length == '') {

        error = "Email Required";

    }
    else if (!syntax.test(inputValue)) {
        error = "Invalid Format"

    }
    else {
        error = ""
    }

    document.getElementById('error_email').innerHTML = error;

}

const password = document.getElementById("password");
function passwordvalidation() {


    var syntax = /^[a-zA-Z0-9]*$/;
    var inputValue = password.value;

    var error = ''
    if (password.value.length == '') {

        error = "Password Required";

    }
    else if (!syntax.test(inputValue)) {
        error = "No special character allow"

    }
    else if (password.value.length < 8 || password.value.length >16) {
        error = "Password required minimum eight character & max 13 character";
    }
    else {
        error = ""
    }

    document.getElementById('error_password').innerHTML = error;

}

const cpassword = document.getElementById("cpassword");
function cpasswordvalidation() {


    var syntax = /^[a-zA-Z0-9]*$/;
    var inputValue = cpassword.value;

    var error = ''
    if (cpassword.value.length == '') {

        error = "Confirm Password Required";

    }
    else if (!syntax.test(inputValue)) {
        error = "No special character allow"

    }
    else if (cpassword.value.length < 8 || cpassword.value.length >16) {
        error = "Password required minimum eight character & max 13 character";
    }
    
    else {
        error = ""
    }
    document.getElementById('cpassworderror').innerHTML = error;

}

function confirmPassword(){
    var error = ''
    if(cpassword.value != password.value)  
    {   
        error = "Password did not match"; 
    } else {  
        error = '';  
    }  
    document.getElementById('cpassworderror').innerHTML = error;
}
function myFunction() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }


function radiobutton() {
    var genders = document.getElementsByName("gender");
    if (!(genders[0].checked || genders[1].checked ))  {
        var msg = 'You must select your gender!';
        document.getElementById('msg').innerHTML = msg;
        return false;
    } 
}

function reset_msg() {
    document.getElementById('msg').innerHTML = '';
}


function checkbox() {
    var checkbox = document.getElementsByName("checkbox");
    if (!(checkbox[0].checked || checkbox[1].checked || checkbox[1].checked ))  {
        var msg = 'Required field';
        document.getElementById('msg1').innerHTML = msg;
        return false;
    } 
}
function reset_msg1() {
    document.getElementById('msg1').innerHTML = '';
}

function age(){
var d1 = document.getElementById("day").value;
var m1 = document.getElementById("month").value;
var y1 = document.getElementById("year").value;

    // const birth = new Date(y1, m1 - 1, d1)
    // const now = new Date()
    // const diff = new Date(now.valueOf() - birth.valueOf())
 
    // console.log(Math.abs(diff.getFullYear() - 1970));


var date = new Date();
var d2 = date.getDate();
var m2 =date.getMonth();
var y2 = date.getFullYear();
var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
if (d1 > d2) {
    d2 = d2 + month[m2 - 1];
    m2 = m2 - 1;
}
if (m1 > m2) {
    m2 = m2 + 12;
    y2 = y2 - 1;
}
var d = d2 - d1;
var m = m2 - m1;
var y = y2 - y1;
var input = document.getElementById('age_error');
    input.value = "Your Age is " + y + " Years ";

}

// function agevalidation(){
//     var age = document.getElementsByName("age_error");
//     var error = ''
//     if (age.value.length == '') {

//         error = "Required field";

//     }
//     else {
//         error = ""
//     }

//     document.getElementById('age').innerHTML = error;

// }

const about = document.getElementById("about");
function aboutvalidation() {


    var syntax = /^[a-zA-Z0-9]*$/;
    var inputValue = firstNameInput.value;

    var error = ''
    if (about.value.length == '') {

        error = "Required field";

    }
    else if (about.value.length < 2) {
        error = "Lenght Should Be < 2";
    }
    else {
        error = ""
    }

    document.getElementById('abouterror').innerHTML = error;

}

function hrefFunction(){
    windows.location.href = "https://www.example.com";
}


// document.getElementById("form").addEventListener("click", function(event){
//     event.preventDefault()
//   });



// function checkfirstname() {
//     var name = document.getElementById("firstname").value;
//     if (name === '') {
//         $('.error_firstname').html('Mandatory field');  
//     }
//     else{
//         $('.error_firstname').html('Mandatory field').hide();
//     } 
//   }



//   function checklastname() {
//     var lastname = document.getElementById("lastname").value;
//     if (lastname == undefined || lastname == '') {
//         $('.error_lastname').html('Mandatory field').show();
//     }
//     else{
//         $('.error_lastname').html('Mandatory field').hide();
//     }
    
//   }
 
  
//   function checkphone() {
//     var phone = document.getElementById("phone").value;
//     if (phone == undefined || phone == '' ) {
//         $('.error_phone').html('Mandatory field').show();
//     }
//     else{
//         $('.error_phone').html('Mandatory field').hide();
//     }
    
//   }
//   function checkoffice() {
//     var office = document.getElementById("office").value;
//     if (office == undefined || office == '') {
//         $('.error_office').html('Mandatory field').show();
//     }
//     else{
//         $('.error_office').html('Mandatory field').hide();
//     }
    
//   }
//   function checkemail() {
//     var email = document.getElementById("email").value;
//     if (email == undefined || email == '') {
//         $('.error_email').html('Mandatory field').show();
//     }
//     else{
//         $('.error_email').html('Mandatory field').hide();
//     }
    
//   }
//   function checkpassword() {
//     var password = document.getElementById("password").value;
//     if (password == undefined || password == '') {
//         $('.error_password').html('Mandatory field').show();
//     }
//     else{
//         $('.error_password').html('Mandatory field').hide();
//     }
    
//   }
//   function checkcpassword() {
//     var cpassword = document.getElementById("cpassword").value;
//     if (cpassword == undefined || cpassword == '') {
//         $('.error_cpassword').html('Mandatory field').show();
//     }
//     else{
//         $('.error_cpassword').html('Mandatory field').hide();
//     }
    
//   }
//   function checkdob(){
//     var dob = document.getElementById("dob").value;
//     if (dob == undefined || dob == '') {
//         $('.error_dob').html('Mandatory field').show();
//     }
//     else{
//         $('.error_dob').html('Mandatory field').hide();
//     }
    
//   }

// function isInputNumber(evt){
                
//     var ch = String.fromCharCode(evt.which);
    
//     if(!(/[0-9]/.test(ch))){
//         evt.preventDefault();
//     }
// }

// function validateEmail() 
// {
//     var email = document.getElementById('email').value;
//     var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//     if(!regex.test(email)){
//         $('.error_email').html('Please enter valid mail').show();
//     }
// }


// function validatePassword() 
// {
//     var password = document.getElementById('password').value;
//     var regex = /[a-zA-Z0-9]/;
//     if(!regex.test(password)){
//         $('.error_password').html('Please enter only alpha nurmeric').show();
//     }
// }
// function age(){

//     // var date = document.getElementById("dob").value;
//     // var month_diff = Date.now() - dob.getTime();  
//     // var age_dt = new Date(month_diff);    
//     // var year = age_dt.getUTCFullYear();  
//     // var age = Math.abs(year - 1970); 
//     // return document.getElementById("age").innerHTML =  
//     //          "Age is: " + age + " years. "; 
// }
// function passwordLength(){
// var password = document.getElementById("password").value;
// if(password.value.length >= 8) {
//     length.classList.remove("invalid");
//     length.classList.add("valid");
//   } else {
//     length.classList.remove("valid");
//     length.classList.add("invalid");
//   }
// }


// const paragraph = document.querySelector('p');

// function isFormValid() {
//     const inputContainers = form.querySelectorAll('.form_container_block');
//     let result = true;
//     inputContainers.forEach((container) => {
//         if (container.classList.contains('error')) {
//             result = false;
//         }
//     });
//     return result;
// }

// function validateName(usernameInput) {
//     //USERNAME
// // console.log(usernameInput);
//     if (usernameInput.value.trim() == '') {
//         setError(usernameInput, 'Required Field');
//     } else {
//         document.getElementById(this.usernameInput).textContent = "";
//         setSuccess(usernameInput);
//     }
// }  
//     function setError(element, errorMessage) {
//     const parent = element.parentElement;
//     console.log(parent.classList);
//     if (parent.classList.contains('success')) {
//         parent.classList.remove('success');
//     }
//     this.parent.classList.add('error');
//     this.paragraph.textContent = errorMessage;
// }

// function setSuccess(element) {
//     const parent = element.parentElement;
//     if (parent.classList.contains('error')) {
//         parent.classList.remove('error');
//     }
//     parent.classList.add('success');
// }

// function validateLastName(usernameInput) {
//     //USERNAME
//     if (usernameInput.value.trim() == '') {
//         setError(usernameInput, 'Required Field');
//         usernameInput.focus();
//     } else {
//         document.getElementById('error_p').textContent = "";
//         setSuccess(usernameInput);
//     }
// } 
// firstNameInput.addEventListener('blur', function () {

//     firstnamevalidation();

// })

