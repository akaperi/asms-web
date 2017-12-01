/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function () {
    $('.previous').click(function () {

        if ($('#menu0').is(":visible")) {
            current_fs = $('#menu0');

        } else if ($('#menu1').is(":visible")) {

            current_fs = $('#menu1');
            next_fs = $('#menu0');

            $('#menu1').removeClass("in fade active");
            $('#menu0').addClass("in fade active");
        } else if ($('#menu2').is(":visible")) {

            current_fs = $('#menu2');
            next_fs = $('#menu1');

            $('#menu2').removeClass("in fade active");
            $('#menu1').addClass("in fade active");
        } else if ($('#menu3').is(":visible")) {

            current_fs = $('#menu3');
            next_fs = $('#menu2');

            $('#menu3').removeClass("in fade active");
            $('#menu2').addClass("in fade active");
        } else if ($('#menu4').is(":visible")) {

            current_fs = $('#menu4');
            next_fs = $('#menu3');
            $('#menu4').removeClass("in fade active");
            $('#menu3').addClass("in fade active");
        } else if ($('#menu5').is(":visible")) {
            current_fs = $('#menu5');
            next_fs = $('#menu4');
            $('#menu5').removeClass("in fade active");
            $('#menu4').addClass("in fade active");
        }
        next_fs.show();
        current_fs.hide();
    });
    $(".next").click(function () {

        var admission_number = $('#admission_number').val();
        var admission_date = $('#admission_date').val();
        var student_first_name = $('#student_first_name').val();
        var First_Name = $('#First_Name').val();
        var student_middle_name = $('#student_middle_name').val();
        var student_last_name = $('#student_last_name').val();
        var classes = $('#classes').val();
        var sections = $('#sections').val();
        var date_of_birth = $('#date_of_birth').val();
        var age_in_year = $('#age_in_year').val();
        var place_in_birth = $('#place_in_birth').val();
        var nationalities = $('#nationalities').val();
        var religions = $('#religions').val();
        var castes = $('#castes').val();
        var sub_castes = $('#sub_castes').val();
        var mother_tongue = $('#mother_tongue').val();
        var identification_mark = $('#identification_mark').val();
        var email_address = $('#email_address').val();
        var emergency_contact = $('#emergency_contact').val();
        var upload_student_photo = $('#upload_student_photo').val();
        var specials = /[*|\":<>[\]{}`\\()';@&$#]/;
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        var allowedDomains = ['gmail.com', 'yahoo.com', 'yahoo.in', 'yahoo.co.in', 'hotmail.com', 'rediff.com', 'aol.com', 'live.com', 'rocketmail.com'];
        var pattern = /^\d{10}$/;
        var date_val = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
        var valid = true;
        var error;
        if (admission_number == '') {
            $('#admission_number').addClass('red');
            error = "Please specify your Admission Number.\n";
            $('#admission_number').closest(".form-control").next().text(error).show();
            valid = false;
        } else if (specials.test(admission_number)) {
            $('#admission_number').addClass('red');
            error = 'Special characters are not allowed';
            $('#admission_number').closest(".form-control").next().text(error).show();
            valid = false;
        } else if ((admission_number.length > 100)) {
            error = "This field have wrong length.\n";
            $('#admission_number').addClass('red');
            $('#admission_number').closest(".form-control").next().text(error).show();
            valid = false;
        } else {
            $('#admission_number').closest(".form-control").next().hide();
            $('#admission_number').removeClass('red');
        }
        if (admission_date == '') {
            error = "Please fill the Date";
            $('#admission_date').addClass('red');
            $('#admission_date').closest(".form-control").next().text(error).show();
            valid = false;
        } else {
            $('#admission_date').closest(".form-control").next().hide();
            $('#admission_date').removeClass('red');
        }
        if (student_first_name == '') {
            $('#student_first_name').addClass('red');
            error = "Please specify your First name.\n";
            $('#student_first_name').closest(".form-control").next().text(error).show();
            valid = false;
        } else if (specials.test(student_first_name)) {
            $('#student_first_name').addClass('red');
            error = 'Special characters are not allowed';
            $('#student_first_name').closest(".form-control").next().text(error).show();
            valid = false;
        } else if (!isNaN(student_first_name)) {
            error = 'Numbers are not allowed';
            $('#student_first_name').addClass('red');
            $('#student_first_name').closest(".form-control").next().text(error).show();
            valid = false;
        } else if ((student_first_name.length > 100)) {
            error = "This field have wrong length.\n";
            $('#student_first_name').addClass('red');
            $('#student_first_name').closest(".form-control").next().text(error).show();
            valid = false;
        } else {
            $('#student_first_name').closest(".form-control").next().hide();
            $('#student_first_name').removeClass('red');
        }
        if (student_last_name == '') {
            $('#student_last_name').addClass('red');
            error = "Please specify your First name.\n";
            $('#student_last_name').closest(".form-control").next().text(error).show();
            valid = false;
        } else if (specials.test(student_last_name)) {
            $('#student_last_name').addClass('red');
            error = 'Special characters are not allowed';
            $('#student_last_name').closest(".form-control").next().text(error).show();
            valid = false;
        } else if (!isNaN(student_last_name)) {
            error = 'Numbers are not allowed';
            $('#student_last_name').addClass('red');
            $('#student_last_name').closest(".form-control").next().text(error).show();
            valid = false;
        } else if ((student_last_name.length > 100)) {
            error = "This field have wrong length.\n";
            $('#student_last_name').addClass('red');
            $('#student_last_name').closest(".form-control").next().text(error).show();
            valid = false;
        } else {
            $('#student_last_name').closest(".form-control").next().hide();
            $('#student_last_name').removeClass('red');
        }
        if (classes == 0) {
            $('#classes').addClass('red');
            error = "Please fill this field.\n";
            $('#classes').closest(".form-control").next().text(error).show();
            valid = false;
        } else {
            $('#classes').removeClass('red');
            $('#classes').closest(".form-control").next().text(error).hide();
        }
        if (sections == 0) {
            $('#sections').addClass('red');
            error = "Please fill this field.\n";
            $('#sections').closest(".form-control").next().text(error).show();
            valid = false;
        } else {
            $('#sections').removeClass('red');
            $('#sections').closest(".form-control").next().text(error).hide();
        }
        if (date_of_birth == '') {
            error = "Please fill the Date";
            $('#date_of_birth').addClass('red');
            $('#date_of_birth').closest(".form-control").next().text(error).show();
            valid = false;
        } else {
            $('#date_of_birth').closest(".form-control").next().hide();
            $('#date_of_birth').removeClass('red');
        }
        var gender = $('[name="radio"]').val();
        if ($('[name="radio"]:checked').length > 1 || $('[name="radio"]:checked').length == 0) {
            error = "Please fill the Date";
            $('.gender_msg').text(error).show();
        } else {
            $('.gender_msg').text(error).hide();
        }
        if (age_in_year == '') {
            error = "Please fill the Date";
            $('#age_in_year').addClass('red');
            $('#age_in_year').closest(".form-control").next().text(error).show();
            valid = false;
        } else {
            $('#age_in_year').closest(".form-control").next().hide();
            $('#age_in_year').removeClass('red');
        }
        if (place_in_birth == '') {
            $('#place_in_birth').addClass('red');
            error = "Please specify your Admission Number.\n";
            $('#place_in_birth').closest(".form-control").next().text(error).show();
            valid = false;
        } else if (specials.test(place_in_birth)) {
            $('#place_in_birth').addClass('red');
            error = 'Special characters are not allowed';
            $('#place_in_birth').closest(".form-control").next().text(error).show();
            valid = false;
        } else if ((place_in_birth.length > 100)) {
            error = "This field have wrong length.\n";
            $('#place_in_birth').addClass('red');
            $('#place_in_birth').closest(".form-control").next().text(error).show();
            valid = false;
        } else {
            $('#place_in_birth').closest(".form-control").next().hide();
            $('#place_in_birth').removeClass('red');
        }
        if (nationalities == 0) {
            $('#nationalities').addClass('red');
            error = "Please fill this field.\n";
            $('#nationalities').closest(".form-control").next().text(error).show();
            valid = false;
        } else {
            $('#nationalities').removeClass('red');
            $('#nationalities').closest(".form-control").next().text(error).hide();
        }
        if (religions == 0) {
            $('#religions').addClass('red');
            error = "Please fill this field.\n";
            $('#religions').closest(".form-control").next().text(error).show();
            valid = false;
        } else {
            $('#religions').removeClass('red');
            $('#religions').closest(".form-control").next().text(error).hide();
        }
        if (castes == 0) {
            $('#castes').addClass('red');
            error = "Please fill this field.\n";
            $('#castes').closest(".form-control").next().text(error).show();
            valid = false;
        } else {
            $('#castes').removeClass('red');
            $('#castes').closest(".form-control").next().text(error).hide();
        }
        if (sub_castes == 0) {
            $('#sub_castes').addClass('red');
            error = "Please fill this field.\n";
            $('#sub_castes').closest(".form-control").next().text(error).show();
            valid = false;
        } else {
            $('#sub_castes').removeClass('red');
            $('#sub_castes').closest(".form-control").next().text(error).hide();
        }
        if (email_address == '') {
            error = "Please fill the email\n";
            $("#email_address").addClass('red');
            $("#email_address").closest(".form-control").next().text(error).show();
            valid = false;
        } else if (regex.test(email_address) == false) {
            error = "Please Enter a Valid Email Id.\n";
            $("#email_address").addClass('red');
            $("#email_address").closest(".form-control").next().text(error).show();
            valid = false;
        } else {
            $("#email_address").closest(".form-control").next().text(error).hide();
        }
        if (emergency_contact == '') {
            error = "Please fill the contact number\n";
            $("#emergency_contact").addClass('red');
            $("#emergency_contact").closest(".form-control").next().text(error).show();
            valid = false;
        } else if (pattern.test(emergency_contact) == false) {
            error = "Please specify a valid contact number.\n";
            $("#emergency_contact").addClass('red');
            $("#emergency_contact").closest(".form-control").next().text(error).show();
            valid = false;
        } else {
            $("#emergency_contact").closest(".form-control").next().hide();
            $('#emergency_contact').removeClass('red');
        }
        var input = document.getElementById('upload_student_photo');
        var file = input.files[0];
        var ext = $('#upload_student_photo').val().split('.').pop().toLowerCase();
        if (upload_student_photo == '' || upload_student_photo == null) {
            var error = "Please select a resume for upload.\n";
            $('#upload_student_photo').closest(".form-control").next().text(error).show();
            valid = false;
        } else if ($.inArray(ext, ['jpg', 'jpeg', 'png', 'gif']) == -1) {
            error = 'Invalid file type, Please select a valid file.';
            $('#upload_student_photo').closest(".form-control").next().text(error).show();
            valid = false;
        } else if (file.size > 150000) {
            error = 'Maximum file size is 500kb.';
            $('#upload_student_photo').closest(".form-control").next().text(error).show();
            valid = false;
        } else {
            $('#upload_student_photo').closest(".form-control").next().text(error).hide();
        }
        if (valid == true) {
            if ($('#menu0').is(":visible")) {
                current_fs = $('#menu0');
                next_fs = $('#menu1');
            } else if ($('#menu1').is(":visible")) {
                current_fs = $('#menu1');
                next_fs = $('#menu2');
            }
            $('#menu0').removeClass("in fade active");
            $('#menu1').addClass("in fade active");
            next_fs.show();
            current_fs.hide();
            return valid;
        }
    })
})
$(document).ready(function () {
    $(".next1").click(function () {
        var student_addressline_one = $('#student_addressline_one').val();
        var student_addressline_two = $('#student_addressline_two').val();
        var country = $('#country').val();
        var state = $('#state').val();
        var district = $('#district').val();
        var location = $('#location').val();
        var pincode = $('#pincode').val();
        var student_addressline_one_cor = $('#student_addressline_one_cor').val();
        var student_addressline_two_cor = $('#student_addressline_two_cor').val();
        var country_cor = $('#country_cor').val();
        var state_cor = $('#state_cor').val();
        var district_cor = $('#district_cor').val();
        var district_cor = $('#district_cor').val();
        var pincode_cor = $('#pincode_cor').val();
        var specials = /[*|\":<>[\]{}`\\()';@&$#]/;
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        var allowedDomains = ['gmail.com', 'yahoo.com', 'yahoo.in', 'yahoo.co.in', 'hotmail.com', 'rediff.com', 'aol.com', 'live.com', 'rocketmail.com'];
        var pattern = /^\d{10}$/;
        var date_val = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
        var valid = true;
        var error;
        if (student_addressline_one == '') {
            $('#student_addressline_one').addClass('red');
            error = "Please specify your First name.\n";
            $('#student_addressline_one').closest(".form-control").next().text(error).show();
            valid = false;
        } else if ((student_addressline_one.length > 100)) {
            error = "This field have wrong length.\n";
            $('#student_addressline_one').addClass('red');
            $('#student_addressline_one').closest(".form-control").next().text(error).show();
            valid = false;
        } else {
            $('#student_addressline_one').closest(".form-control").next().hide();
            $('#student_addressline_one').removeClass('red');
        }
        if (student_addressline_two == '') {
            $('#student_addressline_two').addClass('red');
            error = "Please specify your First name.\n";
            $('#student_addressline_two').closest(".form-control").next().text(error).show();
            valid = false;
        } else if ((student_addressline_two.length > 100)) {
            error = "This field have wrong length.\n";
            $('#student_addressline_two').addClass('red');
            $('#student_addressline_two').closest(".form-control").next().text(error).show();
            valid = false;
        } else {
            $('#student_addressline_two').closest(".form-control").next().hide();
            $('#student_addressline_two').removeClass('red');
        }
        if (country == 0) {
            $('#country').addClass('red');
            error = "Please fill this field.\n";
            $('#country').closest(".form-control").next().text(error).show();
            valid = false;
        } else {
            $('#country').removeClass('red');
            $('#country').closest(".form-control").next().text(error).hide();
        }
        if (state == 0) {
            $('#state').addClass('red');
            error = "Please fill this field.\n";
            $('#state').closest(".form-control").next().text(error).show();
            valid = false;
        } else {
            $('#state').removeClass('red');
            $('#state').closest(".form-control").next().text(error).hide();
        }
        if (district == 0) {
            $('#district').addClass('red');
            error = "Please fill this field.\n";
            $('#district').closest(".form-control").next().text(error).show();
            valid = false;
        } else {
            $('#district').removeClass('red');
            $('#district').closest(".form-control").next().text(error).hide();
        }
        if (location == 0) {
            $('#location').addClass('red');
            error = "Please fill this field.\n";
            $('#location').closest(".form-control").next().text(error).show();
            valid = false;
        } else {
            $('#location').removeClass('red');
            $('#location').closest(".form-control").next().text(error).hide();
        }
        if (pincode == "") {
            $('#pincode').addClass('red');
            error = "Please fill this field.\n";
            $('#pincode').closest(".form-control").next().text(error).show();
            valid = false;
        } else {
            $('#pincode').removeClass('red');
            $('#pincode').closest(".form-control").next().text(error).hide();
        }
        if (student_addressline_one_cor == '') {
            $('#student_addressline_one_cor').addClass('red');
            error = "Please specify your First name.\n";
            $('#student_addressline_one_cor').closest(".form-control").next().text(error).show();
            valid = false;
        } else if ((student_addressline_one_cor.length > 100)) {
            error = "This field have wrong length.\n";
            $('#student_addressline_one_cor').addClass('red');
            $('#student_addressline_one_cor').closest(".form-control").next().text(error).show();
            valid = false;
        } else {
            $('#student_addressline_one_cor').closest(".form-control").next().hide();
            $('#student_addressline_one_cor').removeClass('red');
        }
        if (student_addressline_two_cor == '') {
            $('#student_addressline_two_cor_cor').addClass('red');
            error = "Please specify your First name.\n";
            $('#student_addressline_two_cor').closest(".form-control").next().text(error).show();
            valid = false;
        } else if ((student_addressline_two_cor.length > 100)) {
            error = "This field have wrong length.\n";
            $('#student_addressline_two_cor').addClass('red');
            $('#student_addressline_two_cor').closest(".form-control").next().text(error).show();
            valid = false;
        } else {
            $('#student_addressline_two_cor').closest(".form-control").next().hide();
            $('#student_addressline_two_cor').removeClass('red');
        }
        if (country == 0) {
            $('#country_cor').addClass('red');
            error = "Please fill this field.\n";
            $('#country_cor').closest(".form-control").next().text(error).show();
            valid = false;
        } else {
            $('#country_cor').removeClass('red');
            $('#country_cor').closest(".form-control").next().text(error).hide();
        }
        if (state_cor == 0) {
            $('#state_cor').addClass('red');
            error = "Please fill this field.\n";
            $('#state_cor').closest(".form-control").next().text(error).show();
            valid = false;
        } else {
            $('#state_cor').removeClass('red');
            $('#state_cor').closest(".form-control").next().text(error).hide();
        }
        if (district_cor == 0) {
            $('#district_cor').addClass('red');
            error = "Please fill this field.\n";
            $('#district_cor').closest(".form-control").next().text(error).show();
            valid = false;
        } else {
            $('#district_cor').removeClass('red');
            $('#district_cor').closest(".form-control").next().text(error).hide();
        }
        if (location_cor == 0) {
            $('#location_cor').addClass('red');
            error = "Please fill this field.\n";
            $('#location_cor').closest(".form-control").next().text(error).show();
            valid = false;
        } else {
            $('#location_cor').removeClass('red');
            $('#location_cor').closest(".form-control").next().text(error).hide();
        }
        if (pincode_cor == "") {
            $('#pincode_cor').addClass('red');
            error = "Please fill this field.\n";
            $('#pincode_cor').closest(".form-control").next().text(error).show();
            valid = false;
        } else {
            $('#pincode_cor').removeClass('red');
            $('#pincode_cor').closest(".form-control").next().text(error).hide();
        }
        if (valid == true) {
            if ($('#menu1').is(":visible")) {
                current_fs = $('#menu1');
                next_fs = $('#menu2');
            } else if ($('#menu2').is(":visible")) {
                current_fs = $('#menu2');
                next_fs = $('#menu3');
            }
            $('#menu1').removeClass("in fade active");
            $('#menu2').addClass("in fade active");
            next_fs.show();
            current_fs.hide();
            return valid;
        }
    })
})
$(document).ready(function () {
    $(".next2").click(function () {
        var father_first_name = $('#father_first_name').val();
        var father_middle_name = $('#father_middle_name').val();
        var father_last_name = $('#father_last_name').val();
        var father_quali = $('#father_quali').val();
        var father_occup = $('#father_occup').val();
        var father_con_num = $('#father_con_num').val();
        var mother_first_name = $('#mother_first_name').val();
        var mother_middle_name = $('#mother_middle_name').val();
        var mother_last_name = $('#mother_last_name').val();
        var mother_quali = $('#mother_quali').val();
        var mother_occup = $('#mother_occup').val();
        var mother_con_num = $('#mother_con_num').val();
        var pincode_cor = $('#pincode_cor').val();
        var specials = /[*|\":<>[\]{}`\\()';@&$#]/;
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        var allowedDomains = ['gmail.com', 'yahoo.com', 'yahoo.in', 'yahoo.co.in', 'hotmail.com', 'rediff.com', 'aol.com', 'live.com', 'rocketmail.com'];
        var pattern = /^\d{10}$/;
        var date_val = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
        var valid = true;
        var error;
        if (father_first_name == '') {
            $('#father_first_name').addClass('red');
            error = "Please specify your First name.\n";
            $('#father_first_name').closest(".form-control").next().text(error).show();
            valid = false;
        } else if ((father_first_name.length > 100)) {
            error = "This field have wrong length.\n";
            $('#father_first_name').addClass('red');
            $('#father_first_name').closest(".form-control").next().text(error).show();
            valid = false;
        } else {
            $('#father_first_name').closest(".form-control").next().hide();
            $('#father_first_name').removeClass('red');
        }
        if (father_middle_name == '') {
            $('#father_middle_name').addClass('red');
            error = "Please specify your First name.\n";
            $('#father_middle_name').closest(".form-control").next().text(error).show();
            valid = false;
        } else if ((father_middle_name.length > 100)) {
            error = "This field have wrong length.\n";
            $('#father_middle_name').addClass('red');
            $('#father_middle_name').closest(".form-control").next().text(error).show();
            valid = false;
        } else {
            $('#father_middle_name').closest(".form-control").next().hide();
            $('#father_middle_name').removeClass('red');
        }
        if (father_last_name == '') {
            $('#father_last_name').addClass('red');
            error = "Please specify your First name.\n";
            $('#father_last_name').closest(".form-control").next().text(error).show();
            valid = false;
        } else if ((father_last_name.length > 100)) {
            error = "This field have wrong length.\n";
            $('#father_last_name').addClass('red');
            $('#father_last_name').closest(".form-control").next().text(error).show();
            valid = false;
        } else {
            $('#father_last_name').closest(".form-control").next().hide();
            $('#father_last_name').removeClass('red');
        }
        if (father_quali == '') {
            $('#father_quali').addClass('red');
            error = "Please specify your First name.\n";
            $('#father_quali').closest(".form-control").next().text(error).show();
            valid = false;
        } else if ((father_quali.length > 100)) {
            error = "This field have wrong length.\n";
            $('#father_quali').addClass('red');
            $('#father_quali').closest(".form-control").next().text(error).show();
            valid = false;
        } else {
            $('#father_quali').closest(".form-control").next().hide();
            $('#father_quali').removeClass('red');
        }
        if (father_occup == '') {
            $('#father_occup').addClass('red');
            error = "Please specify your First name.\n";
            $('#father_occup').closest(".form-control").next().text(error).show();
            valid = false;
        } else if ((father_occup.length > 100)) {
            error = "This field have wrong length.\n";
            $('#father_occup').addClass('red');
            $('#father_occup').closest(".form-control").next().text(error).show();
            valid = false;
        } else {
            $('#father_occup').closest(".form-control").next().hide();
            $('#father_occup').removeClass('red');
        }
        if (father_con_num == '') {
            error = "Please fill the contact number\n";
            $("#father_con_num").addClass('red');
            $("#father_con_num").closest(".form-control").next().text(error).show();
            valid = false;
        } else if (pattern.test(father_con_num) == false) {
            error = "Please specify a valid contact number.\n";
            $("#father_con_num").addClass('red');
            $("#father_con_num").closest(".form-control").next().text(error).show();
            valid = false;
        } else {
            $("#father_con_num").closest(".form-control").next().hide();
            $('#father_con_num').removeClass('red');
        }
        if (mother_first_name == '') {
            $('#mother_first_name').addClass('red');
            error = "Please specify your First name.\n";
            $('#mother_first_name').closest(".form-control").next().text(error).show();
            valid = false;
        } else if ((mother_first_name.length > 100)) {
            error = "This field have wrong length.\n";
            $('#mother_first_name').addClass('red');
            $('#mother_first_name').closest(".form-control").next().text(error).show();
            valid = false;
        } else {
            $('#mother_first_name').closest(".form-control").next().hide();
            $('#mother_first_name').removeClass('red');
        }
        if (mother_middle_name == '') {
            $('#mother_middle_name').addClass('red');
            error = "Please specify your First name.\n";
            $('#mother_middle_name').closest(".form-control").next().text(error).show();
            valid = false;
        } else if ((mother_middle_name.length > 100)) {
            error = "This field have wrong length.\n";
            $('#mother_middle_name').addClass('red');
            $('#mother_middle_name').closest(".form-control").next().text(error).show();
            valid = false;
        } else {
            $('#mother_middle_name').closest(".form-control").next().hide();
            $('#mother_middle_name').removeClass('red');
        }
        if (mother_last_name == '') {
            $('#mother_last_name').addClass('red');
            error = "Please specify your First name.\n";
            $('#mother_last_name').closest(".form-control").next().text(error).show();
            valid = false;
        } else if ((mother_last_name.length > 100)) {
            error = "This field have wrong length.\n";
            $('#mother_last_name').addClass('red');
            $('#mother_last_name').closest(".form-control").next().text(error).show();
            valid = false;
        } else {
            $('#mother_last_name').closest(".form-control").next().hide();
            $('#mother_last_name').removeClass('red');
        }
        if (mother_quali == '') {
            $('#mother_quali').addClass('red');
            error = "Please specify your First name.\n";
            $('#mother_quali').closest(".form-control").next().text(error).show();
            valid = false;
        } else if ((mother_quali.length > 100)) {
            error = "This field have wrong length.\n";
            $('#mother_quali').addClass('red');
            $('#mother_quali').closest(".form-control").next().text(error).show();
            valid = false;
        } else {
            $('#mother_quali').closest(".form-control").next().hide();
            $('#mother_quali').removeClass('red');
        }
        if (mother_occup == '') {
            $('#mother_occup').addClass('red');
            error = "Please specify your First name.\n";
            $('#mother_occup').closest(".form-control").next().text(error).show();
            valid = false;
        } else if ((mother_occup.length > 100)) {
            error = "This field have wrong length.\n";
            $('#mother_occup').addClass('red');
            $('#mother_occup').closest(".form-control").next().text(error).show();
            valid = false;
        } else {
            $('#mother_occup').closest(".form-control").next().hide();
            $('#mother_occup').removeClass('red');
        }
        if (mother_con_num == '') {
            error = "Please fill the contact number\n";
            $("#mother_con_num").addClass('red');
            $("#mother_con_num").closest(".form-control").next().text(error).show();
            valid = false;
        } else if (pattern.test(mother_con_num) == false) {
            error = "Please specify a valid contact number.\n";
            $("#mother_con_num").addClass('red');
            $("#mother_con_num").closest(".form-control").next().text(error).show();
            valid = false;
        } else {
            $("#mother_con_num").closest(".form-control").next().hide();
            $('#mother_con_num').removeClass('red');
        }
        if (valid == true) {
            if ($('#menu2').is(":visible")) {
                current_fs = $('#menu2');
                next_fs = $('#menu3');
            } else if ($('#menu3').is(":visible")) {
                current_fs = $('#menu3');
                next_fs = $('#menu4');
            }
            $('#menu2').removeClass("in fade active");
            $('#menu3').addClass("in fade active");
            next_fs.show();
            current_fs.hide();
            return valid;
        }
    })
})
$(document).ready(function () {
    $(".next3").click(function () {
        var Institute_School_Name = $('#Institute_School_Name').val();
        var Studied_From_To = $('#Studied_From_To').val();
        var course_class = $('#course_class').val();
        var total_marks = $('#total_marks').val();
        var obtained_marks = $('#obtained_marks').val();
        var specials = /[*|\":<>[\]{}`\\()';@&$#]/;
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        var allowedDomains = ['gmail.com', 'yahoo.com', 'yahoo.in', 'yahoo.co.in', 'hotmail.com', 'rediff.com', 'aol.com', 'live.com', 'rocketmail.com'];
        var pattern = /^\d{10}$/;
        var date_val = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
        var valid = true;
        var error;
        if (Institute_School_Name == '') {
            $('#Institute_School_Name').addClass('red');
            error = "Please specify your First name.\n";
            $('#Institute_School_Name').closest(".form-control").next().text(error).show();
            valid = false;
        } else if ((Institute_School_Name.length > 100)) {
            error = "This field have wrong length.\n";
            $('#Institute_School_Name').addClass('red');
            $('#Institute_School_Name').closest(".form-control").next().text(error).show();
            valid = false;
        } else {
            $('#Institute_School_Name').closest(".form-control").next().hide();
            $('#Institute_School_Name').removeClass('red');
        }
        if (Studied_From_To == '') {
            $('#Studied_From_To').addClass('red');
            error = "Please specify your First name.\n";
            $('#Studied_From_To').closest(".form-control").next().text(error).show();
            valid = false;
        } else if ((Studied_From_To.length > 100)) {
            error = "This field have wrong length.\n";
            $('#Studied_From_To').addClass('red');
            $('#Studied_From_To').closest(".form-control").next().text(error).show();
            valid = false;
        } else {
            $('#Studied_From_To').closest(".form-control").next().hide();
            $('#Studied_From_To').removeClass('red');
        }
        if (obtained_marks == '') {
            $('#obtained_marks').addClass('red');
            error = "Please specify your First name.\n";
            $('#obtained_marks').closest(".form-control").next().text(error).show();
            valid = false;
        } else if ((obtained_marks.length > 100)) {
            error = "This field have wrong length.\n";
            $('#obtained_marks').addClass('red');
            $('#obtained_marks').closest(".form-control").next().text(error).show();
            valid = false;
        } else {
            $('#obtained_marks').closest(".form-control").next().hide();
            $('#obtained_marks').removeClass('red');
        }

        if (course_class == '') {
            $('#course_class').addClass('red');
            error = "Please specify your First name.\n";
            $('#course_class').closest(".form-control").next().text(error).show();
            valid = false;
        } else if ((course_class.length > 100)) {
            error = "This field have wrong length.\n";
            $('#course_class').addClass('red');
            $('#course_class').closest(".form-control").next().text(error).show();
            valid = false;
        } else {
            $('#course_class').closest(".form-control").next().hide();
            $('#course_class').removeClass('red');
        }
        if (total_marks == '') {
            $('#total_marks').addClass('red');
            error = "Please specify your First name.\n";
            $('#total_marks').closest(".form-control").next().text(error).show();
            valid = false;
        } else if ((total_marks.length > 100)) {
            error = "This field have wrong length.\n";
            $('#total_marks').addClass('red');
            $('#total_marks').closest(".form-control").next().text(error).show();
            valid = false;
        } else {
            $('#total_marks').closest(".form-control").next().hide();
            $('#total_marks').removeClass('red');
        }
        if (valid == true) {
            if ($('#menu3').is(":visible")) {
                current_fs = $('#menu3');
                next_fs = $('#menu4');
            } else if ($('#menu4').is(":visible")) {
                current_fs = $('#menu4');
                next_fs = $('#menu5');
            }
            $('#menu3').removeClass("in fade active");
            $('#menu4').addClass("in fade active");
            next_fs.show();
            current_fs.hide();
            return valid;
        }
    })
})





$(document).ready(function () {
    $(".next4").click(function () {
        var sib_nsme = $('#sib_nsme').val();
        var sib_age = $('#sib_age').val();
        var gender = $('#gender').val();
        var course_class = $('#course_class').val();

        var specials = /[*|\":<>[\]{}`\\()';@&$#]/;
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        var allowedDomains = ['gmail.com', 'yahoo.com', 'yahoo.in', 'yahoo.co.in', 'hotmail.com', 'rediff.com', 'aol.com', 'live.com', 'rocketmail.com'];
        var pattern = /^\d{10}$/;
        var date_val = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
        var valid = true;
        var error;
        if (sib_nsme == '') {
            $('#sib_nsme').addClass('red');
            error = "Please specify your First name.\n";
            $('#sib_nsme').closest(".form-control").next().text(error).show();
            valid = false;
        } else if ((sib_nsme.length > 100)) {
            error = "This field have wrong length.\n";
            $('#sib_nsme').addClass('red');
            $('#sib_nsme').closest(".form-control").next().text(error).show();
            valid = false;
        } else {
            $('#sib_nsme').closest(".form-control").next().hide();
            $('#sib_nsme').removeClass('red');
        }
        if (sib_age == '') {
            $('#sib_age').addClass('red');
            error = "Please specify your First name.\n";
            $('#sib_age').closest(".form-control").next().text(error).show();
            valid = false;
        } else if ((sib_age.length > 100)) {
            error = "This field have wrong length.\n";
            $('#sib_age').addClass('red');
            $('#sib_age').closest(".form-control").next().text(error).show();
            valid = false;
        } else {
            $('#sib_age').closest(".form-control").next().hide();
            $('#sib_age').removeClass('red');
        }
        if (obtained_marks == '') {
            $('#obtained_marks').addClass('red');
            error = "Please specify your First name.\n";
            $('#obtained_marks').closest(".form-control").next().text(error).show();
            valid = false;
        } else if ((obtained_marks.length > 100)) {
            error = "This field have wrong length.\n";
            $('#obtained_marks').addClass('red');
            $('#obtained_marks').closest(".form-control").next().text(error).show();
            valid = false;
        } else {
            $('#obtained_marks').closest(".form-control").next().hide();
            $('#obtained_marks').removeClass('red');
        }
        if (gender == '') {
            $('#gender').addClass('red');
            error = "Please specify your First name.\n";
            $('#gender').closest(".form-control").next().text(error).show();
            valid = false;
        } else if ((gender.length > 100)) {
            error = "This field have wrong length.\n";
            $('#gender').addClass('red');
            $('#gender').closest(".form-control").next().text(error).show();
            valid = false;
        } else {
            $('#gender').closest(".form-control").next().hide();
            $('#gender').removeClass('red');
        }


        if (valid == true) {
            if ($('#menu4').is(":visible")) {
                current_fs = $('#menu4');
                next_fs = $('#menu5');
            }
            $('#menu4').removeClass("in fade active");
            $('#menu5').addClass("in fade active");
            next_fs.show();
            current_fs.hide();
            return valid;
        }
    })
})



$(document).ready(function () {
    $(".next5").click(function () {
        var Adhar_no = $('#Adhar_no').val();
        var Adhar_image = $('#Adhar_image').val();
        var specials = /[*|\":<>[\]{}`\\()';@&$#]/;
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        var allowedDomains = ['gmail.com', 'yahoo.com', 'yahoo.in', 'yahoo.co.in', 'hotmail.com', 'rediff.com', 'aol.com', 'live.com', 'rocketmail.com'];
        var pattern = /^\d{10}$/;
        var date_val = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
        var valid = true;
        var error;
        if (Adhar_no == '') {
            $('#Adhar_no').addClass('red');
            error = "Please specify your First name.\n";
            $('#Adhar_no').closest(".form-control").next().text(error).show();
            valid = false;
        } else if ((Adhar_no.length > 100)) {
            error = "This field have wrong length.\n";
            $('#Adhar_no').addClass('red');
            $('#Adhar_no').closest(".form-control").next().text(error).show();
            valid = false;
        } else {
            $('#Adhar_no').closest(".form-control").next().hide();
            $('#Adhar_no').removeClass('red');
        }
        var input = document.getElementById('Adhar_image');
        var file = input.files[0];
        var ext = $('#Adhar_image').val().split('.').pop().toLowerCase();
        if (Adhar_image == '' || Adhar_image == null) {
            var error = "Please select a resume for upload.\n";
            $('#Adhar_image').closest(".form-control").next().text(error).show();
            valid = false;
        } else if ($.inArray(ext, ['jpg', 'jpeg', 'png', 'gif']) == -1) {
            error = 'Invalid file type, Please select a valid file.';
            $('#Adhar_image').closest(".form-control").next().text(error).show();
            valid = false;
        } else if (file.size > 500000) {
            error = 'Maximum file size is 500kb.';
            $('#Adhar_image').closest(".form-control").next().text(error).show();
            valid = false;
        } else {
            $('#Adhar_image').closest(".form-control").next().text(error).hide();
        }
        if (valid == true) {
            if ($('#menu4').is(":visible")) {
                current_fs = $('#menu4');
            }
            $('#menu3').removeClass("in fade active");
            $('#menu4').addClass("in fade active");
            next_fs.show();
            current_fs.hide();
            return valid;
        }
    })
})