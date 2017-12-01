/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// Validation Starts

// Submit button starts
$(document).ready(function () {
    $("#mang_pro_reg").click(function () {
        management_register_validation();
    });
});
// Submit button ends

function management_register_validation() {

  
    var first_name = $('#first_name').val();
    var last_name = $('#last_name').val();
    var designation = $('#designation').val();
    var contact_number = $('#contact_number').val();
    var email_address = $("#email_address").val();


    var email_id_format = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var special_characters = /[*|\":<>[\]{}`\\()';@&$#]/;
    var alphabets_only = /^[a-zA-Z\s-, ]+$/;
    var numbers_only = /^\d{10}$/;


// Var check return function valid starts

    var valid = true;


// First Name
    if (first_name === '') {
        $('#first_name').addClass('red');
        error = "Please enter text only.\n";
        $('#first_name').closest(".form-control").next().text(error).show();
        valid = false;
    } else if (special_characters.test(first_name)) {
        $('#first_name').addClass('red');
        error = 'Special characters are not allowed.\n';
        $('#first_name').closest(".form-control").next().text(error).show();
        valid = false;
    } else if (!first_name.match(alphabets_only)) {
        error = 'Name should be alaphabets only.\n';
        $('#first_name').addClass('red');
        $('#first_name').closest(".form-control").next().text(error).show();
        valid = false;
    } else if (!isNaN(first_name)) {
        error = 'Numbers are not allowed.\n';
        $('#first_name').addClass('red');
        $('#first_name').closest(".form-control").next().text(error).show();
        valid = false;
    } else if ((first_name.length > 100)) {
        error = "This field have wrong length.\n";
        $('#first_name').addClass('red');
        $('#first_name').closest(".form-control").next().text(error).show();
        valid = false;
    } else {
        $('#first_name').next().hide();
        $('#first_name').removeClass('red');
    }

// Last Name
    if (last_name === '') {
        $('#last_name').addClass('red');
        error = "Please enter text only.\n";
        $('#last_name').closest(".form-control").next().text(error).show();
        valid = false;
    } else if (special_characters.test(last_name)) {
        $('#last_name').addClass('red');
        error = 'Special characters are not allowed.\n';
        $('#last_name').closest(".form-control").next().text(error).show();
        valid = false;
    } else if (!last_name.match(alphabets_only)) {
        error = 'Name should be alaphabets only.\n';
        $('#last_name').addClass('red');
        $('#last_name').closest(".form-control").next().text(error).show();
        valid = false;
    } else if (!isNaN(last_name)) {
        error = 'Numbers are not allowed.\n';
        $('#last_name').addClass('red');
        $('#last_name').closest(".form-control").next().text(error).show();
        valid = false;
    } else if ((last_name.length > 100)) {
        error = "This field have wrong length.\n";
        $('#last_name').addClass('red');
        $('#last_name').closest(".form-control").next().text(error).show();
        valid = false;
    } else {
        $('#last_name').next().hide();
        $('#last_name').removeClass('red');
    }

// Designation
    if (designation === '') {
        $('#designation').addClass('red');
        error = "Please enter text only.\n";
        $('#designation').closest(".form-control").next().text(error).show();
        valid = false;
    } else if (special_characters.test(designation)) {
        $('#designation').addClass('red');
        error = 'Special characters are not allowed.\n';
        $('#designation').closest(".form-control").next().text(error).show();
        valid = false;
    } else if (!designation.match(alphabets_only)) {
        error = 'Name should be alaphabets only.\n';
        $('#designation').addClass('red');
        $('#designation').closest(".form-control").next().text(error).show();
        valid = false;
    } else if (!isNaN(designation)) {
        error = 'Numbers are not allowed.\n';
        $('#designation').addClass('red');
        $('#designation').closest(".form-control").next().text(error).show();
        valid = false;
    } else if ((designation.length > 100)) {
        error = "This field have wrong length.\n";
        $('#designation').addClass('red');
        $('#designation').closest(".form-control").next().text(error).show();
        valid = false;
    } else {
        $('#designation').next().hide();
        $('#designation').removeClass('red');
    }

// Contact Number
    if (contact_number === '') {
        error = "Please enter your contact number.\n";
        $("#contact_number").addClass('red');
        $("#contact_number").closest(".form-control").next().text(error).show();
        valid = false;
    } else if (numbers_only.test(contact_number) === false) {
        error = "Please specify a valid contact number.\n";
        $("#contact_number").addClass('red');
        $("#contact_number").closest(".form-control").next().text(error).show();
        valid = false;
    } else {
        $("#contact_number").closest(".form-control").next().hide();
        $('#contact_number').removeClass('red');
    }

    if (email_address === '') {
        error = "Please enter your mail id.\n";
        $("#email_address").addClass('red');
        $("#email_address").closest(".form-control").next().text(error).show();
        valid = false;
    } else if (email_id_format.test(email_address) === false) {
        $('#email_address').addClass('red');
        error = "Please enter a valid email Id.\n";
        $('#email_address').closest(".form-control").next().text(error).show();
        valid = false;
    } else {
        $("#email_address").closest(".form-control").next().hide();
        $('#email_address').removeClass('red');
    }

    sendManagementDetails();
// Var check return function valid ends

    return valid;
}

// Validation Ends


// Scripts for management profile index starts

$(document).ready(function () {

    $(".progress-bar").loading();
    function updateInputProgress() {
        var filledFields = 0;
        $("#input-progress").find("input, select, textarea").each(function () {
            if ($(this).val() !== "") {
                filledFields++;
            }
        });
        var percent = Math.ceil(100 * filledFields / totalFields);
        $(".progress-bar").attr("data-percent", percent).find("span").html(percent + "%");
        $(".my-progress-bar").circularProgress({
            line_width: 10,
            color: "#ff0000",
            starting_position: 0, // 12.00 o' clock position, 25 stands for 3.00 o'clock (clock-wise)
            percent: percent, // percent starts from
            percentage: true,
            text: ""
        }).circularProgress('animate', percent, 500);
        return percent;
    }

//Input Progress
    var totalFields = $("#input-progress").find("input, select, textarea").length;
    $("#input-progress").change(function () {
        updateInputProgress();
        $(".progress-bar").loading();
    });
    $("#input-progress .btn-success").click(function () {
        var percent = updateInputProgress();
        $(".progress-bar").loading();
        if (percent === 100) {
            alert("Finished inputs successfully!");
        }
    });
    $(document).ready(function () {
        $(".my-progress-bar").circularProgress({
            line_width: 10,
            color: "#ccc",
            starting_position: 0, // 12.00 o' clock position, 25 stands for 3.00 o'clock (clock-wise)
            percent: 0, // percent starts from
            percentage: true,
            text: ""
        }).circularProgress('animate', 0, 500);
    });
    // Progress bar ends


    // Nav tabs for fields starts
    $(".nav-tabs a").click(function () {
        $(this).tab('show');
    });
    // Nav tabs for fields ends

    // For admission date starts
    $(function () {
        var start = new Date();
        start.setFullYear(start.getFullYear() - 11);
        var end = new Date();
        end.setFullYear(end.getFullYear() - 0);
        $('#admission_date').datepicker({
            changeMonth: true
            , changeYear: true
            , minDate: start
            , yearRange: start.getFullYear() + ':' + end.getFullYear()
        });
    });
    // For admission date ends

    // For date of birth starts
    $(function () {
        var start = new Date();
        start.setFullYear(start.getFullYear() - 29);
        var end = new Date();
        end.setFullYear(end.getFullYear() - 0);
        $('#date_of_birth').datepicker({
            changeMonth: true
            , changeYear: true
            , minDate: start
            , yearRange: start.getFullYear() + ':' + end.getFullYear()
        });
    });
    // For date of birth ends

    // For studied from to date pick starts
    $(function () {
        var start = new Date();
        start.setFullYear(start.getFullYear() - 29);
        var end = new Date();
        end.setFullYear(end.getFullYear() - 0);
        $('#date_of_birth').datepicker({
            changeMonth: true
            , changeYear: true
            , minDate: start
            , yearRange: start.getFullYear() + ':' + end.getFullYear()
        });
    });
    // For studied from to date pick ends


    // Auto fill For studied from - to academic year starts
    $(function () {
        var availableTags = ["2012 - 2015", "2013 - 2016", "2014 - 2017", "2015 - 2018", "2016 - 2019", "2017 - 2020"];
        $("#studied_duration").autocomplete({
            source: availableTags
        });
    });
    // Auto fill For studied from - to academic year ends

    // Fresher if yes enable fields starts
    jQuery(".fresh input").change(function () {
        if (jQuery(this).val() === 'fresher') {
            jQuery('#add_field_if_yes').show('fast');
        } else {
            jQuery('#add_field_if_yes').hide('fast');
        }
    });
    // Fresher if yes enable fields ends

    // Martial status if yes enable fields starts
    jQuery(".martial input").change(function () {
        if (jQuery(this).val() === 'martial_status_yes') {
            jQuery('#add_martial_status_yes').show('fast');
        } else {
            jQuery('#add_martial_status_yes').hide('fast');
        }
    });
    // Martial status if yes enable fields ends

});
// Scripts for management profile index ends
