/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */




$(document).ready(function () {
$("select#grd_std").change(function() {
if ($(this).val() === 'Grade'){
$('.grd_std_grade_sec').show();
$('.grd_std_standard_sec').hide();
}
 else if($(this).val() === 'Standard') {
$('.grd_std_grade_sec').hide();
$('.grd_std_standard_sec').show();
}

 else {
$('.grd_std_grade_sec').hide();
$('.grd_std_standard_sec').hide();
}
});
});






//for section

//function toa(c1 = 'a', c2 = 'z') {
//    a = 'abcdefghijklmnopqrstuvwxyz'.split('');
//    return (a.slice(a.indexOf(c1), a.indexOf(c2) + 1)); 
//}


$(document).ready(function(){
        // Variable to get ids for the checkboxes
//        var idCounter=1;
        $("#btn1").click(function(){
            var val = $("input#grd_section").val();
            $("div#std_crt_section").append ( '<label class="cus_sel_sec" > <input type="checkbox" name="created_section" value="' + val + '" /></label>' );
//            idCounter ++;
        });
    });
    
    
    
    
    
$(document).ready(function(){ 
  
$("#btn1").click(function(){
      var secToIncrement = $("input#grd_section").val();
var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
 $(".std_crt_section").empty();
    for (var z = 0; z < secToIncrement; z++) {
        var alphabetLetter = alphabet[z];       
         $('<label class="cus_sel_sec"><input type="checkbox" name="created_section" value="'+alphabetLetter+'">'+alphabetLetter+'</input></label>').appendTo('.std_crt_section');
    }
  });
  
  
  
  
  
// additional subject
  $("#add_sub_btn1").click(function(){
      var additional_subject = $("input#add_subjects").val();   
         $('<label class="cus_sel_sec"><input type="checkbox" name="created_section" value="'+ additional_subject +'">'+ additional_subject +'</input></label>').appendTo('.subject_crt_section');

  });
  
  
  
//setting value for year
      var current_year = new Date().getFullYear();
      var set_limit_year = current_year + 5;
      var year_to_initial = current_year + 1;
      $(".acd_yr input#year_from").val(current_year);
      $(".acd_yr input#year_to").val(year_to_initial);
      $(".acd_yr input#year_from").attr("min",current_year);
      $(".acd_yr input#year_from").attr("max",set_limit_year);
      $(".acd_yr input#year_to").attr("min",year_to_initial);
      $(".acd_yr input#year_to").attr("max",set_limit_year);
      
      $(".acd_yr input#year_from" ).change(function() {
          var chan_next_year = + $(".acd_yr input#year_from").val() + 1;
           $(".acd_yr input#year_to").val(chan_next_year);
          var max = parseInt($(this).attr('max'));
          var min = parseInt($(this).attr('min'));
         
          if ($(this).val() > max)
          {
              $(this).val(max);
          }
          else if ($(this).val() < min)
          {
              $(this).val(min);
          }       
        }); 
        
         $(".acd_yr input#year_to" ).change(function() {   
          var chan_next_year = + $(".acd_yr input#year_from").val() + 1;
          $(".acd_yr input#year_to").val(chan_next_year);          
        }); 
        
    
      });