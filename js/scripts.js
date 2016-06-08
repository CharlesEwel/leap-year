$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    event.preventDefault();
    var year = parseFloat($("input#year").val());
    console.log(year);
    var result = leapYear(year);
    $("#result").text(result);
  });
});

var leapYear = function(year){
  if (isNaN(year) || (year%1 != 0)){
    alert ("Please enter a valid integer.");
  } else if ((year % 400===0) || (year%100!==0) && (year %4 ===0)) {
    return true;
  } else {
    return false;
  }
};
