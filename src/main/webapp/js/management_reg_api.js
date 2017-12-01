/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var global_server;
var global_src;



//For Submit

function sendManagementDetails() {
alert("abba");


			var retrievedObject = localStorage.getItem('storeduser');
			var retrievedObject2 = localStorage.getItem('storedpw');
			var domain=location.hostname;
			var xhr = new XMLHttpRequest();
			var formData;
			alert(retrievedObject);
			alert(retrievedObject2);

                          formData = JSON.stringify({
                               "requestType": "create",
                                "userRole" : "Management",
                                "subRole" : "Trustee",
                                "userDetails":{
                                  "email":$("input#email_address").val(),

                                    "managementDetails": {
                                    	
                                        "mngmtFirstName":$("input#first_name").val(),
                                        "mngmtMiddleName":$("input#middle_name").val(),
                                        "mngmtLastName": $("input#last_name").val(),
                                        "mngmtDesignation": $("input#designation").val(),
                                        "mngmtContactNo": $("input#contact_number").val()                   
                                        
                                    
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
							alert(response.status);
							alert("abbaaa");
						},
					error: function (response) {
							alert(response.status);

					}
			});


}
