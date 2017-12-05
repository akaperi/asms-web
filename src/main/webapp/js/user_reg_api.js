/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var global_server;
var global_src;







$(document).ready(function () {

    $("#user_log_sub").click(function () {
        var username = $("input#username").val();
		var password = $("input#password").val();
		//var domain=location.hostname ;
	    var domain="dev.akaperi.com" ;
		



        $.ajax({
            type: "POST",
            url: global_server + 'user/login?domain='+domain,
            data: '{"email": "' + username + '", "userPassword" : "' + password + '"}',
             crossDomain: true,
        contentType: 'application/json; odata=verbose',
        dataType: 'json', // check with both one by one JSON and JSONP

            success: function (response) {
                localStorage.setItem('storeduser', username);
                localStorage.setItem('storedpw',response.authToken);
               if (response.role === "Administrator") {
                    alert("You will now be redirected.");


                  //  window.location = "student/student_index.html";

                   window.location = "teachingStaff/teaching_index.html";


                }
            },
             error: function () {
                alert("Invalid Login");
            }

        });
    });
});
