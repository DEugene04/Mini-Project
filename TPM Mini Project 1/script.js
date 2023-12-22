function validateName (){
  let inputName = document.querySelector("#first-name");
  let valueName = inputName.value;
  let errorName = document.querySelector("#error-name");

  if (valueName == ""){
    errorName.innerHTML = "Name cannot be empty!"
    inputName.style.border = "1px solid red";
    return false;
  } else {
    errorName.innerHTML = ""
    inputName.style.border = "1px solid black";
    return true;
  }

  console.log(valueName)
}

function validateEmail (){
  let inputEmail = document.querySelector("#email");
  let valueEmail = inputEmail.value;
  let errorEmail = document.querySelector("#error-email");

  if (valueEmail == ""){
    errorEmail.innerHTML = "Email cannot be empty!"
    inputEmail.style.border = "1px solid red";
    return false;
  } else if (!valueEmail.includes("@")){
    errorEmail.innerHTML = "Email must contain '@'!"
    inputEmail.style.border = "1px solid red";
    return false;
  }else {
    errorEmail.innerHTML = ""
    inputEmail.style.border = "1px solid black";
    return true;
  }

  console.log(valueEmail)
}

function validatePhoneNumber (){
  let inputNumber = document.querySelector("#number");
  let valueNumber = inputNumber.value;
  let errorNumber = document.querySelector("#error-phone-number");

  if (valueNumber == ""){
    errorNumber.innerHTML = "Phone Number cannot be empty!"
    inputEmail.style.border = "1px solid red";
    return false;
  } else if (valueNumber.length < 8) {
    errorNumber.innerHTML = "Phone Number must be more than 8 digit!"
    inputEmail.style.border = "1px solid red";
    return false;
  } else if (valueNumber.length > 14) {
    errorNumber.innerHTML = "Phone Number must not be more than 14 digit!"
    inputEmail.style.border = "1px solid red";
    return false;
  }
    else {
    errorNumber.innerHTML = ""
    inputNumber.style.border = "1px solid black";
    return true;
  }

  console.log(valueEmail)
}

let registerBtn = document.querySelector("#send-btn");
registerBtn.addEventListener("click", function(e){
  e.preventDefault(); // stop from submission

  let isNameValid = validateName();
  let isEmailValid = validateEmail();
  let isPhoneNumberValid = validatePhoneNumber();

  if (isNameValid && isEmailValid && isPhoneNumberValid){
    let registerForm = document.querySelector("#register-form");
    registerForm.submit(); // cara submit sebuah form
  }
});