/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
// Nav Tabs On Top
$(document).ready(function() {
   $(".nav-tabs a").click(function() {
      $(this).tab('show');
   });
});
// For Admission Date
$(document).ready(function() {
   $(function() {
      var start = new Date();
      start.setFullYear(start.getFullYear() - 11);
      var end = new Date();
      end.setFullYear(end.getFullYear() - 0);
      $('#admission_date').datepicker({
         changeMonth: true
          , dateFormat: "yy-mm-dd"
         , changeYear: true
         , minDate: start
         , yearRange: start.getFullYear() + ':' + end.getFullYear()
      });
   });
   // For Date of Birth
   $(function() {
      var start = new Date();
      start.setFullYear(start.getFullYear() - 29);
      var end = new Date();
      end.setFullYear(end.getFullYear() - 0);
      $('#date_of_birth').datepicker({
         changeMonth: true
          , dateFormat: "yy-mm-dd"
         , changeYear: true
         , minDate: start
         , yearRange: start.getFullYear() + ':' + end.getFullYear()
      });
   });
   // For Studied From To
   $(function() {
      var start = new Date();
      start.setFullYear(start.getFullYear() - 29);
      var end = new Date();
      end.setFullYear(end.getFullYear() - 0);
      $('#date_of_birth').datepicker({
         changeMonth: true
          , dateFormat: "yy-mm-dd"
         , changeYear: true
         , minDate: start
         , yearRange: start.getFullYear() + ':' + end.getFullYear()
      });
   });
});
// Auto fill For Studied From - To
$(document).ready(function() {
   $(function() {
      var availableTags = ["2012 - 2015", "2013 - 2016", "2014 - 2017", "2015 - 2018", "2016 - 2019", "2017 - 2020"];
      $("#studied_duration").autocomplete({
         source: availableTags
      });
   });
});