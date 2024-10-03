// console.log('loaded')
function myf(e) {
    var c = ((e.which >= 65 && e.which < 91) || (e.which == 8))
    {
        document.getElementById("error").style.display = c ? "none" : "inline"
    }
    return c;
}
let isNumber = (evt) => {
    let iKeyCode = (evt.which) ? evt.which : evt.keyCode
    if (iKeyCode != 46 && iKeyCode > 31 && (iKeyCode < 48 || iKeyCode > 57))
        return false;

    return true;

}
//---------------------------------Validations -----------------------------------------------


function validateFormOnSubmit() {
    let nameInput = document.getElementById("employeeFirstName");
    let subjectInput = document.getElementById('employeeSubject');
    let joindateInput = document.getElementById("employeeDateofJoin");
    let birthdateInput = document.getElementById("employeeDateofBirth");
    let KgidInput = document.getElementById('textkg');
    let aidedDate = document.getElementById('aidedDate')
    let hrmsInput = document.getElementById("textHRMS1");
    let qualificationInput = document.getElementById('employeeQualification');
    let clgStreet = document.getElementById('clg_street_name');
    let clgTaluka = document.getElementById('employeeCollegeTaluk');
    let clgAddress = document.getElementById('employeeCollegeAddress');
    let empStreet = document.getElementById('streetName');
    let empTaluk = document.getElementById('employeeHomeTaluk');
    let zipcode = document.getElementById('zipCode');
    let collegecode = document.getElementById('collegeCode');
    let emphomezipCode = document.getElementById('emphomezipCode');
    let contact = document.getElementById('contactNumber');
    let altcontact = document.getElementById('altcontactNumber');
    let fee = document.getElementById('fee');

    console.log('triggered')

    // Maximum number of characters allowed

    //name field
    if (nameInput.value.trim() === "") {
        alert("Full Name can't be blank!");
        nameInput.classList.add("highlight");
        setTimeout(() => {
            nameInput.classList.remove("highlight");
        }, 3000);
        return false;
    }

    const nameRegex = /^[a-zA-Z\s]{4,30}$/;
    if (!nameRegex.test(nameInput.value)) {
        alert("Enter Valid Full Name.");
        nameInput.classList.add("highlight");
        setTimeout(() => {
            nameInput.classList.remove("highlight");
        }, 3000);
        return false;
    }


    if (joindateInput.value.trim() === "") {
        alert("Joining Date can't be blank.");
        joindateInput.classList.add("highlight");
        setTimeout(() => {
            joindateInput.classList.remove("highlight");
        }, 3000);
        return false;
    }


    if (birthdateInput.value.trim() === "") {
        alert("Birth Date can't be blank.");
        birthdateInput.classList.add("highlight");
        setTimeout(() => {
            birthdateInput.classList.remove("highlight");
        }, 3000);
        return false;
    }

    const maxLengthKgid = 10; // Maximum number of characters allowed for KgidInput
    // Minimum number of characters allowed for KgidInput

    // Check if KgidInput is empty
    if (KgidInput.value.trim() === "" && hrmsInput.value.trim() === "") {
        alert("KGID Number or HRMS Number can't be blank!");
        KgidInput.classList.add("highlight");
        setTimeout(() => {
            KgidInput.classList.remove("highlight");
        }, 3000);
        return false;
    }

    // Validate KGID input
    const kgidRegex = /^[a-zA-Z0-9]{1,10}$/;

    if (KgidInput.value.trim() !== "") {
        if (KgidInput.value.length > maxLengthKgid) {
            alert(`KGID number should not exceed ${maxLengthKgid} characters.`);
            KgidInput.classList.add("highlight");
            setTimeout(() => {
                KgidInput.classList.remove("highlight");
            }, 3000);
            return false;
        }

        if (!kgidRegex.test(KgidInput.value)) {
            alert("KGID number should be alphanumeric and between 1 to 10 characters.");
            KgidInput.classList.add("highlight");
            setTimeout(() => {
                KgidInput.classList.remove("highlight");
            }, 3000);
            return false;
        }
    }

    // Validate HRMS input

    const hrmsRegex = /^\d{4,10}$/;

    if (hrmsInput.value.trim() !== "" && aidedDate.value.trim() === "") {
        if (!hrmsRegex.test(hrmsInput.value)) {
            alert(` Enter valid HRMS Number and Aided Date.`);
            hrmsInput.classList.add("highlight");
            setTimeout(() => {
                hrmsInput.classList.remove("highlight");
            }, 3000);
            return false;
        }
    }





    // subject value

    // Check if subjectInput is empty


    if (subjectInput.value.trim() === "") {
        alert("Subject field can't be blank. Please mention the subject.");
        subjectInput.classList.add("highlight");
        setTimeout(() => {
            subjectInput.classList.remove("highlight");
        }, 3000);
        return false;
    }

    const subjectRegex = /^[a-zA-Z0-9\s,\/\-.]{4,20}$/;
    if (!subjectRegex.test(subjectInput.value)) {
        alert("Subject field contains invalid characters. ");
        subjectInput.classList.add("highlight");
        setTimeout(() => {
            subjectInput.classList.remove("highlight");
        }, 3000);
        return false;
    }


    // qualification 
    if (qualificationInput.value.trim() === '') {
        alert("Qualification field can't be blank. Please mention the qualification.");
        qualificationInput.classList.add("highlight");
        setTimeout(() => {
            qualificationInput.classList.remove("highlight");
        }, 3000);
        return false;
    }

    // Check if qualificationInput contains only allowed characters and is between 2 to 20 characters
    const qualificationRegex = /^[a-zA-Z0-9\s,\/\-.]{2,20}$/;
    if (!qualificationRegex.test(qualificationInput.value)) {
        alert("Qualification field contains invalid characters. ");
        qualificationInput.classList.add("highlight");
        setTimeout(() => {
            qualificationInput.classList.remove("highlight");
        }, 3000);
        return false;
    }




    // college street
    // Check if clgStreet is empty
    if (clgStreet.value.trim() === "") {
        alert("College Name can't be blank.");
        clgStreet.classList.add("highlight");
        setTimeout(() => {
            clgStreet.classList.remove("highlight");
        }, 3000);
        return false;
    }

    // Check if clgStreet contains only allowed characters and is between 4 to 40 characters
    const clgstreetRegex = /^[a-zA-Z0-9\s,\/\-.]{4,40}$/;
    if (!clgstreetRegex.test(clgStreet.value)) {
        alert("College Name contains invalid characters. ");
        clgStreet.classList.add("highlight");
        setTimeout(() => {
            clgStreet.classList.remove("highlight");
        }, 3000);
        return false;
    }


    // var statedropdown = document.getElementById("employeeHomeState");
    // var stateValue = statedropdown.value;

    // if (stateValue === "") {
    //   alert("Please select a College State.");
    //   statedropdown.classList.add("highlight");
    //   setTimeout(function() {
    //     statedropdown.classList.remove("highlight");
    //       }, 3000);
    //   return false;
    // }

    // var clgcitydropdown = document.getElementById("employeeHomeCity");
    // var clgcityValue = clgcitydropdown.value;

    // if (clgcityValue === "") {
    //   alert("Please select a College City.");
    //   clgcitydropdown.classList.add("highlight");
    //   setTimeout(function() {
    //     clgcitydropdown.classList.remove("highlight");
    //       }, 3000);
    //   return false;
    // }

    if (collegecode.value.trim() === "") {
        alert("College Code can't be blank.");
        collegecode.classList.add("highlight");
        setTimeout(() => {
            collegecode.classList.remove("highlight");
        }, 3000);
        return false;
    }

    // Check if collegecode contains only allowed characters and is between 3 to 10 characters
    const clgcodeRegex = /^[a-zA-Z0-9\-\.]{3,10}$/;
    if (!clgcodeRegex.test(collegecode.value)) {
        alert("Enter a valid College Code.");
        collegecode.classList.add("highlight");
        setTimeout(() => {
            collegecode.classList.remove("highlight");
        }, 3000);
        return false;
    }




    // Check if clgAddress is empty
    if (clgAddress.value.trim() === "") {
        alert("College Address can't be blank.");
        clgAddress.classList.add("highlight");
        setTimeout(() => {
            clgAddress.classList.remove("highlight");
        }, 3000);
        return false;
    }

    // Check if clgAddress contains only allowed characters and is between 4 to 100 characters
    const clgAddressRegex = /^[a-zA-Z0-9\s,\/\-.]{4,100}$/;
    if (!clgAddressRegex.test(clgAddress.value)) {
        alert("Enter a valid College Address. ");
        clgAddress.classList.add("highlight");
        setTimeout(() => {
            clgAddress.classList.remove("highlight");
        }, 3000);
        return false;
    }


    if (clgTaluka.value.trim() === "") {
        alert("College Taluk can't be blank.");
        clgTaluka.classList.add("highlight");
        setTimeout(() => {
            clgTaluka.classList.remove("highlight");
        }, 3000);
        return false;
    }

    // Check if clgTaluka contains only allowed characters and is between 4 to 15 characters
    const clgtalukRegex = /^[a-zA-Z\s]{4,15}$/;
    if (!clgtalukRegex.test(clgTaluka.value)) {
        alert("Enter Valid College Taluk");
        clgTaluka.classList.add("highlight");
        setTimeout(() => {
            clgTaluka.classList.remove("highlight");
        }, 3000);
        return false;
    }



    // zip code 
    if (zipcode.value.trim() === "") {
        alert("Zip Code Cant Be blank");
        zipcode.classList.add("highlight");
        setTimeout(function () {
            zipcode.classList.remove("highlight");
        }, 3000);
        return false;
    }
    const zipcodeRegex = /^\d{6}$/;
    if (!zipcodeRegex.test(zipcode.value)) {
        alert("ZipCode Contains  6 digits ");
        zipcode.classList.add("highlight");
        setTimeout(function () {
            zipcode.classList.remove("highlight");
        }, 3000);
        return false;
    }




    if (empStreet.value.trim() === "") {
        alert("Employee Residential Address   Cant Be blank");
        empStreet.classList.add("highlight");
        setTimeout(function () {
            empStreet.classList.remove("highlight");
        }, 3000);
        return false;
    }
    const empstreetRegex = /^[a-zA-Z0-9\s,\/\-.]{4,100}$/;
    if (!empstreetRegex.test(empStreet.value)) {
        alert("Enter Valid Employee Residential Address");
        empStreet.classList.add("highlight");
        setTimeout(function () {
            empStreet.classList.remove("highlight");
        }, 3000);
        return false;
    }
    var empstatedropdown = document.getElementById("employeeCommunicationState");
    var empstateValue = empstatedropdown.value;

    if (empstateValue === "") {
        alert("Please select a Employer Home State.");
        empstatedropdown.classList.add("highlight");
        setTimeout(function () {
            empstatedropdown.classList.remove("highlight");
        }, 3000);
        return false;
    }

    var empcitydropdown = document.getElementById("employeeCommunicationCity");
    var empcityValue = empcitydropdown.value;

    const maxLengthEmpCity = 50; // Maximum number of characters allowed for empcityValue

    // Check if empcityValue is empty
    if (empcityValue.trim() === "") {
        alert("Please select an Employer Home City.");
        empcitydropdown.classList.add("highlight");
        setTimeout(() => {
            empcitydropdown.classList.remove("highlight");
        }, 3000);
        return false;
    }

    // Check if empcityValue exceeds maximum length
    if (empcityValue.length > maxLengthEmpCity) {
        alert(`Employer Home City should not exceed ${maxLengthEmpCity} characters.`);
        empcitydropdown.classList.add("highlight");
        setTimeout(() => {
            empcitydropdown.classList.remove("highlight");
        }, 3000);
        return false;
    }

    const maxLengthEmpTaluk = 100; // Maximum number of characters allowed for empTaluk

    // Check if empTaluk is empty
    if (empTaluk.value.trim() === "") {
        alert("Employee Home Taluk can't be blank!");
        empTaluk.classList.add("highlight");
        setTimeout(() => {
            empTaluk.classList.remove("highlight");
        }, 3000);
        return false;
    }

    // Check if empTaluk contains only allowed characters
    const empTalukRegex = /^[a-zA-Z\s]{4,15}$/;
    if (!empTalukRegex.test(empTaluk.value)) {
        alert("Enter a valid Employee Residential Taluk.");
        empTaluk.classList.add("highlight");
        setTimeout(() => {
            empTaluk.classList.remove("highlight");
        }, 3000);
        return false;
    }



    // zip code 
    const maxLengthZipCode = 10; // Maximum number of digits allowed for emphomezipCode

    // Check if emphomezipCode is empty
    if (emphomezipCode.value.trim() === "") {
        alert("Employee Home Zip Code can't be blank.");
        emphomezipCode.classList.add("highlight");
        setTimeout(() => {
            emphomezipCode.classList.remove("highlight");
        }, 3000);
        return false;
    }

    // Check if emphomezipCode contains only digits and is within the allowed length
    const emphomezipCodeRegex = /^\d{6}$/;
    if (!emphomezipCodeRegex.test(emphomezipCode.value)) {
        alert("Enter Valid Employee Zip Code.");
        emphomezipCode.classList.add("highlight");
        setTimeout(() => {
            emphomezipCode.classList.remove("highlight");
        }, 3000);
        return false;
    }

    // Check if emphomezipCode exceeds maximum length

    // contact number
    const maxLengthContact = 10; // Maximum number of digits allowed for contact

    // Check if contact is empty
    if (contact.value.trim() === "") {
        alert("Employee Contact can't be blank!");
        contact.classList.add("highlight");
        setTimeout(() => {
            contact.classList.remove("highlight");
        }, 3000);
        return false;
    }

    // Check if contact contains only digits and is within the allowed length
    const contactRegex = /^[6-9][0-9]{9}$/;
    if (!contactRegex.test(contact.value)) {
        alert("Enter a valid contact number. It should start with a digit from 6 to 9 and contain exactly 10 digits.");
        contact.classList.add("highlight");
        setTimeout(() => {
            contact.classList.remove("highlight");
        }, 3000);
        return false;
    }

    // Check if contact exceeds maximum length
    if (contact.value.length > maxLengthContact) {
        alert(`Contact number should not exceed ${maxLengthContact} digits.`);
        contact.classList.add("highlight");
        setTimeout(() => {
            contact.classList.remove("highlight");
        }, 3000);
        return false;
    }



    const maxLengthAltContact = 10; // Maximum number of digits allowed for altcontact

    // Check if altcontact is empty
    if (altcontact.value.trim() === "") {
        alert("Employee Alternate Contact can't be blank!");
        altcontact.classList.add("highlight");
        setTimeout(() => {
            altcontact.classList.remove("highlight");
        }, 3000);
        return false;
    }

    // Check if altcontact contains only valid 10-digit numbers
    const altcontactRegex = /^[6-9][0-9]{9}$/;
    if (!altcontactRegex.test(altcontact.value)) {
        alert("Enter a valid alternate contact number. It should start with a digit from 6 to 9 and contain exactly 10 digits.");
        altcontact.classList.add("highlight");
        setTimeout(() => {
            altcontact.classList.remove("highlight");
        }, 3000);
        return false;
    }

    // Check if altcontact exceeds maximum length
    if (altcontact.value.length > maxLengthAltContact) {
        alert(`Alternate contact number should not exceed ${maxLengthAltContact} digits.`);
        altcontact.classList.add("highlight");
        setTimeout(() => {
            altcontact.classList.remove("highlight");
        }, 3000);
        return false;
    }


    var issuedateInput = document.getElementById("employeeDateofissue");
    var dateValue = issuedateInput.value;
    const maxLengthDate = 15; // Maximum number of characters allowed for issuedateInput

    // Check if issuedateInput is empty
    if (!dateValue || dateValue.trim() === "") {
        alert("Please select an Issue Date.");
        issuedateInput.classList.add("highlight");
        setTimeout(() => {
            issuedateInput.classList.remove("highlight");
        }, 3000);
        return false;
    }

    // Check if issuedateInput exceeds maximum length
    if (dateValue.length > maxLengthDate) {
        alert(`Issue Date should not exceed ${maxLengthDate} characters.`);
        issuedateInput.classList.add("highlight");
        setTimeout(() => {
            issuedateInput.classList.remove("highlight");
        }, 3000);
        return false;
    }


    // for fee
    const maxLengthFee = 10; // Maximum number of characters allowed for fee

    // Check if fee is empty
    if (fee.value.trim() === "") {
        alert("Please enter the Fees Amount.");
        fee.classList.add("highlight");
        setTimeout(() => {
            fee.classList.remove("highlight");
        }, 3000);
        return false;
    }

    // Check if fee exceeds maximum length
    if (fee.value.length > maxLengthFee) {
        alert(`Fees Amount should not exceed ${maxLengthFee} characters.`);
        fee.classList.add("highlight");
        setTimeout(() => {
            fee.classList.remove("highlight");
        }, 3000);
        return false;
    }

    const feeRegex = /^\d{3}$/;
    if (!feeRegex.test(fee.value)) {
        alert("fee value should be in digits and upto 3 decimals");
        fee.classList.add("highlight");
        setTimeout(function () {
            fee.classList.remove("highlight");
        }, 3000);
        return false;
    }
    var transactdateInput = document.getElementById("employeeDateoftransact");
    var dateValue = transactdateInput.value;

    const maxLengthTransactDate = 10; // Maximum number of characters allowed for transactdateInput

    // Check if transactdateInput is empty
    if (!dateValue || dateValue.trim() === "") {
        alert("Please select a Fee Transaction Date.");
        transactdateInput.classList.add("highlight");
        setTimeout(() => {
            transactdateInput.classList.remove("highlight");
        }, 3000);
        return false;
    }

    // Check if transactdateInput exceeds maximum length
    if (dateValue.length > maxLengthTransactDate) {
        alert(`Fee Transaction Date should not exceed ${maxLengthTransactDate} characters.`);
        transactdateInput.classList.add("highlight");
        setTimeout(() => {
            transactdateInput.classList.remove("highlight");
        }, 3000);
        return false;
    }

    var dropdown = document.getElementById("bloodgroup");
    var selectedbloodValue = dropdown.value;

    const maxLengthBloodGroup = 10; // Maximum number of characters allowed for selectedbloodValue

    // Check if selectedbloodValue is empty
    if (selectedbloodValue.trim() === "") {
        alert("Please select a Blood Group.");
        dropdown.classList.add("highlight");
        setTimeout(() => {
            dropdown.classList.remove("highlight");
        }, 3000);
        return false;
    }

    // Check if selectedbloodValue exceeds maximum length
    if (selectedbloodValue.length > maxLengthBloodGroup) {
        alert(`Blood Group should not exceed ${maxLengthBloodGroup} characters.`);
        dropdown.classList.add("highlight");
        setTimeout(() => {
            dropdown.classList.remove("highlight");
        }, 3000);
        return false;
    }

    // If all validations pass
    return true;

}