function validateFrom() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const remember = document.getElementById("remember").checked;

    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");
    const check_status = document.getElementById("check-status");

    emailError.textContent = "";
    passwordError.textContent = "";
    check_status.textContent = "";

    let isValid = true;

    if (email === "" || !email.include("@")){
        emailError.textContent = "Please enter a valid Email!!!";
        isValid = false;
    }

    if (password === "" || password.lenght < 8){
        passwordError.textContent = "Please enter a password with at least 8 characters";
        isValid = false;
    }

    if (remember)check_status.textContent = "Checked";
    else check_status.textContent = "Unchecked";
    
    return isValid;
}