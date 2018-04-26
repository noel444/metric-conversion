//Metric conversion javascript code
function fToM(){

  var measure = parseInt(document.getElementById("value1").value);
  
//variable that does the conversion
  var meters = measure * 0.3048;
  //variable that displays the message of the calculations
  var message = measure + ' feet converts to ' + meters + ' meters.';
  console.log(message);
  document.getElementById("resultsentence").innerHTML = message;
  
  if (!measure) {
	  alert("Please enter a value");
  }
  
  else if (measure < 0) {
	  alert("Please enter a value greater than zero");
  }

}

function IToC(){

  var measure = parseInt(document.getElementById("value1").value);
  
//variable that does the conversion
  var centimeters = measure * 2.54;
  var message = measure + ' inches converts to ' + centimeters + ' centimeters.';
  console.log(message);
  document.getElementById("resultsentence1").innerHTML = message;
  
   if (!measure) {
	  alert("Please enter a value");
  }
  
  else if (measure < 0) {
	  alert("Please enter a value greater than zero");
  }

}

function YToM(){

  var measure = parseInt(document.getElementById("value1").value);
  
//variable that does the conversion
  var meters = measure * 0.9144;
  //variable that displays the message of the calculations
  var message = measure + ' yards converts to ' + meters + ' meters.';
  console.log(message);
  document.getElementById("resultsentence2").innerHTML = message;
  
   if (!measure) {
	  alert("Please enter a value");
  }
  
  else if (measure < 0) {
	  alert("Please enter a value greater than zero");
  }

}

function MilesToK(){

  var measure = parseInt(document.getElementById("value1").value);
  
//variable that does the conversion
  var kilometers = measure * 1.60934;
  //variable that displays the message of the calculations
  var message = measure + ' miles converts to ' + kilometers + ' kilometers.';
  console.log(message);
  document.getElementById("resultsentence3").innerHTML = message;
  
   if (!measure) {
	  alert("Please enter a value");
  }
  
  else if (measure < 0) {
	  alert("Please enter a value greater than zero");
  }

}