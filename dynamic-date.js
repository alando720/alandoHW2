/*
Program: Patient registration form 
Author: Alan Do
Date: 2025-02-14
Date last updated: 2/20/2026
Ver: 1.0
Description: Homework JavaScript
*/

//code to set current date and time
const d = new Date();
let text = d.toLocaleDateString();
document.getElementById("today").innerHTML = text;

//dob validation code
function validateDOB() {
  let dob=document.getElementById("dob");
  let date = new Date(dob.value);
  let maxDate = new Date().setFullYear(maxDate.getFullYear() - 120);

  if (date > new Date()) {
      document.getElementById("dob-error").innerHTML = "Date cannot be a future date.";
      dob.value="";
      return false;
  } else if (date < new Date(maxDate)) {
    document.getElementById("dob-error").innerHTML = "Date cannot be over 120 years.";
    dob.value="";
    return false;
  } else {
    document.getElementById("dob-error").innerHTML = "";
    return true;
  }
}

//ssn validation code
function validateSSN() {
    const ssn = document.getElementById("ssn").value;
  
    //regular expression for ssn pattern
    const ssnR = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;
  
    if (!ssnR.test(ssn)) {
        document.getElementById("ssn-error").innerHTML = "Please enter a valid SSN.";
        return false;
    } else {
        document.getElementById("ssn-error").innerHTML = "";
        return true;
    }
}
//address 1 validation code
function validateAddress1() {
    var addr1 = document.getElementById("address1").value;
    console.log(addr1);
    console.log(addr1.length);


    if (addr1.length < 4) {
        document.getElementById("address1-error").innerHTML = "Please enter an address.";
        return false;
    } else {
        document.getElementById("address1-error").innerHTML = "";
        return true;
    }
}  

//zip code validation code
function validatezip() {
    const zipInput = document.getElementById("zip");
    let zip = zipInput.value.replace(/[^\d-]/g, "") //takes out any thing thats not a number or dash

  if (!zip) {
      document.getElementById("zipcode-error").innerHTML = "Zip code cannot be blank.";
      return false;
  } 
  if (zip.length > 5){
      zip = zip.slice(0,5); //Won't let zip be larger than 5
  }

  zipInput.value = zip;
  document.getElementById("zipcode-error").innerHTML = "";
  return true;
}
//email validation code
function validateEmail() {
    email = document.getElementById("email").value;
    var emailR = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //regular expression pattern for email

    if (email =="") {
        document.getElementById("email-error").innerHTML = "Email cannot be empty.";
        return false;
    }  else if (!email.match(emailR)) {
          document.getElementById("email-error").innerHTML = "Enter a valid email.";
          return false;
    }  else {
          document.getElementById("email-error").innerHTML = "";
          return true;
    }
}

// phone number validation code 

function validatePhoneNum() {
      const phoneInput = document.getElementById("phone");
      const phonenum = phoneInput.value.replace(/\D/g, ""); // takes away all characters that aren't numbers

      if (phonenum.length !== 10) {
          document.getElementById("phonenum-error").innerHTML = "Phone number cannot be blank.";
          return false;
      }
      const formattedPhone = phonenum.slice(0,3) + "-" + phonenum.slice(3,6) + "-" + phonenum.slice(6);
      phoneInput.value = formattedPhone;
      document.getElementById("phonenum-error").innerHTML = ""
      return true;
}

//user name validation code
function validateUID() {
    uid = document.getElementById("UID").value;
    uid = uid.toLowerCase();
    document.getElementById("UID").value = uid;

    if (uid.length == 0) {
        document.getElementById("UID").innerHTML = "User ID cannot be blank.";
        return false;
    }
    //checks if username starts with a number
    if (!isNaN(uid.charAt(0))) {
        document.getElementById("uid-error").innerHTML = "Username cannot start with a number.";
        return false;
    }
    //verifies that username is only letters, numbers, underscores, or periods.
    let regex = /^[a-zA-Z0-9_.]+$/;
    if (!regex.test(UID)) {
        document.getElementById("uid-error").innerHTML = "User ID can only contain letters, numbers, underscores, and periods.";
        return false;
    }  else if (uid.length < 5) {
          document.getElementById("uid-error").innerHTML = "User ID has to be at least 5 characters.;
          return false;
    }  else if (uid.length > 30) {
          document.getElementById("uid-error").innerHTML = "User ID cannot be longer than 30 characters.
          return false;
    }  else {
          document.getElementById("uid-error").innerHTML = "";
          return true;
    }
}













