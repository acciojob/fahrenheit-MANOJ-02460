function toFahrenheit(celsius) {
 // Write your code here 
  const celsiu = (fahrenheit-32)*5/9;

  return parseFloat(celsiu.toFixed(2));
	 
} 

// Do not change the code below 
const celsius = prompt("Enter Celsius:"); 
alert(toFahrenheit(Number(celsius)));
