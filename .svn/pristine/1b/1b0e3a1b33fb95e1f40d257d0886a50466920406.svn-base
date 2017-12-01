/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


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


