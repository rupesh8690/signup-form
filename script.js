const submitbtn=document.querySelector("#submitBtn");
const nameError=document.querySelector("#nameError");
const emailError=document.querySelector('#emailError');
const passwordError=document.querySelector('#passwordError');
const confpasswordError=document.querySelector('#confpasswordError');

submitbtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (validateName() && validateEmail() && validatePassword() && confirmPasswordValidate()) {
        alert("Form is submitted successfully");
        
        // Clear the input values
        document.querySelector("#name").value = "";
        document.querySelector("#email").value = "";
        document.querySelector("#password").value = "";
        document.querySelector("#confPass").value = "";
    }
});

function validateName()
{
    let name=document.querySelector('#name').value;
    if(name.length == 0)
    {
        nameError.innerHTML="Name is required";
        nameError.previousElementSibling.classList.add('fa-xmark');
        return false;

    }
    

    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML="Write full Name";
        nameError.previousElementSibling.classList.add('fa-xmark');
        return false;

    }
    nameError.innerHTML="";
    nameError.previousElementSibling.classList.add('fa-check');
    return true;
}

function validateEmail()
{
    let email=document.querySelector('#email').value;
    if(email.length == 0)
    {
        emailError.innerHTML="Email is required";
        emailError.previousElementSibling.classList.add('fa-xmark');
        return false;

    }

    if(!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){
        emailError.innerHTML="Enter valid email";
        emailError.previousElementSibling.classList.add('fa-xmark');
        return false;

    }
    emailError.innerHTML="";
    emailError.previousElementSibling.classList.add('fa-check');
    return true;
}

function validatePassword()
{
    let password=document.querySelector('#password').value;
    if(password.length == 0)
    {
        passwordError.innerHTML="password is required";
        passwordError.previousElementSibling.classList.add('fa-xmark');
        return false;

    }
   

    if(!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/)){
        passwordError.innerHTML="Password must include at least one lowercase letter, one uppercase letter, one digit, and one special character";
        passwordError.previousElementSibling.classList.add('fa-xmark');
        return false;

    }
    passwordError.innerHTML="";
    passwordError.previousElementSibling.classList.add('fa-check');
    return true;
}

function confirmPasswordValidate(){
    let confPassword=document.querySelector("#confPass").value;
    let password=document.querySelector('#password').value;

    if(confPassword.length == 0)
    {
        confpasswordError.innerHTML="Confirm password is required";
        confpasswordError.previousElementSibling.classList.add('fa-xmark');
        return false;

    }
    if(confPassword!=password)
    {
        confpasswordError.innerHTML="Password and confirm password do not matched!";
        confpasswordError.previousElementSibling.classList.add('fa-xmark');
        return false;

    }
     confpasswordError.innerHTML="";
     confpasswordError.previousElementSibling.classList.add('fa-check');
    return true;

}