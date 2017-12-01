/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var global_server;
var global_src;







$(document).ready(function () {
    $("#loginsubmit").click(function () {
        var username = $("input#username").val();
 var password = $("input#password").val();
        $.ajax({
            type: "POST",
            url: global_server + 'user/akaperi/login',
            data: '{"email": "' + username + '", "userPassword" : "' + password + '"}',
             crossDomain: true,
        contentType: 'application/json; odata=verbose',
        dataType: 'json', // check with both one by one JSON and JSONP

            success: function (response) {
                localStorage.setItem('storeduser', username);
                localStorage.setItem('storedpw',password);
               if (response.role === "Super_Admin") {
                    alert("You will now be redirected.");
                    window.location = "school_index.html";
                }
            },
             error: function () {
                alert("Invalid Login");
            }

        });
    });
});










//For Trusts
$(document).ready(function () {
    $.ajax({
        type: "GET", //API method
        url: global_server + 'common/trusts', // API URL
        crossDomain: true,
        contentType: 'application/json; odata=verbose',
        dataType: 'json', // check with both one by one JSON and JSONP
        success: function (data) {
            var content = "";
             var content_sel = "<option value='Add New' trustid=' '>Add New</option>";
            $.each(data.trusts, function (index, value) {
                content = content + "<option value='" + value.name + "' trustid='" + value.trustId + "'>" + value.name + "</option>";
            });

            $('#selectTrust').append(content);
            $('#selectTrust').append(content_sel);
        }
    });
});






//For Country
$(document).ready(function () {
    $.ajax({
        type: "GET", //API method
        url: global_src + 'country', // API URL
        //url: '//localhost:8081/asms-services/countries/country', // API URL
        crossDomain: true,
        contentType: 'application/json; odata=verbose',
        dataType: 'json', // check with both one by one JSON and JSONP
        success: function (data) {
            //console.log(data);
            var content = "";
            $.each(data.countries, function (index, value) {
                content = content + "<option value='" + value.countryName + "' countrycode='" + value.siNo + "'>" + value.countryName + "</option>";
            });
            $('#selectCountry').append(content);
        }
    });
});



//For State
$(document).ready(function () {

    $.ajax({
        type: "GET", //API method
        url: global_src + 'state', // API URL
        //url: '//localhost:8081/asms-services/countries/state', // API URL
        crossDomain: true,
        contentType: 'application/json; odata=verbose',
        dataType: 'json', // check with both one by one JSON and JSONP
        success: function (data) {
            //console.log(data);
            var content = "";
            $.each(data.stateEntities, function (index, value) {
                content = content + "<option value='" + value.states + "' statecode='" + value.serialNo + "'>" + value.states + "</option>";
            });

            $('#selectState').append(content);
        }
    });
});




//For District
$(document).ready(function () {
    $('#selectState').change(function () {
        var resp_dist = $('#selectState option:selected').attr('statecode');
        //alert(resp_dist);
        var newSrc = global_src + 'district?id=' + resp_dist;
        //var newSrc = '//localhost:8081/asms-services/countries/district?id=' + resp_dist;
        //alert(newSrc);
        $.ajax({
            type: "GET", //API method
            url: newSrc, // API URL
            crossDomain: true,
            contentType: 'application/json; odata=verbose',
            dataType: 'json', // check with both one by one JSON and JSONP
            success: function (data) {
                var content = "";
                var content_sel = "<option value=' ' trustid=' '>Select your District / City</option>";
                $.each(data.districts, function (index, value) {
                    content = content + "<option value='" + value.dName + "' id='" + value.serialNo + "'>" + value.dName + "</option>";
                });
                $('#selectDistrict').empty(content);
                $('#selectDistrict').append(content_sel);
                $('#selectDistrict').append(content);
            }
        });
    });
});




//For Tehsil
$(document).ready(function () {
    $('#selectDistrict').change(function () {
        var resp_tehsil = $('#selectDistrict option:selected').attr('id');
        var newSrc = global_src + 'tehsil?id=' + resp_tehsil;
        $.ajax({
            type: "GET", //API method
            url: newSrc, // API URL
            crossDomain: true,
            contentType: 'application/json; odata=verbose',
            dataType: 'json', // check with both one by one JSON and JSONP
            success: function (data) {
                //console.log(data);
                var content = "";
                var content_sel = "<option value=' ' trustid=' '>Select your Thaluka</option>";
                $.each(data.tehsils, function (index, value) {
                    //var id = index+1;
                    content = content + "<option value='" + value.tehsilName + "' id='" + value.serialNo + "'>" + value.tehsilName + "</option>";
                });
                $('#selectTehsil').empty(content);
                $('#selectTehsil').append(content_sel);
                $('#selectTehsil').append(content);
            }
        });
    });
});




//For hobli
$(document).ready(function () {
    $('#selectTehsil').change(function () {
        var resp_subdiv = $('#selectDistrict option:selected').attr('id');
        var newSrc = global_src + 'subDivision?id=' + resp_subdiv;
        alert(newSrc);
        $.ajax({
            type: "GET", //API method
            url: newSrc, // API URL
            crossDomain: true,
            contentType: 'application/json; odata=verbose',
            dataType: 'json', // check with both one by one JSON and JSONP
            success: function (data) {
                var content = "";
                var content_sel = "<option value=' ' trustid=' '>Select your Hobli</option>";
                $.each(data.subDivisions, function (index, value) {
                    //var id = index+1;
                    content = content + "<option value='" + value.subDivisionName + "' id='" + value.serialNo + "'>" + value.subDivisionName + "</option>";
                });
                $('#selectSubDiv').empty(content);
                $('#selectSubDiv').append(content_sel);
                $('#selectSubDiv').append(content);
            }
        });
    });
});




//For Village
$(document).ready(function () {
    $('#selectTehsil').change(function () {
        var resp_village = $('#selectTehsil option:selected').attr('id');
        var newSrc = global_src + 'village?id=' + resp_village;
        //alert(newSrc);
        $.ajax({
            type: "GET", //API method
            url: newSrc, // API URL
            crossDomain: true,
            contentType: 'application/json; odata=verbose',
            dataType: 'json', // check with both one by one JSON and JSONP
            success: function (data) {
                var content = "";
                var content_sel = "<option value=' ' trustid=' '>Select your Village / Area</option>";
                $.each(data.villages, function (index, value) {
                    //var id = index+1;
                    content = content + "<option value='" + value.villageName + "' id='" + value.serialNo + "'>" + value.villageName + "</option>";
                });
                $('#selectVillage').empty(content);
                $('#selectVillage').append(content_sel);
                $('#selectVillage').append(content);
            }
        });
    });
});




//For Board Names
$(document).ready(function () {
    $.ajax({
        type: "GET", //API method
        url: global_server + 'school/boards', // API URL
        crossDomain: true,
        contentType: 'application/json; odata=verbose',
        dataType: 'json', // check with both one by one JSON and JSONP
        success: function (data) {
            var content = "";
            $.each(data.boardNames, function (index, value) {
                content = content + "<option value='" + value + "'>" + value + "</option>";
            });
            $('#selectBoard').append(content);
        }
    });
});







//For Submit
$(document).ready(function () {

    $("#reg_school").click(function () {
		var isValidated = registerform();
		alert(isValidated);
		if(isValidated){
			var retrievedObject = localStorage.getItem('storeduser');
			var retrievedObject2 = localStorage.getItem('storedpw');
			alert(retrievedObject);
			alert(retrievedObject2);
			var xhr = new XMLHttpRequest();
			var formData;


                          formData = JSON.stringify({
                                    "requestType": "create",
                                    "schoolDetails": {
                                    "trustId": $('#selectTrust option:selected').attr('serialNo'),
                                    "newTrustName":$("input#trust_name").val(),
                                    "trustRegistrationNumber":$("input#trust_reg_no").val(),
                                    "trustAddress":$("textarea#trust_address").val(),
                                    "name": $("input#school_name").val(),
                                    "affiliationId": $("input#affiliation_id").val(),
                                    "registrationCode": $("input#school_code").val(),
                                    "addressLine1": $("textarea#addressline_one").val(),
                                    "addressLine2": $("textarea#addressline_two").val(),
                                    "location": $("select#selectLocation").val(),
                                    "country": $("select#selectCountry").val(),
                                    "state": $("select#selectState").val(),
                                    "district": $("select#selectDistrict").val(),
                                    "tehsil": $("select#selectTehsil").val(),
                                    "pincode": $("input#pin_code").val(),
                                    "contactNo1": $("input#contact").val(),
                                    "mobileNo": $("input#phone_numbe").val(),
                                    "emailId": $("input#email_address").val(),
                                    "totalNoOfStudents": $("input#tot_no_students").val(),
                                    "contactPersonName": $("input#school_person").val(),
                                    "contactPersonEmailId": $("input#email_address_school").val(),
                                    "gpsLatitude": $("input#latitude").val(),
                                    "gpsLongitude": $("input#longitude").val(),
                                    "boardDetails": $("select#selectBoard").val(),
                                    "website": $("input#school_website").val(),
                                    "village":$("select#selectVillage").val(),
                                    "subdivision":$("select#selectSubDiv").val(),
                                    "contactNo2": $("input#phone_num").val(),
                                    "subDomain": $("input#domain_scl").val()
                                }

                        })



				$.ajax({
					type: "POST",
					url: global_server + "school/register",
					data: formData,
					crossDomain: true,
					contentType: 'application/json; odata=verbose',
					dataType: 'json', // check with both one by one JSON and JSONP
					xhrFields:
						{
							withCredentials: true
						},
					beforeSend: function (xhr) {
						xhr.setRequestHeader('Authorization', 'Basic ' + btoa(retrievedObject + ":" + retrievedObject2));
						},
					success: function (response) {
            localStorage.setItem('schoolId', response.schoolId);
            localStorage.setItem('domain', response.domain);
            window.location = "logo_upload.html";
						},
					error: function (response) {
							alert(response.status);

					}
			});
			}
			});

	});








        //logo Upload
function showPreview(objFileInput) {
if (objFileInput.files[0]) {
    var fileReader = new FileReader();
    fileReader.onload = function (e) {
        $('#blah').attr('src', e.target.result);
  $("#targetLayer").html('<img src="'+e.target.result+'" width="200px" height="200px" class="upload-preview" />');
  $("#targetLayer").css('opacity','0.7');
  $(".icon-choose-image").css('opacity','0.5');
    }
fileReader.readAsDataURL(objFileInput.files[0]);
}

}







//logo upload - post
/*$(document).ready(function (e) {
$(".logo_upload").click(function (e) {
    e.preventDefault();
    var id = localStorage.getItem('schoolId');
    var domain = localStorage.getItem('domain');
    var fileName = localStorage.getItem('fileName');
alert(fileName);
    var url =  global_server + 'school/image-upload?id=' + id +'&name='+ fileName + '&sub_domain=' + domain;
    var retrievedObject = localStorage.getItem('storeduser');
    var retrievedObject2 = localStorage.getItem('storedpw');
    var imgData = encodeImageFileAsURL();
    $.ajax({
        url: url,
        type: "POST",
        crossDomain: true,
        data: imgData,
        beforeSend: function (xhr) {
          xhr.setRequestHeader('Authorization', 'Basic ' + btoa(retrievedObject + ":" + retrievedObject2));
          },
        success: function (response)
        {
          alert(response.status);
        },
        error: function (response)
        {
          alert(response.status);
        }
    });
});
});*/



$(document).ready(function (e) {
$(".logo_upload").click(function (e) {


  e.preventDefault();
  var id = localStorage.getItem('schoolId');
  var domain = localStorage.getItem('domain');
  var url =  global_server + 'school/image-upload?id=' + id + '&sub_domain=' + domain;
  var retrievedObject = localStorage.getItem('storeduser');
  var retrievedObject2 = localStorage.getItem('storedpw');
  var file = $('input[name="uploadfile"').get(0).files[0];

  var formData = new FormData();
  formData.append('uploadfile', file);
  $.ajax({
       url: url,
       type: "POST",
       crossDomain: true,
       data: formData,
       cache: false,
       contentType: false,
       processData: false,
     //  beforeSend: function (xhr) {
       //  xhr.setRequestHeader('Authorization', 'Basic ' + btoa(retrievedObject + ":" + retrievedObject2));
     //    },
       success: function (response)
       {
         alert(response.status);
       },
       error: function (response)
       {
         alert(response.status);
       }
   });


});
});
