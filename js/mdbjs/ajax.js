$(function () {
  $("#formAuthentication").submit(function (event) {
    event.preventDefault();

    var data = {
      full_name: $("[name='full_name']").val(),
      college_type: $("[name='college_type']").val(),
      modeOfRecruitmentOrAidedDate: $("[name='mode_of_recuritment_or_aided_date']").val()
        ? $("[name='mode_of_recuritment_or_aided_date']").val()
        : "",

      kgid_hrms: $("[name='kgid_hrms']").val(),
      mode_of_recuritment_or_aided_date: $("[name='mode_of_recuritment_or_aided_date']").val(),
      subject: $("[name='subject']").val(),
      qualification: $("[name='qualification']").val(),
      date_of_birth: $("[name='date_of_birth']").val(),
      clg_name: $("[name='clg_name']").val(),
      clg_street_name: $("[name='clg_street_name']").val(),
      clg_state: $("[name='clg_state']").val(),
      clg_city: $("[name='clg_city']").val(),
      clg_taluk: $("[name='clg_taluk']").val(),
      clg_country: $("[name='clg_country']").val(),
      clg_zip_code: $("[name='clg_zip_code']").val(),
      clg_code: $("[name='clg_code']").val(),
      emp_street_name: $("[name='emp_street_name']").val(),
      emp_state: $("[name='emp_state']").val(),
      emp_city: $("[name='emp_city']").val(),
      emp_taluk: $("[name='emp_taluk']").val(),
      emp_country: $("[name='emp_country']").val(),
      emp_zip_code: $("[name='emp_zip_code']").val(),
      emp_contact: $("[name='emp_contact']").val(),
      emp_alt_contact: $("[name='emp_alt_contact']").val(),
      issue_date: $("[name='issue_date']").val(),
      joining_date: $("[name='joining_date']").val(),
      fee: $("[name='fee']").val(),
      transact_date: $("[name='transact_date']").val(),
      reciept_num: $("[name='reciept_num']").val(),
      blood_grp: $("[name='blood_grp']").val(),
      image_name: $("[name='image_name']").val(),
      image_base64: $("[name='base64ConvertValue']").val()
    };
    console.log(data);
    $.ajax({
      method: "POST",
      url: "http://127.0.0.1:5000/register/success/" + data["emp_contact"],
      data: JSON.stringify(data),
      contentType: "application/json",
      success: function (response) {
        console.log(response);
        alert("Data saved successfully");
        window.location.href = "http://www.google.com"; // Replace with your success URL
      },
      error: function (xhr, status, error) {
        if (xhr.status === 400) {
          alert("Bad Request (400): Please check your input.");
        } else if (xhr.status === 404) {
          alert("Not Found (404): The requested resource could not be found.");
        } else if (xhr.status === 500) {
          alert("Internal Server Error (500): An error occurred on the server.");
        }
        window.location.href = "http://www.google.com"; // Replace with your error URL
      }
    });
  });
});

function routeToPayment() {
  console.log('Function is working');
  window.location.href = "https://www.google.com";
}

$("#teachers-information").click(function (event) {
  event.preventDefault();

  const kgid_hrms_kgid = $("#textkg").val().trim();
  const kgid_hrms_hrms = $("#textHRMS1").val().trim();

  // if (!kgid_hrms_kgid && !kgid_hrms_hrms) {
  //   alert("KGID Number or HRMS Number can't be blank!");
  //   return;
  // }



  var data = {
    full_name: $("[name='full_name']").val(),
    college_type: $("[name='college_type']").val(),
    mode_of_recuritment_or_aided_date: $("[name='mode_of_recuritment_or_aided_date']").val()
      ? $("[name='mode_of_recuritment_or_aided_date']").val()
      : "",
    subject: $("[name='subject']").val(),
    qualification: $("[name='qualification']").val(),
    date_of_birth: $("[name='date_of_birth']").val(),
    clg_name: $("[name='clg_name']").val(),
    clg_street_name: $("[name='clg_street_name']").val(),
    clg_state: "Karnataka",
    clg_city: $("[name='clg_city']").val(),
    clg_taluk: $("[name='clg_taluk']").val(),
    clg_country: $("[name='clg_country']").val(),
    clg_zip_code: $("[name='clg_zip_code']").val(),
    clg_code: $("[name='clg_code']").val(),
    emp_street_name: $("[name='emp_street_name']").val(),
    emp_state: $("[name='emp_state']").val(),
    emp_city: $("[name='emp_city']").val(),
    emp_taluk: $("[name='emp_taluk']").val(),
    emp_country: $("[name='emp_country']").val(),
    emp_zip_code: $("[name='emp_zip_code']").val(),
    emp_contact: $("[name='emp_contact']").val(),
    emp_alt_contact: $("[name='emp_alt_contact']").val(),
    issue_date: $("[name='issue_date']").val(),
    joining_date: $("[name='joining_date']").val(),
    fee: $("[name='fee']").val(),
    transact_date: $("[name='transact_date']").val(),
    reciept_num: $("[name='reciept_num']").val(),
    blood_grp: $("[name='blood_grp']").val(),
    image_name: $("[name='image_name']").val(),
    image_base64: $("[name='base64ConvertValue']").val()
  };

  // Only add kgid_hrms to the data object if either field is filled
  if (kgid_hrms_kgid) {
    data.kgid_hrms = kgid_hrms_kgid;
  } else if (kgid_hrms_hrms) {
    data.kgid_hrms = kgid_hrms_hrms;
  }
  let filled = validateFormOnSubmit(); // Assuming validateForm is defined

  if (filled) {
    let url = `${serverAddress}/register/success/` + data["emp_contact"];
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          if (response.status === 400) {
            throw new Error("Bad Request (400): Please check your input.");
          } else if (response.status === 404) {
            throw new Error("Not Found (404): The requested resource could not be found.");
          } else if (response.status === 500) {
            throw new Error("Internal Server Error (500): An error occurred on the server.");
          } else {
            throw new Error("Image Size should be less than 1MB.");
          }
        }
        return response.json();
      })
      .then((data) => {
        console.log(data, "data triggered");
        if (data.message === 'failure') {
          alert('Registration failed. Please try again.');
          window.location.href = 'failure.html';
        } else {
          alert('Continue to Make Payment');
          const payLink = data.data.payment_link;
          console.log(payLink);
          setTimeout(() => {
            window.location.href = payLink;
          }, 0);
        }
      })
      .catch((error) => {
        alert(error.message);
        console.log(error);
      });
  }
});

function clearLog() {
  localStorage.removeItem('valid');
  window.location.reload();
}

//------------------------------ Admin Login API Call ------------------------------------------

$(function () {
  // Handle form submission
  $('#formAdminLogin').submit(function (event) {
    event.preventDefault();
    var data = {
      email_id: $('#email_id').val(),
      password: $('#password').val()
    };

    $.ajax({
      method: 'POST',
      url: serverAddress + '/login',
      headers: {
        'Authorization': 'Bearer ',// Example of authorization header
        'Content-Type': 'application/json'
        // Add more headers as needed
      },
      data: JSON.stringify(data),
      contentType: 'application/json',
      success: function (response) {
        localStorage.setItem('valid', response.password);
        alert('Login successful');
        // Redirect to admin dashboard
        window.location = 'dashboard.html';
      },
      error: function (xhr, status, error) {
        alert('An error occurred: ' + error);
      }
    });
  });
});


//------------------------------ Admin Registration API Call ------------------------------------------
$(function () {
  // Handle form submission
  $('#formAdminRegister').submit(function (event) {
    event.preventDefault();
    var data = {
      full_name: $('#username').val(),
      email_id: $('#email').val(),
      password: $('#password').val(),

    };

    $.ajax({
      method: 'PUT',
      url: serverAddress + '/login',

      data: JSON.stringify(data),
      contentType: 'application/json',
      success: function (response) {

        alert("User Registered Successfully")
        // Redirect to admin login
        window.location = 'auth-login-basic.html'
        event.preventDefault();
      },
      error: function (response) {
        response.responseJSON.message ? alert(response.responseJSON.message) : alert('Something went Wrong...')
      }
    });
  });
});
