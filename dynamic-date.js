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
  dob=document.getELementByID("dob");
  let date = new Date(dob.value);
  letmaxDate = new Date().setFullYear(new Date()-120);

  if (date > new Date()) {
      document.getElementByID("dob-error").innerHTML = "Date cannot be a future date."
      dob.value="";
      return false;
  } else if (date < new Date(maxDate)) {
    document.getElementByID("dob-error").innerHTML = "Date cannot be over 120 years.
    dob.value="";
    return false;
  } else {
    document.getElementByID("dob-error").innerHTML = "";
    return true;
  }
}

//ssn validation code
function validateSSN() {
    const ssn = document.getElementByID("ssn").value;
  
    //regular expression for ssn pattern
    const ssnR = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;
  
    if (!ssnR.test(ssn)) {
        document.getElementByID("ssn-error").innerHTML = "Please enter a valid SSN.";
        return false;
    } else {
        document.getElementByID("ssn-error").innerHTML = "";
        return true;
    }
}

function validateAddress1() {
    var addr1 = document.getElementByID("address1").value;
    console.log(addr1);
    console.log(addr1.length);


    if (addr1.length < 4) {
        document.getElementByID("address1-error").innerHTML = "Please enter an address.";
        return false;
    } else {
        document.getElementByID("address1-error").innerHTML = "";
        return true;
    }
}  
















