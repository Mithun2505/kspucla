$(function () {
    $("#formAuthentication").submit(function (event) {
        event.preventDefault();
        var data = {
            full_name: $("[name='full_name']").val(),
            college_type: $("[name='college_type']").val(),
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
            image_name: $("[name='image_name'").val(),
            image_name: $("[name='base64ConvertValue']").val(),
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
                alert("An error occurred: " + error);
                window.location.href = "http://www.google.com"; // Replace with your error URL
            },
        });
    });
});

function routeToPayment() {
    console.log('Function is working');
    window.location.href = "https://www.google.com";
}

$("#teachers-information").click(function (event) {
    event.preventDefault();
    var data = {
        full_name: $("[name='full_name']").val(),
        college_type: $("[name='college_type']").val(),
        kgid_hrms: $("[name='kgid_hrms']").val(),
        mode_of_recuritment_or_aided_date: $("[name='mode_of_recuritment_or_aided_date']").val(),
        subject: $("[name='subject']").val(),
        qualification: $("[name='qualification']").val(),
        date_of_birth: $("[name='date_of_birth']").val(),
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
        image_name: $("[name='image_name'").val(),
        image_name: $("[name='base64ConvertValue']").val(),
    };

    let filled = validateForm(); // Assuming validateForm is defined

    if (filled) {
        let url = ${ serverAddress }/register/success / + data["emp_contact"];
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data, "data triggered");
                alert("Continue to Make Payment ");
                const payLink = data["data"]["payment_link"];
                console.log(payLink);

                setTimeout(() => {
                    window.location.href = payLink;
                }, 0);
            })
            .catch((error) => console.log(error));
    }
});

function clearLog() {
    localStorage.removeItem('valid');
    window.location.reload();
}

$(function () {
    $('#formAdminLogin').submit(function (event) {
        event.preventDefault();
        var data = {
            email_id: $('#email_id').val(),
            password: $('#password').val()
        };

        $.ajax({
            method: 'POST',
            url: serverAddress + '/login',
            data: JSON.stringify(data),
            contentType: 'application/json',
            success: function (response) {
                localStorage.setItem('valid', response.password);
                alert('Login successful');
                window.location = 'dashboard.html';
            },
            error: function (xhr, status, error) {
                alert('An error occurred: ' + error);
            }
        });
    });
});

$(function () {
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
                alert("User Registered Successfully");
                window.location = 'auth-login-basic.html';
            },
            error: function (response) {
                response.responseJSON.message ? alert(response.responseJSON.message) : alert('Something went wrong...');
            }
        });
    });
});
