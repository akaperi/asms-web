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
        else if ($('#menu6').is(":visible")) {
            current_fs = $('#menu6');
            next_fs = $('#menu5');
            $('#menu6').removeClass("in fade active");
            $('#menu5').addClass("in fade active");
        }
         else if ($('#menu7').is(":visible")) {
            current_fs = $('#menu7');
            next_fs = $('#menu6');
            $('#menu7').removeClass("in fade active");
            $('#menu6').addClass("in fade active");
        }
        //next_fs.show();
       // current_fs.hide();
    });
    $(".next").click(function () {


        var staff_role = $('#staff_role').val();
        var staff_designation = $('#staff_designation').val();
        var specials = /[*|\":<>[\]{}`\\()';@&$#]/;
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        var allowedDomains = ['gmail.com', 'yahoo.com', 'yahoo.in', 'yahoo.co.in', 'hotmail.com', 'rediff.com', 'aol.com', 'live.com', 'rocketmail.com'];
        var pattern = /^\d{10}$/;
        var date_val = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
        var valid = true;
        var error;


        if (staff_role == '') {
            $('#staff_role').addClass('red');
            error = "Please specify your First name.\n";
            $('#staff_role').closest(".form-control").next().text(error).show();
            valid = false;
        } else if (specials.test(staff_role)) {
            $('#staff_role').addClass('red');
            error = 'Special characters are not allowed';
            $('#staff_role').closest(".form-control").next().text(error).show();
            valid = false;
        } else if (!isNaN(staff_role)) {
            error = 'Numbers are not allowed';
            $('#staff_role').addClass('red');
            $('#staff_role').closest(".form-control").next().text(error).show();
            valid = false;
        } else {
            $('#staff_role').closest(".form-control").next().hide();
            $('#staff_role').removeClass('red');
        }
        if (staff_designation == '') {
            $('#staff_designation').addClass('red');
            error = "Please specify your First name.\n";
            $('#staff_designation').closest(".form-control").next().text(error).show();
            valid = false;
        } else if (specials.test(staff_designation)) {
            $('#staff_designation').addClass('red');
            error = 'Special characters are not allowed';
            $('#staff_designation').closest(".form-control").next().text(error).show();
            valid = false;
        } else if (!isNaN(staff_designation)) {
            error = 'Numbers are not allowed';
            $('#staff_designation').addClass('red');
            $('#staff_designation').closest(".form-control").next().text(error).show();
            valid = false;
        } else {
            $('#staff_designation').closest(".form-control").next().hide();
            $('#staff_designation').removeClass('red');
        }

        if (valid == true) {
            if ($('#menu0').is(":visible")) {
                current_fs = $('#menu0');
                next_fs = $('#menu1');
            } 
            $('#menu0').removeClass("in fade active");
            $('#menu1').addClass("in fade active");
            //next_fs.show();
            //current_fs.hide();
            getReligions();
            getCasteTypes();
            return valid;
        }
    })
})
$(document).ready(function () {
    $(".next1").click(function () {
        var first_name = $('#first_name').val();
        var middle_name = $('#middle_name').val();
        var last_name = $('#last_name').val();
        var date_of_birth = $('#date_of_birth').val();
        var age_in_year = $('#age_in_year').val();
        var contact_number = $('#contact_number').val();
        var qualification = $('#qualification').val();
        var email_address = $('#email_address').val();
        var religion = $('#religion').val();
        var caste = $('#caste').val();
        var blood_group = $('#blood_group').val();
      //  var upload_photo = $('#upload_photo').val();

        var specials = /[*|\":<>[\]{}`\\()';@&$#]/;
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        var allowedDomains = ['gmail.com', 'yahoo.com', 'yahoo.in', 'yahoo.co.in', 'hotmail.com', 'rediff.com', 'aol.com', 'live.com', 'rocketmail.com'];
        var pattern = /^\d{10}$/;
        var date_val = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
        var valid = true;
        var error;
        if (first_name == '') {
            $('#first_name').addClass('red');
            error = "Please specify your First name.\n";
            $('#first_name').closest(".form-control").next().text(error).show();
            valid = false;
        } else if (specials.test(first_name)) {
            $('#first_name').addClass('red');
            error = 'Special characters are not allowed';
            $('#first_name').closest(".form-control").next().text(error).show();
            valid = false;
        } else if (!isNaN(first_name)) {
            error = 'Numbers are not allowed';
            $('#first_name').addClass('red');
            $('#first_name').closest(".form-control").next().text(error).show();
            valid = false;
        } else {
            $('#first_name').closest(".form-control").next().hide();
            $('#first_name').removeClass('red');
        }
        if (middle_name == '') {
            $('#middle_name').addClass('red');
            error = "Please specify your First name.\n";
            $('#middle_name').closest(".form-control").next().text(error).show();
            valid = false;
        } else if (specials.test(middle_name)) {
            $('#middle_name').addClass('red');
            error = 'Special characters are not allowed';
            $('#middle_name').closest(".form-control").next().text(error).show();
            valid = false;
        } else if (!isNaN(middle_name)) {
            error = 'Numbers are not allowed';
            $('#middle_name').addClass('red');
            $('#middle_name').closest(".form-control").next().text(error).show();
            valid = false;
        } else {
            $('#middle_name').closest(".form-control").next().hide();
            $('#middle_name').removeClass('red');
        }
          if (last_name == '') {
            $('#last_name').addClass('red');
            error = "Please specify your First name.\n";
            $('#last_name').closest(".form-control").next().text(error).show();
            valid = false;
        } else if (specials.test(last_name)) {
            $('#last_name').addClass('red');
            error = 'Special characters are not allowed';
            $('#last_name').closest(".form-control").next().text(error).show();
            valid = false;
        } else if (!isNaN(last_name)) {
            error = 'Numbers are not allowed';
            $('#last_name').addClass('red');
            $('#last_name').closest(".form-control").next().text(error).show();
            valid = false;
        } else {
            $('#last_name').closest(".form-control").next().hide();
            $('#last_name').removeClass('red');
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
         if (contact_number == '') {
            error = "Please fill the contact number\n";
            $("#contact_number").addClass('red');
            $("#contact_number").closest(".form-control").next().text(error).show();
            valid = false;
        } else if (pattern.test(contact_number) == false) {
            error = "Please specify a valid contact number.\n";
            $("#contact_number").addClass('red');
            $("#contact_number").closest(".form-control").next().text(error).show();
            valid = false;
        } else {
            $("#contact_number").closest(".form-control").next().hide();
            $('#contact_number').removeClass('red');
        }

         if (qualification == '') {
            $('#qualification').addClass('red');
            error = "Please specify your First name.\n";
            $('#qualification').closest(".form-control").next().text(error).show();
            valid = false;
        } else if ((qualification.length > 100)) {
            error = "This field have wrong length.\n";
            $('#qualification').addClass('red');
            $('#qualification').closest(".form-control").next().text(error).show();
            valid = false;
        } else {
            $('#qualification').closest(".form-control").next().hide();
            $('#qualification').removeClass('red');
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

         if (religion == 0) {
            $('#religion').addClass('red');
            error = "Please fill this field.\n";
            $('#religion').closest(".form-control").next().text(error).show();
            valid = false;
        } else {
            $('#religion').removeClass('red');
            $('#religion').closest(".form-control").next().text(error).hide();
        }
         if (caste == 0) {
            $('#caste').addClass('red');
            error = "Please fill this field.\n";
            $('#caste').closest(".form-control").next().text(error).show();
            valid = false;
        } else {
            $('#caste').removeClass('red');
            $('#caste').closest(".form-control").next().text(error).hide();
        }
        if (blood_group == 0) {
            $('#blood_group').addClass('red');
            error = "Please fill this field.\n";
            $('#blood_group').closest(".form-control").next().text(error).show();
            valid = false;
        } else {
            $('#blood_group').removeClass('red');
            $('#blood_group').closest(".form-control").next().text(error).hide();
        }
        var input = document.getElementById('upload_photo');
        var file = input.files[0];
        var ext = $('#upload_photo').val().split('.').pop().toLowerCase();
      /*  if (upload_photo == '' || upload_photo == null) {
            var error = "Please select a resume for upload.\n";
            $('#upload_photo').closest(".form-control").next().text(error).show();
            valid = false;
        } else if ($.inArray(ext, ['jpg', 'jpeg', 'png', 'gif']) == -1) {
            error = 'Invalid file type, Please select a valid file.';
            $('#upload_photo').closest(".form-control").next().text(error).show();
            valid = false;
        } else if (file.size > 150000) {
            error = 'Maximum file size is 500kb.';
            $('#upload_photo').closest(".form-control").next().text(error).show();
            valid = false;
        } else {
            $('#upload_photo').closest(".form-control").next().text(error).hide();
        }*/

        if (valid == true) {
            if ($('#menu1').is(":visible")) {
                current_fs = $('#menu1');
                next_fs = $('#menu2');
            }
          
          //  next_fs.show();
        //    current_fs.hide();
            sendPrimaryDetails(next_fs,current_fs);
            return valid;
        }
    })
})
$(document).ready(function () {
    $(".next2").click(function () {
        var classes_handled = $('#classes_handled').val();
        var subjects_handled = $('#subjects_handled').val();

        var specials = /[*|\":<>[\]{}`\\()';@&$#]/;
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        var allowedDomains = ['gmail.com', 'yahoo.com', 'yahoo.in', 'yahoo.co.in', 'hotmail.com', 'rediff.com', 'aol.com', 'live.com', 'rocketmail.com'];
        var pattern = /^\d{10}$/;
        var date_val = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
        var valid = true;
        var error;

        if (classes_handled == '') {
            $('#classes_handled').addClass('red');
            error = "Please specify your First name.\n";
            $('#classes_handled').closest(".form-control").next().text(error).show();
            valid = false;
        } else if ((classes_handled.length > 100)) {
            error = "This field have wrong length.\n";
            $('#classes_handled').addClass('red');
            $('#classes_handled').closest(".form-control").next().text(error).show();
            valid = false;
        } else {
            $('#classes_handled').closest(".form-control").next().hide();
            $('#classes_handled').removeClass('red');
        }
          if (subjects_handled == '') {
            $('#subjects_handled').addClass('red');
            error = "Please specify your First name.\n";
            $('#subjects_handled').closest(".form-control").next().text(error).show();
            valid = false;
        } else if ((subjects_handled.length > 100)) {
            error = "This field have wrong length.\n";
            $('#subjects_handled').addClass('red');
            $('#subjects_handled').closest(".form-control").next().text(error).show();
            valid = false;
        } else {
            $('#subjects_handled').closest(".form-control").next().hide();
            $('#subjects_handled').removeClass('red');
        }
        if (valid == true) {
            if ($('#menu2').is(":visible")) {
                current_fs = $('#menu2');
                next_fs = $('#menu3');
            }
            $('#menu2').removeClass("in fade active");
            $('#menu3').addClass("in fade active");
            //next_fs.show();
            //current_fs.hide();
            return valid;
        }
    })
})
$(document).ready(function () {
    $(".next3").click(function () {
        var pre_inst_name = $('#pre_inst_name').val();
        var date_of_join = $('#date_of_join').val();
        var date_of_leave = $('#date_of_leave').val();
        var specials = /[*|\":<>[\]{}`\\()';@&$#]/;
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        var allowedDomains = ['gmail.com', 'yahoo.com', 'yahoo.in', 'yahoo.co.in', 'hotmail.com', 'rediff.com', 'aol.com', 'live.com', 'rocketmail.com'];
        var pattern = /^\d{10}$/;
        var date_val = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
        var valid = true;
        var error;

       if ($("input:radio[value='fresher']").is(':checked')) {


                       var input = document.getElementById('upload_resume');
                 var file = input.files[0];
                 var ext = $('#upload_resume').val().split('.').pop().toLowerCase();
              if ($.inArray(ext, ['jpg', 'jpeg', 'png', 'gif']) == -1) {
                     error = 'Invalid file type, Please select a valid file.';
                     $('#upload_resume').closest(".form-control").next().text(error).show();
                     valid = false;
                 } else if (file.size > 150000) {
                     error = 'Maximum file size is 500kb.';
                     $('#upload_resume').closest(".form-control").next().text(error).show();
                     valid = false;
                 } else {
                     $('#upload_resume').closest(".form-control").next().text(error).hide();
                 }

         }
         else{
                  //


                          if (pre_inst_name == '') {
                              $('#pre_inst_name').addClass('red');
                              error = "Please specify your First name.\n";
                              $('#pre_inst_name').closest(".form-control").next().text(error).show();
                              valid = false;
                          } else if ((pre_inst_name.length > 100)) {
                              error = "This field have wrong length.\n";
                              $('#pre_inst_name').addClass('red');
                              $('#pre_inst_name').closest(".form-control").next().text(error).show();
                              valid = false;
                          } else {
                              $('#pre_inst_name').closest(".form-control").next().hide();
                              $('#pre_inst_name').removeClass('red');
                          }
                           if (date_of_join == '') {
                              error = "Please fill the Date";
                              $('#date_of_join').addClass('red');
                              $('#date_of_join').closest(".form-control").next().text(error).show();
                              valid = false;
                          } else {
                              $('#date_of_join').closest(".form-control").next().hide();
                              $('#date_of_join').removeClass('red');
                          }
                           if (date_of_leave == '') {
                              error = "Please fill the Date";
                              $('#date_of_leave').addClass('red');
                              $('#date_of_leave').closest(".form-control").next().text(error).show();
                              valid = false;
                          } else {
                              $('#date_of_leave').closest(".form-control").next().hide();
                              $('#date_of_leave').removeClass('red');
                          }
                           var input = document.getElementById('upload_rel_letter');
                          var file = input.files[0];
                          var ext = $('#upload_rel_letter').val().split('.').pop().toLowerCase();
                        if ($.inArray(ext, ['jpg', 'jpeg', 'png', 'gif']) == -1) {
                              error = 'Invalid file type, Please select a valid file.';
                              $('#upload_rel_letter').closest(".form-control").next().text(error).show();
                              valid = false;
                          } else if (file.size > 150000) {
                              error = 'Maximum file size is 500kb.';
                              $('#upload_rel_letter').closest(".form-control").next().text(error).show();
                              valid = false;
                          } else {
                              $('#upload_rel_letter').closest(".form-control").next().text(error).hide();
                          }

                           var input = document.getElementById('upload_resume');
                          var file = input.files[0];
                          var ext = $('#upload_resume').val().split('.').pop().toLowerCase();
                         if ($.inArray(ext, ['jpg', 'jpeg', 'png', 'gif']) == -1) {
                              error = 'Invalid file type, Please select a valid file.';
                              $('#upload_resume').closest(".form-control").next().text(error).show();
                              valid = false;
                          } else if (file.size > 150000) {
                              error = 'Maximum file size is 500kb.';
                              $('#upload_resume').closest(".form-control").next().text(error).show();
                              valid = false;
                          } else {
                              $('#upload_resume').closest(".form-control").next().text(error).hide();
                          }
         }
        if (valid == true) {
            if ($('#menu3').is(":visible")) {
                current_fs = $('#menu3');
                next_fs = $('#menu4');
            }
          
            sendPreviousInfo(next_fs, current_fs);
          //  next_fs.show();
          //  current_fs.hide();
            return valid;
        }
    })
})





$(document).ready(function () {
    $(".next4").click(function () {
        var upload_tenth_mark_card = $('#upload_tenth_mark_card').val();
        var upload_twelth_mark_card = $('#upload_twelth_mark_card').val();
        var upload_degree_certificate = $('#upload_degree_certificate').val();
        var upload_pg_degree_certificate = $('#upload_pg_degree_certificate').val();
        var other_degree_certificate = $('#other_degree_certificate').val();
        var medical_fit_certificate = $('#medical_fit_certificate').val();

        var specials = /[*|\":<>[\]{}`\\()';@&$#]/;
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        var allowedDomains = ['gmail.com', 'yahoo.com', 'yahoo.in', 'yahoo.co.in', 'hotmail.com', 'rediff.com', 'aol.com', 'live.com', 'rocketmail.com'];
        var pattern = /^\d{10}$/;
        var date_val = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
        var valid = true;
        var error;

          var input = document.getElementById('upload_tenth_mark_card');
        var file = input.files[0];
        var ext = $('#upload_tenth_mark_card').val().split('.').pop().toLowerCase();
        if (upload_tenth_mark_card == '' || upload_tenth_mark_card == null) {
            var error = "Please select a resume for upload.\n";
            $('#upload_tenth_mark_card').closest(".form-control").next().text(error).show();
            valid = false;
        } else if ($.inArray(ext, ['jpg', 'jpeg', 'png', 'gif']) == -1) {
            error = 'Invalid file type, Please select a valid file.';
            $('#upload_tenth_mark_card').closest(".form-control").next().text(error).show();
            valid = false;
        } else if (file.size > 150000) {
            error = 'Maximum file size is 500kb.';
            $('#upload_tenth_mark_card').closest(".form-control").next().text(error).show();
            valid = false;
        } else {
            $('#upload_tenth_mark_card').closest(".form-control").next().text(error).hide();
        }

          var input = document.getElementById('upload_twelth_mark_card');
        var file = input.files[0];
        var ext = $('#upload_twelth_mark_card').val().split('.').pop().toLowerCase();
        if (upload_twelth_mark_card == '' || upload_twelth_mark_card == null) {
            var error = "Please select a resume for upload.\n";
            $('#upload_twelth_mark_card').closest(".form-control").next().text(error).show();
            valid = false;
        } else if ($.inArray(ext, ['jpg', 'jpeg', 'png', 'gif']) == -1) {
            error = 'Invalid file type, Please select a valid file.';
            $('#upload_twelth_mark_card').closest(".form-control").next().text(error).show();
            valid = false;
        } else if (file.size > 150000) {
            error = 'Maximum file size is 500kb.';
            $('#upload_twelth_mark_card').closest(".form-control").next().text(error).show();
            valid = false;
        } else {
            $('#upload_twelth_mark_card').closest(".form-control").next().text(error).hide();
        }

          var input = document.getElementById('upload_degree_certificate');
        var file = input.files[0];
        var ext = $('#upload_degree_certificate').val().split('.').pop().toLowerCase();
        if (upload_degree_certificate == '' || upload_degree_certificate == null) {
            var error = "Please select a resume for upload.\n";
            $('#upload_degree_certificate').closest(".form-control").next().text(error).show();
            valid = false;
        } else if ($.inArray(ext, ['jpg', 'jpeg', 'png', 'gif']) == -1) {
            error = 'Invalid file type, Please select a valid file.';
            $('#upload_degree_certificate').closest(".form-control").next().text(error).show();
            valid = false;
        } else if (file.size > 150000) {
            error = 'Maximum file size is 500kb.';
            $('#upload_degree_certificate').closest(".form-control").next().text(error).show();
            valid = false;
        } else {
            $('#upload_degree_certificate').closest(".form-control").next().text(error).hide();
        }

           var input = document.getElementById('upload_pg_degree_certificate');
        var file = input.files[0];
        var ext = $('#upload_pg_degree_certificate').val().split('.').pop().toLowerCase();
        if (upload_pg_degree_certificate == '' || upload_pg_degree_certificate == null) {
            var error = "Please select a resume for upload.\n";
            $('#upload_pg_degree_certificate').closest(".form-control").next().text(error).show();
            valid = false;
        } else if ($.inArray(ext, ['jpg', 'jpeg', 'png', 'gif']) == -1) {
            error = 'Invalid file type, Please select a valid file.';
            $('#upload_pg_degree_certificate').closest(".form-control").next().text(error).show();
            valid = false;
        } else if (file.size > 150000) {
            error = 'Maximum file size is 500kb.';
            $('#upload_pg_degree_certificate').closest(".form-control").next().text(error).show();
            valid = false;
        } else {
            $('#upload_pg_degree_certificate').closest(".form-control").next().text(error).hide();
        }

         var input = document.getElementById('other_degree_certificate');
        var file = input.files[0];
        var ext = $('#other_degree_certificate').val().split('.').pop().toLowerCase();
        if (other_degree_certificate == '' || other_degree_certificate == null) {
            var error = "Please select a resume for upload.\n";
            $('#other_degree_certificate').closest(".form-control").next().text(error).show();
            valid = false;
        } else if ($.inArray(ext, ['jpg', 'jpeg', 'png', 'gif']) == -1) {
            error = 'Invalid file type, Please select a valid file.';
            $('#other_degree_certificate').closest(".form-control").next().text(error).show();
            valid = false;
        } else if (file.size > 150000) {
            error = 'Maximum file size is 500kb.';
            $('#other_degree_certificate').closest(".form-control").next().text(error).show();
            valid = false;
        } else {
            $('#other_degree_certificate').closest(".form-control").next().text(error).hide();
        }

         var input = document.getElementById('medical_fit_certificate');
        var file = input.files[0];
        var ext = $('#medical_fit_certificate').val().split('.').pop().toLowerCase();
        if (medical_fit_certificate == '' || medical_fit_certificate == null) {
            var error = "Please select a resume for upload.\n";
            $('#medical_fit_certificate').closest(".form-control").next().text(error).show();
            valid = false;
        } else if ($.inArray(ext, ['jpg', 'jpeg', 'png', 'gif']) == -1) {
            error = 'Invalid file type, Please select a valid file.';
            $('#medical_fit_certificate').closest(".form-control").next().text(error).show();
            valid = false;
        } else if (file.size > 150000) {
            error = 'Maximum file size is 500kb.';
            $('#medical_fit_certificate').closest(".form-control").next().text(error).show();
            valid = false;
        } else {
            $('#medical_fit_certificate').closest(".form-control").next().text(error).hide();
        }

        if (valid == true) {
            if ($('#menu4').is(":visible")) {
                current_fs = $('#menu4');
                next_fs = $('#menu5');
            }
            $('#menu4').removeClass("in fade active");
            $('#menu5').addClass("in fade active");
            //next_fs.show();
            //current_fs.hide();
            return valid;
        }

})

})

$(document).ready(function () {
    $(".next5").click(function () {
         var bank_name = $('#bank_name').val();
        var bank_acc_no = $('#bank_acc_no').val();
        var ifsc_code = $('#ifsc_code').val();
         var pan_number = $('#pan_number').val();
        var upload_pan_card = $('#upload_pan_card').val();
         var aadhar_number = $('#aadhar_number').val();
         var upload_aadhar_card = $('#upload_aadhar_card').val();
          var pf_number = $('#pf_number').val();
           var uan_number = $('#uan_number').val();
        var specials = /[*|\":<>[\]{}`\\()';@&$#]/;
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        var allowedDomains = ['gmail.com', 'yahoo.com', 'yahoo.in', 'yahoo.co.in', 'hotmail.com', 'rediff.com', 'aol.com', 'live.com', 'rocketmail.com'];
        var pattern = /^\d{10}$/;
        var date_val = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
        var valid = true;
        var error;

         if (bank_name == '') {
            $('#bank_name').addClass('red');
            error = "Please specify your First name.\n";
            $('#bank_name').closest(".form-control").next().text(error).show();
            valid = false;
        } else if (specials.test(bank_name)) {
            $('#bank_name').addClass('red');
            error = 'Special characters are not allowed';
            $('#bank_name').closest(".form-control").next().text(error).show();
            valid = false;
        } else if (!isNaN(bank_name)) {
            error = 'Numbers are not allowed';
            $('#bank_name').addClass('red');
            $('#bank_name').closest(".form-control").next().text(error).show();
            valid = false;
        } else {
            $('#bank_name').closest(".form-control").next().hide();
            $('#bank_name').removeClass('red');
        }
        if (bank_acc_no == '') {
            $('#bank_acc_no').addClass('red');
            error = "Please specify your First name.\n";
            $('#bank_acc_no').closest(".form-control").next().text(error).show();
            valid = false;
        } else if ((bank_acc_no.length > 100)) {
            error = "This field have wrong length.\n";
            $('#bank_acc_no').addClass('red');
            $('#bank_acc_no').closest(".form-control").next().text(error).show();
            valid = false;
        } else {
            $('#bank_acc_no').closest(".form-control").next().hide();
            $('#bank_acc_no').removeClass('red');
        }
         if (ifsc_code == '') {
            $('#ifsc_code').addClass('red');
            error = "Please specify your First name.\n";
            $('#ifsc_code').closest(".form-control").next().text(error).show();
            valid = false;
        } else if (specials.test(ifsc_code)) {
            $('#ifsc_code').addClass('red');
            error = 'Special characters are not allowed';
            $('#ifsc_code').closest(".form-control").next().text(error).show();
            valid = false;
        } else if (!isNaN(ifsc_code)) {
            error = 'Numbers are not allowed';
            $('#ifsc_code').addClass('red');
            $('#ifsc_code').closest(".form-control").next().text(error).show();
            valid = false;
        } else {
            $('#ifsc_code').closest(".form-control").next().hide();
            $('#ifsc_code').removeClass('red');
        }
         if (pan_number == '') {
            $('#pan_number').addClass('red');
            error = "Please specify your First name.\n";
            $('#pan_number').closest(".form-control").next().text(error).show();
            valid = false;
        } else if ((pan_number.length > 100)) {
            error = "This field have wrong length.\n";
            $('#pan_number').addClass('red');
            $('#pan_number').closest(".form-control").next().text(error).show();
            valid = false;
        } else {
            $('#pan_number').closest(".form-control").next().hide();
            $('#pan_number').removeClass('red');
        }
        var input = document.getElementById('upload_pan_card');
        var file = input.files[0];
        var ext = $('#upload_pan_card').val().split('.').pop().toLowerCase();
        if (upload_pan_card == '' || upload_pan_card == null) {
            var error = "Please select a resume for upload.\n";
            $('#upload_pan_card').closest(".form-control").next().text(error).show();
            valid = false;
        } else if ($.inArray(ext, ['jpg', 'jpeg', 'png', 'gif']) == -1) {
            error = 'Invalid file type, Please select a valid file.';
            $('#upload_pan_card').closest(".form-control").next().text(error).show();
            valid = false;
        } else if (file.size > 500000) {
            error = 'Maximum file size is 500kb.';
            $('#upload_pan_card').closest(".form-control").next().text(error).show();
            valid = false;
        } else {
            $('#upload_pan_card').closest(".form-control").next().text(error).hide();
        }
          if (aadhar_number == '') {
            $('#aadhar_number').addClass('red');
            error = "Please specify your First name.\n";
            $('#aadhar_number').closest(".form-control").next().text(error).show();
            valid = false;
        } else if ((aadhar_number.length > 100)) {
            error = "This field have wrong length.\n";
            $('#aadhar_number').addClass('red');
            $('#aadhar_number').closest(".form-control").next().text(error).show();
            valid = false;
        } else {
            $('#aadhar_number').closest(".form-control").next().hide();
            $('#aadhar_number').removeClass('red');
        }

            var input = document.getElementById('upload_aadhar_card');
        var file = input.files[0];
        var ext = $('#upload_aadhar_card').val().split('.').pop().toLowerCase();
        if (upload_aadhar_card == '' || upload_aadhar_card == null) {
            var error = "Please select a resume for upload.\n";
            $('#upload_aadhar_card').closest(".form-control").next().text(error).show();
            valid = false;
        } else if ($.inArray(ext, ['jpg', 'jpeg', 'png', 'gif']) == -1) {
            error = 'Invalid file type, Please select a valid file.';
            $('#upload_aadhar_card').closest(".form-control").next().text(error).show();
            valid = false;
        } else if (file.size > 500000) {
            error = 'Maximum file size is 500kb.';
            $('#upload_aadhar_card').closest(".form-control").next().text(error).show();
            valid = false;
        } else {
            $('#upload_aadhar_card').closest(".form-control").next().text(error).hide();
        }
         if (pf_number == '') {
            $('#pf_number').addClass('red');
            error = "Please specify your First name.\n";
            $('#pf_number').closest(".form-control").next().text(error).show();
            valid = false;
        } else if ((pf_number.length > 100)) {
            error = "This field have wrong length.\n";
            $('#pf_number').addClass('red');
            $('#pf_number').closest(".form-control").next().text(error).show();
            valid = false;
        } else {
            $('#pf_number').closest(".form-control").next().hide();
            $('#pf_number').removeClass('red');
        }
         if (uan_number == '') {
            $('#uan_number').addClass('red');
            error = "Please specify your First name.\n";
            $('#uan_number').closest(".form-control").next().text(error).show();
            valid = false;
        } else if ((uan_number.length > 100)) {
            error = "This field have wrong length.\n";
            $('#uan_number').addClass('red');
            $('#uan_number').closest(".form-control").next().text(error).show();
            valid = false;
        } else {
            $('#uan_number').closest(".form-control").next().hide();
            $('#uan_number').removeClass('red');
        }
        if (valid == true) {
            if ($('#menu5').is(":visible")) {
                current_fs = $('#menu5');
                next_fs = $('#menu6');
            }
          
            sendStaffStatutory(next_fs,current_fs);
           
            return valid;
        }
    })
})


$(document).ready(function () {
    $(".next6").click(function () {
        var add_line_one = $('#add_line_one').val();
        var add_line_two = $('#add_line_two').val();
        var locationarea_dropdown = $('#locationarea_dropdown').val();
        var country_dropdown = $('#country_dropdown').val();
        var state_dropdown = $('#state_dropdown').val();
        var dist_city_dropdown = $('#dist_city_dropdown').val();
        var thaluka_dropdown = $('#thaluka_dropdown').val();
        var hobli_dropdown = $('#hobli_dropdown').val();
        var village_dropdown = $('#village_dropdown').val();
        var pin_code = $('#pin_code').val();


        var specials = /[*|\":<>[\]{}`\\()';@&$#]/;
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        var allowedDomains = ['gmail.com', 'yahoo.com', 'yahoo.in', 'yahoo.co.in', 'hotmail.com', 'rediff.com', 'aol.com', 'live.com', 'rocketmail.com'];
        var pattern = /^\d{10}$/;
        var date_val = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
        var valid = true;
        var error;
        if (add_line_one == '') {
            $('#add_line_one').addClass('red');
            error = "Please specify your First name.\n";
            $('#add_line_one').closest(".form-control").next().text(error).show();
            valid = false;
        } else if ((add_line_one.length > 100)) {
            error = "This field have wrong length.\n";
            $('#add_line_one').addClass('red');
            $('#add_line_one').closest(".form-control").next().text(error).show();
            valid = false;
        } else {
            $('#add_line_one').closest(".form-control").next().hide();
            $('#add_line_one').removeClass('red');
        }
        if (add_line_two == '') {
            $('#add_line_two').addClass('red');
            error = "Please specify your First name.\n";
            $('#add_line_two').closest(".form-control").next().text(error).show();
            valid = false;
        } else if ((add_line_two.length > 100)) {
            error = "This field have wrong length.\n";
            $('#add_line_two').addClass('red');
            $('#add_line_two').closest(".form-control").next().text(error).show();
            valid = false;
        } else {
            $('#add_line_two').closest(".form-control").next().hide();
            $('#add_line_two').removeClass('red');
        }
          if (locationarea_dropdown == 0) {
            $('#locationarea_dropdown').addClass('red');
            error = "Please fill this field.\n";
            $('#locationarea_dropdown').closest(".form-control").next().text(error).show();
            valid = false;
        } else {
            $('#locationarea_dropdown').removeClass('red');
            $('#locationarea_dropdown').closest(".form-control").next().text(error).hide();
        }
        if (country_dropdown == 0) {
            $('#country_dropdown').addClass('red');
            error = "Please fill this field.\n";
            $('#country_dropdown').closest(".form-control").next().text(error).show();
            valid = false;
        } else {
            $('#country_dropdown').removeClass('red');
            $('#country_dropdown').closest(".form-control").next().text(error).hide();
        }
        if (state_dropdown == 0) {
            $('#state_dropdown').addClass('red');
            error = "Please fill this field.\n";
            $('#state_dropdown').closest(".form-control").next().text(error).show();
            valid = false;
        } else {
            $('#state_dropdown').removeClass('red');
            $('#state_dropdown').closest(".form-control").next().text(error).hide();
        }
        if (dist_city_dropdown == 0) {
            $('#dist_city_dropdown').addClass('red');
            error = "Please fill this field.\n";
            $('#dist_city_dropdown').closest(".form-control").next().text(error).show();
            valid = false;
        } else {
            $('#dist_city_dropdown').removeClass('red');
            $('#dist_city_dropdown').closest(".form-control").next().text(error).hide();
        }
        if (thaluka_dropdown == 0) {
            $('#thaluka_dropdown').addClass('red');
            error = "Please fill this field.\n";
            $('#thaluka_dropdown').closest(".form-control").next().text(error).show();
            valid = false;
        } else {
            $('#thaluka_dropdown').removeClass('red');
            $('#thaluka_dropdown').closest(".form-control").next().text(error).hide();
        }
         if (hobli_dropdown == 0) {
            $('#hobli_dropdown').addClass('red');
            error = "Please fill this field.\n";
            $('#hobli_dropdown').closest(".form-control").next().text(error).show();
            valid = false;
        } else {
            $('#hobli_dropdown').removeClass('red');
            $('#hobli_dropdown').closest(".form-control").next().text(error).hide();
        }
          if (village_dropdown == 0) {
            $('#village_dropdown').addClass('red');
            error = "Please fill this field.\n";
            $('#village_dropdown').closest(".form-control").next().text(error).show();
            valid = false;
        } else {
            $('#village_dropdown').removeClass('red');
            $('#village_dropdown').closest(".form-control").next().text(error).hide();
        }
        if (pin_code == "") {
            $('#pin_code').addClass('red');
            error = "Please fill this field.\n";
            $('#pin_code').closest(".form-control").next().text(error).show();
            valid = false;
        } else {
            $('#pin_code').removeClass('red');
            $('#pin_code').closest(".form-control").next().text(error).hide();
        }

        if (valid == true) {
            if ($('#menu6').is(":visible")) {
                current_fs = $('#menu6');
                next_fs = $('#menu7');
            }
          
            sendAddressDetails(next_fs,current_fs);
           // next_fs.show();
           // current_fs.hide();
            return valid;
        }
    })
})
$(document).ready(function () {
    $(".next7").click(function () {
        var name_spouse = $('#name_spouse').val();
        var contact_details = $('#contact_details').val();


        var specials = /[*|\":<>[\]{}`\\()';@&$#]/;
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        var allowedDomains = ['gmail.com', 'yahoo.com', 'yahoo.in', 'yahoo.co.in', 'hotmail.com', 'rediff.com', 'aol.com', 'live.com', 'rocketmail.com'];
        var pattern = /^\d{10}$/;
        var date_val = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
        var valid = true;
        var error;
          var marital = $('[value="martial_status_yes"]').val();
          if ($("input:radio[value='martial_status_yes']").is(':checked')) {
            alert();
        if (name_spouse == '') {
            $('#name_spouse').addClass('red');
            error = "Please specify your First name.\n";
            $('#name_spouse').closest(".form-control").next().text(error).show();
            valid = false;
        } else if ((name_spouse.length > 100)) {
            error = "This field have wrong length.\n";
            $('#name_spouse').addClass('red');
            $('#name_spouse').closest(".form-control").next().text(error).show();
            valid = false;
        } else {
            $('#name_spouse').closest(".form-control").next().hide();
            $('#name_spouse').removeClass('red');
        }
        if (contact_details == '') {
            $('#contact_details').addClass('red');
            error = "Please specify your First name.\n";
            $('#contact_details').closest(".form-control").next().text(error).show();
            valid = false;
        } else if ((contact_details.length > 100)) {
            error = "This field have wrong length.\n";
            $('#contact_details').addClass('red');
            $('#contact_details').closest(".form-control").next().text(error).show();
            valid = false;
        } else {
            $('#contact_details').closest(".form-control").next().hide();
            $('#contact_details').removeClass('red');
        }

    }
    else{

    }

        if (valid == true) {
        	sendAdditionalDetails();
            return valid;
        }
    })
})
// Auto fill For Staff id

$(document).ready(
        function () {
            $(function () {
                var availableTags = ["10BE6ME024", "10BE6ME025",
                    "10BE6ME026", "10BE6ME027", "10BE6ME028",
                    "10BE6ME029", "10BE6ME030", "10BE6ME031",
                    "10BE6ME032", "10BE6ME033", "10BE6ME034", "magesh", "umesh", "karthik"];
                $("#staff_id").autocomplete({
                    source: availableTags
                });
            });
        });

// Auto fill For Staff id

$(document).ready(
        function () {
            $(function () {
                var availableTags = ["Teacher", "Non Teacher"];
                $("#staff_role").autocomplete({
                    source: availableTags
                });
            });
        });


// For Date of Birth

$(function () {
    var start = new Date();
    start.setFullYear(start.getFullYear() - 29);
    var end = new Date();
    end.setFullYear(end.getFullYear() - 0);
    $('#date_of_birth').datepicker({
        changeMonth: true,
        changeYear: true,
        minDate: start,
        yearRange: start.getFullYear() + ':' + end.getFullYear()
    });
});