/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var global_server;
var global_src;


function getReligions(){
    var username = localStorage.getItem('storeduser');
    var password = localStorage.getItem('storedpw');
alert(username);
alert(password);
    $.ajax({
        type: "GET", //API method
        url: global_server + 'user/religionTypes', // API URL
        crossDomain: true,
        contentType: 'application/json; odata=verbose',
        dataType: 'json', // check with both one by one JSON and JSONP
      //  var xhr = new XMLHttpRequest();
        xhrFields:
		{
			withCredentials: true
		},
	beforeSend: function (xhr) {

		 xhr.setRequestHeader('Authorization', 'Basic ' + btoa(username + ":" + password));
		},
        success: function (data) {
            var content = "";

            $.each(data.religionTypes, function (index, value) {
                content = content + "<option value='" + value.religionTypesName + "' Serial_No='" + value.serialNo + "'>" + value.religionTypesName + "</option>";
            });

            $('#religion').append(content);
        },

    });
}


function getCasteTypes(){
  var username = localStorage.getItem('storeduser');
     var password = localStorage.getItem('storedpw');

     $.ajax({
         type: "GET", //API method
         url: global_server + 'user/casteTypes', // API URL
         crossDomain: true,
         contentType: 'application/json; odata=verbose',
         dataType: 'json', // check with both one by one JSON and JSONP
         xhrFields:
 		{
 			withCredentials: true
 		},
 	beforeSend: function (xhr) {
 		xhr.setRequestHeader('Authorization', 'Basic ' + btoa(username + ":" + password));
 		},
         success: function (data) {
             var content = "";

             $.each(data.casteTypes, function (index, value) {
                 content = content + "<option value='" + value.subcasteTypesName + "' Serial_No='" + value.serialNo + "'>" +  value.subcasteTypesName + "</option>";
             });

             $('#caste').append(content);
         }

     });
}


$(document).ready(function () {
$("#classes_handled").click(function () {
          var username = localStorage.getItem('storeduser');
          var password = localStorage.getItem('storedpw');

// var xhr = new XMLHttpRequest();
          $.ajax({
              type: "GET", //API method
              url: global_server + 'school/classes?domain=localhost', // API URL
              crossDomain: true,
              contentType: 'application/json; odata=verbose',
              dataType: 'json', // check with both one by one JSON and JSONP

              xhrFields:
                    {
                      withCredentials: true
                    },
                    beforeSend: function (xhr) {

                    xhr.setRequestHeader('Authorization' , 'Basic ' + btoa(username + ":" + password));
                    },
                        success: function (data) {
                            var content = "";
                            alert(data);
                            var container = $('#cblist');
                            var inputs = "";
                            var id = "";
                              $('#cblist').children().remove();
                            $.each(data.classes, function (index, value) {
                                  inputs = container.find('input');
                                    id = inputs.length+1;

                                    $("#cblist").append("<li><input type='checkbox'>" + value.name + "</li>");
                            });

                        }

                    });
                    });

});



$(document).ready(function () {
$("#classes_handled").click(function () {
          var username = localStorage.getItem('storeduser');
          var password = localStorage.getItem('storedpw');

// var xhr = new XMLHttpRequest();
          $.ajax({
              type: "GET", //API method
              url: global_server + 'school/classes?domain=localhost', // API URL
              crossDomain: true,
              contentType: 'application/json; odata=verbose',
              dataType: 'json', // check with both one by one JSON and JSONP

              xhrFields:
                    {
                      withCredentials: true
                    },
                    beforeSend: function (xhr) {

                    xhr.setRequestHeader('Authorization' , 'Basic ' + btoa(username + ":" + password));
                    },
                        success: function (data) {
                            var content = "";
                            alert(data);
                            var container = $('#cblist');
                            var inputs = "";
                            var id = "";
                              $('#cblist').children().remove();
                            $.each(data.classes, function (index, value) {
                                  inputs = container.find('input');
                                    id = inputs.length+1;

                                    $("#cblist").append("<li><input type='checkbox'>" + value.name + "</li>");
                            });

                        }

                    });
                    });

});









//For Submit

function sendPrimaryDetails(next_fs, current_fs) {


			var retrievedObject = localStorage.getItem('storeduser');
			var retrievedObject2 = localStorage.getItem('storedpw');
			var domain=location.hostname;
			var xhr = new XMLHttpRequest();
			var formData;


                          formData = JSON.stringify({
                               "requestType": "create",
                                "userRole" : "Teacher",
                                "subRole" : "Teacher",
                                "userDetails":{
                                  "email":$("input#email_address").val(),

                                    "teachingStaffDetails": {
                                    "designation": $("#staff_designation").val(),
                                    "bloodGroup":$("select#blood_group").val(),
                                    "firstName":$("input#first_name").val(),
                                    "middleName":$("input#middle_name").val(),
                                    "lastName": $("input#last_name").val(),
                                    "dateOfBirth": $("input#date_of_birth").val(),
                                    "gender": $("input[name='radio']:checked"). val(),
                                    "ageInYears": $("input#age_in_year").val(),
                                    "contactNo": $("input#contact_number").val(),
                                    "qualification": $("input#qualification").val(),
                                    "religion": $("select#religion").val(),
                                    "casteCategory": $("select#caste").val()
                                }
                          }

                        })



				$.ajax({
					type: "POST",
					url: global_server + 'user/register?domain='+domain,
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
						localStorage.setItem('RegisteredUserId', response.userId);
						$('#menu1').removeClass("in fade active");
				        $('#menu2').addClass("in fade active");
//						next_fs.show();
//						current_fs.hide();
						},
					error: function (response) {
						alert(response.responseJSON.errorDescription);
						next_fs.hide();
						current_fs.show();

					}
			});


}




function sendPreviousInfo(next_fs, current_fs) {


			var retrievedObject = localStorage.getItem('storeduser');
			var retrievedObject2 = localStorage.getItem('storedpw');
      var registeredUserId = localStorage.getItem('RegisteredUserId');
      if(registeredUserId){
            // true if primary details has already saved
            var domain=location.hostname;
      			var xhr = new XMLHttpRequest();
      			var formData;
            var experienced;
            if($("input:radio[value='fresher']").is(':checked')){
                experienced = false;
            }else{
                  experienced = true;
            }


                                formData = JSON.stringify({
                                     "requestType": "update",
                                      "userRole" : "Teacher",
                                      "subRole" : "Teacher",
                                      "detailType":"previousInfo",
                                      "userDetails":
                                          {
                                        "userId":registeredUserId,
                                          "teachingStaffDetails":
                                            {
                                              "staffPreviousInformationDetails":{
                                                      "experienceFlag": experienced,
                                                      "lastWorkedOrganisation":$("input#pre_inst_name").val(),
                                                      "dateOfJoining":$("input#date_of_join").val(),
                                                      "relievingDate":$("input#date_of_leave").val()

                                          }
                                          }
                                          }

                              })



      				$.ajax({
      					type: "POST",
      					url: global_server + 'user/register/details?domain='+domain,
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
      					  $('#menu3').removeClass("in fade active");
      		            $('#menu4').addClass("in fade active");
//                  next_fs.show();
//                  current_fs.hide();
      						},
      					error: function (response) {
                  alert(response.responseJSON.errorDescription);
                  next_fs.hide();
                  current_fs.show();

      					}
      			});
      }else{
          alert("Please add primary details first");
      }



}



function sendClassesAndSubjects(next_fs, current_fs) {


			var retrievedObject = localStorage.getItem('storeduser');
			var retrievedObject2 = localStorage.getItem('storedpw');
      var registeredUserId = localStorage.getItem('RegisteredUserId');
      if(registeredUserId){
            // true if primary details has already saved
            var domain=location.hostname;
      			var xhr = new XMLHttpRequest();
      			var formData;
            var experienced;
            if($("input:radio[value='fresher']").is(':checked')){
                experienced = false;
            }else{
                  experienced = true;
            }


                                formData = JSON.stringify({
                                     "requestType": "update",
                                      "userRole" : "Teacher",
                                      "subRole" : "Teacher",
                                      "detailType":"previousInfo",
                                      "userDetails":
                                          {
                                        "userId":registeredUserId,
                                          "teachingStaffDetails":
                                            {
                                              "staffPreviousInformationDetails":{
                                                      "experienceFlag": experienced,
                                                      "lastWorkedOrganisation":$("input#pre_inst_name").val(),
                                                      "dateOfJoining":$("input#date_of_join").val(),
                                                      "relievingDate":$("input#date_of_leave").val()

                                          }
                                          }
                                          }

                              })
      				$.ajax({
      					type: "POST",
      					url: global_server + 'user/register/details?domain='+domain,
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
                 // next_fs.show();
                  //current_fs.hide();
      						},
      					error: function (response) {
                  alert(response.responseJSON.errorDescription);
                  next_fs.hide();
                  current_fs.show();

      					}
      			});
      }else{
          alert("Please add primary details first");
      }
}


function sendStaffStatutory(next_fs, current_fs) {

	
	var retrievedObject = localStorage.getItem('storeduser');
	var retrievedObject2 = localStorage.getItem('storedpw');
var registeredUserId = localStorage.getItem('RegisteredUserId');
if(registeredUserId){
    // true if primary details has already saved
    var domain=location.hostname;
			var xhr = new XMLHttpRequest();
			var formData;
    var experienced;
    if($("input:radio[value='fresher']").is(':checked')){
        experienced = false;
    }else{
          experienced = true;
    }


                        formData = JSON.stringify({
                             "requestType": "update",
                              "userRole" : "Teacher",
                              "subRole" : "Teacher",
                              "detailType":"statutory_details",
                              "userDetails":
                                  {
                                "userId":registeredUserId,
                                  "teachingStaffDetails":
                                    {
                                	  "statutoryDetails1":{
                                		 "bankName" :$("input#bank_name").val(),
                                		 "bankAccountNo" :$("input#bank_acc_no").val(),
	                                     "bankIfscCode" :$("input#ifsc_code").val(),
	          							 "panNo" :$("input#pan_number").val(),
	          							 "panCard":$("input#upload_pan_card").val(),
	          							 "aadhaarNo":$("input#aadhar_number").val(),
	          							 "aadhaarCard":$("input#upload_aadhar_card").val(),
	          							 "pfNo":$("input#pf_number").val(),
	          							 "uanNo":$("input#uan_number").val()
          						  }
                                  }
                                  }

                      })



				$.ajax({
					type: "POST",
					url: global_server + 'user/register/details?domain='+domain,
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
						//next_fs.show();
						//current_fs.hide();
						$('#menu5').removeClass("in fade active");
				        $('#menu6').addClass("in fade active");
						},
					error: function (response) {
						alert(response.responseJSON.errorDescription);
						next_fs.hide();
						current_fs.show();
					}
			});
}else{
  alert("Please add primary details first");
}
}







function sendAddressDetails(next_fs, current_fs) {

	
	var retrievedObject = localStorage.getItem('storeduser');
	var retrievedObject2 = localStorage.getItem('storedpw');
var registeredUserId = localStorage.getItem('RegisteredUserId');
if(registeredUserId){
    // true if primary details has already saved
    var domain=location.hostname;
			var xhr = new XMLHttpRequest();
			var formData;
    var experienced;
    if($("input:radio[value='fresher']").is(':checked')){
        experienced = false;
    }else{
          experienced = true;
    }


                        formData = JSON.stringify({
                             "requestType": "update",
                              "userRole" : "Teacher",
                              "subRole" : "Teacher",
                              "detailType":"addressDetails",
                              "userDetails":
                                  {
                                "userId":registeredUserId,
                                  "teachingStaffDetails":
                                    {
                                	  "addressDetails":{
                                		 "addressLine1" :$("textarea#add_line_one").val(),
                                		 "addressLine2" :$("textarea#add_line_two").val(),
	                                     "country" :$("select#country_dropdown").val(),
	          							 "state" :$("select#state_dropdown").val(),
	          							 "district":$("select#dist_city_dropdown").val(),
	          							 "subDivision":$("select#thaluka_dropdown").val(),
	          							 "tehsil":$("select#hobli_dropdown").val(),
	          							 "village":$("select#village_dropdown").val(),
	          							 "pincode":$("input#pin_code").val()
          						  }
                                  }
                                  }

                      })



				$.ajax({
					type: "POST",
					url: global_server + 'user/register/details?domain='+domain,
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
						  $('#menu6').removeClass("in fade active");
				            $('#menu7').addClass("in fade active");
					//next_fs.show();
					//current_fs.hide();
						},
					error: function (response) {
						alert(response.responseJSON.errorDescription);
						next_fs.hide();
						current_fs.show();
					}
			});
}else{
  alert("Please add primary details first");
}
}

function sendAdditionalDetails(next_fs, current_fs) {

	
	var retrievedObject = localStorage.getItem('storeduser');
	var retrievedObject2 = localStorage.getItem('storedpw');
var registeredUserId = localStorage.getItem('RegisteredUserId');
if(registeredUserId){
    // true if primary details has already saved
    var domain=location.hostname;
			var xhr = new XMLHttpRequest();
			var formData;
    var experienced;
    if($("input:radio[value='fresher']").is(':checked')){
        experienced = false;
    }else{
          experienced = true;
    }


                        formData = JSON.stringify({
                             "requestType": "update",
                              "userRole" : "Teacher",
                              "subRole" : "Teacher",
                              "detailType":"additionalDetails",
                              "userDetails":
                                  {
                                "userId":registeredUserId,
                                  "teachingStaffDetails":
                                    {
                                	  "additionalDetails":{
                                		 
                                		 "maritalStatus" : $("input[name='radio']:checked"). val()
                                		 
          						  }
                                  }
                                  }

                      })



				$.ajax({
					type: "POST",
					url: global_server + 'user/register/details?domain='+domain,
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
						  $('#menu6').removeClass("in fade active");
				            $('#menu7').addClass("in fade active");
					//next_fs.show();
					//current_fs.hide();
						},
					error: function (response) {
						alert(response.responseJSON.errorDescription);
						next_fs.hide();
						current_fs.show();
					}
			});
}else{
  alert("Please add primary details first");
}
}
