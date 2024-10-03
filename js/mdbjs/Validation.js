
document.addEventListener("DOMContentLoaded", (event) => {
  validateForm();
});

function myf(e) {
  var c = ((e.which >= 65 && e.which < 91) || (e.which == 8))
  {
    document.getElementById("error").style.display = c ? "none" : "inline"
  }
  return c;
}
// let isNumber = (evt) => {
//   let iKeyCode = (evt.which) ? evt.which : evt.keyCode
//   if (iKeyCode != 46 && iKeyCode > 31 && (iKeyCode < 48 || iKeyCode > 57))
//     return false;

//   return true;

// }
// Get the input elements and error message elements
// Get references to input elements and error message containers


function validateForm() {


  let nameInput = document.getElementById("employeeFirstName");
  const nameError = document.getElementById("nameError");

  let dateInput = document.getElementById("employeeDateofJoin");
  const dateError = document.getElementById("dateError");

  let birthdateInput = document.getElementById("employeeDateofBirth");
  const birthdateError = document.getElementById("birthdateError");

  const KgidInput = document.getElementById('textkg');
  const kgidError = document.getElementById("kgidError");



  const hrmsInput = document.getElementById("textHRMS1");
  const hrmsError = document.getElementById("hrmsError");

  const subjectInput = document.getElementById("employeeSubject");
  const subjectError = document.getElementById("subjectError");

  const qualificationInput = document.getElementById("employeeQualification");
  const qualificationError = document.getElementById("qualificationError");

  const clgStreet = document.getElementById('clg_street_name');
  const clgStreetError = document.getElementById("clgStreetError");

  const collegecode = document.getElementById('collegeCode');
  const collegecodeError = document.getElementById("collegeCodeError");

  const clgAddress = document.getElementById('employeeCollegeAddress');
  const clgAddressError = document.getElementById("collegeAddressError");

  const empstatedropdown = document.getElementById("employeeCommunicationState");
  const stateError = document.getElementById("stateError");

  const clgTaluka = document.getElementById('employeeCollegeTaluk');
  const clgTalukaError = document.getElementById("collegeTalukError");

  const zipcode = document.getElementById('zipCode');
  const zipcodeError = document.getElementById("clgzipCodeError");


  const empStreet = document.getElementById('streetName');
  const empStreetError = document.getElementById("streetNameError");



  const empTaluk = document.getElementById('employeeHomeTaluk');
  const empTalukError = document.getElementById("empTalukError");





  const emphomezipCode = document.getElementById('emphomezipCode');
  const emphomezipCodeError = document.getElementById("emphomezipCodeError");

  const contact = document.getElementById('contactNumber');
  const contactNumberError = document.getElementById("contactNumberError");

  const altcontact = document.getElementById('altcontactNumber');
  const altcontactError = document.getElementById("altContactError");



  const issuedateInput = document.getElementById("employeeDateofissue");
  const issuedateError = document.getElementById("issuedateError");

  const transactdateInput = document.getElementById("employeeDateoftransact");
  const transactdateError = document.getElementById("transactDateError");

  const bloodgroupDropdown = document.getElementById("bloodgroup");
  const bloodgroupError = document.getElementById("bloodgroupError");

  // Helper function to show error
  function showError(errorDiv, message) {
    errorDiv.textContent = message;
  }

  // Helper function to hide error
  function hideError(errorDiv) {
    errorDiv.textContent = "";
  }

  // Validate name input
  function validateName() {
    const nameValue = nameInput.value.trim();
    const nameRegex = /^[a-zA-Z\s]{4,30}$/;

    if (nameValue === "") {
      showError(nameError, `Full Name can't be blank!`);
      return false;
    }

    if (nameValue.length < 4) {
      showError(nameError, `Full Name must be at least 4 characters long.`);
      return false;
    }

    if (!nameRegex.test(nameValue)) {
      showError(nameError, `Enter a valid Full Name.`);
      return false;
    }

    hideError(nameError);
    return true;
  }

  // Validate date input
  function validateDate() {
    const dateValue = dateInput.value.trim();

    if (dateValue === "") {
      showError(dateError, `Joining Date can't be blank.`);
      return false;
    }

    hideError(dateError);
    return true;
  }

  // Validate birthdate input
  function validateBirthdate() {
    const birthdateValue = birthdateInput.value.trim();

    if (birthdateValue === "") {
      showError(birthdateError, `Birth Date can't be blank.`);
      return false;
    }

    hideError(birthdateError);
    return true;
  }

  // Validate KGID input
  const maxLengthKgid = 10;

  // Function to show error messages
  function showError(element, message) {
    element.textContent = message;
  }

  // Function to hide error messages
  function hideError(element) {
    element.textContent = "";
  }

  // Function to validate KGID and HRMS inputs
  function validateInputs() {
    const kgidValue = KgidInput.value.trim();
    const hrmsValue = hrmsInput.value.trim();
    const aidedDateValue = aidedDate.value.trim();

    // Check if both KGID and HRMS inputs are empty
    if (kgidValue === "" && hrmsValue === "") {
      showError(kgidError, "KGID Number or HRMS Number can't be blank!");
      KgidInput.classList.add("highlight");
      setTimeout(() => {
        KgidInput.classList.remove("highlight");
      }, 3000);
      return false;
    }

    // Validate KGID input
    const kgidRegex = /^[a-zA-Z0-9]{1,10}$/;

    if (kgidValue !== "") {
      if (kgidValue.length > maxLengthKgid) {
        showError(kgidError, `KGID number should not exceed ${maxLengthKgid} characters.`);
        KgidInput.classList.add("highlight");
        setTimeout(() => {
          KgidInput.classList.remove("highlight");
        }, 3000);
        return false;
      }

      if (!kgidRegex.test(kgidValue)) {
        showError(kgidError, "KGID number should be alphanumeric and between 1 to 10 characters.");
        KgidInput.classList.add("highlight");
        setTimeout(() => {
          KgidInput.classList.remove("highlight");
        }, 3000);
        return false;
      }
    }

    // Validate HRMS input
    const hrmsRegex = /^\d{4,10}$/;

    if (hrmsValue !== "" && aidedDateValue === "") {
      if (!hrmsRegex.test(hrmsValue)) {
        showError(hrmsError, "Enter valid HRMS Number and Aided Date.");
        hrmsInput.classList.add("highlight");
        setTimeout(() => {
          hrmsInput.classList.remove("highlight");
        }, 3000);
        return false;
      }
    }

    // Hide error messages if inputs are valid
    hideError(kgidError);
    hideError(hrmsError);
    return true;
  }

  function validateSubject() {
    const subjectValue = subjectInput.value.trim();
    const subjectRegex = /^[a-zA-Z0-9\s,\/\-.]{4,20}$/;

    // Check if the subject field is empty
    if (subjectValue === "") {
      showError(subjectError, "Subject field can't be blank. Please mention the subject.");
      subjectInput.classList.add("highlight");
      setTimeout(() => {
        subjectInput.classList.remove("highlight");
      }, 3000);
      return false;
    }

    // Check if the subject field contains invalid characters
    if (!subjectRegex.test(subjectValue)) {
      showError(subjectError, "Subject must be at least 4 characters long.");
      subjectInput.classList.add("highlight");
      setTimeout(() => {
        subjectInput.classList.remove("highlight");
      }, 3000);
      return false;
    }

    // Hide error message if input is valid
    hideError(subjectError);
    return true;
  }

  // Attach blur event listener to the subject input field
  subjectInput.addEventListener("blur", validateSubject);

  // Validate qualification input
  function showError(element, message) {
    element.textContent = message;
  }

  // Function to hide error messages
  function hideError(element) {
    element.textContent = "";
  }

  // Function to validate qualification input
  function validateQualification() {
    const qualificationValue = qualificationInput.value.trim();

    // Check if qualificationInput is empty
    if (qualificationValue === '') {
      showError(qualificationError, "Qualification field can't be blank.");
      qualificationInput.classList.add("highlight");
      setTimeout(() => {
        qualificationInput.classList.remove("highlight");
      }, 3000);
      return false;
    }

    // Check if qualificationInput contains only allowed characters and is between 2 to 20 characters
    const qualificationRegex = /^[a-zA-Z0-9\s,\/\-.]{2,20}$/;
    if (!qualificationRegex.test(qualificationValue)) {
      showError(qualificationError, "Qualification Name must be at least 2 characters long.");
      qualificationInput.classList.add("highlight");
      setTimeout(() => {
        qualificationInput.classList.remove("highlight");
      }, 3000);
      return false;
    }

    // Hide error message if input is valid
    hideError(qualificationError);
    return true;
  }

  // Validate college street input
  function showError(element, message) {
    element.textContent = message;
  }

  // Function to hide error messages
  function hideError(element) {
    element.textContent = "";
  }

  // Function to validate college street input
  function validateClgStreet() {
    const clgStreetValue = clgStreet.value.trim();

    // Check if college street input is empty
    if (clgStreetValue === "") {
      showError(clgStreetError, "College Name can't be blank.");
      clgStreet.classList.add("highlight");
      setTimeout(() => {
        clgStreet.classList.remove("highlight");
      }, 3000);
      return false;
    }

    // Check if clgStreet contains only allowed characters and is between 4 to 40 characters
    const clgStreetRegex = /^[a-zA-Z0-9\s,\/\-.]{4,40}$/;
    if (!clgStreetRegex.test(clgStreetValue)) {
      showError(clgStreetError, "College Name must be at least 4 characters long. ");
      clgStreet.classList.add("highlight");
      setTimeout(() => {
        clgStreet.classList.remove("highlight");
      }, 3000);
      return false;
    }

    // Hide error message if input is valid
    hideError(clgStreetError);
    return true;
  }

  // college code

  function showError(element, message) {
    element.textContent = message;
  }

  // Function to hide error messages
  function hideError(element) {
    element.textContent = "";
  }

  // Function to validate college code input
  function validateCollegecode() {
    const collegecodeValue = collegecode.value.trim();

    // Check if college code input is empty
    if (collegecodeValue === "") {
      showError(collegecodeError, "College Code can't be blank.");
      collegecode.classList.add("highlight");
      setTimeout(() => {
        collegecode.classList.remove("highlight");
      }, 3000);
      return false;
    }

    // Check if college code contains only allowed characters and is between 3 to 10 characters
    const clgcodeRegex = /^[a-zA-Z0-9\-\.]{3,10}$/;
    if (!clgcodeRegex.test(collegecodeValue)) {
      showError(collegecodeError, "College Code must be at least 3 characters long");
      collegecode.classList.add("highlight");
      setTimeout(() => {
        collegecode.classList.remove("highlight");
      }, 3000);
      return false;
    }

    // Hide error message if input is valid
    hideError(collegecodeError);
    return true;
  }

  // Function to show error messages
  function showError(element, message) {
    element.textContent = message;
  }

  // Function to hide error messages
  function hideError(element) {
    element.textContent = "";
  }

  // Function to validate college address input
  function validateClgAddress() {
    const clgAddressValue = clgAddress.value.trim();

    // Check if college address input is empty
    if (clgAddressValue === "") {
      showError(clgAddressError, "College Address can't be blank.");
      clgAddress.classList.add("highlight");
      setTimeout(() => {
        clgAddress.classList.remove("highlight");
      }, 3000);
      return false;
    }

    // Check if college address contains only allowed characters and is between 4 to 100 characters
    const clgAddressRegex = /^[a-zA-Z0-9\s,\/\-.]{4,150}$/;
    if (!clgAddressRegex.test(clgAddressValue)) {
      showError(clgAddressError, "College Address must be at least 4 characters long.");
      clgAddress.classList.add("highlight");
      setTimeout(() => {
        clgAddress.classList.remove("highlight");
      }, 3000);
      return false;
    }

    // Hide error message if input is valid
    hideError(clgAddressError);
    return true;
  }

  // Validate college taluka input
  function showError(element, message) {
    element.textContent = message;
  }

  // Function to hide error messages
  function hideError(element) {
    element.textContent = "";
  }

  // Function to validate college taluka input
  function validateClgTaluka() {
    const clgTalukaValue = clgTaluka.value.trim();

    // Check if college taluka input is empty
    if (clgTalukaValue === "") {
      showError(clgTalukaError, "College Taluk can't be blank.");
      clgTaluka.classList.add("highlight");
      setTimeout(() => {
        clgTaluka.classList.remove("highlight");
      }, 3000);
      return false;
    }

    // Check if college taluka contains only allowed characters and is between 4 to 15 characters
    const clgTalukaRegex = /^[a-zA-Z\s]{4,60}$/;
    if (!clgTalukaRegex.test(clgTalukaValue)) {
      showError(clgTalukaError, "College Taluk must contain only alphabetic characters and  must be at least 4 characters long");
      clgTaluka.classList.add("highlight");
      setTimeout(() => {
        clgTaluka.classList.remove("highlight");
      }, 3000);
      return false;
    }

    // Hide error message if input is valid
    hideError(clgTalukaError);
    return true;
  }

  // Attach blur event listener to the college taluka input field
  function showError(element, message) {
    element.textContent = message;
  }

  // Function to hide error messages
  function hideError(element) {
    element.textContent = "";
  }

  // Function to validate zip code input
  function validateZipcode() {
    const zipcodeValue = zipcode.value.trim();

    // Check if zip code input is empty
    if (zipcodeValue === "") {
      showError(zipcodeError, "Zipcode can't be blank.");
      zipcode.classList.add("highlight");
      setTimeout(function () {
        zipcode.classList.remove("highlight");
      }, 3000);
      return false;
    }

    // Check if zip code contains exactly 6 digits
    const zipcodeRegex = /^\d{6}$/;
    if (!zipcodeRegex.test(zipcodeValue)) {
      showError(zipcodeError, "Zipcode must contain exactly 6 digits.");
      zipcode.classList.add("highlight");
      setTimeout(function () {
        zipcode.classList.remove("highlight");
      }, 3000);
      return false;
    }

    // Hide error message if input is valid
    hideError(zipcodeError);
    return true;
  }
  // Validate college address input



  // Function to show error messages
  function showError(element, message) {
    element.textContent = message;
  }

  // Function to hide error messages
  function hideError(element) {
    element.textContent = "";
  }

  // Function to validate state dropdown
  function validateStateDropdown() {
    const empstateValue = empstatedropdown.value.trim();

    // Check if state dropdown is empty
    if (empstateValue === "Select state") {
      showError(stateError, "Please select an Employer Home State.");
      empstatedropdown.classList.add("highlight");
      setTimeout(function () {
        empstatedropdown.classList.remove("highlight");
      }, 3000);
      return false;
    }

    // Hide error message if input is valid
    hideError(stateError);
    return true;
  }


  function showError(element, message) {
    element.textContent = message;
  }

  // Function to hide error messages
  function hideError(element) {
    element.textContent = "";
  }

  // Function to validate employee taluk
  function validateEmpTaluk() {
    const empTalukValue = empTaluk.value.trim();

    // Check if empTaluk is empty
    if (empTalukValue === "") {
      showError(empTalukError, "Employee Taluk can't be blank.");
      empTaluk.classList.add("highlight");
      setTimeout(() => {
        empTaluk.classList.remove("highlight");
      }, 3000);
      return false;
    }

    // Check if empTaluk contains only allowed characters
    const empTalukRegex = /^[a-zA-Z\s]{4,60}$/;
    if (!empTalukRegex.test(empTalukValue)) {
      showError(empTalukError, "Employee Taluk must be at least 4 Alphabetic characters long.");
      empTaluk.classList.add("highlight");
      setTimeout(() => {
        empTaluk.classList.remove("highlight");
      }, 3000);
      return false;
    }

    // Hide error message if input is valid
    hideError(empTalukError);
    return true;
  }
  // Validate employee street input
  const empStreetRegex = /^[a-zA-Z0-9\s,\/\-.]{4,150}$/; // Adjust this regex based on the exact requirements

  function validateEmpStreet() {
    const empStreetValue = empStreet.value.trim();

    // Check if employee street is empty or doesn't match the regex pattern
    if (empStreetValue === '') {
      showError(empStreetError, "Employee Street can't be blank.");
      empStreet.classList.add("highlight");
      setTimeout(() => {
        empStreet.classList.remove("highlight");
      }, 3000);
      return false;
    } else if (!empStreetRegex.test(empStreetValue)) {
      showError(empStreetError, "Employee Street must be between 4 and 150 characters long and can include letters, numbers, spaces, commas, slashes, dots, and hyphens.");
      empStreet.classList.add("highlight");
      setTimeout(() => {
        empStreet.classList.remove("highlight");
      }, 3000);
      return false;
    }

    hideError(empStreetError);
    return true;
  }

  function showError(element, message) {
    element.textContent = message;
    element.style.display = 'block'; // Ensure error message is visible
  }

  function hideError(element) {
    element.textContent = '';
    element.style.display = 'none'; // Hide error message
  }
  // Function to validate employee home zipcode
  function validateEmpHomeZipcode() {
    const emphomezipCodeValue = emphomezipCode.value.trim();

    // Check if emphomezipCode is empty
    if (emphomezipCodeValue === "") {
      showError(emphomezipCodeError, "Employee Home Zipcode can't be blank.");
      emphomezipCode.classList.add("highlight");
      setTimeout(() => {
        emphomezipCode.classList.remove("highlight");
      }, 3000);
      return false;
    }

    // Check if emphomezipCode contains only digits and is within the allowed length
    const emphomezipCodeRegex = /^\d{6}$/;
    if (!emphomezipCodeRegex.test(emphomezipCodeValue)) {
      showError(emphomezipCodeError, "Employee Zipcode must contain exactly 6 digits.");
      emphomezipCode.classList.add("highlight");
      setTimeout(() => {
        emphomezipCode.classList.remove("highlight");
      }, 3000);
      return false;
    }

    // Hide error message if input is valid
    hideError(emphomezipCodeError);
    return true;
  }

  // Validate contact number input
  // Function to show error messages
  function showError(element, message) {
    element.textContent = message;
  }

  // Function to hide error messages
  function hideError(element) {
    element.textContent = "";
  }

  // Function to validate contact number


  // Function to validate alternate contact number


  // Function to validate alternate contact number

  contactNumber.addEventListener('input', validateContact);

  function showError(element, message) {
    element.textContent = message;
    element.style.display = 'block';
  }

  function hideError(element) {
    element.textContent = '';
    element.style.display = 'none';
  }

  function validateContact() {
    const contactValue = contactNumber.value.trim();

    // Check if contact number is empty
    if (contactValue === '') {
      showError(contactNumberError, "Contact number should not be blank.");
      contactNumber.classList.add("highlight");
      setTimeout(() => {
        contactNumber.classList.remove("highlight");
      }, 3000);
      return;
    }

    // Check if contact number has exactly 10 digits
    if (contactValue.length !== 10) {
      showError(contactNumberError, "Contact number must be exactly 10 digits.");
      contactNumber.classList.add("highlight");
      setTimeout(() => {
        contactNumber.classList.remove("highlight");
      }, 3000);
      return;
    }

    // Check if contact number contains only valid 10-digit numbers
    const contactRegex = /^[6-9][0-9]{9}$/;
    if (!contactRegex.test(contactValue)) {
      showError(contactNumberError, "Enter a valid contact number. It should start with a digit from 6 to 9 and contain exactly 10 digits.");
      contactNumber.classList.add("highlight");
      setTimeout(() => {
        contactNumber.classList.remove("highlight");
      }, 3000);
      return;
    }

    // Show loader while making API call
    loader.style.display = 'inline-block';
    fetch(`${serverAddress}/register/success/${contactValue}`)
      .then(response => response.json())
      .then(data => {
        loader.style.display = 'none';
        if (data.message === "Could not find the MEMBER") {
          hideError(contactNumberError);
        } else {
          showError(contactNumberError, "This contact number is already registered.");
        }
      })
      .catch(error => {
        loader.style.display = 'none';
        showError(contactNumberError, "An error occurred while verifying the contact number.");
        console.error('Error:', error);
      });
  }

  function validateAltContact() {
    const altcontactValue = altcontact.value.trim();

    // Only validate if altcontact is not empty
    if (altcontactValue !== "") {
      // Check if altcontact contains only valid 10-digit numbers
      const altcontactRegex = /^[6-9][0-9]{9}$/;
      if (!altcontactRegex.test(altcontactValue)) {
        showError(altcontactError, "Enter a valid alternate contact number. It should start with a digit from 6 to 9 and contain exactly 10 digits.");
        altcontact.classList.add("highlight");
        setTimeout(() => {
          altcontact.classList.remove("highlight");
        }, 3000);
        return false;
      }
    }

    // Hide error message if input is valid or blank
    hideError(altcontactError);
    return true;
  }

  function validateIssueDate() {
    const issueDateValue = issuedateInput.value.trim();

    if (issueDateValue === "") {
      showError(issuedateError, "Issue Date can't be blank.");
      issuedateInput.classList.add("highlight");
      setTimeout(() => {
        issuedateInput.classList.remove("highlight");
      }, 3000);
      return false;
    }

    hideError(issuedateError);
    return true;
  }


  // Validate issue date input


  // Validate transaction date input
  function validateTransactDate() {
    const transactDateValue = transactdateInput.value.trim();

    if (transactDateValue === "") {
      showError(transactdateError, "Transaction Date can't be blank.");
      transactdateInput.classList.add("highlight");
      setTimeout(() => {
        transactdateInput.classList.remove("highlight");
      }, 3000);
      return false;
    }

    hideError(transactdateError);
    return true;
  }


  // Validate blood group dropdown
  function validateBloodGroup() {
    const bloodgroupValue = bloodgroupDropdown.value;

    if (bloodgroupValue === "") {
      showError(bloodgroupError, `Blood Group can't be blank.`);
      return false;
    }

    hideError(bloodgroupError);
    return true;
  }

  // Attach blur event listeners to all input fields for validation
  nameInput.addEventListener("blur", validateName);
  dateInput.addEventListener("blur", validateDate);
  birthdateInput.addEventListener("blur", validateBirthdate);
  KgidInput.addEventListener("blur", validateInputs);
  hrmsInput.addEventListener("blur", validateInputs);
  aidedDate.addEventListener("blur", validateInputs);
  qualificationInput.addEventListener("blur", validateQualification);
  clgStreet.addEventListener("blur", validateClgStreet);
  collegecode.addEventListener("blur", validateCollegecode);
  clgTaluka.addEventListener("blur", validateClgTaluka);
  clgAddress.addEventListener("blur", validateClgAddress);
  empStreet.addEventListener("blur", validateEmpStreet);
  empTaluk.addEventListener("blur", validateEmpTaluk);
  zipcode.addEventListener("blur", validateZipcode);


  emphomezipCode.addEventListener("blur", validateEmpHomeZipcode);
  contact.addEventListener("blur", validateContact);
  altcontact.addEventListener("blur", validateAltContact);

  issuedateInput.addEventListener("blur", validateIssueDate);
  transactdateInput.addEventListener("blur", validateTransactDate);
  bloodgroupDropdown.addEventListener("blur", validateBloodGroup);




}

validateForm();

