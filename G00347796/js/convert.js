//Metric conversion javascript code
function fToM(){

  var measure = parseInt(document.getElementById("value1").value);
  
//This variable that does the conversion
  var meters = measure * 0.3048;
  
  //This variable that displays the message of the calculations
  var message = measure + ' feet converts to ' + meters + ' meters.';
  console.log(message);
  document.getElementById("resultsentence").innerHTML = message;
  
  //This alerts the user if they do not enter a value
  if (!measure) {
	  alert("Please enter a value");
  }
  
  //This alerts the user if they enter a value less than zero
  else if (measure < 0) {
	  alert("Please enter a value greater than zero");
  }

}

function IToC(){

  var measure = parseInt(document.getElementById("value1").value);
  
//This variable that does the conversion
  var centimeters = measure * 2.54;
  
  //This variable that displays the message of the calculations
  var message = measure + ' inches converts to ' + centimeters + ' centimeters.';
  console.log(message);
  document.getElementById("resultsentence1").innerHTML = message;
  
  //This alerts the user if they do not enter a value
   if (!measure) {
	  alert("Please enter a value");
  }
  
  //This alerts the user if they enter a value less than zero
  else if (measure < 0) {
	  alert("Please enter a value greater than zero");
  }

}

function YToM(){

  var measure = parseInt(document.getElementById("value1").value);
  
//This variable that does the conversion
  var meters = measure * 0.9144;
  
  //This variable that displays the message of the calculations
  var message = measure + ' yards converts to ' + meters + ' meters.';
  console.log(message);
  document.getElementById("resultsentence2").innerHTML = message;
  
  //This alerts the user if they do not enter a value
   if (!measure) {
	  alert("Please enter a value");
  }
  
  //This alerts the user if they enter a value less than zero
  else if (measure < 0) {
	  alert("Please enter a value greater than zero");
  }

}

function MilesToK(){

  var measure = parseInt(document.getElementById("value1").value);
  
//This variable that does the conversion
  var kilometers = measure * 1.60934;
  //This variable that displays the message of the calculations
  var message = measure + ' miles converts to ' + kilometers + ' kilometers.';
  console.log(message);
  document.getElementById("resultsentence3").innerHTML = message;
  
  //This alerts the user if they do not enter a value
   if (!measure) {
	  alert("Please enter a value");
  }
  
  //This alerts the user if they enter a value less than zero
  else if (measure < 0) {
	  alert("Please enter a value greater than zero");
  }

}