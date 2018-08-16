$(document).ready(function(){

  $("form#formOne").submit(function(event){
  event.preventDefault();
  // var result = ("");
  var userInput = parseInt($("#textInput").val());
  var transNumber=translation(userInput);
  $("#result").text(transNumber);
  });


});




  var translation = function (roman){

var romanNumerals = {"M":1000, "CM":900, "D":500, "CD":400, "C":100, "XC":90, "L":50, "XL":40, "X":10, "IX":9, "V":5, "IV":4, "I":1};

    var result="";
    var number;
    for (var i of Object.keys(romanNumerals)){
      number = Math.floor(roman / romanNumerals[i]);
      roman -= number * romanNumerals[i];
      result+=i.repeat(number);
    //  alert(translation(result));

    }
return   result;
  };

//alert(translation(12));
