const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const aadhar = document.getElementById('aadhar');
const PAN = document.getElementById('PAN');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');
const error = document.querySelectorAll("#errmsg")

//add event

form.addEventListener('submit', (event) => {

    event.preventDefault();
    validate();
})

//more email validate
const isEmail = (emailVal) => {
    var atSymbol = emailVal.indexOf("@");
    if(atSymbol < 1) return false;
    var dot = emailVal.lastIndexOf('.');
    if(dot <= atSymbol + 3) return false;
    if(dot === emailVal.length - 1) return false;
    return true;
}

//define the validate function

const validate = () => {

    console.log("hii")
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const phoneVal = phone.value.trim();
    const aadharVal = aadhar.value.trim();
    const PANVal = PAN.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();

    //validate username
    if (usernameVal === "") {
        setErrorMsg(username, 'username cannot be blank');
    } else if (usernameVal.length <= 2) {
        setErrorMsg(username, 'username min 3char');
    } else {
        setSuccessMsg(username, "");
    }

     //validate email
     if (emailVal === "") {
        setErrorMsg(email, 'email cannot be blank');
    } else if (!isEmail(emailVal)) {
        setErrorMsg(email, 'Not a valid email');
    } else {
        setSuccessMsg(email,"");
    }

     //validate phone
     if (phoneVal === "") {
        setErrorMsg(phone, 'phone cannot be blank');
    } else if (phoneVal.length != 10) {
        setErrorMsg(phone, 'Not a valid phone number');
    } else {
        setSuccessMsg(phone);
    }

    //validate aadhar
    if (aadharVal === "") {
        setErrorMsg(aadhar, 'aadhar number cannot be blank');
    } else if (aadharVal.length <= 5) {
        setErrorMsg(aadhar, 'aadhar min 12 digit');
    } else {
        setSuccessMsg(aadhar);
    }

    //validate PAN
    if (PANVal === "") {
        setErrorMsg(PAN, 'PAN cannot be blank');
    } else if (PANVal.length <= 5) {
        setErrorMsg(PAN, 'min 10 digit');
    } else {
        setSuccessMsg(PAN);
    }

    var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    // console.log(re.test(passwordVal), 89)
    

    // validate password

    if (passwordVal === "") {
        setErrorMsg(password, 'password cannot be null');
    } else if (passwordVal.length <= 5) {
        setErrorMsg(password, 'Password min 6 char');
    }else if(!re.test(passwordVal)){
        setErrorMsg(password, 'use atleast one special char');
    }
    else {
        setSuccessMsg(password);
    }

    //validate cpassword
    if (cpasswordVal === "") {
        setErrorMsg(cpassword, 'confirm password again');
    } else if (passwordVal != cpasswordVal) {
        setErrorMsg(cpassword, 'Password doesnot match');
    } else {
        setSuccessMsg(cpassword);
    }
}

    function setErrorMsg(input, errormsgs){
        const formControl = input.parentElement;
       // console.log(input, errormsgs)
       const small = formControl.querySelector('p');
        formControl.className = "form-control error";  
        small.innerText = errormsgs;
    }

    function setSuccessMsg(input ) {
        const formControl = input.parentElement;
        const small = formControl.querySelector('p');
        formControl.className = "form-control success";  
        // const small = formControl.querySelector('p');
        // console.log(small)
        small.innerText = "";

    }


